import { Mail, MapPin, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ContentGrid from "@/components/ui/ContentGrid";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "./ContactForm";
import GlassCard from "@/components/ui/GlassCard";
import { cardSurfaceClass } from "@/lib/card-surface";
import { contactInfo } from "@/constants/contact";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Get in touch"
        title="Contact"
        description="Open to full-time roles, contract work, and interesting product collaborations."
      />

      <ContentGrid>
        <FadeIn delay={0.05}>
          <GlassCard className={cn(cardSurfaceClass(), "h-full")}>
            <h3 className="text-xl font-bold">Contact Information</h3>
            <ul className="text-text-secondary mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="text-brand-400 shrink-0" size={18} />
                <span>{contactInfo.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-400 shrink-0" size={18} />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-brand-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-400 shrink-0" size={18} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-brand-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaLinkedin className="text-brand-400 h-[18px] w-[18px] shrink-0" />
                <a
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors"
                >
                  {contactInfo.linkedin}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <SiGithub className="text-brand-400 h-[18px] w-[18px] shrink-0" />
                <a
                  href={`https://${contactInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors"
                >
                  {contactInfo.github}
                </a>
              </li>
            </ul>
          </GlassCard>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </ContentGrid>
    </Section>
  );
}
