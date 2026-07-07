import { Mail } from "lucide-react";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact">
      <FadeIn className="mx-auto max-w-xl text-center">
        <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
          Get in touch
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Contact</h2>
        <p className="text-text-secondary mt-4 flex items-center justify-center gap-2">
          <Mail size={16} />
          Prefer email? zainirfan565@gmail.com
        </p>
      </FadeIn>

      <FadeIn delay={0.1} className="mx-auto mt-10 max-w-xl">
        <ContactForm />
      </FadeIn>
    </Section>
  );
}
