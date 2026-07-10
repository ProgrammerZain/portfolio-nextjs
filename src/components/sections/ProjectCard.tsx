"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Code2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ProjectCard({ project, isOpen, onToggle }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      whileHover={isOpen ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "glass group overflow-hidden rounded-[var(--radius-card)] transition-shadow duration-300",
        isOpen
          ? "shadow-[0_20px_45px_-15px_rgba(0,0,0,0.55)]"
          : "hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.55)]",
      )}
    >
      <div className="from-brand-500/25 via-accent-500/15 relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br to-transparent">
        {!imageError ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            loading="lazy"
            onError={() => setImageError(true)}
            className="bg-no-repeat object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Code2 className="text-white/20" size={48} />
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold">{project.title}</h3>
          {!isOpen && (
            <p className="text-text-secondary mt-2 line-clamp-2 text-sm leading-relaxed">
              {project.summary}
            </p>
          )}
          {!isOpen && (
            <p className="text-text-secondary/60 mt-3 text-xs">
              {project.stack.length} technologies · tap to expand
            </p>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-text-secondary mt-1 shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pt-0 pb-6">
              <p className="text-text-secondary text-sm leading-relaxed">
                {project.summary}
              </p>

              <div className="mt-5">
                <p className="text-brand-400 mb-3 text-xs font-semibold tracking-wide uppercase">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="text-text-secondary rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
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
        )}
      </AnimatePresence>
    </motion.div>
  );
}
