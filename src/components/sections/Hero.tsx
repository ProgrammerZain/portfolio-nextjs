"use client";

import Section from "@/components/ui/Section";
import HeroRing from "./HeroRing";
import FadeIn from "@/components/animations/FadeIn";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
    <Section id="home" className="relative overflow-x-hidden !py-12 md:!py-16 md:pt-28">
      <div
        aria-hidden
        className="bg-brand-500/20 pointer-events-none absolute top-[18%] left-6 -z-10 h-[420px] w-[420px] rounded-full blur-[120px] md:left-8"
      />

      <div className="flex max-w-3xl flex-col items-start gap-5 text-left md:mx-auto md:items-center md:gap-6">
        <FadeIn>
          <p className="text-brand-400 pt-11 text-sm font-semibold tracking-widest uppercase md:pt-10">
            My Name
          </p>
          <h1 className="mt-3 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-extrabold tracking-tight">
            Zain Irfan
          </h1>
          <p className="text-brand-400 mt-4 text-xl font-semibold md:mt-5 md:text-2xl">
            Full-Stack Software Engineer
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-text-secondary max-w-prose text-base leading-relaxed md:text-lg">
            Building scalable healthcare SaaS, AI-powered automation pipelines, and modern
            web and mobile applications. Passionate about writing maintainable code that
            stands the test of time.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="w-full">
          <HeroRing />
        </FadeIn>

        <FadeIn delay={0.2} className="w-full sm:w-auto">
          <HeroActions />
        </FadeIn>
      </div>
    </Section>
  );
}
