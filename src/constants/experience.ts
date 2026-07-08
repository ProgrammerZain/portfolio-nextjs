import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    id: "adaptive-nodes",
    company: "Adaptive Nodes",
    role: "Software Engineer",
    period: "Aug 2025 — Present",
    achievements: [
      "Developed and maintained a HIPAA-compliant multi-tenant healthcare SaaS platform serving 7+ healthcare organizations and 1,000+ users",
      "Designed and implemented 50+ REST API endpoints supporting patient referrals, clinician workflows, messaging, notifications, authentication, and reporting",
      "Delivered 9+ core modules, including clinician management, scheduling, calendar, availability, referral processing, messaging, tagged notifications, activity logs, and patient management",
      "Integrated RingCentral telephony services into the healthcare platform, allowing users to initiate and manage patient calls without leaving the application",
      "Engineered Selenium automation workflows to extract referral data from 3 external healthcare systems, streamlining patient onboarding workflows",
      "Implemented audit logging for tracking user actions, clinician activities, and system events to improve traceability and compliance",
      "Architected database models for clinician management, messaging, tagged notifications, and external healthcare integrations",
      "Reduced referral loading time from approximately 6 seconds to 2 seconds by optimizing database queries and backend data retrieval",
      "Eliminated 12+ redundant frontend API requests by refactoring React hooks and improving shared data-fetching logic",
      "Implemented real-time messaging and notification features using WebSockets across both web and React Native applications",
      "Integrated Apple Push Notification Service (APNs) to deliver real-time notifications for mobile users",
      "Extended JWT-based authentication and role-based access control while implementing Google Single Sign-On (SSO)",
      "Engineered backend services using Django and FastAPI while working with Redis, Celery, Docker, and Amazon S3",
      "Collaborated with a cross-functional team of 3 engineers to deliver production-ready healthcare features through Agile development practices",
      "Contributed to a Flutter-based Bible application by implementing offline audio playback, downloadable media, and timeline-based content features",
    ],
  },
  {
    id: "evolve-edge",
    company: "Evolve Edge Technologies",
    role: "Software Engineer",
    period: "Dec 2024 — Aug 2025",
    achievements: [
      "Built 3 production AI-powered applications using Next.js, PostgreSQL, OpenAI APIs, and Pinecone",
      "Automated government opportunity collection and processing through end-to-end data pipelines powered by Selenium, OpenAI, and Pinecone",
      "Engineered background processing systems using Redis, RQ Workers, and scheduled jobs",
      "Designed conversational AI workflows supporting WhatsApp and web platforms",
      "Built REST APIs and frontend interfaces using React, Next.js, TypeScript, Redux, and React Query",
      "Developed LLM-powered document processing, structured response generation, and intelligent search capabilities",
      "Integrated cloud storage using DigitalOcean Spaces and Cloudinary",
      "Collaborated closely with cross-functional teams to deliver multiple production-ready products",
    ],
  },
  {
    id: "tech-integration",
    company: "Tech Integration",
    role: "React Native Intern",
    period: "Aug 2024 — Nov 2024",
    achievements: [
      "Implemented user interfaces using React Native, focusing on seamless navigation and responsive layouts for both Android and IOS",
      "Integrated Shopify APIs for product listing, cart management, and order processing",
    ],
  },
];
