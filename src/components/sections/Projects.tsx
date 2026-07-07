import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { projects } from "@/constants/projects";
import ProjectCard from "./ProjectCard";
import StaggerItem from "@/components/animations/StaggerItem";

export default function Projects() {
  return (
    <Section id="projects">
      <FadeIn className="text-center">
        <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
          Work
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Featured Projects</h2>
      </FadeIn>

      <StaggerContainer className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
