"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { contentGridClasses } from "@/components/ui/ContentGrid";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import Chip from "@/components/ui/Chip";
import { cardSurfaceClass } from "@/lib/card-surface";
import { skills } from "@/constants/skills";
import { cn } from "@/lib/utils";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader eyebrow="Toolbox" title="Skills" />

      <StaggerContainer className={contentGridClasses}>
        {skills.map((group) => (
          <StaggerItem key={group.category}>
            <div className={cn(cardSurfaceClass(), "flex h-full flex-col p-6")}>
              <h3 className="text-xl font-bold">{group.category}</h3>
              <p className="text-text-secondary/60 mt-2 text-xs">
                {group.items.length} skills
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
