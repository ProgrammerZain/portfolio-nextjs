"use client";

import Button from "@/components/ui/Button";

export default function HeroActions() {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
      <Button
        size="lg"
        className="h-11 w-full px-5 text-sm sm:h-12 sm:w-auto sm:px-6 sm:text-base"
        onClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        View Projects
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="h-11 w-full px-5 text-sm sm:h-12 sm:w-auto sm:px-6 sm:text-base"
        onClick={() => window.open("/resume.pdf", "_blank")}
      >
        Download Resume
      </Button>

      <Button
        size="lg"
        variant="ghost"
        className="h-11 w-full px-5 text-sm sm:h-12 sm:w-auto sm:px-6 sm:text-base"
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Contact Me
      </Button>
    </div>
  );
}
