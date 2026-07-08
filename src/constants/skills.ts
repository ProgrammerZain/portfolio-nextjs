import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Dart"],
  },
  {
    category: "Backend",
    items: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Django Tenants",
      "Multi-tenant Architecture",
      "REST API Design",
      "JWT Authentication",
      "WebSockets",
      "Celery",
      "Redis",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "React Query",
      "Tailwind CSS",
      "MUI",
      "Canvas API",
    ],
  },
  { category: "Mobile", items: ["React Native", "Flutter"] },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Pinecone Vector Database"],
  },
  {
    category: "AI & Automation",
    items: [
      "OpenAI API",
      "Claude Code",
      "Prompt Engineering",
      "Vector Search",
      "LLM Integrations",
      "Selenium",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Amazon S3", "DigitalOcean Spaces", "Git"],
  },
  {
    category: "Integrations & Engineering",
    items: [
      "Google SSO",
      "RingCentral",
      "APNs",
      "Third-party API Integration",
      "Performance Optimization",
      "Troubleshooting",
      "Debugging",
    ],
  },
];
