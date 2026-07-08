"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { IconButton, Drawer } from "@mui/material";
import { navLinks } from "@/constants/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href.slice(1)));

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
          <a href="#home" className="text-lg font-bold tracking-tight">
            Zain<span className="text-brand-400">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
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

          <IconButton
            className="md:hidden!"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </IconButton>
        </div>
      </motion.header>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="bg-surface flex h-full w-72 flex-col gap-8 p-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">Menu</span>
            <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <X size={22} />
            </IconButton>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
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
