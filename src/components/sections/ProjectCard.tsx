"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="glass group overflow-hidden rounded-[var(--radius-card)] transition-shadow duration-300 hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.55)]"
    >
      <div className="from-brand-500/25 via-accent-500/15 relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br to-transparent">
        {!imageError ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            onError={() => setImageError(true)}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Code2 className="text-white/20" size={48} />
          </div>
        )}
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
              className="text-text-secondary rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium"
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
    </motion.div>
  );
}
