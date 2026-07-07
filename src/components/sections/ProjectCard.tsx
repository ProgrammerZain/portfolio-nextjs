import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import { SiGithub } from "react-icons/si";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard className="overflow-hidden p-0">
      <div className="bg-surface relative aspect-video w-full">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-text-secondary mt-3 text-sm leading-relaxed">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border-border text-text-secondary rounded-full border px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.href || project.repoHref) && (
          <div className="mt-6 flex gap-4">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-500 inline-flex items-center gap-1 text-sm font-semibold"
              >
                View Details <ArrowUpRight size={16} />
              </a>
            )}
            {project.repoHref && (
              <a
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary inline-flex items-center gap-1 text-sm font-semibold"
              >
                <SiGithub size={16} /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </GlassCard>
  );
}
