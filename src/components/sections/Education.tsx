import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { education } from "@/constants/education";

export default function Education() {
  return (
    <Section id="education">
      <FadeIn className="mx-auto max-w-2xl">
        <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
          Education
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Education</h2>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-10">
        {education.map((edu) => (
          <GlassCard key={edu.id} className="mt-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-text-primary text-xl font-semibold">{edu.degree}</h3>
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <span className="text-brand-400 font-medium">{edu.institution}</span>
                <span className="text-text-secondary text-sm font-medium">
                  {edu.period}
                </span>
              </div>
              {edu.subjects && (
                <p className="text-text-secondary mt-2 text-sm">
                  Related Subjects: {edu.subjects.join(", ")}
                </p>
              )}
            </div>
          </GlassCard>
        ))}
      </FadeIn>
    </Section>
  );
}
