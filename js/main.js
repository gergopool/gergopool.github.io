// Main JavaScript - Loads sections dynamically and initializes functionality

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Load all sections
    await loadSections();

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
