import Section from "@/components/ui/Section";
import HeroRing from "./HeroRing";
import FadeIn from "@/components/animations/FadeIn";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
    <Section id="home" className="pt-36 pb-20 md:pt-44">
      <div className="flex flex-col items-center gap-12 text-center">
        <FadeIn>
          <HeroRing />
        </FadeIn>

        <FadeIn delay={0.15} className="max-w-2xl">
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
