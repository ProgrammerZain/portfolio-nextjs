"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { contentGridClasses } from "@/components/ui/ContentGrid";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import { projects } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  return (
    <Section id="projects">
      <SectionHeader eyebrow="Work" title="Featured Projects" />

      <StaggerContainer className={contentGridClasses}>
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard
              project={project}
              isOpen={openProjectId === project.id}
              onToggle={() =>
                setOpenProjectId(openProjectId === project.id ? null : project.id)
              }
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
