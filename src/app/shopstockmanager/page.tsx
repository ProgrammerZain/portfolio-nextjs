"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  ShieldCheck,
  Layers,
  History,
  Database,
  ArrowRight,
  ShieldAlert,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ShopStockManagerLanding() {
  const features = [
    {
      icon: <Database className="text-brand-400 h-6 w-6" />,
      title: "100% Offline-First SQLite Storage",
      description:
        "Manage your inventory with zero latency and no internet connection. All data is saved directly on your device in a high-performance local SQLite database adapter.",
    },
    {
      icon: <Layers className="text-accent-400 h-6 w-6" />,
      title: "Products, Categories & Suppliers",
      description:
        "Organize your items into custom categories with color presets and associate them with wholesalers to streamline reordering and tracking.",
    },
    {
      icon: <History className="text-brand-400 h-6 w-6" />,
      title: "Stock Movements & Adjustments",
      description:
        "Record Stock In (purchases), Stock Out (sales/returns), or directly reset counts to match physical audits. Review a chronological timeline of all inventory movements.",
    },
    {
      icon: <ShieldCheck className="text-accent-400 h-6 w-6" />,
      title: "Local Password Protection",
      description:
        "Secure your local inventory records from unauthorized device access with email/password logins protected by SHA-256 password hashing.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="grid grid-cols-1 items-center gap-12 py-8 md:py-12 lg:grid-cols-12">
            <div className="flex flex-col items-start space-y-6 lg:col-span-7">
              <div className="text-text-secondary inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                <span className="bg-brand-500 h-2 w-2 animate-pulse rounded-full"></span>
                Offline-First Mobile Application
              </div>
              <h1 className="text-text-primary text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
                Shop Stock Manager
              </h1>
              <p className="text-text-secondary max-w-xl text-lg leading-relaxed">
                An offline-first inventory management application built for small shop
                owners. Track product details, organize categories, manage supplier
                records, log stock movements, and export CSV reports directly from your
                mobile device.
              </p>

              {/* Styled "Coming Soon" Google Play Brand Button */}
              <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center">
                <div className="group relative">
                  <div className="from-brand-500 to-accent-500 absolute -inset-0.5 rounded-xl bg-gradient-to-r opacity-30 blur transition duration-1000 group-hover:opacity-50"></div>
                  <div className="bg-surface relative flex items-center gap-4 rounded-xl border border-white/10 px-5 py-3 opacity-85 select-none">
                    {/* Mock Google Play SVG Icon */}
                    <svg
                      viewBox="0 0 512 512"
                      className="text-text-secondary h-7 w-7"
                      fill="currentColor"
                    >
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.3-60.7 60.7 60.7 60.7 58-33.3c16.1-9.2 25.1-25.1 25.1-47.4s-9-38.2-25.1-47.4zm-86.7 101.4L104.6 499l220.7-126.7-60.1-60.1z" />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-text-secondary text-[10px] font-semibold tracking-wider uppercase">
                        GET IT ON
                      </span>
                      <span className="text-text-primary text-sm font-bold">
                        Google Play
                      </span>
                    </div>
                    <span className="text-brand-400 bg-brand-500/10 border-brand-500/20 ml-2 rounded-md border px-2.5 py-0.5 text-[10px] font-bold tracking-wider">
                      COMING SOON
                    </span>
                  </div>
                </div>

                <a href="#features">
                  <Button variant="outline" className="h-12">
                    Explore Features
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-5">
              <div className="relative flex aspect-[16/10] min-h-[220px] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-2 shadow-2xl sm:aspect-[1.6]">
                <img
                  src="/projects/shop-stock-manager.png"
                  alt="Shop Stock Manager Mockup"
                  className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-90"
                />
                <div className="from-bg absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>

          <hr className="border-border my-16" />

          {/* Features Section */}
          <div id="features" className="scroll-mt-24">
            <div className="mb-12 max-w-2xl">
              <span className="text-brand-400 text-xs font-bold tracking-widest uppercase">
                System Capabilities
              </span>
              <h2 className="text-text-primary mt-2 text-3xl font-extrabold">
                Engineered for Operational Integrity
              </h2>
              <p className="text-text-secondary mt-3">
                Built with an offline-first SQLite database and simple local operations,
                Shop Stock Manager is a reliable tool for local inventory tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-surface flex flex-col space-y-3 rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:border-white/10"
                >
                  <div className="w-fit rounded-xl bg-white/5 p-3">{feature.icon}</div>
                  <h3 className="text-text-primary text-lg font-bold">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-border my-16" />

          {/* Developer Legal & Support Section */}
          <div className="bg-surface relative overflow-hidden rounded-3xl border border-white/5 p-8 md:p-12">
            <div className="bg-brand-500/10 absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl"></div>
            <div className="bg-accent-500/10 absolute -bottom-24 -left-24 h-48 w-48 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <span className="text-accent-400 text-xs font-bold tracking-widest uppercase">
                  Policy & Compliance
                </span>
                <h3 className="text-text-primary mt-2 text-2xl font-bold">
                  Compliance & Data Transparency
                </h3>
                <p className="text-text-secondary mt-3 text-sm leading-relaxed">
                  In compliance with Google Play Store Developer Guidelines, we maintain
                  clear terms of usage, absolute privacy declarations, and direct
                  instructions for deleting local storage.
                </p>
              </div>

              <div className="grid w-full shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 md:w-auto">
                <Link to="/shopstockmanager/privacy-policy" className="group">
                  <div className="group-hover:border-brand-500/30 flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-all group-hover:bg-white/10">
                    <ShieldAlert className="text-brand-400 mb-2 h-6 w-6" />
                    <span className="text-text-primary text-xs text-[11px] font-bold whitespace-nowrap">
                      Privacy Policy
                    </span>
                    <span className="text-text-secondary group-hover:text-brand-400 mt-1 inline-flex items-center gap-1 text-[10px]">
                      Read Policy <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>

                <Link to="/shopstockmanager/terms" className="group">
                  <div className="group-hover:border-accent-500/30 flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-all group-hover:bg-white/10">
                    <FileText className="text-accent-400 mb-2 h-6 w-6" />
                    <span className="text-text-primary text-xs text-[11px] font-bold whitespace-nowrap">
                      Terms of Service
                    </span>
                    <span className="text-text-secondary group-hover:text-accent-400 mt-1 inline-flex items-center gap-1 text-[10px]">
                      Read Terms <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
