"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import GlassCard from "@/components/ui/GlassCard";
import { skills } from "@/constants/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <FadeIn className="text-center">
        <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
          Toolbox
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Skills</h2>
      </FadeIn>

      <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <motion.div key={group.category} variants={staggerItem}>
            <GlassCard className="h-full">
              <h3 className="text-brand-400 text-sm font-bold tracking-wide uppercase">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-text-primary rounded-full bg-white/5 px-3 py-1.5 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
