export interface Stat {
  label: string;
  value: string;
  description?: string;
}

export interface Social {
  platform: string;
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  availability: string | null;
  email: string;
  resumeUrl: string | null;
  socials: Social[];
  stats: Stat[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string | null;
  technologies: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  specialization: string;
  startDate: string;
  endDate: string;
  details: string[];
}
