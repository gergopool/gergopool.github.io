// Main JavaScript - Loads sections dynamically and initializes functionality

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Load all sections
    await loadSections();

    // Initialize hero text animation with proper timing
    initHeroTextAnimation();

    // Initialize hero video
    initHeroVideo();

    // Initialize animations for elements
    initAnimations();

    // Initialize modal functionality
    initModals();

    // Initialize form validation
    initFormValidation();
});

// Load HTML sections dynamically
async function loadSections() {
    const sections = [
        'hero',
        'personal-statement',
        'skills',
        'experience',
        'education',
        'projects',
        'publications',
        'achievements',
        'hobbies',
        'modal',
        'footer'
    ];

    const contentContainer = document.getElementById('content');

    for (const section of sections) {
        try {
            const response = await fetch(`sections/${section}.html`);
            if (response.ok) {
                const html = await response.text();
                contentContainer.innerHTML += html;
            } else {
                console.error(`Failed to load section: ${section}`);
            }
        } catch (error) {
            console.error(`Error loading section ${section}:`, error);
        }
    }
}

// Initialize hero text animation with proper timing control
function initHeroTextAnimation() {
    const heroText = document.querySelector('.hero-text');

    if (!heroText) {
        console.log('Hero text element not found');
        return;
    }

    const h1 = heroText.querySelector('h1');
    const h2 = heroText.querySelector('h2');

    // Double requestAnimationFrame to ensure DOM is fully settled
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (h1) h1.classList.add('hero-animate');
            if (h2) h2.classList.add('hero-animate');
        });
    });
}

// Initialize hero video background
function initHeroVideo() {
    const video = document.getElementById('hero-video');
    const heroImage = document.querySelector('.hero-image');
    const staticImage = heroImage ? heroImage.querySelector('img') : null;

    if (!video || !heroImage) {
        console.log('Hero video or container not found');
        if (heroImage) {
            // Show image as fallback
            if (staticImage) staticImage.classList.add('show-image');
            heroImage.classList.add('show');

            // Show other hero elements
            const locationBadge = document.querySelector('.location-badge');
            const heroActions = document.querySelector('.hero-actions');
            const techIcons = document.querySelector('.tech-icons');
            if (locationBadge) locationBadge.classList.add('show');
            if (heroActions) heroActions.classList.add('show');
            if (techIcons) techIcons.classList.add('show');
        }
        return;
    }

    console.log('Hero video element found, initializing...');

    let videoShown = false;
    let timeoutId = null;

    // Function to show the hero with video
    function showWithVideo() {
        if (videoShown) return; // Prevent multiple calls
        videoShown = true;
        if (timeoutId) clearTimeout(timeoutId);

        console.log('Showing hero with video');
        heroImage.classList.add('show');
        showHeroElements();

        // Try to play the video
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('Video playing successfully');
                })
                .catch(error => {
                    console.log('Autoplay prevented, falling back to image');
                    fallbackToImage();
                });
        }
    }

    // Function to show hero elements (badge, actions, tech icons)
    function showHeroElements() {
        const locationBadge = document.querySelector('.location-badge');
        const heroActions = document.querySelector('.hero-actions');
        const techIcons = document.querySelector('.tech-icons');

        if (locationBadge) locationBadge.classList.add('show');
        if (heroActions) heroActions.classList.add('show');
        if (techIcons) techIcons.classList.add('show');
    }

    // Function to fallback to static image
    function fallbackToImage() {
        // Check if video is actually playing before falling back
        if (!video.paused && !video.ended) {
            console.log('Video is playing, not falling back to image');
            return;
        }

        console.log('Falling back to static image');
        video.classList.add('hide-video');
        if (staticImage) {
            staticImage.classList.add('show-image');
        }
        if (!heroImage.classList.contains('show')) {
            heroImage.classList.add('show');
            showHeroElements();
        }
    }

    // Set timeout for fallback (5 seconds)
    timeoutId = setTimeout(() => {
        if (!videoShown) {
            console.log('Video load timeout (5s), showing image');
            fallbackToImage();
        }
    }, 5000);

    // When video is ready to play
    video.addEventListener('canplay', function() {
        console.log('Video can play');
        showWithVideo();
    }, { once: true });

    // Handle video load errors
    video.addEventListener('error', function(e) {
        console.log('Video failed to load, using static image as fallback', e);
        if (timeoutId) clearTimeout(timeoutId);
        fallbackToImage();
    });

    // When video ends, fade it out to reveal the image
    video.addEventListener('ended', function() {
        console.log('Video ended, fading out...');
        video.classList.add('fade-out');
        if (staticImage) {
            staticImage.classList.add('show-image');
        }

        // Remove video from DOM after fade completes
        setTimeout(() => {
            video.remove();
        }, 1000);
    });
}
