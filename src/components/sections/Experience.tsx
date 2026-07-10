"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ContentGrid from "@/components/ui/ContentGrid";
import CollapsibleCard from "@/components/ui/CollapsibleCard";
import { experience } from "@/constants/experience";

export default function Experience() {
  const [openEntryId, setOpenEntryId] = useState<string | null>(null);

  return (
    <Section id="experience">
      <SectionHeader eyebrow="Career" title="Experience" />

      <ContentGrid columns={1}>
        {experience.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
          >
            <CollapsibleCard
              isOpen={openEntryId === entry.id}
              onToggle={() => setOpenEntryId(openEntryId === entry.id ? null : entry.id)}
              meta={entry.period}
              title={entry.role}
              subtitle={entry.company}
              hint={`${entry.achievements.length} highlights · tap to expand`}
            >
              <ul className="text-text-secondary space-y-2 text-sm leading-relaxed">
                {entry.achievements.map((point) => (
                  <li key={point} className="ml-4 list-disc">
                    {point}
                  </li>
                ))}
              </ul>
            </CollapsibleCard>
          </motion.div>
        ))}
      </ContentGrid>
    </Section>
  );
}
