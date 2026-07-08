import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { metrics, aboutContent } from "@/constants/about";

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <FadeIn>
          <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{aboutContent.title}</h2>
          <p className="text-text-secondary mt-6 text-base leading-relaxed md:text-lg">
            {aboutContent.description}
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
              {aboutContent.whatICareAbout.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-brand-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </FadeIn>
      </div>
    </Section>
  );
}
