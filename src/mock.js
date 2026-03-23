export const portfolioData = {
  personal: {
    name: "Alok Yadav",
    title: "Software Development Engineer",
    tagline: "Building Scalable Fintech Platforms & High-Availability Banking APIs",
    email: "ykalok0708@gmail.com",
    phone: "+91-8434776314",
    location: "Hyderabad, India",
    linkedin: "https://linkedin.com/in/ykalok123",
    github: "https://github.com/ykalok",
    resumeUrl: "/resume.pdf",
    bio: "Software Development Engineer with 5+ years of experience building scalable fintech platforms and high availability banking APIs. Specialized in backend development using Java, Spring Boot, Kafka, Redis, and Microservices. Successfully delivered high-performance solutions for digital payments including RuPay, AEPS, UPI, BBPS, and Recharge services. Strong expertise in API security, distributed systems, and performance optimization in high availability environments.",
    yearsOfExperience: 5,
    projectsCompleted: 15,
    companiesWorked: 2
  },

  experience: [
    {
      id: 1,
      company: "Airtel Payments Bank",
      position: "Software Development Engineer",
      location: "Hyderabad, Telangana - Remote",
      startDate: "Sep 2022",
      endDate: "Present",
      current: true,
      responsibilities: [
        "Redesigned critical transaction modules for AEPS, BBPS, and Recharge services, optimizing validation and failure handling and improving transaction success rate by ~5%",
        "Architected centralized logging pipeline using ELK and Kafka enabling real-time transaction tracing across microservices and reducing incident debugging time by ~10%",
        "Developed secure partner APIs using RSA/AES encryption, HMAC validation, and Kong gateway policies ensuring secure financial transaction processing",
        "Designed a fault-tolerant reconciliation engine using Chain of Responsibility pattern to auto-resolve incomplete transactions improving settlement success by ~10%",
        "Optimized high frequency APIs using Redis/Aerospike caching reducing database load and improving response latency",
        "Integrated HashiCorp Vault for secure secret management eliminating hard-coded credentials across microservices"
      ]
    },
    {
      id: 2,
      company: "National Payments Corporation of India",
      position: "Software Development Engineer",
      location: "Hyderabad, Telangana",
      startDate: "Nov 2020",
      endDate: "Aug 2022",
      current: false,
      responsibilities: [
        "Built and optimized Java Spring Boot microservices supporting high volume financial transactions across RuPay, NFS SwitchNxt, and UPI platforms",
        "Implemented asynchronous event-driven processing using Kafka and Redis to improve system scalability and resilience",
        "Developed a bank onboarding portal using AngularJS, Spring Boot, Hibernate and MariaDB to manage approval workflows for new banks entering the payments ecosystem",
        "Designed a high throughput settlement processing service responsible for transmitting financial transaction records to RBI systems",
        "Developed reusable currency conversion utilities across payment services improving modularity and reducing duplicated logic"
      ]
    }
  ],

  education: [
    {
      id: 1,
      institution: "National Institute of Technology, Patna",
      degree: "B.Tech in Computer Science and Engineering",
      location: "Patna, India",
      startDate: "Aug 2016",
      endDate: "June 2020"
    }
  ],

  skills: {
    languages: [
      { name: "Java", level: 95 },
      { name: "Python", level: 75 }
    ],
    frameworks: [
      { name: "Spring Boot", level: 95 },
      { name: "Spring WebFlux", level: 85 }
    ],
    databases: [
      { name: "Oracle", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "Redis", level: 85 },
      { name: "Aerospike", level: 80 }
    ],
    messaging: [
      { name: "Apache Kafka", level: 90 },
      { name: "Redis", level: 85 }
    ],
    infrastructure: [
      { name: "Kong API Gateway", level: 85 },
      { name: "Nginx", level: 75 },
      { name: "HashiCorp Vault", level: 80 }
    ],
    architecture: [
      { name: "Microservices", level: 95 },
      { name: "RESTful API", level: 95 },
      { name: "Event-Driven Systems", level: 90 },
      { name: "Distributed Systems", level: 85 }
    ],
    security: [
      { name: "OAuth2", level: 85 },
      { name: "JWT", level: 90 },
      { name: "AES/RSA Encryption", level: 85 }
    ],
    monitoring: [
      { name: "ELK Stack", level: 85 },
      { name: "Prometheus", level: 75 },
      { name: "Grafana", level: 75 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Bharat Bill Payment System (BBPS)",
      description: "Built Backend Microservices for bill validation and payment processing workflows supporting recurring payments across multiple biller categories. Implemented event-driven transaction processing using Kafka to ensure reliable asynchronous updates and reconciliation.",
      technologies: ["Java", "Spring Boot", "Kafka", "Redis", "MySQL"],
      highlights: [
        "Event-driven transaction processing",
        "Idempotent APIs for retry scenarios",
        "Redis caching for biller metadata",
        "Recurring payment support"
      ]
    },
    {
      id: 2,
      title: "Aadhaar Enabled Payment System (AEPS)",
      description: "Developed transaction services supporting cash withdrawal, balance inquiry, and mini-statement operations using Aadhaar authentication. Built high-availability APIs handling large volumes of financial transactions.",
      technologies: ["Java", "Spring Boot", "Kafka", "Redis", "MySQL"],
      highlights: [
        "Secure Aadhaar authentication",
        "High-availability transaction APIs",
        "Resilient workflows with retry mechanisms",
        "Bank partner routing logic"
      ]
    },
    {
      id: 3,
      title: "TDS Exemption Certificate Features",
      description: "Designed backend APIs for verification and management of TDS exemption certificates for banking workflows. Built service components following SOLID principles and modular architecture for maintainability.",
      technologies: ["Java", "Spring Boot"],
      highlights: [
        "Certificate verification APIs",
        "Secure financial data processing",
        "SOLID principles implementation",
        "Modular architecture"
      ]
    },
    {
      id: 4,
      title: "Consent-Driven Cash Bill Payment Validation",
      description: "Implemented a consent-based cash bill payment workflow by introducing mandatory Remitter Name validation through a server-side Validation API with session-bound validation logs. Integrated OTP-based customer consent.",
      technologies: ["Java", "Spring Boot"],
      highlights: [
        "OTP-based consent mechanism",
        "Session-bound validation",
        "Mandatory remitter validation",
        "Backend security controls"
      ]
    }
  ]
};
