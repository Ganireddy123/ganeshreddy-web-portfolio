// Central content file. Edit values here to update the whole site.
// No links, dates, metrics, or companies are invented beyond what was supplied.

export const profile = {
  name: 'Seethi Ganesh Kumar Reddy',
  initials: 'SG',
  headline: 'Frontend Developer | Full Stack Developer | Software Developer',
  location: 'Madanapalle, Andhra Pradesh, India',
  phone: '+91 9492777967',
  email: 'ganireddy0125@gmail.com',
  linkedin: 'https://linkedin.com/in/ganireddy94',
  github: '', // no GitHub URL supplied — related buttons/icons stay hidden
  resumeUrl: 'https://drive.google.com/file/d/1T2ZRO-G6durmWzZlcKuMN6wV2MJLQRqM/view?usp=drivesdk',
};

export const heroRotatingText = [
  'Building responsive React experiences',
  'Creating scalable Java backend services',
  'Automating reliable software testing',
  'Turning ideas into user-friendly products',
];

export const heroSummary =
  'Computer Science graduate and Full Stack Developer with hands-on experience building responsive web applications, REST APIs, database workflows, automated testing, and CI/CD-supported delivery.';

export const heroHighlights = [
  'React.js & Material UI',
  'Java & Spring Boot',
  'Selenium Automation',
  'MySQL & REST APIs',
];

export const aboutText =
  'I am a Computer Science graduate and Full Stack Developer with practical experience in React.js, Java, Spring Boot, Node.js, REST APIs, MySQL, Hibernate/JPA, automated testing, and Jenkins CI/CD. I enjoy building responsive, data-driven applications and solving issues across frontend, backend, APIs, and database workflows. My focus is on creating clear user experiences, reliable functionality, and maintainable software solutions.';

