"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import HeroRing from "./HeroRing";
import FadeIn from "@/components/animations/FadeIn";
import HeroActions from "./HeroActions";
import { techItems } from "@/constants/tech";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const activeTechData = techItems.find((t) => t.id === activeTech);

  return (
    <Section id="home" className="relative overflow-hidden pt-40 pb-24 md:pt-48">
      <div
        aria-hidden
        className="bg-brand-500/20 pointer-events-none absolute top-[30%] left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
      />

      <HeroRing activeTech={activeTech} setActiveTech={setActiveTech} />

      <div className="pointer-events-none relative z-5 flex flex-col items-center gap-8 text-center">
        <FadeIn className="pointer-events-auto">
          <h1 className="text-[clamp(3rem,7vw,6rem)] leading-[1.05] font-extrabold tracking-tight">
            Zain Irfan
          </h1>
          <p className="text-text-secondary mt-3 text-xl font-semibold md:text-2xl">
            Full-Stack Software Engineer
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="pointer-events-auto max-w-xl">
          <p className="text-text-secondary">
            Building scalable healthcare SaaS, AI-powered products, and modern web and
            mobile applications.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.25}
          className="pointer-events-auto flex flex-wrap items-center justify-center gap-4"
        >
          <HeroActions />
        </FadeIn>

        <div className="pointer-events-auto h-24 w-full max-w-sm">
          <div
            className={cn(
              "glass absolute inset-x-0 top-0 rounded-2xl p-5 text-left transition-all duration-300",
              activeTechData
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-2 opacity-0",
            )}
          >
            {activeTechData && (
              <>
                <h3 className="text-brand-400 mb-2 text-lg font-semibold">
                  {activeTechData.label}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {activeTechData.blurb}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
