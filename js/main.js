// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations for elements
    initAnimations();
    
    // Initialize modal functionality
    initModals();
    
    // Initialize form validation
    initFormValidation();
});

// Initialize animations for elements when they come into view
function initAnimations() {
    // Add animation classes to section titles when they come into view
    const sectionTitles = document.querySelectorAll('.section-title');
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Create an intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // If it's a skill level, animate the width
                if (entry.target.classList.contains('skill-level')) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 100);
                }
                
                // Unobserve after animation is added
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all section titles and skill levels
    sectionTitles.forEach(title => observer.observe(title));
    skillLevels.forEach(skill => observer.observe(skill));
}

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
}

// Initialize experience timeline modals
function initExperienceModals() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const modal = document.getElementById('detailModal');
    const modalContent = document.getElementById('modalContent');
    
    // Experience details data
    const experienceDetails = {
        'renyi': {
            title: 'Deep Learning Researcher',
            company: 'Alfréd Rényi Institute of Mathematics',
            period: '2020 - 2024',
            achievements: [
                'Published the first NeurIPS paper from a Hungarian institute'
            ],
            responsibilities: [
                'Literature review and writing conference papers',
                'Research design & development, executing ideas in code',
                'Advise on AI for industrial partners'
            ],
            technologies: 'Python, PyTorch, Pandas, Docker, Git, Self-supervised image classification, RAG, Cloud, GAN, VAE, Transformers, Huggingface'
        },
        'uva': {
            title: 'Teaching Assistant',
            company: 'University of Amsterdam',
            period: '2024',
            achievements: [
                'Successfully helped students to understand the fundamentals of deep learning and different neural architectures',
                'Corrected bugs and ambiguities that confused students for years'
            ],
            responsibilities: [
                'Teach and design curriculum for AI master students',
                'Enhance course quality through program evaluation',
                'Mark students by carefully designed unit tests',
                'Hold tutorials and Q&A sessions for students'
            ],
            technologies: 'Python, SLURM, PyTorch, NumPy'
        },
        'asura-consultant': {
            title: 'Machine Learning Consultant',
            company: 'Asura Technologies Ltd.',
            period: '2020 - 2024',
            achievements: [
                'Boosted object detection accuracy by a large margin'
            ],
            responsibilities: [
                'Guide a group of ML developers on computer vision projects',
                'Advise on technology & implementations to streamline workflows'
            ],
            technologies: 'Python, TensorFlow, Keras, Scikit-Learn, OpenCV, Git'
        },
        'asura-engineer': {
            title: 'Machine Learning Engineer',
            company: 'Asura Technologies Ltd.',
            period: '2018 - 2020',
            achievements: [
                'Drove startup growth from 12 to 100+ members with innovative, scalable AI solutions',
                'Engineered an in-house license plate recognition solution from scratch that outperformed competitors'
            ],
            responsibilities: [
                'Design, train and serve real-time object detection models, including firearm, car or license plate detection',
                'Create and maintain an ALPR and OCR engine, as well as an automated parking system that tracks cars in a parking lot',
                'Prune and distill neural networks for inference',
                'Deliver state-of-the-art PoC models for new customers'
            ],
            technologies: 'Python, TensorFlow, Keras, Scikit-Learn, OpenCV, Django, Flask, Cloud, REST API, C#, Docker, Git'
        },
        'morgan-stanley': {
            title: 'Risk Analyst (AI Team)',
            company: 'Morgan Stanley',
            period: '2017 - 2018',
            achievements: [
                'Automated data processing workflows, saving 100hrs / week'
            ],
            responsibilities: [
                'Save working hours by automating quick-decision processes',
                'Develop clustering and forecasting models on tabular data',
                'Learn about the banking industry while being an expert of coding',
                'Train light-weight traditional ML algorithms on big data'
            ],
            technologies: 'Python, SKlearn, Pandas, Spark, SQL, Q, Excel'
        }
    };
    
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
    
    // Project details data
    const projectDetails = {
        'prisma': {
            title: 'Prisma',
            description: 'Extracting psychological data, resilience, and player communication statistics from e-sport footage for further analysis.',
            technologies: 'Python, Huggingface, Docker, Pygame, Databricks',
            details: 'This project involves analyzing e-sport footage to extract valuable insights about player psychology, resilience under pressure, and communication patterns. The data is processed using advanced NLP and computer vision techniques to provide actionable insights for e-sport teams and coaches.'
        },
        'bash-agent': {
            title: 'Linux Bash Agent',
            description: 'Developing a natural language interface for terminal operations that can execute complex tasks through prompting, with optimization for deployment on resource-constrained devices.',
            technologies: 'LLM Fine-tuning, Python, Bash, Linux',
            details: 'This agent allows users to interact with the Linux terminal using natural language, making complex command-line operations accessible to non-technical users. The model is optimized for efficient deployment on small GPU devices and CPUs, making it practical for everyday use.'
        },
        'stitch-bert': {
            title: 'Stitch-BERT',
            description: 'Analyzed how NLP transformers fine-tuned for different languages and tasks relate geometrically and functionally, revealing potential for cross-task insights.',
            technologies: 'PyTorch, Python',
            details: 'This research project explored the geometric and functional relationships between transformer models fine-tuned for different languages and tasks. The findings provide valuable insights into how knowledge transfers across language boundaries and task domains in NLP models.'
        },
        'rag': {
            title: 'RAG',
            description: 'Participated in a Retrieval Augmented Generation project involving vector databases, knowledge graphs, and text generation with LLMs.',
            technologies: 'Python, Huggingface, PyTorch',
            details: 'This project combined vector databases and knowledge graphs with large language models to create a powerful retrieval-augmented generation system. The system can retrieve relevant information from a knowledge base and generate accurate, contextually appropriate responses.'
        },
        'gaming-bot': {
            title: 'Gaming Bot',
            description: 'Developed a rule-based AI in NodeJS for automating gameplay for a browser game with attack timing, reaction to reports, and HTML dashboard logging.',
            technologies: 'NodeJS, HTML, JavaScript',
            details: 'This bot automates gameplay in a browser-based game, handling complex timing for attacks, responding to in-game events, and providing a comprehensive HTML dashboard for monitoring and logging. The system uses rule-based AI to make strategic decisions based on game state.'
        },
        'msc-thesis': {
            title: 'MSc Thesis',
            description: 'Investigated Vision Transformers\' ability to generalize across object properties (shape, texture, color, count) on CLEVR-4.',
            technologies: 'Python, Huggingface',
            details: 'This research project examined how Vision Transformers generalize across different object properties using the CLEVR-4 dataset. The findings contribute to our understanding of how these models perceive and categorize visual information, with implications for improving their robustness and generalization capabilities.'
        }
    };
    
    // Add click event to all project cards
    projectCards.forEach(card => {
        card.addEventListener('click', (event) => {
            if (event.target.classList.contains('read-more')) return;
            const projectId = card.getAttribute('data-id');
            const project = projectDetails[projectId];
            
            if (project) {
                // Create modal content
                let content = `
                    <h2>${project.title}</h2>
                    
                    <div class="modal-section">
                        <h4>Description</h4>
                        <p>${project.description}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h4>Details</h4>
                        <p>${project.details}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h4>Technologies</h4>
                        <p>${project.technologies}</p>
                    </div>
                `;
                
                // Set modal content and display modal
                modalContent.innerHTML = content;
                modal.style.display = 'block';
            }
        });
    });
}

// Initialize form validation
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
            
            // Form will be submitted automatically if all validations pass
            // FormSubmit.co will handle the email delivery
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
