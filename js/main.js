// Main JavaScript - Loads sections dynamically and initializes functionality

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Load all sections
    await loadSections();

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

// Initialize hero video background
function initHeroVideo() {
    const video = document.getElementById('hero-video');

    if (!video) {
        console.log('Hero video element not found');
        return;
    }

    console.log('Hero video element found, initializing...');

    // Try to play the video (handles autoplay restrictions)
    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log('Video playing successfully');
            })
            .catch(error => {
                console.log('Autoplay prevented:', error);
                // If autoplay is blocked, remove video and show image
                video.remove();
            });
    }

    // When video ends, fade it out to reveal the image
    video.addEventListener('ended', function() {
        console.log('Video ended, fading out...');
        video.classList.add('fade-out');

        // Remove video from DOM after fade completes
        setTimeout(() => {
            video.remove();
        }, 1000); // Match the CSS transition duration
    });

    // Fallback: if video fails to load, remove it immediately
    video.addEventListener('error', function(e) {
        console.log('Video failed to load, using static image as fallback', e);
        video.remove();
    });
}
