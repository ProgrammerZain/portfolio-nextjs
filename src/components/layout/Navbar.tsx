import { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, MapPin, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IconButton, Drawer, Popover } from "@mui/material";
import { navLinks } from "@/constants/nav";
import { contactInfo } from "@/constants/contact";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const avatarRef = useCallback((node: HTMLButtonElement | null) => {
    if (node) setAnchorEl(node);
  }, []);
  const sectionIds = useMemo(() => navLinks.map((l) => l.href.slice(1)), []);
  const activeId = useActiveSection(sectionIds);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome) {
      setPopoverOpen(false);
      return;
    }
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.pushState(null, "", href);
      setPopoverOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled ? "glass" : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          {/* Avatar */}
          <button
            ref={avatarRef}
            onClick={() => setPopoverOpen(!popoverOpen)}
            className="group relative flex items-center justify-center"
            aria-label="Open profile"
          >
            <div className="group-hover:border-brand-400/60 group-hover:ring-brand-400/20 relative h-10 w-10 overflow-hidden rounded-full border border-white/10 transition-all duration-300 group-hover:ring-2">
              <img
                src="/zain.png"
                alt="Zain Irfan"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors",
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="bg-brand-400 absolute right-0 -bottom-1 left-0 h-[2px] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Nav Button */}
          <IconButton
            className="md:hidden!"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </IconButton>
        </div>
      </motion.header>

      {/* Profile Popover */}
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={() => setPopoverOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            className: "!bg-transparent !shadow-none !overflow-visible !mt-2",
          },
        }}
      >
        <AnimatePresence>
          {popoverOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="glass w-80 rounded-2xl border border-white/10 p-5 shadow-2xl"
            >
              <div className="flex gap-4">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src="/zain_fullImage.png"
                    alt="Zain Irfan"
                    width={80}
                    height={80}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-text-primary text-xl font-bold">Zain Irfan</h3>
                  <p className="text-text-secondary text-sm font-medium">
                    Full-Stack Software Engineer
                  </p>
                  <div className="text-text-secondary flex items-center gap-1.5 text-xs">
                    <MapPin size={14} />
                    <span>{contactInfo.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-text-secondary mt-4 text-sm leading-relaxed">
                Building production software where correctness matters — HIPAA-compliant
                healthcare SaaS, AI-powered automation pipelines, and real-time systems
                used by real clinicians and patients.
              </p>

              <div className="mt-5 flex gap-3">
                <a
                  href={`https://${contactInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:border-brand-400/40 hover:text-brand-400 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all"
                  aria-label="GitHub"
                >
                  <SiGithub className="h-4.5 w-4.5" />
                </a>
                <a
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:border-brand-400/40 hover:text-brand-400 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-4.5 w-4.5" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-text-secondary hover:border-brand-400/40 hover:text-brand-400 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>

              <div className="mt-5 flex gap-3">
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    window.open("/resume.pdf", "_blank");
                    setPopoverOpen(false);
                  }}
                >
                  Resume
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    setPopoverOpen(false);
                  }}
                >
                  Contact
                </Button>
              </div>

              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-text-secondary mb-2 text-xs font-medium tracking-wide uppercase">
                  Quick Links
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "About", href: "#about" },
                    { label: "Projects", href: "#projects" },
                    { label: "Experience", href: "#experience" },
                    { label: "Skills", href: "#skills" },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={isHome ? link.href : `/${link.href}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-text-secondary hover:text-text-primary flex items-center justify-between rounded-lg border border-white/5 px-3 py-2 text-sm transition-all hover:border-white/20"
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Popover>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="bg-surface flex h-full w-72 flex-col gap-8 p-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">Menu</span>
            <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close">
              <X size={22} />
            </IconButton>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setDrawerOpen(false);
                }}
                className="text-text-secondary hover:text-text-primary text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            className="mt-auto"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Download Resume
          </Button>
        </div>
      </Drawer>
    </>
  );
}
