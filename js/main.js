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
            title: 'Deep Learning Research Engineer',
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
            responsibilities: [
                'Process speech data, extract psychological data, resilience, and player communication statistics from e-sport footage for further analysis',
                'Construct a database of historical e-sport footage and associated statistics',
                'Fine-tune NLP models for speech-to-text and text-to-text translation',
                'Develop a web application for visualizing and analyzing the extracted data',
                'End-to-end deployment of the application'
            ],
            role: '',
            where: 'Home Project',
            technologies: 'Python, Huggingface, Docker, Pygame, Databricks',
            details: 'This project involves analyzing e-sport footage to extract valuable insights about player psychology, resilience under pressure, and communication patterns. The data is processed using advanced NLP and computer vision techniques to provide actionable insights for e-sport teams and coaches.'
        },
        'bash-agent': {
            title: 'Linux Bash Agent',
            description: 'Developing a natural language interface for terminal operations that can execute complex tasks through prompting, with optimization for deployment on resource-constrained devices.',
            responsibilities: [
                'Develop a natural language interface for terminal operations that can execute complex tasks through prompting',
                'Optimize the model for deployment on resource-constrained devices'
            ],
            role: '',
            where: 'Home Project',
            technologies: 'LLM Fine-tuning, Python, Bash, Linux',
            details: 'This agent allows users to interact with the Linux terminal using natural language, making complex command-line operations accessible to non-technical users. The model is optimized for efficient deployment on small GPU devices and CPUs, making it practical for everyday use.'
        },
        'rag': {
            title: 'RAG',
            description: 'Participated in a Retrieval Augmented Generation project involving vector databases, knowledge graphs, and text generation with LLMs.',
            responsibilities: [
                'Collect and process data for vector databases and knowledge graphs',
                'Develop a retrieval-augmented generation system that can retrieve relevant information from a knowledge base and generate accurate, contextually appropriate responses'
            ],
            role: 'ML Engineer',
            where: 'Alfred Rényi Institute of Mathematics',
            technologies: 'Python, Huggingface, PyTorch',
            details: 'This project combined vector databases and knowledge graphs with large language models to create a powerful retrieval-augmented generation system. The system can retrieve relevant information from a knowledge base and generate accurate, contextually appropriate responses.'
        },
        'msc-thesis': {
            title: 'MSc Thesis',
            description: 'Investigated Vision Transformers\' ability to generalize across object properties (shape, texture, color, count) on CLEVR-4.',
            role: 'Student',
            where: 'University of Amsterdam',
            technologies: 'Python, Huggingface',
            details: 'Abstract: <i>This thesis introduces a new, novel problem in classification we call Cross-Taxonomy Generalization (CTG), a subcategory of Few-Shot Learning (FSL). CTG requires models to adapt to new sets of labels on the same input distribution, challenging the problem of inherent biases present in neural encoders. We evaluate In-Context Learning (ICL) and classic FSL methods on CTG using the Clevr-4 synthetic image dataset. We find that ICL tends to overfit and generalize poorly in the CTG context. In contrast, simple finetuning achieves higher accuracy but requires numerous optimization steps on each set of support examples, making the prediction time-intensive. Notably, Linear Discriminant Analysis (LDA) can provide an effective and fast mid-way solution between finetuning and ICL. LDA efficiently identifies relevant principal components for each new taxonomy, offering a robust alternative. This thesis highlights the importance of addressing CTG and presents an analysis of these methods. </i>'
        },
        'stitch-bert': {
            title: 'Stitch-BERT',
            description: 'Analyzed how NLP transformers fine-tuned for different languages and tasks relate geometrically and functionally, revealing potential for cross-task insights.',
            role: 'First author',
            where: 'University of Amsterdam',
            technologies: 'PyTorch, Python',
            details: 'This research project explored the geometric and functional relationships between transformer models fine-tuned for different languages and tasks. The findings provide valuable insights into how knowledge transfers across language boundaries and task domains in NLP models.',
            github: 'https://github.com/gergopool/stitch_bert/'
        },
        'gaming-bot': {
            title: 'Gaming Bot',
            description: 'Developed a rule-based AI in NodeJS for automating gameplay for a browser game with attack timing, reaction to reports, and HTML dashboard logging.',
            role: '',
            where: 'Home Project',
            technologies: 'NodeJS, HTML, JavaScript',
            details: 'This bot automates gameplay in a browser-based game, handling complex timing for attacks, responding to in-game events, and providing a comprehensive HTML dashboard for monitoring and logging. The system uses rule-based AI to make strategic decisions based on game state.'
        },
        'energy-consumption': {
            title: 'Energy Consumption Prediction',
            description: 'Developed a time series forecasting model to predict energy consumption based on historical data through collection, cleaning, preprocessing, and model training.',
            role: 'Research Engineer and Consultant',
            where: 'Alfred Rényi Institute of Mathematics',
            technologies: 'Python, PyTorch, Docker',
            details: 'This project involved building a sophisticated time series forecasting model to predict energy consumption patterns. The model was trained on historical data after extensive cleaning and preprocessing, enabling accurate predictions that can help optimize energy usage and reduce costs.'
        },
        'self-supervised': {
            title: 'Self-Supervised Learning',
            description: 'Explored innovative self-supervised image classification methods competing with state-of-the-art approaches, achieving promising results on smaller datasets.',
            role: 'Research Engineer',
            where: 'Alfred Rényi Institute of Mathematics',
            technologies: 'Python, PyTorch, Wandb, Docker',
            details: 'This research project investigated novel approaches to self-supervised learning for image classification, with a focus on techniques that perform well on smaller datasets. The work demonstrated that carefully designed self-supervised methods can compete with state-of-the-art supervised approaches while requiring significantly less labeled data.',
            github: 'https://github.com/gergopool/sslic'
        },
        'functional-similarity': {
            title: 'Functional Similarity',
            description: 'Demonstrated that geometric and functional similarity in neural networks are distinct concepts using affine transformations between networks.',
            role: 'Research Engineer',
            where: 'Alfred Rényi Institute of Mathematics',
            technologies: 'Python, PyTorch',
            details: 'This research project, which resulted in the first NeurIPS paper accepted from a Hungarian institute, established that geometric and functional similarity in neural networks are distinct concepts. By using affine transformations between networks, the research showed that networks with different internal representations can still perform the same functions, challenging conventional understanding of neural network similarity.',
            github: 'https://github.com/renyi-ai/drfrankenstein'
        },
        'cnn-interpret': {
            title: 'Image Interpretation of CNNs',
            description: 'Visualized the role of neurons in CNNs using Lucid and GANs, revealing what images best represent specific classes in a CelebA-trained classifier.',
            role: 'Research Engineer',
            where: 'Alfred Rényi Institute of Mathematics',
            technologies: 'Python, Lucid, TensorFlow',
            details: 'This project focused on making convolutional neural networks more interpretable by visualizing what specific neurons respond to. Using techniques from Lucid and GANs, the research revealed the images that best represent specific classes in a classifier trained on the CelebA dataset, providing insights into how CNNs process and categorize facial features.'
        },
        'license-plate': {
            title: 'License Plate Recognition',
            description: 'Initiated and built a ViT-based license plate recognition system during a brief window of opportunity while management was away.',
            role: 'ML Engineer',
            where: 'Asura Technologies',
            technologies: 'Python, TensorFlow, OpenCV, NumPy, C#',
            details: 'This innovative project involved developing a Vision Transformer-based license plate recognition system that successfully replaced an expensive third-party solution. The system was built during a brief window of opportunity and became a core product for Asura Technologies, demonstrating both technical excellence and initiative. The solution handles various lighting conditions, angles, and plate types with high accuracy.'
        },
        'mrz-extraction': {
            title: 'MRZ Extraction',
            description: 'Developed a system to extract Machine Readable Zones from passport images through comprehensive data collection, preprocessing, and model training.',
            role: 'ML Engineer',
            where: 'Asura Technologies',
            technologies: 'Python, TensorFlow, OpenCV, Tesseract, NumPy',
            details: 'This project involved creating a robust system for extracting Machine Readable Zones (MRZ) from passport images. The solution included comprehensive data collection, sophisticated preprocessing techniques to handle various image qualities and angles, and advanced model training to ensure accurate extraction of critical passport information.'
        },
        'quarantine': {
            title: 'Home Quarantine System',
            description: 'Created an ML system to track quarantine compliance during the COVID-19 pandemic, with face detection and anti-cheating mechanisms.',
            role: 'ML Engineer',
            where: 'Asura Technologies',
            technologies: 'Python, TensorFlow, OpenCV, NumPy',
            details: 'This critical application was developed under tight time constraints during the COVID-19 pandemic to help enforce quarantine compliance. The ML system included sophisticated face detection and anti-cheating mechanisms to ensure that individuals were actually at their designated quarantine locations. The system was adopted by the Hungarian government and used by tens of thousands of citizens, playing a role in pandemic management efforts.',
            link: 'https://asuratechnologies.com/solutions/home-quarantine-system/'
        },
        'wheel-counter': {
            title: 'Wheel Counter',
            description: 'Developed a real-time system to count wheels through comprehensive data collection, preprocessing, and model training.',
            role: 'ML Engineer',
            where: 'Asura Technologies',
            technologies: 'Python, TensorFlow, Keras, OpenCV, Neptun.ai',
            details: 'This project involved creating a real-time system for counting wheels on vehicles, which was crucial for vehicle classification and toll calculation. The solution required comprehensive data collection across various lighting conditions and vehicle types, sophisticated preprocessing to handle occlusion and varying angles, and advanced model training to ensure accurate counting in real-time scenarios.'
        },
        'car-detection': {
            title: 'Car + License Plate Detection',
            description: 'Implemented a real-time YOLO-based system for detecting vehicles and license plates, overcoming challenges with fish-eye camera distortion through specialized preprocessing.',
            role: 'ML Engineer',
            where: 'Asura Technologies',
            technologies: 'Python, TensorFlow, Keras, SQL, OpenCV, REST API, Neptun.ai',
            details: 'This project involved implementing a real-time system using YOLO architecture for simultaneously detecting vehicles and their license plates. A key innovation was developing specialized preprocessing techniques to overcome the challenges posed by fish-eye camera distortion, which is common in parking lot surveillance systems. The solution achieved high accuracy even with distorted images and varying lighting conditions.'
        },
        'people-counter': {
            title: 'People Counter',
            description: 'Developed a tool to count people entering a shopping mall in real-time with 90%+ accuracy, providing reliable customer traffic estimates.',
            role: 'ML Engineer',
            where: 'Asura Technologies',
            technologies: 'Python, TensorFlow, Keras, OpenCV',
            details: 'This project involved creating a sophisticated people counting system for shopping malls that achieved over 90% accuracy in real-time. The system provided reliable customer traffic estimates, which were valuable for retail analytics, staff scheduling, and marketing effectiveness evaluation. The solution handled challenges such as occlusion, varying lighting conditions, and group movements.'
        },
        'make-model': {
            title: 'Make & Model Recognition',
            description: 'Categorized car images into their make and model with 90%+ accuracy through comprehensive data collection, preprocessing, and model training.',
            role: 'ML Engineer',
            where: 'Asura Technologies',
            technologies: 'Python, TensorFlow, Keras, OpenCV',
            details: 'This project involved developing a system to accurately categorize vehicles by their make and model from images. Achieving over 90% accuracy, the system required extensive data collection across various vehicle types, angles, and lighting conditions. The solution included sophisticated preprocessing techniques and advanced model training to handle the fine-grained classification challenges inherent in distinguishing between similar vehicle models.'
        },
        'watermeter': {
            title: 'Watermeter Reader',
            description: 'Built an end-to-end OCR solution that automatically cleans, rotates, and extracts readings from watermeter images, deployed to the cloud for seamless integration.',
            role: 'Freelance ML Engineer',
            where: 'Freelance',
            technologies: 'Python, TensorFlow, Docker, REST API',
            details: 'This project involved creating an end-to-end OCR solution for automatically reading watermeter values from images. The system handles the entire process from image cleaning and rotation to digit extraction and interpretation. Deployed to the cloud with a REST API interface, the solution enables seamless integration with utility company systems, significantly reducing the need for manual meter reading and improving billing accuracy.'
        },
        'alphazero' : {
            title: 'AlphaZero',
            description: 'Reimplemented AlphaZero to explore temporal diﬀerence learning vs. Monte Carlo methods. The study revealed unique in-game strategies made with Reinforcement Learning.',
            role: '',
            where: '(Home Project)',
            technologies: 'Python, TensorFlow',
            details: 'At that time AlphaZero was one of the most surprising results in the field of reinforcement learning, as it was able to beat human experts in Go and chess. This project involved re-implenenting AlphaZero, as well as exploring temporal diﬀerence learning vs. Monte Carlo methods. The study revealed unique in-game strategies made in Gomoku 3D, but temporal difference learning showed no advantage over Monte Carlo methods.'
        },
        'balance-sheet': {
            title: 'Balance Sheet Reconciliation',
            description: 'Engineered a tool using hierarchical clustering to reconcile balance sheets between different accounting systems, automating complex financial comparisons.',
            role: 'AI Developer / Risk Analyst',
            where: 'Morgan Stanley',
            technologies: 'Python, Pandas, NumPy, Excel, Scikit-learn',
            details: 'This financial tool uses hierarchical clustering algorithms to automatically reconcile balance sheets between different accounting systems. By identifying similar accounts and calculating differences, the solution automates complex financial comparisons that would otherwise require extensive manual work. The tool significantly improves accuracy and efficiency in financial reconciliation processes, reducing the risk of errors in financial reporting.'
        },
        'invoice-ocr': {
            title: 'Invoice OCR',
            description: 'Architected an OCR system that translates invoices into structured formats and extracts relevant information using a shallow neural network for efficient data processing.',
            role: 'AI Developer / Risk Analyst',
            where: 'Morgan Stanley',
            technologies: 'Python, TensorFlow, Tesseract, Scikit-learn',
            details: 'This project involved creating a sophisticated OCR system for processing invoices. The solution translates unstructured invoice images into structured formats and extracts relevant information such as vendor details, invoice numbers, line items, and totals. Using a shallow neural network for efficient data processing, the system achieves high accuracy while maintaining reasonable computational requirements, making it practical for deployment in business environments.'
        },
        'structured-vae': {
            title: 'Structured VAE Latent',
            description: 'Investigated latent space properties of structured VAEs by forcing a torus shape while reconstructing clock images, advancing understanding of controlled generative models.',
            role: 'Volunteer',
            where: 'Alfred Rényi Institute of Mathematics',
            technologies: 'Python, TensorFlow, OpenCV',
            details: 'This research project explored the properties of structured Variational Autoencoders (VAEs) by imposing specific constraints on the latent space. By forcing the latent space to form a torus shape while reconstructing clock images, the research provided insights into how controlled latent spaces affect generative capabilities. The findings contribute to our understanding of how to design more controllable and interpretable generative models.'
        },
        'gun-detection': {
            title: 'Gun Detection',
            description: 'Tackled the challenge of detecting small firearms in high-resolution images in real-time, discovering the critical importance of contextual information for accurate detection.',
            role: 'ML Engineer',
            where: 'Asura Technologies',
            technologies: 'Python, TensorFlow, OpenCV, NumPy',
            details: 'This security-focused project addressed the challenging task of detecting small firearms in high-resolution images in real-time. A key finding was the critical importance of contextual information for accurate detection. The research demonstrated that considering the surrounding context significantly improves detection accuracy compared to approaches that focus solely on the firearm itself. This insight has important implications for security and surveillance applications.'
        },
        'time-series': {
            title: 'Time Series Forecasting',
            description: 'Built a predictive model using linear regression to forecast future values based on historical time series data, enabling data-driven decision making.',
            role: 'ML Developer / Risk Analyst',
            where: 'Morgan Stanley',
            technologies: 'Python, Scikit-learn, Pandas',
            details: 'This project involved developing a predictive model for time series forecasting using linear regression techniques. By analyzing patterns in historical data, the model generates forecasts that enable data-driven decision making. The solution includes comprehensive data preprocessing, feature engineering to capture temporal patterns, and model validation to ensure forecast reliability. The approach balances sophistication with interpretability, making it valuable for business planning and resource allocation.'
        },
        'chess' : {
            title: 'Chess Engine',
            description: 'As a bachelor thesis, I developed a neural chess engine from scratch without the use of tree search, achieving entry-level play.',
            role: 'Student',
            where: 'University of Manchester',
            technologies: 'Java',
            details: 'In 2016, DeepMind stated that their policy network could defeat the strongest Go engines, even without the use of tree-search. Inspired by this, I developed a neural chess engine from scratch without the use of tree search, achieving entry-level play. The engine was implemented in Java, because back then I was more familiar with it than Python. For this reason, I needed implement the neural network from scratch, using backpropagation to train the engine. '
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

                // let content = `
                //     <h2>${project.title}</h2>
                    
                //     <div class="modal-section">

                //     <h2>${project.title}</h2>
                    
                //     <div class="modal-section">
                //         <h4>Description</h4>
                //         <p>${project.description}</p>
                //     </div>
                    
                    
                //     <div class="modal-section">
                //         <h4>Details</h4>
                //         <p>${project.details}</p>
                //     </div>
                    
                //     <div class="modal-section">
                //         <h4>Technologies</h4>
                //         <p>${project.technologies}</p>
                //     </div>
                // `;
                
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
