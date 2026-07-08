import { Mail, MapPin, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "./ContactForm";
import GlassCard from "@/components/ui/GlassCard";
import { contactInfo } from "@/constants/contact";

export default function Contact() {
  return (
    <Section id="contact">
      <FadeIn className="mx-auto max-w-xl text-center">
        <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
          Get in touch
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Contact</h2>
      </FadeIn>

      <FadeIn delay={0.1} className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">
        <GlassCard className="p-6">
          <h3 className="text-text-primary mb-6 text-lg font-semibold">
            Contact Information
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <MapPin className="text-brand-400" size={20} />
              <span className="text-text-secondary">{contactInfo.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-brand-400" size={20} />
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-text-secondary hover:text-brand-400 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-brand-400" size={20} />
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-text-secondary hover:text-brand-400 transition-colors"
              >
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-brand-400 h-5 w-5" />
              <a
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-brand-400 transition-colors"
              >
                {contactInfo.linkedin}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <SiGithub className="text-brand-400 h-5 w-5" />
              <a
                href={`https://${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-brand-400 transition-colors"
              >
                {contactInfo.github}
              </a>
            </li>
          </ul>
        </GlassCard>

        <ContactForm />
      </FadeIn>
    </Section>
  );
}
