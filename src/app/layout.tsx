import type { Metadata } from "next";
import ThemeRegistry from "@/components/providers/ThemeRegistry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zain Irfan — Full-Stack Software Engineer",
  description:
    "Full-stack software engineer building scalable web, mobile, and AI-powered applications.",
  metadataBase: new URL("https://zainirfan.netlify.com"),
  openGraph: {
    title: "Zain Irfan — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building scalable web, mobile, and AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
