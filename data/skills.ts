import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
    {
        title: "Programming",
        icon: "Code2",
        description: "Core programming languages and frameworks",
        skills: [
            "Python",
            "TypeScript",
            "JavaScript",
            "Java",
            "React",
            "Angular",
            "Node.js",
        ],
    },
    {
        title: "AI / Machine Learning",
        icon: "Brain",
        description: "Machine learning frameworks and techniques",
        skills: ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch"],
    },
    {
        title: "Generative AI",
        icon: "Sparkles",
        description: "LLMs, prompt engineering, and AI agents",
        skills: [
            "OpenAI API",
            "LangChain",
            "RAG",
            "Hugging Face",
            "Prompt Engineering",
        ],
    },
    {
        title: "Data Science",
        icon: "BarChart3",
        description: "Data analysis, visualization, and statistics",
        skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    },
    {
        title: "Backend",
        icon: "Server",
        description: "Server-side development and APIs",
        skills: ["FastAPI", "Node.js", "REST APIs"],
    },
    {
        title: "Databases",
        icon: "Database",
        description: "Relational and NoSQL databases",
        skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    // {
    //     title: "Cloud / DevOps",
    //     icon: "Cloud",
    //     description: "Cloud platforms and deployment tools",
    //     skills: ["AWS", "GCP", "Docker", "Git", "CI/CD"],
    // },
    {
        title: "Tools",
        icon: "Wrench",
        description: "Development and productivity tools",
        skills: ["Git", "VS Code", "Postman", "OpenCode", "ChatGPT"],
    },
];
