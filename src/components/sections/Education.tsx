"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ContentGrid from "@/components/ui/ContentGrid";
import CollapsibleCard from "@/components/ui/CollapsibleCard";
import Chip from "@/components/ui/Chip";
import { education } from "@/constants/education";

export default function Education() {
  const [openEntryId, setOpenEntryId] = useState<string | null>(null);

  return (
    <Section id="education">
      <SectionHeader eyebrow="Education" title="Education" />

      <ContentGrid columns={1}>
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
          >
            <CollapsibleCard
              isOpen={openEntryId === edu.id}
              onToggle={() => setOpenEntryId(openEntryId === edu.id ? null : edu.id)}
              meta={edu.period}
              title={edu.degree}
              subtitle={edu.institution}
              hint={
                edu.subjects
                  ? `${edu.subjects.length} related subjects · tap to expand`
                  : undefined
              }
            >
              {edu.subjects && (
                <div>
                  <p className="text-brand-400 mb-3 text-xs font-semibold tracking-wide uppercase">
                    Related Subjects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject) => (
                      <Chip key={subject}>{subject}</Chip>
                    ))}
                  </div>
                </div>
              )}
            </CollapsibleCard>
          </motion.div>
        ))}
      </ContentGrid>
    </Section>
  );
}
