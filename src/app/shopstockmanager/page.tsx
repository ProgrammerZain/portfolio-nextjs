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
  UserX
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ShopStockManagerLanding() {
  const features = [
    {
      icon: <Database className="h-6 w-6 text-brand-400" />,
      title: "Offline-First Sync Architecture",
      description: "Perform your daily stock management actions in offline mode with complete zero-latency. Data queues locally and syncs automatically with conflict-resolution once connection resumes."
    },
    {
      icon: <Layers className="h-6 w-6 text-accent-400" />,
      title: "Multi-Business Workspace Support",
      description: "Manage multiple business configurations, locations, currencies, and tax rates within a single clean app workspace, isolated cleanly at the data schema level."
    },
    {
      icon: <History className="h-6 w-6 text-brand-400" />,
      title: "Granular Stock Transactions & Logging",
      description: "Trace every inventory unit change with strict transaction logs. Capture soft deletes, device logs, timestamp signatures, and worker version tags."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-accent-400" />,
      title: "Secure Role-Based Access Controls",
      description: "Assign user privileges dynamically (Owner, Admin, Manager, Staff) to secure modifications to stock levels, business structures, and user registry records."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-12 py-8 md:py-12">
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-text-secondary">
                <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
                Google Play Console Integration Ready
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
                Shop Stock Manager
              </h1>
              <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
                An offline-first, highly secure business inventory manager built for small-to-medium enterprises. Track your warehouse transactions, optimize log histories, and delegate roles locally on-device.
              </p>

              {/* Styled "Coming Soon" Google Play Brand Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-accent-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative flex items-center bg-surface border border-white/10 px-5 py-3 rounded-xl gap-4 select-none opacity-85">
                    {/* Mock Google Play SVG Icon */}
                    <svg viewBox="0 0 512 512" className="h-7 w-7 text-text-secondary" fill="currentColor">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.3-60.7 60.7 60.7 60.7 58-33.3c16.1-9.2 25.1-25.1 25.1-47.4s-9-38.2-25.1-47.4zm-86.7 101.4L104.6 499l220.7-126.7-60.1-60.1z" />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-text-secondary tracking-wider uppercase font-semibold">GET IT ON</span>
                      <span className="text-sm font-bold text-text-primary">Google Play</span>
                    </div>
                    <span className="ml-2 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-md">
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

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[16/10] sm:aspect-[1.6] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-2 min-h-[220px]">
                <img
                  src="/projects/shop-stock-manager.png"
                  alt="Shop Stock Manager Mockup"
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>

          <hr className="border-border my-16" />

          {/* Features Section */}
          <div id="features" className="scroll-mt-24">
            <div className="max-w-2xl mb-12">
              <span className="text-brand-400 text-xs font-bold tracking-widest uppercase">System Capabilities</span>
              <h2 className="text-3xl font-extrabold text-text-primary mt-2">Engineered for Operational Integrity</h2>
              <p className="text-text-secondary mt-3">
                Built with offline-first support and granular schema constraints, Shop Stock Manager is the reliable tool for local inventory operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col space-y-3"
                >
                  <div className="p-3 bg-white/5 rounded-xl w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{feature.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-border my-16" />

          {/* Developer Legal & Support Section */}
          <div className="bg-surface border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-48 w-48 bg-brand-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 h-48 w-48 bg-accent-500/10 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-accent-400 text-xs font-bold tracking-widest uppercase">Policy & Compliance</span>
                <h3 className="text-2xl font-bold text-text-primary mt-2">Compliance & Data Transparency</h3>
                <p className="text-text-secondary mt-3 text-sm leading-relaxed">
                  In compliance with Google Play Store Developer Guidelines, we maintain clear terms of usage, absolute privacy declarations, and direct avenues for account data purging.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto shrink-0">
                <Link to="/shopstockmanager/privacy-policy" className="group">
                  <div className="flex flex-col items-center text-center p-4 bg-white/5 border border-white/5 group-hover:border-brand-500/30 group-hover:bg-white/10 transition-all rounded-2xl">
                    <ShieldAlert className="h-6 w-6 text-brand-400 mb-2" />
                    <span className="text-xs font-bold text-text-primary text-[11px] whitespace-nowrap">Privacy Policy</span>
                    <span className="text-[10px] text-text-secondary mt-1 inline-flex items-center gap-1 group-hover:text-brand-400">
                      Read Policy <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>

                <Link to="/shopstockmanager/terms" className="group">
                  <div className="flex flex-col items-center text-center p-4 bg-white/5 border border-white/5 group-hover:border-accent-500/30 group-hover:bg-white/10 transition-all rounded-2xl">
                    <FileText className="h-6 w-6 text-accent-400 mb-2" />
                    <span className="text-xs font-bold text-text-primary text-[11px] whitespace-nowrap">Terms of Service</span>
                    <span className="text-[10px] text-text-secondary mt-1 inline-flex items-center gap-1 group-hover:text-accent-400">
                      Read Terms <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>

                <Link to="/shopstockmanager/delete-account" className="group">
                  <div className="flex flex-col items-center text-center p-4 bg-white/5 border border-white/5 group-hover:border-red-500/30 group-hover:bg-white/10 transition-all rounded-2xl">
                    <UserX className="h-6 w-6 text-red-400 mb-2" />
                    <span className="text-xs font-bold text-text-primary text-[11px] whitespace-nowrap">Delete Account</span>
                    <span className="text-[10px] text-text-secondary mt-1 inline-flex items-center gap-1 group-hover:text-red-400">
                      Request Purge <ArrowRight size={10} />
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
