    const projectDetails = {
        'prisma': {
            title: 'Prisma',
            description: 'Multi-LLM framework helping influencers schedule and automate Instagram posts with full-stack development from backend to cloud deployment.',
            responsibilities: [
                'Design and implement backend architecture with multi-LLM framework',
                'Design and manage PostgreSQL database schema',
                'Containerize application with Docker for scalability',
                'Deploy and maintain production environment on AWS cloud',
                'Integrate AWS services including Bedrock, S3, and Strands',
                'Build full-stack solution handling both frontend and backend components'
            ],
            role: 'Full-Stack Engineer',
            where: 'Amsterdam, Netherlands',
            technologies: 'Docker, AWS, Bedrock, S3, PostgreSQL, Strands',
            details: 'A comprehensive multi-LLM framework designed to help influencers automate their social media presence on Instagram. As a full-stack engineer, I handle all aspects from backend development and database design to Docker containerization and AWS cloud deployment. The system leverages cutting-edge technologies including AWS Bedrock for LLM capabilities and Strands for advanced workflow management.'
        },
        'truthworks': {
            title: 'TruthWorks',
            description: 'AI-powered investigation platform for US police departments featuring OCR, image captioning, and RAG system for processing thousands of pages to find contradictions.',
            responsibilities: [
                'Develop and maintain AI backend infrastructure',
                'Implement OCR pipeline for document processing',
                'Build image captioning system for visual evidence analysis',
                'Design and deploy RAG (Retrieval Augmented Generation) system',
                'Construct knowledge graphs from case documents',
                'Process documents with thousands of pages to extract insights',
                'Build systems to identify summaries and contradictions in case files',
                'Deploy and scale on AWS cloud infrastructure'
            ],
            role: 'AI Engineer',
            where: 'Amsterdam, Netherlands',
            technologies: 'Docker, AWS, Bedrock, S3, PostgreSQL, LangChain, Redis',
            details: 'An advanced AI system that assists US police departments in criminal investigations by processing massive volumes of documents and evidence. The platform uses sophisticated OCR and image captioning to extract information, then builds comprehensive knowledge graphs that help investigators find key summaries and contradictions across thousands of pages of case files. Built with LangChain and AWS services for robust, scalable performance.'
        },
        'bash-agent': {
            title: 'Linux Bash Agent',
            description: 'Developing a natural language interface for terminal operations using LLMs that can execute complex tasks through prompting, optimized for deployment on resource-constrained devices.',
            responsibilities: [
                'Develop an LLM-powered natural language interface for terminal operations using AWS Bedrock',
                'Implement LangChain pipelines for complex command-line task execution',
                'Optimize the system for deployment on resource-constrained devices'
            ],
            role: '',
            where: 'Home Project',
            technologies: 'Python, AWS Bedrock, LangChain, Bash, Linux',
            details: 'This agent allows users to interact with the Linux terminal using natural language through LLMs, making complex command-line operations accessible to non-technical users. Built with AWS Bedrock and LangChain, the system is optimized for efficient deployment on small GPU devices and CPUs, making it practical for everyday use.'
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
            technologies: 'Python, TensorFlow, Keras, SQL, OpenCV, Neptun.ai',
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
            technologies: 'Python, TensorFlow, Docker',
            details: 'This project involved creating an end-to-end OCR solution for automatically reading watermeter values from images. The system handles the entire process from image cleaning and rotation to digit extraction and interpretation. Deployed to the cloud, the solution enables seamless integration with utility company systems, significantly reducing the need for manual meter reading and improving billing accuracy.'
        },
        'alphazero' : {
            title: 'AlphaZero',
            description: 'Reimplemented AlphaZero to explore temporal difference learning vs. Monte Carlo methods. The study revealed unique in-game strategies made with Reinforcement Learning.',
            role: '',
            where: '(Home Project)',
            technologies: 'Python, TensorFlow',
            details: 'At that time AlphaZero was one of the most surprising results in the field of reinforcement learning, as it was able to beat human experts in Go and chess. This project involved reimplementing AlphaZero, as well as exploring temporal difference learning vs. Monte Carlo methods. The study revealed unique in-game strategies made in Gomoku 3D, but temporal difference learning showed no advantage over Monte Carlo methods.'
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
