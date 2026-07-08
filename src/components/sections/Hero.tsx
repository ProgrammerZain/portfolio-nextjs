import Section from "@/components/ui/Section";
import HeroRing from "./HeroRing";
import FadeIn from "@/components/animations/FadeIn";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
    <Section id="home" className="relative overflow-hidden pt-40 pb-24 md:pt-48">
      <div
        aria-hidden
        className="bg-brand-500/20 pointer-events-none absolute top-[30%] left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
      />

      <HeroRing />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        <FadeIn>
          <h1 className="text-[clamp(3rem,7vw,6rem)] leading-[1.05] font-extrabold tracking-tight">
            Zain Irfan
          </h1>
          <p className="text-text-secondary mt-3 text-xl font-semibold md:text-2xl">
            Full-Stack Software Engineer
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="max-w-xl">
          <p className="text-text-secondary">
            Building scalable healthcare SaaS, AI-powered products, and modern web and
            mobile applications.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} className="flex flex-wrap items-center justify-center gap-4">
          <HeroActions />
        </FadeIn>
      </div>
    </Section>
  );
}
