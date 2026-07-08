import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  const metrics = [
    { label: "Years Exp", value: "2+" },
    { label: "Projects Shipped", value: "5+" },
    { label: "Satisfied Clients", value: "4+" },
  ];

  return (
    <Section id="about">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <FadeIn>
          <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Full-stack engineer with healthcare-grade discipline
          </h2>
          <p className="text-text-secondary mt-6 text-base leading-relaxed md:text-lg">
            I build production software where correctness actually matters —
            HIPAA-compliant healthcare SaaS, LLM-powered automation pipelines, and
            real-time systems used by real clinicians and patients. My work spans the full
            stack: Django and FastAPI on the backend, React and React Native on the front,
            with a growing focus on applying AI to eliminate manual, error-prone
            workflows.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 grid grid-cols-3 gap-4">
            {metrics.map((metric, i) => (
              <GlassCard key={i} className="p-4 text-center">
                <div className="text-brand-400 text-2xl font-bold">{metric.value}</div>
                <div className="text-text-secondary mt-1 text-xs">{metric.label}</div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-6">
            <h3 className="text-text-primary mb-3 text-lg font-semibold">
              What I care about
            </h3>
            <ul className="text-text-secondary space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-brand-400 mt-1">•</span>
                <span>
                  Writing maintainable, well-tested code that stands the test of time
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-400 mt-1">•</span>
                <span>Building accessible, intuitive products that users love</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-400 mt-1">•</span>
                <span>Automating repetitive work so teams can focus on what matters</span>
              </li>
            </ul>
          </GlassCard>
        </FadeIn>
      </div>
    </Section>
  );
}
