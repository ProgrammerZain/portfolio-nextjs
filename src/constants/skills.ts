import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "Dart"] },
  {
    category: "Backend",
    items: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "WebSockets",
      "Celery",
      "Redis",
      "JWT",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Redux", "React Query", "Tailwind CSS"],
  },
  { category: "Mobile", items: ["React Native", "Flutter"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Pinecone"] },
  {
    category: "AI & Automation",
    items: ["OpenAI API", "Claude Code", "Prompt Engineering", "Selenium"],
  },
  {
    category: "Cloud & Integrations",
    items: ["Docker", "Amazon S3", "DigitalOcean Spaces", "RingCentral", "Google SSO"],
  },
];
