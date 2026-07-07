import { SiGithub, SiLinkerd } from "react-icons/si";
import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t py-10">
      <Container className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-text-secondary text-sm">
          © {year} Zain Irfan. Built with Next.js.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/ProgrammerZain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-secondary hover:text-text-primary"
          >
            <SiGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in//zain-irfan-programmer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary hover:text-text-primary"
          >
            <SiLinkerd className="h-5 w-5" />
          </a>
          <a
            href="mailto:zainirfan565@gmail.com"
            aria-label="Email"
            className="text-text-secondary hover:text-text-primary"
          >
            <Mail size={20} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
