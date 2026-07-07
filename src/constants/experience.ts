import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    id: "adaptive-nodes",
    company: "Adaptive Nodes",
    role: "Software Engineer",
    period: "Aug 2025 — Present",
    achievements: [
      "Built and scaled a HIPAA-compliant, multi-tenant healthcare SaaS platform serving 7+ organizations and 1,000+ users",
      "Designed and shipped 50+ REST APIs powering referrals, messaging, authentication, scheduling, and reporting",
      "Reduced referral load time from ~6s to ~2s and eliminated 12+ redundant API calls through query and hook optimization",
      "Engineered Selenium automation pipelines integrating 3 external healthcare systems",
    ],
  },
  {
    id: "evolve-edge",
    company: "Evolve Edge Technologies",
    role: "Software Engineer",
    period: "Dec 2024 — Aug 2025",
    achievements: [
      "Built 3 production AI-powered applications using Django, Next.js, PostgreSQL, OpenAI APIs, and Pinecone",
      "Orchestrated end-to-end automation pipelines to collect, process, and categorize government opportunities",
      "Designed conversational AI workflows supporting WhatsApp and web platforms",
      "Developed LLM-powered document processing, semantic search, and structured response generation",
    ],
  },
  {
    id: "tech-integration",
    company: "Tech Integration",
    role: "React Native Intern",
    period: "Aug 2024 — Nov 2024",
    achievements: [
      "Built responsive React Native interfaces for Android and iOS",
      "Integrated Shopify APIs for product listing, cart management, and order processing",
    ],
  },
];
