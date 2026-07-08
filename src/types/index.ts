export interface TechItem {
  id: string;
  label: string;
  blurb: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  image: string;
  stack: string[];
  href?: string;
  repoHref?: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type SubmissionStatus = "idle" | "loading" | "success" | "error";

export interface Metric {
  label: string;
  value: string;
}

export interface AboutContent {
  title: string;
  description: string;
  whatICareAbout: string[];
}

export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
  subjects?: string[];
}
