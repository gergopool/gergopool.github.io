// Initialize modal functionality
function initModals() {
    const modal = document.getElementById('detailModal');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close-modal');

    // Close modal when clicking the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initialize experience timeline modals
    initExperienceModals();

    // Initialize project modals
    initProjectModals();

    // Initialize contact modal
    initContactModal();
}

// Initialize experience timeline modals
function initExperienceModals() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const modal = document.getElementById('detailModal');
    const modalContent = document.getElementById('modalContent');

    // Add click event to all timeline items
    timelineItems.forEach(item => {
        item.addEventListener('click', (event) => {
            if (event.target.classList.contains('read-more')) return;
            const experienceId = item.getAttribute('data-id');
            const experience = experienceDetails[experienceId];

            if (experience) {
                // Create modal content
                let content = `
                    <h2>${experience.title}</h2>
                    <h3>${experience.company}</h3>
                    <p class="modal-period">${experience.period}</p>

                    <div class="modal-section">
                        <h4>Achievements</h4>
                        <ul>
                            ${experience.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h4>Responsibilities</h4>
                        <ul>
                            ${experience.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h4>Technologies</h4>
                        <p>${experience.technologies}</p>
                    </div>
                `;

                // Set modal content and display modal
                modalContent.innerHTML = content;
                modal.style.display = 'block';
            }
        });
    });
}

// Initialize project modals
function initProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('detailModal');
    const modalContent = document.getElementById('modalContent');

    // Add click event to all project cards
    projectCards.forEach(card => {
        card.addEventListener('click', (event) => {
            if (event.target.classList.contains('read-more')) return;
            const projectId = card.getAttribute('data-id');
            const project = projectDetails[projectId];

            if (project) {
                // Create modal content
                let content = `<h2>${project.title}</h2>`;

                let data = [
                    { title: 'Description', content: project.description },
                    { title: 'Role', content: project.role },
                    { title: 'Where', content: project.where },
                    { title: 'Details', content: project.details },
                    { title: 'Technologies', content: project.technologies }
                ];

                for (let i = 0; i < data.length; i++) {
                    if (data[i].content !== '') {
                        content += `
                            <div class="modal-section">
                                <h4>${data[i].title}</h4>
                                <p>${data[i].content}</p>
                            </div>`;
                    }
                }

                // Set modal content and display modal
                modalContent.innerHTML = content;
                modal.style.display = 'block';
            }
        });
    });
}

// Initialize contact modal
function initContactModal() {
    const contactButton = document.getElementById('openContactModal');
    const modal = document.getElementById('detailModal');
    const modalContent = document.getElementById('modalContent');

    if (contactButton) {
        contactButton.addEventListener('click', () => {
            const content = `
                <h2 class="contact-modal-title">Get in Touch</h2>
                <div class="contact-list">
                    <a href="https://www.linkedin.com/in/gergopool/" target="_blank" class="contact-item">
                        <div class="contact-item-icon">
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <div class="contact-item-content">
                            <div class="contact-item-label">LinkedIn</div>
                            <div class="contact-item-value">linkedin.com/in/gergopool</div>
                        </div>
                    </a>

                    <a href="https://github.com/gergopool/" target="_blank" class="contact-item">
                        <div class="contact-item-icon">
                            <i class="fab fa-github"></i>
                        </div>
                        <div class="contact-item-content">
                            <div class="contact-item-label">GitHub</div>
                            <div class="contact-item-value">github.com/gergopool</div>
                        </div>
                    </a>

                    <a href="mailto:contact@gergelypapp.eu" class="contact-item">
                        <div class="contact-item-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-item-content">
                            <div class="contact-item-label">Email</div>
                            <div class="contact-item-value">contact@gergelypapp.eu</div>
                        </div>
                    </a>

                    <div class="contact-item clickable" id="phone-reveal">
                        <div class="contact-item-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-item-content">
                            <div class="contact-item-label">Phone</div>
                            <div class="contact-item-value">Click to reveal</div>
                        </div>
                    </div>
                </div>
            `;

            modalContent.innerHTML = content;
            modal.style.display = 'block';

            // Add event listener for phone reveal
            const phoneReveal = document.getElementById('phone-reveal');
            if (phoneReveal) {
                phoneReveal.addEventListener('click', function() {
                    this.querySelector('.contact-item-value').textContent = '+31 6 20794515';
                    this.classList.remove('clickable');
                }, { once: true });
            }
        });
    }
}

// Initialize form validation (kept for compatibility)
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Get form fields
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate fields
            let isValid = true;

            if (name === '') {
                isValid = false;
                showError('name', 'Please enter your name');
                event.preventDefault();
            } else {
                removeError('name');
            }

            if (email === '') {
                isValid = false;
                showError('email', 'Please enter your email');
                event.preventDefault();
            } else if (!isValidEmail(email)) {
                isValid = false;
                showError('email', 'Please enter a valid email address');
                event.preventDefault();
            } else {
                removeError('email');
            }

            if (subject === '') {
                isValid = false;
                showError('subject', 'Please enter a subject');
                event.preventDefault();
            } else {
                removeError('subject');
            }

            if (message === '') {
                isValid = false;
                showError('message', 'Please enter your message');
                event.preventDefault();
            } else {
                removeError('message');
            }
        });
    }

    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to show error message
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorElement = field.nextElementSibling;

        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = message;
        } else {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            field.parentNode.insertBefore(errorDiv, field.nextSibling);
        }

        field.classList.add('error-input');
    }

    // Helper function to remove error message
    function removeError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorElement = field.nextElementSibling;

        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }

        field.classList.remove('error-input');
    }
}
