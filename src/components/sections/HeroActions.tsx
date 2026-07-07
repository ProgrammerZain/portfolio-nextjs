"use client";

import Button from "@/components/ui/Button";

export default function HeroActions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button
        size="lg"
        onClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        View Projects
      </Button>

      <Button
        size="lg"
        variant="outline"
        onClick={() => window.open("/resume.pdf", "_blank")}
      >
        Download Resume
      </Button>

      <Button
        size="lg"
        variant="ghost"
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Contact Me
      </Button>
    </div>
  );
}
