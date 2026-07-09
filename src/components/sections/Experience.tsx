"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { experience } from "@/constants/experience";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  const [openEntryId, setOpenEntryId] = useState<string | null>(null);

  return (
    <Section id="experience">
      <FadeIn className="text-center">
        <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
          Career
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Experience</h2>
      </FadeIn>

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="bg-border absolute top-0 left-4 h-full w-px" />

        <div className="flex flex-col gap-6">
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

              <GlassCard
                className="cursor-pointer overflow-hidden"
                onClick={() => setOpenEntryId(openEntryId === entry.id ? null : entry.id)}
              >
                <div className="flex items-start justify-between gap-4 p-5">
                  <div className="flex-1">
                    <p className="text-brand-400 text-sm font-semibold">{entry.period}</p>
                    <h3 className="mt-1 text-lg font-bold">{entry.role}</h3>
                    <p className="text-text-secondary text-sm">{entry.company}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: openEntryId === entry.id ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-text-secondary mt-1 flex-shrink-0"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {openEntryId === entry.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pt-0 pb-5">
                        <ul className="text-text-secondary space-y-2 text-sm">
                          {entry.achievements.map((point, idx) => (
                            <motion.li
                              key={point}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="ml-4 list-disc"
                            >
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
