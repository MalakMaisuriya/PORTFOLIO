export const personalDetails = {
  name: "Malak Maisuriya",
  title: "Full Stack Developer (Aspiring)",
  badge: "⚡ FULL STACK DEVELOPER ⚡",
  tagline: "Transforming logic into scalable web applications.",
  subtext: "BCA scholar mastering Full Stack MERN development, React, JavaScript, and C++ problem solving.",
  email: "malakmaisuriya857@gmail.com",
  phone: "+91 8160991260",
  location: "Surat, Gujarat, India",
  socials: {
    github: "https://github.com/MalakMaisuriya",
    linkedin: "https://in.linkedin.com/in/malak-maisuriya",
    hackerrank: "https://www.hackerrank.com/profile/MalakMaisuriya",
  }
};

export const aboutData = {
  watermark: "निरन्तरप्रयत्नेन सर्वं साध्यं भवति", // Continuous effort accomplishes all
  paragraphs: [
    "I am an ambitious developer who loves solving real-world challenges through code. My journey started with exploring computer applications at Vidhyadeep University, Surat, where I am currently in my BCA Final Year (Semester 5).",
    "I specialize in building responsive, high-performance web interfaces with React JS and modern CSS frameworks. Simultaneously, I am expanding into Full Stack MERN Development (MongoDB, Express, React, Node.js) and backend architecture.",
    "Beyond web applications, I actively practice Data Structures and Algorithms in C++ on HackerRank to hone algorithmic efficiency. I take pride in writing clean, well-structured, and maintainable code."
  ],
  stats: [
    { label: "Projects Built", value: "15+", detail: "Real-world & Practice Repositories" },
    { label: "BCA Final Year", value: "Sem 5", detail: "Vidhyadeep University" },
    { label: "DSA & Logic", value: "Active", detail: "HackerRank & C++ Repos" },
  ],
  achievements: [
    "Consistent learner with strong problem-solving and analytical reasoning skills",
    "Developed 15+ public GitHub repositories covering MERN, React, JavaScript, and DSA",
    "Regularly solving algorithmic challenges in C++ on HackerRank"
  ]
};