export const aboutStats = [
  { label: 'B.E. Computer Science, 2025' },
  { label: 'Full Stack Development' },
  { label: 'Automation Testing' },
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
      'Responsive Web Design',
      'Cross-Browser Compatibility',
      'REST API Integration',
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
      'RESTful APIs',
      'Spring JDBC',
      'Dependency Injection',
      'Inversion of Control',
    ],
  },
  {
    key: 'data',
    title: 'Databases & Data',
    skills: [
      'MySQL',
      'SQL',
      'Hibernate/JPA',
      'Data Modeling',
      'SQL Query Optimization',
      'Data Validation',
      'ETL Automation',
      'Data Pipelines',
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
    key: 'tools',
    title: 'Tools & Workflow',
    skills: [
      'Git',
      'GitHub',
      'Jenkins CI/CD',
      'Agile/Scrum',
      'Requirement Analysis',
      'Technical Documentation',
    ],
  },
];

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Vensyx Data Solutions',
    duration: 'December 2025 – Present',
    badge: 'Company Project',
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
  {
    id: 'movie-booking',
    name: 'Automated Movie Ticket Booking System',
    badge: 'Personal / Academic Project',
    badgeType: 'personal',
    stack: ['Java', 'Spring Boot', 'Hibernate/JPA', 'Selenium WebDriver', 'TestNG', 'ExtentReports'],
    description:
      'Developed a Java and Spring Boot movie ticket booking system with transaction-oriented backend workflows. Created Selenium WebDriver and TestNG automation tests with ExtentReports to validate booking workflows, transaction data, and application functionality.',
    results: [
      'Reduced manual testing effort by 60%.',
      'Applied unit and integration testing to improve reliability and regression coverage.',
      'Validated booking transactions and data accuracy.',
    ],
    githubUrl: '', // hide GitHub button until a real URL is supplied
    liveUrl: '', // hide Live Demo button until a real URL is supplied
  },
  {
    // TODO: confirm the exact project name, tech stack, and any real results —
    // the values below are generic placeholders based on your existing skill set.
    id: 'organic-farming',
    name: 'Organic Farming Management System',
    badge: 'Personal / Academic Project',
    badgeType: 'personal',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Hibernate/JPA'], // TODO: confirm actual tech stack used
    description:
      'Built a college project to digitize organic farming record-keeping — covering crop and land data entry, farming-activity tracking, and structured storage in place of manual registers.', // TODO: refine description with real project details
    features: [
      'Structured data entry for crop and farm records',
      'Backend workflows for tracking farming activity',
      'Relational database design for agricultural data',
    ], // TODO: add real results/metrics if available, or leave as feature list
    githubUrl: '',
    liveUrl: '',
  },
  {
    // TODO: confirm the exact project name, tech stack, and any real results —
    // the values below are generic placeholders based on your existing skill set.
    id: 'sericulture',
    name: 'Sericulture Management System',
    badge: 'Personal / Academic Project',
    badgeType: 'personal',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Hibernate/JPA'], // TODO: confirm actual tech stack used
    description:
      'Built a college project to support sericulture (silk farming) record management — organizing rearing-cycle data, production tracking, and related workflows in a structured application.', // TODO: refine description with real project details
    features: [
      'Structured tracking of rearing cycles and production data',
      'Backend workflows for sericulture record management',
      'Relational database design for domain-specific data',
    ], // TODO: add real results/metrics if available, or leave as feature list
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'real-estate',
    name: 'Real Estate Web Application',
    badge: 'Professional Contribution — Vensyx Data Solutions',
    badgeType: 'professional',
    stack: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Hibernate/JPA', 'Google Maps API'],
    description:
      'Contributed to a production-oriented real estate application through responsive frontend development, REST API integration, backend and database workflow support, data validation, and testing. This is a company-owned project; confidential code, internal URLs, and client data are not displayed.',
    outcomes: [
      'Supported workflows that reduced manual customer-data entry by 70%.',
      'Contributed to MySQL query and data-model optimization that improved response time by 35%.',
      'Helped deliver responsive interfaces and integrated application workflows.',
    ],
    confidentialityNote:
      "This is a company-owned project built at Vensyx Data Solutions. Source code, internal URLs, dashboards, and client data are confidential and are not displayed here. The description above reflects my individual contribution to the project, not the full scope or ownership of the product.",
  },
  {
    // TODO: confirm tech stack and any real results/metrics for ClassLingoAI.
    id: 'classlingo-ai',
    name: 'ClassLingoAI',
    badge: 'Professional Contribution — Vensyx Data Solutions',
    badgeType: 'professional',
    stack: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Hibernate/JPA'], // TODO: confirm actual tech stack used
    description:
      'Contributing to ClassLingoAI, an education platform that helps students learn, practice, and build knowledge, through responsive frontend development, REST API integration, backend and database workflow support, data validation, and testing. This is a company-owned project; confidential code, internal URLs, and client data are not displayed.',
    outcomes: [
      'Contributing to frontend and backend workflows supporting student learning and practice features.',
    ], // TODO: add real outcomes/metrics once available
    confidentialityNote:
      "This is a company-owned project built at Vensyx Data Solutions. Source code, internal URLs, dashboards, and client data are confidential and are not displayed here. The description above reflects my individual contribution to the project, not the full scope or ownership of the product.",
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio Website',
    badge: 'Personal Project',
    badgeType: 'personal',
    stack: ['React.js', 'Material UI', 'JavaScript', 'CSS3'],
    description:
      'A responsive, modern personal portfolio designed to showcase frontend development, full-stack engineering, automation testing, and professional experience.',
    features: [
      'Responsive design',
      'Dark premium UI',
      'Accessible navigation',
      'Reusable React components',
      'Smooth animations',
      'Contact form',
    ],
    githubUrl: '',
    liveUrl: '',
  },
];

export const achievements = [
  { value: 70, suffix: '%', label: 'reduction in manual customer data entry through structured workflows.' },
  { value: 35, suffix: '%', label: 'improvement in application response time through database-query and ORM optimization.' },
  { value: 60, suffix: '%', label: 'reduction in manual testing effort through Selenium and TestNG automation.' },
  { value: 99, suffix: '%', label: 'system uptime supported through reliable, responsive, cross-browser implementations.' },
];

export const achievementsNote =
  'Metrics reflect project and team outcomes from professional and academic work.';

export const certifications = [
  { title: 'Automation Testing with Selenium & TestNG', issuer: 'Coursera' },
  { title: 'Cloud Security', issuer: 'Zscaler / AICTE' },
  { title: 'Java', issuer: 'Great Learning' },
];

export const education = {
  degree: 'B.E., Computer Science & Engineering',
  institution: 'Mother Theresa Institute of Engineering & Technology, Palamaneru',
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
