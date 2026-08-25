import type { Project } from "./types";

export const projects: Project[] = [
    {
        title: "Credit Default Risk Prediction",
        description:
            "End-to-end ML system for predicting credit default risk using German Credit Data, with explainable predictions through SHAP and a real-time web application.",
        image: "/images/projects/CreditDefaultRiskScreenshot.png",
        technologies: [
            "Python",
            "NumPy",
            "pandas",
            "scikit-learn",
            "XGBoost",
            "SHAP",
            "FastAPI",
            "React",
            "Render",
        ],
        github: "https://github.com/vaibhavpandeyprayag/credit-default-risk-api",
        demo: "https://creditdefaultrisk.onrender.com/",
        featured: true,
    },
    {
        title: "Skills Meghalaya Portal",
        description:
            "Government skill development portal enabling youth to access digital registration, skill courses, training centres, counselling, employment opportunities, and entrepreneurship services.",
        image: "/images/projects/MeghYouthPortal.png",
        technologies: [
            "React.js",
            "Node.js",
            "TypeScript",
            "Bootstrap",
            "PostgreSQL",
        ],
        github: null,
        demo: "https://skills.meghalaya.gov.in/",
        featured: true,
    },
    {
        title: "Meghalaya ONE",
        description:
            "Unified government digital platform designed to streamline citizen access to public services, schemes, grievances, and administrative workflows through a single portal.",
        image: "/images/projects/MeghalayaONEHomepage.jpg",
        technologies: [
            "Angular",
            "Node.js",
            "TypeScript",
            "Bootstrap",
            "PostgreSQL",
        ],
        github: null,
        demo: "https://meghalayaone.gov.in/",
        featured: true,
    },
];