export const skillsData = [
  {
    category: "Frontend Web Development",
    iconName: "FaCode",
    description: "Building modern, responsive, and interactive user interfaces.",
    skills: [
      { name: "React JS", level: "Advanced", icon: "FaReact" },
      { name: "JavaScript ES6+", level: "Advanced", icon: "FaJsSquare" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "FaHtml5" },
      { name: "Bootstrap 5", level: "Advanced", icon: "FaBootstrap" },
      { name: "jQuery", level: "Intermediate", icon: "SiJquery" },
    ]
  },
  {
    category: "Backend & MERN Stack",
    iconName: "FaServer",
    description: "Server-side routing, database architecture, and REST API development.",
    skills: [
      { name: "Node.js", level: "In Progress", icon: "FaNodeJs" },
      { name: "Express.js", level: "In Progress", icon: "FaNodeJs" },
      { name: "MongoDB", level: "In Progress", icon: "SiMongodb" },
      { name: "REST APIs", level: "Intermediate", icon: "FaCode" },
    ]
  },
  {
    category: "Programming & DSA",
    iconName: "FaTerminal",
    description: "Core programming logic, algorithmic efficiency, and memory structures.",
    skills: [
      { name: "C Language", level: "Advanced", icon: "SiC" },
      { name: "C++ Programming", level: "Advanced", icon: "SiCplusplus" },
      { name: "DSA (C & C++)", level: "Advanced", icon: "FaBrain" },
    ]
  },
  {
    category: "Design & Multimedia",
    iconName: "FaPalette",
    description: "Graphic design, UI mockups, 2D animations, and visual assets.",
    skills: [
      { name: "Adobe Photoshop", level: "Advanced", icon: "FaPalette" },
      { name: "Adobe Animate CC", level: "Advanced", icon: "FaPaintBrush" },
      { name: "UI/UX Layouts", level: "Intermediate", icon: "FaPalette" },
    ]
  },
  {
    category: "Soft Skills & Career",
    iconName: "FaUserGraduate",
    description: "Professional communication, interview tech, and freelancing.",
    skills: [
      { name: "English Communication", level: "Advanced", icon: "FaLanguage" },
      { name: "Interview Preparation", level: "Advanced", icon: "FaUserGraduate" },
      { name: "Freelancing Tech", level: "Advanced", icon: "FaUserGraduate" },
    ]
  },
  {
    category: "Tools & Platforms",
    iconName: "FaTools",
    description: "Version control, development environments, and deployment.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "FaGitAlt" },
      { name: "VS Code", level: "Advanced", icon: "VscCode" },
      { name: "Netlify", level: "Advanced", icon: "SiNetlify" },
      { name: "Chrome DevTools", level: "Advanced", icon: "FaChrome" },
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Full Stack MERN Repository",
    subtitle: "Backend & Web Architecture",
    category: "MERN",
    description: "Comprehensive full-stack repository containing Node.js Express API controllers, MongoDB schemas, RESTful routing, authentication middleware, and React frontend integration.",
    tech: ["MongoDB", "Express.js", "React JS", "Node.js", "EJS"],
    github: "https://github.com/MalakMaisuriya/MERN",
    demo: "https://github.com/MalakMaisuriya/MERN",
    badge: "Full Stack MERN"
  },
  {
    id: 2,
    title: "React & Redux Ecosystem",
    subtitle: "State Management & UI",
    category: "React",
    description: "Production-grade React implementations covering Redux Toolkit state flow, custom hooks, dynamic routing, Firebase authentication, and API integrations.",
    tech: ["React JS", "Redux", "Firebase", "REST APIs", "Tailwind CSS"],
    github: "https://github.com/MalakMaisuriya/REACT",
    demo: "https://malakmaisuriya-pr.netlify.app/",
    badge: "React Ecosystem"
  },
  {
    id: 3,
    title: "HTML5 & CSS3 Web Projects",
    subtitle: "Responsive UI & Layouts",
    category: "HTML/CSS",
    description: "Curated collection of pixel-perfect responsive websites, modern CSS Grid/Flexbox layouts, cross-browser styling, keyframe animations, and UI templates.",
    tech: ["HTML5", "CSS3", "Bootstrap", "Flexbox", "Responsive Design"],
    github: "https://github.com/MalakMaisuriya/HTML-CSS",
    demo: "https://malakmaisuriya-pr.netlify.app/",
    badge: "HTML & CSS"
  },
  {
    id: 4,
    title: "JavaScript ES6+ & Mini Apps",
    subtitle: "Asynchronous & DOM Logic",
    category: "JavaScript",
    description: "Interactive web applications demonstrating ES6+ modules, Async/Await API calls, complex DOM operations, event handling, and algorithmic logic.",
    tech: ["JavaScript ES6+", "Async/Await", "DOM", "Fetch API", "Local Storage"],
    github: "https://github.com/MalakMaisuriya/JAVASCRIPT",
    demo: "https://malakmaisuriya-pr.netlify.app/",
    badge: "JavaScript Suite"
  },
  {
    id: 5,
    title: "Student Management System",
    subtitle: "Web Application",
    category: "React",
    description: "A responsive student management portal featuring a clean UI to view student records, manage course profiles, and manage attendance details efficiently.",
    tech: ["React JS", "JavaScript", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/MalakMaisuriya/REACT",
    demo: "https://malakmaisuriya-pr.netlify.app/",
    badge: "Featured App"
  },
  {
    id: 6,
    title: "C++ Data Structures & Algorithms",
    subtitle: "Algorithmic Problem Solving",
    category: "DSA",
    description: "Topic-wise C++ DSA implementation suite featuring vectors, stacks, queues, sorting algorithms, binary search, and OOP concepts practiced on HackerRank.",
    tech: ["C++", "DSA", "Vectors", "Algorithms", "OOP"],
    github: "https://github.com/MalakMaisuriya/DSA",
    demo: "https://github.com/MalakMaisuriya/DSA",
    badge: "DSA & Logic"
  }
];

export const processData = [
  {
    step: "01",
    title: "Requirement & Analysis",
    subtitle: "Understanding Scope",
    description: "Breaking down complex project requirements, wireframing user flows, and planning the optimal frontend and backend architecture.",
    icon: "FaLightbulb"
  },
  {
    step: "02",
    title: "Architecture & Design",
    subtitle: "Responsive UI & Structure",
    description: "Crafting modern, accessible user interfaces and structuring reusable React component hierarchies with tailored styling.",
    icon: "FaDraftingCompass"
  },
  {
    step: "03",
    title: "Clean Code Development",
    subtitle: "State & API Integration",
    description: "Implementing state management, writing modular code, and seamlessly connecting REST APIs while adhering to performance best practices.",
    icon: "FaLaptopCode"
  },
  {
    step: "04",
    title: "Optimization & Deployment",
    subtitle: "Testing & Hosting",
    description: "Conducting cross-device testing, optimizing build assets, and deploying production builds to platforms like Vercel and Netlify.",
    icon: "FaRocket"
  }
];

export const blogsData = [
  {
    id: 1,
    title: "Architecting Reusable Component Libraries in React",
    date: "AUG 2026",
    category: "React Architecture",
    readTime: "5 min read",
    summary: "Best practices for building modular, clean, and scalable React components that increase codebase maintainability.",
    link: "https://github.com/MalakMaisuriya/REACT"
  },
  {
    id: 2,
    title: "Transitioning to MERN: Building Robust RESTful APIs",
    date: "JUL 2026",
    category: "MERN Stack",
    readTime: "7 min read",
    summary: "Key principles for structuring Express routes, Node middleware, and MongoDB schemas for full-stack applications.",
    link: "https://github.com/MalakMaisuriya/MERN"
  },
  {
    id: 3,
    title: "Mastering C++ DSA: Thinking Algorithmic for Frontend Roles",
    date: "JUN 2026",
    category: "DSA & Problem Solving",
    readTime: "4 min read",
    summary: "How solving C++ data structure problems on HackerRank strengthens core analytical reasoning in software development.",
    link: "https://github.com/MalakMaisuriya/DSA"
  }
];

export const educationData = [
  {
    institution: "Vidhyadeep University",
    location: "Surat, Gujarat",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2022 – Present",
    status: "Currently in Final Year (Semester 5)",
    type: "Degree",
    highlight: true,
    details: "Focusing on Computer Science fundamentals, Software Engineering, Database Management Systems, and Web Application Development."
  },
  {
    institution: "Sungrace Vidhyalaya",
    location: "Surat, Gujarat",
    degree: "Higher Secondary Education (12th)",
    period: "2024",
    status: "Completed",
    type: "Schooling",
    highlight: false,
    details: "Higher secondary education completed with focus on computer fundamentals."
  },
  {
    institution: "Sungrace Vidhyalaya",
    location: "Surat, Gujarat",
    degree: "Secondary School Certificate (10th)",
    period: "2022",
    status: "Completed",
    type: "Schooling",
    highlight: false,
    details: "Secondary education completed with strong foundation in science and mathematics."
  }
];

export const certificationData = {
  title: "Full Stack Development Course",
  institute: "Red & White Multimedia Education",
  period: "Currently Pursuing",
  status: "Currently Pursuing",
  badge: "Professional Training",
  description: "Specialized training program in Full Stack Web Development covering modern MERN Stack technologies (MongoDB, Express.js, React.js, Node.js), REST APIs, database architecture, and UI design."
};

export const courseModulesData = [
  {
    id: 1,
    code: "BT-JQ_FSD",
    title: "Bootstrap & jQuery Full Stack",
    instructorBatch: "ANANT-BT-JQ_FSD",
    status: "Completed",
    category: "Frontend",
    icon: "FaBootstrap",
    description: "Responsive grid layouts using Bootstrap framework, cross-browser compatibility, DOM manipulation with jQuery, and UI component styling."
  },
  {
    id: 2,
    code: "PD/ENTR/FRLNC/INTTECH",
    title: "Personality Dev, Freelancing & Interview Tech",
    instructorBatch: "INTTECH-TRAINING",
    status: "Completed",
    category: "Career & Soft Skills",
    icon: "FaUserGraduate",
    description: "Technical interview preparation, resume building, freelance platform navigation, corporate communication, and soft skills training."
  },
  {
    id: 3,
    code: "GIM_C Language",
    title: "C Programming Fundamentals",
    instructorBatch: "ANANT-GIM_C",
    status: "Completed",
    category: "Programming",
    icon: "SiC",
    description: "Core logic building, variables, conditional statements, control loops, arrays, pointers, functions, memory management, and file handling in C."
  },
  {
    id: 4,
    code: "HTML-CSS",
    title: "HTML5 & CSS3 Web Design",
    instructorBatch: "ANANT-HTML-CSS",
    status: "Completed",
    category: "Frontend",
    icon: "FaHtml5",
    description: "Semantic HTML5 tags, CSS Flexbox and Grid layouts, CSS3 animations, media queries, mobile-first web page responsiveness, and W3C standards."
  },
  {
    id: 5,
    code: "GIM_Animate CC",
    title: "Adobe Animate CC Graphics",
    instructorBatch: "RAKESH-GIM_ANIMAT",
    status: "Completed",
    category: "Design & UI",
    icon: "SiAdobe",
    description: "2D vector graphics creation, timeline keyframe animations, interactive banner design, and digital web asset styling."
  },
  {
    id: 6,
    code: "GIM_Photoshop",
    title: "Adobe Photoshop Graphic Design",
    instructorBatch: "RAKESH-GIM_PHOTOS",
    status: "Completed",
    category: "Design & UI",
    icon: "SiAdobephotoshop",
    description: "UI/UX mockup design, image manipulation, web banner graphics, vector typography, layer compositing, and digital asset export."
  },
  {
    id: 7,
    code: "DSA With C & C++",
    title: "Data Structures & Algorithms (C & C++)",
    instructorBatch: "ANANT-DSA_WEB",
    status: "Completed",
    category: "DSA & Logic",
    icon: "SiCplusplus",
    description: "Arrays, vectors, stacks, queues, linked lists, recursion, searching and sorting algorithms, time & space complexity optimization in C++."
  },
  {
    id: 8,
    code: "JavaScript & ECMAScript_JQ",
    title: "JavaScript ES6+ & ECMAScript",
    instructorBatch: "ANANT-JAVASCRIPT",
    status: "Completed",
    category: "Frontend",
    icon: "FaJsSquare",
    description: "Modern ES6+ syntax, arrow functions, promises, async/await, fetch API, local storage, DOM events, and object-oriented programming."
  },
  {
    id: 9,
    code: "Node js, Express js, MongoDB_WEB",
    title: "Backend MERN: Node.js, Express & MongoDB",
    instructorBatch: "KEYUR-NODE JS",
    status: "In Progress / Active",
    category: "Backend MERN",
    icon: "FaNodeJs",
    description: "Server-side architecture, RESTful API development, Express routing, Mongoose ORM, MongoDB database modeling, middleware, and JWT authentication."
  },
  {
    id: 10,
    code: "English Communication",
    title: "Professional English Communication",
    instructorBatch: "DUSHYANT-ENGLISH CO",
    status: "Completed",
    category: "Career & Soft Skills",
    icon: "FaLanguage",
    description: "Corporate verbal & written communication, professional email writing, presentation skills, and active listening for tech environments."
  },
  {
    id: 11,
    code: "React JS_Web",
    title: "React JS Frontend Architecture",
    instructorBatch: "KEYUR-REACT JS_W",
    status: "Completed",
    category: "Frontend",
    icon: "FaReact",
    description: "Component hierarchy, props & state management, custom React hooks, Redux Toolkit, React Router DOM, API integration, and single-page apps."
  }
];

export const repoDeepDivesData = [
  {
    repoName: "MERN",
    url: "https://github.com/MalakMaisuriya/MERN",
    title: "Full Stack MERN Architecture Suite",
    language: "JavaScript / EJS / Node",
    stars: "Active",
    forks: "Public",
    description: "Production-oriented full-stack backend and frontend repository. Structures Express routing, EJS templating, MongoDB Schema validation, REST API endpoints, and middleware auth.",
    highlights: [
      "Modular Express route controllers & error handling middleware",
      "MongoDB database connection via Mongoose ORM",
      "Server-Side Rendering with EJS & RESTful API endpoints",
      "JWT Authentication & password hashing flow"
    ]
  },
  {
    repoName: "REACT",
    url: "https://github.com/MalakMaisuriya/REACT",
    title: "React & Redux State Management Hub",
    language: "React JS / Redux / CSS3",
    stars: "Active",
    forks: "Public",
    description: "Component library and state management repository featuring custom React hooks, Redux Toolkit slices, context providers, API fetching, and dynamic router navigation.",
    highlights: [
      "Custom React Hooks for async API calls & local storage state",
      "Global state management with Redux Toolkit slices",
      "Reusable component hierarchy with styled layouts",
      "Firebase authentication & cloud integration"
    ]
  },
  {
    repoName: "HTML-CSS",
    url: "https://github.com/MalakMaisuriya/HTML-CSS",
    title: "HTML5 & Modern CSS3 Design Templates",
    language: "HTML5 / CSS3 / Bootstrap",
    stars: "Active",
    forks: "Public",
    description: "Collection of high-performance responsive web layouts, custom CSS animations, CSS Grid & Flexbox templates, accessibility standards, and clean UI components.",
    highlights: [
      "Mobile-first responsive layouts with CSS Grid & Flexbox",
      "Custom CSS keyframe animations & glassmorphism utilities",
      "Semantic HTML5 structure following W3C standards",
      "Bootstrap 5 utility integration for quick UI prototyping"
    ]
  },
  {
    repoName: "JAVASCRIPT",
    url: "https://github.com/MalakMaisuriya/JAVASCRIPT",
    title: "JavaScript ES6+ & Asynchronous Web Apps",
    language: "JavaScript (ES6+)",
    stars: "Active",
    forks: "Public",
    description: "Curated JavaScript projects covering modern ES6+ syntax, Promises, Async/Await API handling, DOM event manipulation, OOP classes, and web applications.",
    highlights: [
      "Asynchronous JS handling using Async/Await & Fetch API",
      "Dynamic DOM tree manipulation & interactive event handlers",
      "Object-Oriented Programming (OOP) & ES6+ Modules",
      "Local storage data persistence & JSON serialization"
    ]
  },
  {
    repoName: "DSA",
    url: "https://github.com/MalakMaisuriya/DSA",
    title: "C++ Data Structures & Algorithmic Solutions",
    language: "C++ / Algorithms",
    stars: "Active",
    forks: "Public",
    description: "Comprehensive C++ problem-solving suite for HackerRank and technical coding assessments covering data structures, algorithmic time complexity, and optimization.",
    highlights: [
      "Vectors, Stacks, Queues, Linked Lists & Trees in C++",
      "Sorting & Searching algorithms (Binary Search, Quick Sort)",
      "Time & Space Complexity analysis (Big-O notation)",
      "HackerRank algorithmic challenge implementations"
    ]
  }
];

export const experienceData = [
  {
    role: "Full Stack Development Trainee",
    company: "Red & White Multimedia Education",
    period: "2024 – Present",
    type: "Professional Training",
    location: "Surat, Gujarat",
    description: "Enrolled in an intensive Full Stack MERN development program. Building full-stack web applications, mastering REST API design, MongoDB modeling, and React frontend architecture.",
    achievements: [
      "Engineered multiple REST APIs using Node.js & Express.js",
      "Designed responsive React JS client applications with custom hooks",
      "Built MongoDB database schemas with indexes & validation rules"
    ]
  },
  {
    role: "BCA Computer Science Student & Developer",
    company: "Vidhyadeep University",
    period: "2022 – Present (Sem 5)",
    type: "Academic & Projects",
    location: "Surat, Gujarat",
    description: "Pursuing Bachelor of Computer Applications (BCA Final Year). Leading peer academic projects, studying Database Management Systems, Software Engineering, and C++ OOP.",
    achievements: [
      "Created Student Management System UI for academic showcase",
      "Consistently scored top marks in Web Technologies and C++ programming",
      "Organized student coding peer groups for DSA problem solving"
    ]
  },
  {
    role: "Open Source & Practice Contributor",
    company: "GitHub & HackerRank",
    period: "2023 – Present",
    type: "Self-Driven",
    location: "Online",
    description: "Actively developing and maintaining 15+ public GitHub repositories covering Full Stack MERN, React JS, JavaScript ES6+, HTML/CSS, and C++ algorithms.",
    achievements: [
      "Maintained 15+ public GitHub repositories with clean documentation",
      "Regularly practicing C++ DSA algorithmic challenges on HackerRank",
      "Deployed live web demos on Netlify and Vercel"
    ]
  }
];

export const codingProfilesData = [
  {
    platform: "GitHub",
    handle: "@MalakMaisuriya",
    stat: "15+ Repositories",
    substat: "MERN, React, JS, HTML/CSS, DSA",
    link: "https://github.com/MalakMaisuriya",
    color: "from-slate-800 to-slate-900 border-slate-700",
    badge: "Active Repos"
  },
  {
    platform: "HackerRank",
    handle: "MalakMaisuriya",
    stat: "C++ & Problem Solving",
    substat: "Algorithmic Challenges & Logic",
    link: "https://www.hackerrank.com/profile/MalakMaisuriya",
    color: "from-emerald-950 to-slate-900 border-emerald-500/30",
    badge: "C++ Badge"
  },
  {
    platform: "LinkedIn",
    handle: "Malak Maisuriya",
    stat: "Aspiring Developer",
    substat: "Surat, Gujarat, India",
    link: "https://in.linkedin.com/in/malak-maisuriya",
    color: "from-blue-950 to-slate-900 border-blue-500/30",
    badge: "Professional"
  },
  {
    platform: "Netlify",
    handle: "malakmaisuriya-pr",
    stat: "Live Web Demos",
    substat: "Deployed Production Demos",
    link: "https://malakmaisuriya-pr.netlify.app/",
    color: "from-teal-950 to-slate-900 border-teal-500/30",
    badge: "Hosted Projects"
  }
];

export const faqData = [
  {
    question: "What primary technologies do you use for full-stack web development?",
    answer: "My core tech stack revolves around the MERN ecosystem: MongoDB for database storage, Express.js and Node.js for backend APIs, and React JS with modern CSS/Tailwind for responsive frontends. I also write core logic in JavaScript (ES6+) and C++."
  },
  {
    question: "Are you available for Full-Time Junior Full Stack or React Developer roles?",
    answer: "Yes! As a BCA Final Year student (Sem 5) completing my Full Stack Development training at Red & White Multimedia, I am actively seeking Junior Full Stack Developer, Frontend React Developer, or Web Developer entry-level roles and internships."
  },
  {
    question: "Can I inspect your project source code on GitHub?",
    answer: "Absolutely. All my key repositories (MERN, REACT, HTML-CSS, JAVASCRIPT, DSA) are completely open and public on my GitHub profile: https://github.com/MalakMaisuriya."
  },
  {
    question: "How do you ensure your web applications are responsive across devices?",
    answer: "I adopt a mobile-first design strategy, writing structured HTML5 with modern CSS3 (Flexbox and Grid) and utility-first Tailwind CSS. All components undergo testing across phone, tablet, and desktop viewports."
  },
  {
    question: "What is your approach to Data Structures and Algorithmic problem solving?",
    answer: "I actively solve algorithmic logic problems in C++ on HackerRank. Practicing C++ vectors, pointers, stacks, queues, and sorting algorithms gives me deep insight into time/space complexity optimization."
  }
];

export const testimonialsData = [
  {
    quote: "Malak is a remarkably dedicated learner who consistently writes clean, structured code and pays meticulous attention to both backend API architecture and frontend UI responsiveness.",
    author: "Technical Instructor",
    title: "Red & White Multimedia Education"
  },
  {
    quote: "Working alongside Malak on computer science projects was a pleasure. His grasp of C++ data structures and willingness to help peers solve complex logic issues is outstanding.",
    author: "BCA Batchmate",
    title: "Vidhyadeep University, Surat"
  }
];

