export const resumeData = {
  basics: {
    name: "Ankur",
    label: "Full-Stack Developer & AI Enthusiast",
    email: "ankurthemewtwo@gmail.com",
    phone: "+91 9131898526",
    location: "Phagwara, Punjab",
    links: {
      linkedin: "https://www.linkedin.com/in/ankur-kumar-833026284/",
      github: "https://github.com/AnkurKumar160305",
      leetcode: "https://leetcode.com/u/qDCkfvJavE/",
    },
    summary:
      "Full-stack developer specializing in AI-driven platforms and ML-powered recommendation systems with a strong foundation in Data Structures and Algorithms.",
  },
  skills: {
    languages: ["C++", "JavaScript", "C", "Java", "Python", "HTML", "CSS"],
    developerTools: ["Git", "GitHub", "VS Code", "Figma"],
    frameworks: [
      "Tailwind CSS",
      "Bootstrap",
      "Node.js",
      "React.js",
      "Express.js",
    ],
    databaseServices: ["MySQL", "MongoDB", "Postman"],
    relativeCoursework: [
      "Data Structure and Algorithms",
      "Object Oriented Programming",
      "DBMS",
      "CN",
      "OS",
    ],
    softSkills: [
      "Problem-Solving",
      "Team Player",
      "Project Management",
      "Adaptability",
    ],
  },
  projects: [
    {
      title: "Arovia Healthcare, Anytime, Anywhere",
      date: "Nov' 25",
      links: { live: "Live", github: "GitHub" },
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Gemini API",
        "Google Maps API",
        "Twilio",
        "JavaScript",
      ],
      bullets: [
        "Developed Arovia, an AI-powered healthcare platform featuring a multilingual medical chatbot, GPS based doctor locator, and one-tap SOS emergency assistance for quick access to medical help.",
        "Enabled AI-driven health guidance and medicine recommendations, improving healthcare accessibility and helping users identify affordable treatment options.",
        "Designed an interactive full-stack system integrating conversational AI, location-based services, and emergency communication, delivering a seamless healthcare experience for both rural and urban users.",
      ],
    },
    {
      title: "Agentic Bug Hunter - AI Bug Detection System",
      date: "Aug' 25",
      links: { live: "Live", github: "GitHub" },
      techStack: [
        "Python",
        "LLM APIs",
        "Agentic Workflow",
        "Data Processing",
        "CSV",
        "Prompt Engineering",
      ],
      bullets: [
        "Developed an agentic AI system to automatically detect bugs in C++ code snippets and generate clear explanations using contextual documentation and bug reference manuals.",
        "Implemented a modular multi-agent workflow for code parsing, bug detection, and explanation generation, enabling line-level precision in identifying faulty code segments.",
        "Designed the system to retrieve contextual information from external knowledge sources (MCP server / bug manuals) to improve explanation accuracy and debugging insights.",
      ],
    },
    {
      title: "SkillIndia - AI Job & Course Recommendation System",
      date: "Jul' 25",
      links: { live: "Live", github: "GitHub" },
      techStack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "NLTK",
        "TF-IDF",
        "Cosine Similarity",
        "Flask/FastAPI",
        "React.js",
        "Bootstrap",
        "Chart.js",
      ],
      bullets: [
        "Developed an end-to-end ML-powered career recommendation platform that maps user skills → job roles → relevant online courses using TF-IDF embeddings and cosine similarity ranking.",
        "Integrated and processed Naukri Job Dataset and Udemy Course Dataset to build a unified system that recommends job roles and identifies skill gaps with relevant course suggestions.",
        "Trained and evaluated KNN, SVM, and Logistic Regression models using accuracy, precision, recall, and F1-score, and implemented automatic best-model selection for improved classification performance.",
      ],
    },
  ],
  certificates: [
    {
      name: "Gen Z Innovations Hackathon - Zinnovatio 3.0",
      link: "Certificate",
      date: "Oct' 25",
    },
    {
      name: "Data Structures and Algorithm - IamneoPlatform",
      link: "Certificate",
      date: "Aug' 25",
    },
    {
      name: "MERN Stack with GenAI - W3Grads",
      link: "Certificate",
      date: "Jul' 25",
    },
  ],
  achievements: [
    {
      text: "Selected for Internal Smart India Hackathon, competing among 10,000+ participants nationwide.",
      metric: "10,000+",
    },
    {
      text: "Secured 7th Rank in Hackmanthan, competing among 4,000+ participants.",
      metric: "Top 7",
    },
    {
      text: "Selected for National-Level Taekwondo Championship, representing school in extracurricular competitions.",
      metric: "National",
    },
    {
      text: "Solved 250+ DSA problems across LeetCode, GeeksforGeeks, and CodeStudio(Code360).",
      metric: "250+",
    },
  ],
  education: [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology",
      major: "Computer Science and Engineering",
      date: "Aug' 23 – Present",
      score: "CGPA: 8.61",
    },
    {
      institution: "Kendriya Vidyalaya 1STC Jabalpur School",
      location: "Jabalpur, Madhya Pradesh",
      degree: "Intermediate",
      date: "Apr' 21 – Mar' 22",
      score: "PCM: Percentage: 78%",
    },
    {
      institution: "Kendriya Vidyalaya 1STC Jabalpur School",
      location: "Jabalpur, Madhya Pradesh",
      degree: "Matriculation",
      date: "Apr' 19 – Mar' 20",
      score: "Percentage: 84%",
    },
  ],
} as const;

export type ResumeData = typeof resumeData;
