// ============================================================
// YOUR PORTFOLIO DATA — edit everything here, nothing else!
// ============================================================

export const personal = {
  name: "Fatima Ikram",
  initials: "FI",
  taglines: [
    "Final year CS student.",
    "I like to build automated systems.",
    //"NLP engineer in the making.",
    "Turning ideas into apps and websites.",
  ],
  bio: "I'm a final-year Computer Science student majoring in AI. I build machine learning systems, NLP pipelines and full-stack web and mobile applications. I care about building things that actually work and aim to learn more technologies that helps in automating tasks and solving real-world problems.",
  location: "Lahore, Pakistan",
  email: "fatimaikram287@gmail.com",
  github: "https://github.com/Fatima-I",
  //linkedin: "",
  resume: "/resume.pdf",
}

export const projects = [
  {
    id: 1,
    title: "Dyssist",
    emoji: "🧠",
    description: "A Flutter mobile app that helps children with dyslexia learn and improve through AI-powered assessments. Handwriting samples are analyzed by a FastAPI backend using an SVM-RBF model with explainable feature scores (letter consistency, margin alignment, spacing). RAN assessment uses Groq Whisper large-v3 for real-time speech scoring. OpenAI powers an in-app AI helper bot. Separate dashboards for children, parents, and teachers — with progress tracking, activity assignments, and PDF reports. Backed by Supabase with role-based auth.",
    tags: ["Flutter", "Dart", "FastAPI", "Python", "Supabase", "Groq Whisper", "OpenAI", "scikit-learn"],
    github: "https://github.com/hadia718/Dyssist_App",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "SmartSkillify",
    emoji: "📚",
    description: "Full-stack online course platform for students, built for a client. Students can enroll in courses and read blogs for information. Supports local payments with manual admin approval and international card payments via Paddle. Video lessons via Bunny Stream with auto-completion tracking, progress dashboard and completion certificates. Admin panel handles courses, enrollments, payments and blog with automated emails via Resend.",
    tags: ["Next.js", "TypeScript", "Supabase", "Clerk", "Paddle", "Vercel", "Tailwind CSS"],
    github: "https://github.com/fa046/course-platform",
    live: "https://www.smartskillify.com",
    featured: true,
  },
  {
    id: 3,
    title: "Subtitle Generator",
    emoji: "🎬",
    description: "Full-stack web app that generates subtitles for uploaded videos using OpenAI Whisper. Supports transcription in multiple languages and translation into English, French, Urdu, Arabic, and more. Outputs .srt, .vtt, and .txt formats and can burn subtitles directly into the video. Built with a React frontend and a multi-module Flask backend with parallel audio processing.",
    tags: ["React", "Flask", "Whisper", "NLP", "FFmpeg", "Python"],
    github: "https://github.com/Fatima-I/subtitle-generator",
    live: "https://subtitle-generator-webapp.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Fake Review Spotter",
    emoji: "🔍",
    description: "NLP classifier that detects fake product reviews. Built for a semester NLP project — trained, evaluated, and deployed as an interactive Streamlit app.",
    tags: ["Python", "NLP", "Streamlit", "Machine Learning"],
    github: "https://github.com/Fatima-I/NLP-semester-project",
    live: "https://fake-review-spotter.streamlit.app/",
    featured: true,
  },
  {
    id: 5,
    title: "Mushroom Classifier",
    emoji: "🍄",
    description: "ML web app that predicts whether a mushroom is edible or poisonous based on 12 physical features. SVC model achieving 85% accuracy on a toy dataset, served via Flask on Railway.",
    tags: ["Python", "Flask", "SVC", "scikit-learn", "Railway"],
    github: "https://github.com/Fatima-I/mushroom-classifier",
    live: "https://mushroom-classifier.up.railway.app/",
    featured: false,
  },
  {
    id: 6,
    title: "Sentiment Analysis",
    emoji: "🎭",
    description: "IMDB movie review sentiment classifier. Takes a review as input and predicts positive or negative sentiment using an NLP model deployed on PythonAnywhere.",
    tags: ["Python", "NLP", "Flask", "PythonAnywhere"],
    github: "https://github.com/Fatima-I/sentiment-analysis",
    live: "https://fatimaikram.pythonanywhere.com/",
    featured: false,
  },
  {
    id: 7,
    title: "Gardening Shop Dashboard",
    emoji: "🌱",
    description: "Desktop database management system for a small gardening shop. Full CRUD — manage products, track price history, generate receipts, view sales statistics.",
    tags: ["Python", "PyQt5", "SQL Server", "Desktop App"],
    github: "https://github.com/Fatima-I/Gardening-Shop",
    live: "",
    featured: false,
  },
  {
    id: 8,
    title: "ServEase",
    emoji: "🛠️",
    description: "A Flutter mobile app that connects users with local skilled workers — plumbers, electricians, tutors, and more. Features a marketplace with GPS-based proximity search, category filters, and rating-based sorting. Workers and users have separate registration flows with location pinning. Includes in-app messaging, worker profile pages, and a review system with photo uploads.",
    tags: ["Flutter", "Dart", "Firebase", "GPS", "Maps"],
    github: "https://github.com/Fatima-I/ServEase-AConnectorApp",
    live: "",
    featured: false,
  },
]

export const skills = [
  {
    category: "AI & Machine Learning",
    icon: "brain",
    items: ["scikit-learn", "OpenCV", "NLP", "SVM", "CNN", "Transfer Learning", "Whisper", "pandas", "numpy"],
  },
  {
    category: "Languages",
    icon: "code",
    items: ["Python", "JavaScript", "TypeScript", "Dart", "SQL", "C++"],
  },
  {
    category: "Web & Mobile",
    icon: "globe",
    items: ["Flutter", "React", "Next.js", "Flask", "FastAPI", "Supabase", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    items: ["Git", "GitHub", "Vercel", "Railway", "Streamlit", "PyQt5", "Figma"],
  },
]

export const education = [
  {
    degree: "BS Computer Science",
    school: "COMSATS University Islamabad, Lahore",
    year: "2023 – 2027",
    description: "Final year. Focus on machine learning, NLP, and intelligent systems.",
  },
]
