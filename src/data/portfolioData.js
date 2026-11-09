
// Central content file.
// Edit values here to update the whole portfolio site.

export const profile = {
  name: 'Seethi Ganesh Kumar Reddy',
  initials: 'SG',
  headline: 'Frontend Developer | Full Stack Developer | Software Developer',
  location: 'Madanapalle, Andhra Pradesh, India',
  phone: '+91 9492777967',
  email: 'ganireddy0125@gmail.com',
  linkedin: 'https://linkedin.com/in/ganireddy94',
  github: 'https://github.com/Ganireddy123',
  resumeUrl:
    'https://drive.google.com/file/d/1T2ZRO-G6durmWzZlcKuMN6wV2MJLQRqM/view?usp=drivesdk',
};

export const heroRotatingText = [
  'Building responsive React experiences',
  'Creating scalable Java backend services',
  'Automating reliable software testing',
  'Building intelligent Generative AI applications',
  'Turning ideas into user-friendly products',
];

export const heroSummary =
  'Computer Science graduate and Full Stack Developer with hands-on experience building responsive web applications, REST APIs, database workflows, automated testing, desktop applications, and Generative AI-powered solutions.';

export const heroHighlights = [
  'React.js & Material UI',
  'Java & Spring Boot',
  'Node.js & Express.js',
  'MySQL & SQLite',
  'Selenium Automation',
  'Google Gemini API',
];

export const aboutText =
  'I am a Computer Science graduate and Full Stack Developer with practical experience in React.js, Java, Spring Boot, Node.js, Express.js, REST APIs, MySQL, SQLite, Hibernate/JPA, automated testing, and Jenkins CI/CD. I have worked on real-world applications, desktop software, e-commerce platforms, and Generative AI projects. I enjoy building responsive, data-driven applications and solving issues across frontend, backend, APIs, and database workflows. My focus is on creating clear user experiences, reliable functionality, and maintainable software solutions.';

export const aboutStats = [
  { label: 'B.E. Computer Science, 2025' },
  { label: 'Full Stack Development' },
  { label: 'Automation Testing' },
  { label: 'Generative AI Development' },
  { label: 'Agile & CI/CD Delivery' },
];

export const skillCategories = [
  {
    key: 'frontend',
    title: 'Frontend Development',
    skills: [
      'React.js',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'Material UI',
      'Redux Toolkit',
      'React Router',
      'Responsive Web Design',
      'Cross-Browser Compatibility',
      'REST API Integration',
      'Framer Motion',
      'Vite',
    ],
  },
  {
    key: 'backend',
    title: 'Backend Development',
    skills: [
      'Java',
      'Spring Boot',
      'Spring Core',
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'Spring JDBC',
      'Dependency Injection',
      'Inversion of Control',
      'JWT Authentication',
    ],
  },
  {
    key: 'data',
    title: 'Databases & Data',
    skills: [
      'MySQL',
      'SQLite',
      'SQL',
      'Hibernate/JPA',
      'Data Modeling',
      'SQL Query Optimization',
      'Data Validation',
      'ETL Automation',
      'Data Pipelines',
      'better-sqlite3',
    ],
  },
  {
    key: 'testing',
    title: 'Testing & Quality',
    skills: [
      'Selenium WebDriver',
      'TestNG',
      'JUnit',
      'ExtentReports',
      'Postman',
      'Unit Testing',
      'Integration Testing',
      'API Validation',
      'Regression Testing',
    ],
  },
  {
    key: 'ai',
    title: 'Generative AI & AI Development',
    skills: [
      'Generative AI',
      'Google Gemini API',
      'AI Agent Development',
      'Prompt Engineering',
      'LLM Integration',
      'AI-powered Applications',
      'REST API Integration',
    ],
  },
  {
    key: 'tools',
    title: 'Tools & Workflow',
    skills: [
      'Git',
      'GitHub',
      'Jenkins CI/CD',
      'Agile/Scrum',
      'Requirement Analysis',
      'Technical Documentation',
      'Electron',
      'VS Code',
    ],
  },
];

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Vensyx Data Solutions',
    duration: 'December 2025 – Present',
    badge: 'Professional Experience',
    description:
      'At Vensyx Data Solutions, I contribute to production-oriented web applications and data-driven enterprise workflows, including a real estate platform and ClassLingoAI, an education platform for students to learn, practice, and build knowledge. My work includes developing responsive React.js interfaces, integrating REST APIs, developing Java Spring Boot and Node.js backend services, optimizing MySQL and Hibernate/JPA data workflows, validating application data, supporting ETL automation, testing features, debugging issues, and collaborating in Agile/Scrum delivery cycles.',
    highlights: [
      'Built responsive React.js components integrated with REST APIs.',
      'Developed backend services with Java, Spring Boot, Node.js, and MySQL.',
      'Worked on API validation, error handling, data consistency, and debugging.',
      'Supported ETL automation and data-pipeline validation workflows.',
      'Used Git, GitHub, Jenkins CI/CD, Postman, and Agile/Scrum practices.',
      'Created documentation, task trackers, and delivery status reports.',
      'Built cross-browser-compatible interfaces across mobile, tablet, and desktop.',
    ],
  },
];

