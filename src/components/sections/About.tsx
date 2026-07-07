import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";

export default function About() {
  return (
    <Section id="about">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
          About
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Full-stack engineer, healthcare-grade discipline
        </h2>
        <p className="text-text-secondary mt-6 text-base leading-relaxed md:text-lg">
          I build production software where correctness actually matters — HIPAA-compliant
          healthcare platforms, LLM-powered automation pipelines, and real-time systems
          used by real clinicians and patients. My work spans the full stack: Django and
          FastAPI on the backend, React and React Native on the front, with a growing
          focus on applying AI to eliminate manual, error-prone workflows.
        </p>
      </FadeIn>
    </Section>
  );
}
