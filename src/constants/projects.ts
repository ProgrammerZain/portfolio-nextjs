import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "healthcare-saas",
    title: "Healthcare SaaS Platform",
    summary:
      "HIPAA-compliant, multi-tenant platform serving 7+ organizations and 1,000+ users. Designed 50+ REST APIs across referrals, clinician workflows, messaging, and scheduling, and cut referral load time from ~6s to ~2s through query optimization.",
    image: "/projects/healthcare-saas.png",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "WebSockets",
      "JWT",
      "React",
      "React Native",
      "RingCentral",
      "Google SSO",
    ],
  },
  {
    id: "ai-opportunity-automation",
    title: "AI Opportunity Automation Pipeline",
    summary:
      "End-to-end automation system using Selenium, OpenAI, and Pinecone to collect, process, and categorize government opportunities, backed by asynchronous background processing with Redis and RQ Workers.",
    image: "/projects/ai-automation.png",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "Next.js",
      "React",
      "PostgreSQL",
      "Redis",
      "RQ Workers",
      "OpenAI API",
      "Pinecone",
      "Selenium",
      "Cloudinary",
      "DigitalOcean Spaces",
    ],
  },
  {
    id: "clinician-messaging",
    title: "Real-Time Clinician Messaging & Calling",
    summary:
      "Real-time messaging and push notifications across web and mobile using WebSockets, WatermelonDB, and APNs, plus RingCentral integration for in-app patient calling with call transcription.",
    image: "/projects/messaging.png",
    stack: ["React", "React Native", "WebSockets", "APNs", "RingCentral"],
  },
];