export const projects = [
  // 1. Medical Store Management System

  {
    id: 'medical-store-management',
    name: 'Medical Store Management System',
    badge: 'Personal Project',
    badgeType: 'personal',
    stack: [
      'React.js',
      'Vite',
      'Material UI',
      'Electron',
      'Node.js',
      'SQLite',
      'better-sqlite3',
    ],
    description:
      'Developed an offline desktop application for medical store operations using React.js, Electron, Node.js, and SQLite. The application supports medicine inventory, customer and supplier management, batch tracking, purchase management, billing, invoice generation, sales reporting, and database backup and restoration.',
    features: [
      'Medicine inventory and stock management',
      'Customer and supplier management',
      'Medicine batch and purchase tracking',
      'Billing and invoice generation',
      'Manually add unlisted medicines during billing',
      'Sales and inventory reports',
      'SQLite database backup and restoration',
      'Offline desktop application',
      'Windows NSIS installer',
    ],
    outcomes: [
      'Completed frontend and backend integration.',
      'Validated medicine, customer, supplier, batch, and purchase operations.',
      'Passed 13 automated validation tests.',
      'Validated database persistence, backup, and restoration.',
      'Created a standalone Windows installer.',
    ],
    githubUrl: '',
    liveUrl: '',
  },

  // 2. GSILKS E-Commerce Platform

  {
    id: 'gsilks',
    name: 'GSILKS – Premium Silk Saree E-Commerce Platform',
    badge: 'Personal / Business Project',
    badgeType: 'personal',
    stack: [
      'React.js',
      'Vite',
      'Material UI',
      'Redux Toolkit',
      'React Router',
      'Axios',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT Authentication',
    ],
    description:
      'Developing a premium silk saree e-commerce platform designed to bring traditional silk sarees to customers through an online shopping experience. The application uses a React frontend, Node.js and Express backend, and MySQL database. It is designed with separate customer and administrator experiences for managing products, orders, authentication, and shopping workflows.',
    features: [
      'Premium silk saree product catalogue',
      'Product categories and product details',
      'Customer registration and login',
      'Shopping cart and checkout',
      'Order management',
      'Customer profile management',
      'Wishlist functionality',
      'Admin authentication and dashboard',
      'Product and inventory management',
      'MySQL database integration',
      'Responsive customer interface',
    ],
    outcomes: [
      'Designed a unified customer and admin application architecture.',
      'Established backend API and MySQL database integration.',
      'Structured the platform for e-commerce functionality.',
    ],
    githubUrl: 'https://github.com/Ganireddy123/GSilks',
    liveUrl: '',
  },

  // 3. NOVA AI

  {
    id: 'nova-ai',
    name: 'NOVA AI – Generative AI Personal Assistant',
    badge: 'Personal AI Project',
    badgeType: 'personal',
    stack: [
      'React.js',
      'JavaScript',
      'Material UI',
      'Node.js',
      'Express.js',
      'Google Gemini API',
      'REST APIs',
    ],
    description:
      'Developing NOVA AI, a Generative AI-powered personal assistant designed to provide intelligent conversational assistance and AI-powered workflows. The project uses a React-based frontend and Node.js backend integrated with Google Gemini API to process user queries and generate intelligent responses.',
    features: [
      'AI-powered conversational interface',
      'Google Gemini API integration',
      'Intelligent question answering',
      'Backend API integration',
      'Modular AI agent architecture',
      'Dedicated services and agent structure',
      'Frontend and backend communication',
      'Extensible architecture for future AI tools',
    ],
    outcomes: [
      'Developed the React frontend interface.',
      'Established the Node.js and Express backend architecture.',
      'Working on Gemini-powered AI functionality and frontend integration.',
    ],
    githubUrl: '',
    liveUrl: '',
  },

  // 4. Automated Movie Ticket Booking System

  {
    id: 'movie-booking',
    name: 'Automated Movie Ticket Booking System',
    badge: 'Personal / Academic Project',
    badgeType: 'personal',
    stack: [
      'Java',
      'Spring Boot',
      'Hibernate/JPA',
      'Selenium WebDriver',
      'TestNG',
      'ExtentReports',
    ],
    description:
      'Developed a Java and Spring Boot movie ticket booking system with transaction-oriented backend workflows. Created Selenium WebDriver and TestNG automation tests with ExtentReports to validate booking workflows, transaction data, and application functionality.',
    results: [
      'Reduced manual testing effort by 60%.',
      'Applied unit and integration testing to improve reliability and regression coverage.',
      'Validated booking transactions and data accuracy.',
    ],
    githubUrl: '',
    liveUrl: '',
  },

  // 5. Organic Farming Management System

  {
    id: 'organic-farming',
    name: 'Organic Farming Management System',
    badge: 'Personal / Academic Project',
    badgeType: 'personal',
    stack: [
      'Java',
      'Spring Boot',
      'MySQL',
      'Hibernate/JPA',
    ],
    description:
      'Built a college project to digitize organic farming record-keeping, covering crop and land data entry, farming-activity tracking, and structured storage in place of manual registers.',
    features: [
      'Structured data entry for crop and farm records',
      'Backend workflows for tracking farming activity',
      'Relational database design for agricultural data',
    ],
    githubUrl: '',
    liveUrl: '',
  },

  // 6. Sericulture Management System

  {
    id: 'sericulture',
    name: 'Sericulture Management System',
    badge: 'Personal / Academic Project',
    badgeType: 'personal',
    stack: [
      'Java',
      'Spring Boot',
      'MySQL',
      'Hibernate/JPA',
    ],
    description:
      'Built a college project to support sericulture (silk farming) record management, organizing rearing-cycle data, production tracking, and related workflows in a structured application.',
    features: [
      'Structured tracking of rearing cycles and production data',
      'Backend workflows for sericulture record management',
      'Relational database design for domain-specific data',
    ],
    githubUrl: '',
    liveUrl: '',
  },

  // 7. Real Estate Web Application

  {
    id: 'real-estate',
    name: 'Real Estate Web Application',
    badge: 'Professional Contribution — Vensyx Data Solutions',
    badgeType: 'professional',
    stack: [
      'React.js',
      'Java',
      'Spring Boot',
      'MySQL',
      'Hibernate/JPA',
      'Google Maps API',
    ],
    description:
      'Contributed to a production-oriented real estate application through responsive frontend development, REST API integration, backend and database workflow support, data validation, and testing. This is a company-owned project; confidential code, internal URLs, and client data are not displayed.',
    outcomes: [
      'Supported workflows that reduced manual customer-data entry by 70%.',
      'Contributed to MySQL query and data-model optimization that improved response time by 35%.',
      'Helped deliver responsive interfaces and integrated application workflows.',
    ],
    confidentialityNote:
      'This is a company-owned project built at Vensyx Data Solutions. Source code, internal URLs, dashboards, and client data are confidential and are not displayed here. The description above reflects my individual contribution to the project, not the full scope or ownership of the product.',
  },

  // 8. ClassLingoAI

  {
    id: 'classlingo-ai',
    name: 'ClassLingoAI',
    badge: 'Professional Contribution — Vensyx Data Solutions',
    badgeType: 'professional',
    stack: [
      'React.js',
      'Java',
      'Spring Boot',
      'MySQL',
      'Hibernate/JPA',
    ],
    description:
      'Contributing to ClassLingoAI, an education platform that helps students learn, practice, and build knowledge, through responsive frontend development, REST API integration, backend and database workflow support, data validation, and testing. This is a company-owned project; confidential code, internal URLs, and client data are not displayed.',
    outcomes: [
      'Contributing to frontend and backend workflows supporting student learning and practice features.',
    ],
    confidentialityNote:
      'This is a company-owned project built at Vensyx Data Solutions. Source code, internal URLs, dashboards, and client data are confidential and are not displayed here. The description above reflects my individual contribution to the project, not the full scope or ownership of the product.',
  },

  // 9. Personal Portfolio Website

  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio Website',
    badge: 'Personal Project',
    badgeType: 'personal',
    stack: [
      'React.js',
      'Material UI',
      'JavaScript',
      'CSS3',
    ],
    description:
      'A responsive, modern personal portfolio designed to showcase frontend development, full-stack engineering, automation testing, Generative AI development, and professional experience.',
    features: [
      'Responsive design',
      'Dark premium UI',
      'Accessible navigation',
      'Reusable React components',
      'Smooth animations',
      'Contact form',
      'Dynamic project showcase',
      'Professional experience section',
    ],
    githubUrl: '',
    liveUrl: '',
  },
];

export const achievements = [
  {
    value: 70,
    suffix: '%',
    label:
      'reduction in manual customer data entry through structured workflows.',
  },
  {
    value: 35,
    suffix: '%',
    label:
      'improvement in application response time through database-query and ORM optimization.',
  },
  {
    value: 60,
    suffix: '%',
    label:
      'reduction in manual testing effort through Selenium and TestNG automation.',
  },
  {
    value: 99,
    suffix: '%',
    label:
      'system uptime supported through reliable, responsive, cross-browser implementations.',
  },
];

export const achievementsNote =
  'Metrics reflect project and team outcomes from professional and academic work.';

export const certifications = [
  {
    title: 'Automation Testing with Selenium & TestNG',
    issuer: 'Coursera',
  },
  {
    title: 'Cloud Security',
    issuer: 'Zscaler / AICTE',
  },
  {
    title: 'Java',
    issuer: 'Great Learning',
  },
];

export const education = {
  degree: 'B.E., Computer Science & Engineering',
  institution:
    'Mother Theresa Institute of Engineering & Technology, Palamaneru',
  duration: '2021 – 2025',
  cgpa: 'CGPA: 7.8',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
