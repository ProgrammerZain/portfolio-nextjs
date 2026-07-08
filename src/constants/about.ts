import type { AboutContent, Metric } from "@/types";

export const metrics: Metric[] = [
  { label: "Years Exp", value: "2+" },
  { label: "Projects Shipped", value: "5+" },
  { label: "Satisfied Clients", value: "4+" },
];

export const aboutContent: AboutContent = {
  title: "Full-stack engineer with healthcare-grade discipline",
  description:
    "I build production software where correctness actually matters — HIPAA-compliant healthcare SaaS, LLM-powered automation pipelines, and real-time systems used by real clinicians and patients. My work spans the full stack: Django and FastAPI on the backend, React and React Native on the front, with a growing focus on applying AI to eliminate manual, error-prone workflows.",
  whatICareAbout: [
    "Writing maintainable, well-tested code that stands the test of time",
    "Building accessible, intuitive products that users love",
    "Automating repetitive work so teams can focus on what matters",
  ],
};
