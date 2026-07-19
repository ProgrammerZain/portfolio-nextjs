import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Code2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import type { Project } from "@/types";
import Chip from "@/components/ui/Chip";
import { cardSurfaceClass } from "@/lib/card-surface";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ProjectCard({ project, isOpen, onToggle }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  // If project has a local route href, make the entire card a Link
  if (project.href) {
    return (
      <Link to={project.href} className="block w-full">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn(cardSurfaceClass(false), "group h-full overflow-hidden")}
        >
          <div className="from-brand-500/25 via-accent-500/15 relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br to-transparent">
            {!imageError ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                onError={() => setImageError(true)}
                className="absolute inset-0 h-full w-full bg-no-repeat object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Code2 className="text-white/20" size={48} />
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="group-hover:text-brand-400 text-xl font-bold transition-colors">
                {project.title}
              </h3>
              <span className="text-brand-400 hover:text-brand-300 inline-flex items-center gap-1 text-xs font-semibold whitespace-nowrap">
                View Details <ArrowUpRight size={14} />
              </span>
            </div>
            <p className="text-text-secondary mt-2 text-sm leading-relaxed">
              {project.summary}
            </p>
            <div className="mt-5">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // Fallback for standard toggle cards
  return (
    <motion.div
      whileHover={isOpen ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(cardSurfaceClass(isOpen), "group")}
    >
      <div className="from-brand-500/25 via-accent-500/15 relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br to-transparent">
        {!imageError ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="absolute inset-0 h-full w-full bg-no-repeat object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 }}
                    >
                      <Chip>{tech}</Chip>
                    </motion.div>
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
