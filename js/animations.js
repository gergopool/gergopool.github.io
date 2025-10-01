// Initialize animations for elements when they come into view
function initAnimations() {
    // Staggered animations for grid items
    const staggerDelay = 150; // milliseconds between each item

    // Projects grid - lower threshold for tall grids
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        observeStaggeredGrid(projectsGrid, '.project-card', staggerDelay, 'animate-scale', 0.05);
    }

    // Skills tier groups
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        observeStaggeredGrid(category, '.tier-group', staggerDelay, 'animate-in');
    });

    // Timeline items
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        observeStaggeredGrid(timeline, '.timeline-item', staggerDelay, 'animate-in');
    }

    // Education items
    const educationGrid = document.querySelector('.education-container');
    if (educationGrid) {
        observeStaggeredGrid(educationGrid, '.education-item', staggerDelay, 'animate-scale');
    }

    // Publications grid
    const publicationsGrid = document.querySelector('.publications-list');
    if (publicationsGrid) {
        observeStaggeredGrid(publicationsGrid, '.publication-item', staggerDelay, 'animate-in');
    }

    // Achievements grid
    const achievementsGrid = document.querySelector('.achievements-list');
    if (achievementsGrid) {
        observeStaggeredGrid(achievementsGrid, '.achievement-item', staggerDelay, 'animate-scale');
    }

    // Hobbies grid
    const hobbiesGrid = document.querySelector('.hobbies-container');
    if (hobbiesGrid) {
        observeStaggeredGrid(hobbiesGrid, '.hobby-item', staggerDelay, 'animate-scale');
    }
}

// Helper function to observe and animate grid items with stagger
function observeStaggeredGrid(container, itemSelector, delayIncrement, animationClass, customThreshold) {
    const items = container.querySelectorAll(itemSelector);
    const threshold = customThreshold !== undefined ? customThreshold : 0.4;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate all items in this container
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add(animationClass);
                    }, index * delayIncrement);
                });

                // Unobserve after triggering
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: threshold,
        rootMargin: '0px 0px -100px 0px' // Trigger when items are well into view
    });

    observer.observe(container);
}
