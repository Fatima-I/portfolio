// ============================================================
// YOUR PORTFOLIO DATA — edit everything here, nothing else!
// ============================================================

export const personal = {
  name: "Fatima Ikram",
  initials: "FI",
  taglines: [
    "I build AI systems that learn.",
    "NLP engineer in the making.",
    "Turning data into decisions.",
    "Final year CS + AI student.",
  ],
  bio: "I'm a final-year Computer Science student specializing in AI, based in Lahore. I build machine learning systems, NLP pipelines, and full-stack applications — from mushroom classifiers to fake review detectors. I care about building things that actually work.",
  location: "Lahore, Pakistan",
  email: "fatima@example.com",         // ← update this
  github: "https://github.com/Fatima-I",
  linkedin: "https://linkedin.com/in/fatimaikram", // ← update this
  resume: "/resume.pdf",               // drop your resume in /public/resume.pdf
}

export const projects = [
  {
    id: 1,
    title: "Mushroom Classifier",
    emoji: "🍄",
    description: "ML web app that predicts whether a mushroom is edible or poisonous based on 12 physical features. SVC model achieving 85% accuracy, served via Flask on Railway.",
    tags: ["Python", "Flask", "SVC", "scikit-learn", "Railway"],
    github: "https://github.com/Fatima-I/mushroom-classifier",
    live: "https://mushroom-classifier.up.railway.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Fake Review Spotter",
    emoji: "🔍",
    description: "NLP classifier that detects fake product reviews. Built for a semester NLP project — trained, evaluated, and deployed as an interactive Streamlit app.",
    tags: ["Python", "NLP", "Streamlit", "Machine Learning"],
    github: "https://github.com/Fatima-I/NLP-semester-project",
    live: "https://fake-review-spotter.streamlit.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Sentiment Analysis",
    emoji: "🎭",
    description: "IMDB movie review sentiment classifier. Takes a review as input and predicts positive or negative sentiment using an NLP model deployed on PythonAnywhere.",
    tags: ["Python", "NLP", "Flask", "PythonAnywhere"],
    github: "",
    live: "https://fatimaikram.pythonanywhere.com/",
    featured: true,
  },
  {
    id: 4,
    title: "Gardening Shop Dashboard",
    emoji: "🌱",
    description: "Desktop database management system for a small gardening shop. Full CRUD — manage products, track price history, generate receipts, view sales statistics.",
    tags: ["Python", "PyQt5", "SQL Server", "Desktop App"],
    github: "https://github.com/Fatima-I/Gardening-Shop",
    live: "",
    featured: false,
  },
  {
    id: 5,
    title: "Course Platform",
    emoji: "📚",
    description: "Full-stack course website built for a real client. Handles course listings, student enrollment and content delivery.",
    tags: ["Web", "Full Stack", "Client Project"],
    github: "https://github.com/fa046/course-platform",
    live: "",
    featured: false,
  },
  {
    id: 6,
    title: "ServEase",
    emoji: "🔗",
    description: "A connector mobile app that links service providers with customers. Built to simplify finding and booking local services.",
    tags: ["Mobile App", "React Native"],
    github: "https://github.com/Fatima-I/ServEase-AConnectorApp",
    live: "",
    featured: false,
  },
]

export const skills = [
  {
    category: "AI & Machine Learning",
    icon: "brain",
    items: ["scikit-learn", "NLP", "SVM", "Neural Networks", "pandas", "numpy", "Jupyter"],
  },
  {
    category: "Languages",
    icon: "code",
    items: ["Python", "JavaScript", "SQL", "C++"],
  },
  {
    category: "Web & Backend",
    icon: "globe",
    items: ["Flask", "React", "HTML/CSS", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    items: ["Git", "GitHub", "Railway", "Streamlit", "PyQt5", "VS Code"],
  },
]

export const education = [
  {
    degree: "BS Computer Science — AI Specialization",
    school: "Your University",   // ← update
    year: "2021 – 2025",
    description: "Final year. Focus on machine learning, NLP, and intelligent systems.",
  },
]
