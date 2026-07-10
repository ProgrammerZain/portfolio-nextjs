import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ContentGrid from "@/components/ui/ContentGrid";
import FadeIn from "@/components/animations/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { cardSurfaceClass } from "@/lib/card-surface";
import { metrics, aboutContent } from "@/constants/about";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About"
        title={aboutContent.title}
        description={aboutContent.description}
      />

      <ContentGrid columns={1}>
        <FadeIn delay={0.05} className="w-full sm:w-auto">
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric) => (
              <GlassCard key={metric.label} className="p-4">
                <div className="text-brand-400 text-2xl font-bold">{metric.value}</div>
                <div className="text-text-secondary mt-1 text-xs leading-snug">
                  {metric.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GlassCard className={cn(cardSurfaceClass(), "h-full")}>
            <h3 className="text-xl font-bold">What I care about</h3>
            <ul className="text-text-secondary mt-4 space-y-3 text-sm leading-relaxed">
              {aboutContent.whatICareAbout.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand-400 mt-0.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </FadeIn>
      </ContentGrid>
    </Section>
  );
}
