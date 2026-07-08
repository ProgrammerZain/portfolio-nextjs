"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { experience } from "@/constants/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <FadeIn className="text-center">
        <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
          Career
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Experience</h2>
      </FadeIn>

      <div className="relative mx-auto mt-14 max-w-2xl">
        <div className="bg-border absolute top-0 left-4 h-full w-px" />

        <div className="flex flex-col gap-10">
          {experience.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-12"
            >
              <span className="animate-dot-pulse bg-brand-500 absolute top-1.5 left-4 h-3 w-3 -translate-x-1/2 rounded-full" />

              <GlassCard>
                <p className="text-brand-400 text-sm font-semibold">{entry.period}</p>
                <h3 className="mt-1 text-lg font-bold">{entry.role}</h3>
                <p className="text-text-secondary text-sm">{entry.company}</p>
                <ul className="text-text-secondary mt-4 space-y-2 text-sm">
                  {entry.achievements.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
