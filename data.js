/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------------------
 * All content, projects, skills, education, experience, and contact details
 * are managed here. You can add or modify projects and skills easily
 * without editing HTML or CSS.
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  personal: {
    fullName: "Nireeksha Prakash Kulkarni",
    preferredName: "Nireeksha",
    title: "B.Tech Student | AI & Software Developer",
    badge: "Open to Internships & Opportunities",
    shortBio: "Motivated B.Tech Computer Science & Data Science student at GM University passionate about Agentic AI, full-stack software development, and building robust, real-world intelligent systems that solve authentic challenges.",
    location: "Karnataka, India",
    email: "nireekshakulkarni24@gmail.com",
    phone: "+91 7975930113",
    linkedin: "https://linkedin.com/in/nireeksha-k-626661383",
    github: "https://github.com/nireeksha-k", // Editable placeholder
    profilePhoto: "assets/images/profile.jpg",
    profilePhotoAlt: "Nireeksha Prakash Kulkarni — Software and AI Developer",
    resumePdf: "assets/docs/resume.pdf",
    currentStatus: "3rd Semester • B.Tech CS & DS",
    languages: ["English", "Kannada", "Hindi"]
  },

  about: {
    heading: "Bridging Artificial Intelligence & Practical Engineering",
    subheading: "A dedicated computer science student focused on creating dependable, user-centered software and autonomous AI workflows.",
    paragraphs: [
      "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science & Data Science at GM University, Davangere. My technical journey is driven by an intense curiosity for Artificial Intelligence, Agentic AI, and scalable software systems.",
      "Rather than focusing solely on theoretical knowledge, I actively participate in hackathons and technical events where I build real-world, high-impact prototypes. From creating multi-agent autonomous frameworks for agriculture in GlowFarm to engineering multilingual artisan commerce in KalaSetu (for Smart India Hackathon), I thrive at the intersection of AI innovation and human-centered design.",
      "I am continuously sharpening my competencies in core Data Structures & Algorithms, Object-Oriented Programming, and database management while exploring production-ready AI workflows. I am seeking internship opportunities where I can contribute to meaningful engineering challenges."
    ],
    highlights: [
      {
        icon: "code",
        title: "Projects Built",
        description: "5+ Real-world solutions spanning Agentic AI, Blockchain, and Core Algorithms."
      },
      {
        icon: "cpu",
        title: "Technologies",
        description: "Python, Java, JavaScript, Agentic AI architectures, Flask & Modern Web Stacks."
      },
      {
        icon: "award",
        title: "Hackathons",
        description: "Smart India Hackathon participant & active college tech challenge innovator."
      },
      {
        icon: "trending-up",
        title: "Learning & Growth",
        description: "Secured 7.65 CGPA in 1st Year, continuously advancing in modern AI engineering."
      }
    ],
    quickFacts: [
      { label: "Institution", value: "GM University, Davangere" },
      { label: "Degree", value: "B.Tech Computer Science & Data Science" },
      { label: "Current Standing", value: "3rd Semester (CGPA: 7.65)" },
      { label: "Primary Focus", value: "Agentic AI & Full-Stack Development" },
      { label: "Availability", value: "Open for Internships & Projects" },
      { label: "Location", value: "Karnataka, India" }
    ]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "programming", label: "Programming" },
      { id: "web", label: "Web Development" },
      { id: "ai", label: "AI & Data Science" },
      { id: "tools", label: "Tools & Platforms" }
    ],
    items: [
      // Programming
      { name: "Python", category: "programming", level: "Proficient", icon: "python", tag: "Core Language" },
      { name: "Java", category: "programming", level: "Intermediate", icon: "coffee", tag: "Core Language" },
      { name: "JavaScript", category: "programming", level: "Intermediate", icon: "file-code", tag: "Frontend & Fullstack" },
      { name: "C Programming", category: "programming", level: "Intermediate", icon: "terminal", tag: "Systems & DSA" },
      { name: "SQL", category: "programming", level: "Intermediate", icon: "database", tag: "Relational Queries" },

      // Web Development
      { name: "HTML5", category: "web", level: "Proficient", icon: "layout", tag: "Semantic Markup" },
      { name: "CSS3", category: "web", level: "Proficient", icon: "feather", tag: "Modern Styling" },
      { name: "Responsive UI", category: "web", level: "Proficient", icon: "smartphone", tag: "Mobile & Desktop" },
      { name: "Flask", category: "web", level: "Intermediate", icon: "server", tag: "Python Backend" },
      { name: "RESTful APIs", category: "web", level: "Intermediate", icon: "shuffle", tag: "API Design" },

      // AI & Data
      { name: "Artificial Intelligence", category: "ai", level: "Core Interest", icon: "cpu", tag: "Concepts & Logic" },
      { name: "Agentic AI Systems", category: "ai", level: "Active Focus", icon: "bot", tag: "Autonomous Agents" },
      { name: "AI-Powered Applications", category: "ai", level: "Intermediate", icon: "zap", tag: "Applied Workflows" },
      { name: "Dataset Integration", category: "ai", level: "Intermediate", icon: "layers", tag: "Data Pipelines" },
      { name: "Machine Learning Basics", category: "ai", level: "Foundational", icon: "activity", tag: "Algorithms" },
      { name: "Data Structures & Algorithms", category: "ai", level: "Intermediate", icon: "git-commit", tag: "Problem Solving" },
      { name: "Database Management (DBMS)", category: "ai", level: "Intermediate", icon: "hard-drive", tag: "Data Storage" },

      // Tools
      { name: "Git", category: "tools", level: "Proficient", icon: "git-branch", tag: "Version Control" },
      { name: "GitHub", category: "tools", level: "Proficient", icon: "github", tag: "Collaboration & CI" },
      { name: "VS Code", category: "tools", level: "Proficient", icon: "edit", tag: "Primary Editor" },
      { name: "Antigravity", category: "tools", level: "Proficient", icon: "crosshair", tag: "Agentic Development" },
      { name: "MongoDB", category: "tools", level: "Intermediate", icon: "database", tag: "NoSQL Database" },
      { name: "Command Line / Terminal", category: "tools", level: "Intermediate", icon: "terminal", tag: "CLI Automation" }
    ]
  },

  projects: [
    {
      id: "glowfarm",
      title: "GlowFarm (GramaFlow)",
      badge: "Hackathon Project",
      category: "agentic-ai",
      categoryLabel: "Agentic AI | Agriculture",
      shortDescription: "An Agentic AI-focused solution designed around real-world agricultural challenges, delivering intelligent assistance and a human-centered workflow.",
      image: "assets/images/project-glowfarm.svg",
      highlights: [
        "Multi-agent orchestrator with deterministic state machine",
        "Kannada & English voice/text speech ingestion",
        "Automated crop insurance & government scheme matching",
        "Human-in-the-loop verification gate ensuring trusted submissions"
      ],
      technologies: ["Python", "Agentic AI", "Speech UI", "Dataset Integration", "REST APIs"],
      githubUrl: "https://github.com/nireeksha-k/glowfarm", // Editable placeholder
      liveUrl: "#", // Demo available locally
      details: {
        problem: "Rural farmers face significant digital literacy barriers, complex bureaucratic forms, long queues, and misinformation when attempting to access agricultural schemes and insurance benefits.",
        solution: "Engineered an orchestrated multi-agent AI architecture where specialized agents handle language detection, scheme discovery, document verification, and form execution, backed by an auditable human confirmation checkpoint.",
        architecture: "Comprises an Orchestrator Agent, Intent & Language Agent (supporting Kannada and English), Scheme Discovery Agent, and a Human Confirmation Gate with SQLite audit logging.",
        impact: "Provides farmers with transparent, step-by-step assistance that drastically reduces application friction without halluncinated advice."
      }
    },
    {
      id: "kalasetu",
      title: "KalaSetu (कलासेतु)",
      badge: "Smart India Hackathon",
      category: "ai",
      categoryLabel: "AI | Marketplace | Multilingual",
      shortDescription: "An AI-powered multilingual marketplace concept connecting conscious buyers and traditional artisans, with intelligent cataloging and fair-wage benchmarking.",
      image: "assets/images/project-kalasetu.svg",
      highlights: [
        "Real-time multilingual support across 5 regional languages",
        "AI product analysis and automated catalog generation",
        "Fair living wage benchmark calculated at ₹120/hour",
        "Safe payment simulation and provenance craft journey tracking"
      ],
      technologies: ["Node.js", "Express", "AI Vision", "Multilingual NLP", "Responsive Web"],
      githubUrl: "https://github.com/nireeksha-k/kalasetu", // Editable placeholder
      liveUrl: "#",
      details: {
        problem: "Traditional regional artisans struggle to market their crafts digitally due to language barriers, pricing exploitation by middlemen, and complex cataloging requirements.",
        solution: "Developed an AI-driven platform that automatically generates rich product catalogs from simple artisan photos, verifies authentic craftsmanship, and enforces a fair living wage index.",
        architecture: "Built with Node.js/Express backend, 72-product preloaded catalog across 12 categories, unified React Context i18n, Scrypt password cryptography, and a full-screen checkout payment simulator.",
        impact: "Empowers 5 regional master artisan clusters in Karnataka with voice-assisted commerce and transparent consumer trust."
      }
    },
    {
      id: "blockchain-property",
      title: "National Blockchain Property Register (LandChain)",
      badge: "Web3 & Systems",
      category: "blockchain",
      categoryLabel: "Blockchain | Web Development",
      shortDescription: "A blockchain-based property management platform exploring transparent, immutable digital property records, deed verification, and GIS mapping.",
      image: "assets/images/project-blockchain.svg",
      highlights: [
        "Cryptographic block chaining preventing deed tampering",
        "Interactive Leaflet GIS spatial map boundary visualization",
        "Role-based user and administrative verification workflow",
        "Real-time deed transfer logging with SHA-256 hash audits"
      ],
      technologies: ["Python", "Flask", "MongoDB", "Blockchain Concepts", "Leaflet.js", "HTML5/CSS3"],
      githubUrl: "https://github.com/nireeksha-k/blockchain-property-system", // Editable placeholder
      liveUrl: "#",
      details: {
        problem: "Conventional land registries are susceptible to paper fraud, unauthorized record alterations, double-selling of parcels, and non-transparent title transfers.",
        solution: "Architected a decentralized property ledger where every land parcel ownership record is cryptographically linked to previous blocks, ensuring tamper resistance and auditability.",
        architecture: "Python Flask backend handling block validation, MongoDB persistent state storage, SHA-256 cryptographic hashing algorithms, and Leaflet.js rendering geographic land plots.",
        impact: "Guarantees undisputed title history and instant spatial verification for both property buyers and registry officials."
      }
    },
    {
      id: "log-analyzer",
      title: "Python-Based Smart Log & Activity Analyzer",
      badge: "Systems & Analytics",
      category: "data",
      categoryLabel: "Data Analytics | Systems & Automation",
      shortDescription: "A high-performance Python application to parse, filter, and analyze large-scale system logs for security audits, anomaly detection, and metrics visualization.",
      image: "assets/images/project-loganalyzer.svg",
      highlights: [
        "Automated parsing of multi-thousand line system logs",
        "Heuristic detection of brute-force and security warning spikes",
        "Clean statistical summary and metrics generation",
        "Robust file handling with zero data corruption"
      ],
      technologies: ["Python", "File I/O", "Regex Parsing", "Data Visualization", "CLI Tooling"],
      githubUrl: "https://github.com/nireeksha-k/smart-log-analyzer", // Editable placeholder
      liveUrl: "#",
      details: {
        problem: "Manual inspection of high-volume server and system logs is tedious, error-prone, and slow during critical operational alerts or security reviews.",
        solution: "Created an automated CLI and analytics engine that parses raw logs via regex, flags anomalous status codes, and outputs visual summary distributions.",
        architecture: "Leverages Python streaming file I/O, custom parsing logic, frequency aggregation dictionaries, and automated report rendering.",
        impact: "Accelerated log review turnaround time by over 90% while surfacing actionable security events."
      }
    },
    {
      id: "railway-queue",
      title: "Railway Reservation System Using Queue",
      badge: "Data Structures & Algorithms",
      category: "data",
      categoryLabel: "Core Computer Science | Algorithms",
      shortDescription: "An algorithmic reservation and waitlist management system applying FIFO Queue data structures for ticket booking and dynamic cancellations.",
      image: "assets/images/project-railway.svg",
      highlights: [
        "Rigorous FIFO (First-In, First-Out) queue discipline",
        "Dynamic promotion from RAC and Waitlist upon cancellation",
        "O(1) optimal enqueue and dequeue operation timings",
        "Robust edge-case handling for booking capacities"
      ],
      technologies: ["Data Structures", "Algorithms", "C / Python", "Queue Management"],
      githubUrl: "https://github.com/nireeksha-k/railway-reservation-queue", // Editable placeholder
      liveUrl: "#",
      details: {
        problem: "Simulating high-demand seat allocation and waitlist reordering requires deterministic, race-free queue mechanisms that preserve customer order.",
        solution: "Implemented a complete ticket reservation simulation modeling confirmed berths, RAC seats, and dynamic waitlist cascades through linked-list and circular queue structures.",
        architecture: "Employs custom FIFO Queue primitives, dynamic status transition pointers, and interactive terminal dispatching.",
        impact: "Demonstrated deep mastery of foundational data structures and algorithm time/space complexity optimization."
      }
    }
  ],

  experience: [
    {
      period: "2024 — Present",
      title: "Hackathons & Innovation Challenges",
      organization: "Smart India Hackathon & Regional Hackathons",
      type: "Hackathon",
      description: "Active participant in national and college-level hackathons. Led prototype development for high-stakes problem statements including KalaSetu (multilingual artisan marketplace) and GlowFarm (agentic AI for rural governance and agriculture).",
      skillsGained: ["Rapid Prototyping", "Agentic AI Architectures", "Collaborative Problem Solving", "System Design"]
    },
    {
      period: "2024 — Present",
      title: "Active Participant — Technical Activities & Projects",
      organization: "GM University, Davangere",
      type: "Campus",
      description: "Engaged in departmental technical clubs, coding contests, and hands-on workshops centered on Python development, Object-Oriented Programming, and database modeling.",
      skillsGained: ["Technical Collaboration", "Code Reviews", "Presentation Skills", "Full-Stack Development"]
    },
    {
      period: "2024 — 2025",
      title: "Academic Milestone: 7.65 CGPA in 1st Year",
      organization: "Department of Computer Science & Data Science",
      type: "Academic",
      description: "Maintained a strong academic record with 7.65 CGPA across foundational engineering mathematics, programming concepts, and computer science principles.",
      skillsGained: ["Academic Discipline", "Algorithmic Foundations", "Engineering Mathematics"]
    },
    {
      period: "2024 — Present",
      title: "Independent Technical Courses & Self-Directed Learning",
      organization: "Apna College, Online Curricula & VTU Framework",
      type: "Learning",
      description: "Completed intensive learning in Python Programming, Data Structures & Algorithms, Database Management Systems (DBMS), and Computer Networks to build practical industry-ready capabilities.",
      skillsGained: ["Python Mastery", "Data Structures", "Relational Database Design", "Networking Protocols"]
    },
    {
      period: "Upcoming",
      title: "Software & AI Engineering Internships",
      organization: "Open to High-Impact Opportunities",
      type: "Upcoming",
      description: "Actively seeking summer or semester internships in software engineering, AI/ML development, or full-stack web engineering.",
      skillsGained: ["Production Deployment", "Agile Engineering", "Scalable Systems"]
    }
  ],

  education: [
    {
      institution: "GM University, Davangere",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Data Science",
      duration: "2024 — Present (Expected 2028 / 2030)",
      status: "Currently in 3rd Semester",
      cgpa: "7.65 CGPA (Secured in 1st Year)",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOPS)",
        "Database Management Systems (DBMS)",
        "Computer Networks",
        "Foundations of Artificial Intelligence",
        "Operating Systems Principles",
        "Discrete Mathematics"
      ],
      highlights: [
        "Active member of departmental coding and technical forums",
        "Strong focus on combining core CS theory with modern Agentic AI tools"
      ]
    }
  ],

  contact: {
    heading: "Let's Build Something Together",
    subheading: "I am actively seeking internship opportunities, hackathon collaborations, and exciting development projects. Have an idea or position? Reach out directly!",
    email: "nireekshakulkarni24@gmail.com",
    linkedin: "https://linkedin.com/in/nireeksha-k-626661383",
    linkedinHandle: "in/nireeksha-k-626661383",
    github: "https://github.com/nireeksha-k",
    githubHandle: "github.com/nireeksha-k",
    location: "Nargunda, Dist: Gadag, Karnataka - 582207",
    statusBadge: "Available for Internships (2026)"
  }
};

// Export for module systems or attach to window for static standalone browser usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
} else if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
