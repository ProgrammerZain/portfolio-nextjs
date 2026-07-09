"use client";

import Section from "@/components/ui/Section";
import HeroRing from "./HeroRing";
import FadeIn from "@/components/animations/FadeIn";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
    <Section id="home" className="relative overflow-x-hidden !py-10 md:!py-14">
      <div
        aria-hidden
        className="bg-brand-500/20 pointer-events-none absolute top-[18%] left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
      />

      <div className="flex flex-col items-center gap-5 text-center md:gap-6">
        <FadeIn>
          <h1 className="text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] font-extrabold tracking-tight">
            Zain Irfan
          </h1>
          <p className="text-brand-400 mt-4 text-xl font-semibold md:mt-5 md:text-2xl">
            Full-Stack Software Engineer
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="max-w-2xl px-2">
          <p className="text-text-secondary text-base leading-relaxed md:text-lg">
            Building scalable healthcare SaaS, AI-powered automation pipelines, and modern
            web and mobile applications. Passionate about writing maintainable code that
            stands the test of time.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full max-w-[720px]">
          <HeroRing />
        </FadeIn>

        <FadeIn delay={0.25} className="pt-1">
          <HeroActions />
        </FadeIn>
      </div>
    </Section>
  );
}
