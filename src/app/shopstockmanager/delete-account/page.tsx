"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowLeft, UserX, Mail, AlertTriangle, Trash2 } from "lucide-react";

export default function DeleteAccount() {
  const supportEmail = "zainirfan565@gmail.com";
  const mailtoString = `mailto:${supportEmail}?subject=Shop%20Stock%20Manager%3A%20Account%20Deletion%20Request&body=Hello%20Shop%20Stock%20Manager%20Support%2C%0A%0AI%20am%20requesting%20the%20permanent%20deletion%20of%20my%20account%20and%20all%20associated%20data.%0A%0AAccount%20Details%3A%0A-%20Registered%20Email%3A%20%5BEnter%20Email%5D%0A-%20Business%20Name/ID%3A%20%5BEnter%20Business%20Name%5D%0A-%20Device%20Identifier%20%28optional%29%3A%20%5BEnter%20Device%20ID%20if%20known%5D%0A%0APlease%20purge%20the%20following%20permanently%3A%0A%5Bx%5D%20User%20Profile%20Logs%20%28Name%2C%20Role%2C%20Credentials%29%0A%5Bx%5D%20Inventory%20States%20%28Warehouse%20counts%2C%20currencies%2C%20tax%20rates%29%0A%5Bx%5D%20Operational%20Log%20History%20%28Stock%20adjustments%2C%20timestamps%29%0A%0AThank%20you.`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Navigation back */}
            <Link 
              to="/shopstockmanager" 
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand-400 mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to App Overview</span>
            </Link>

            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-2xl w-fit">
                <UserX className="h-8 w-8 text-red-400" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-text-primary tracking-tight md:text-4xl">
                  Data Deletion Request
                </h1>
                <p className="text-xs text-text-secondary mt-1">
                  Shop Stock Manager · Public Purge Request Path
                </p>
              </div>
            </div>

            {/* Warn block */}
            <div className="flex gap-4 p-5 bg-red-500/5 border border-red-500/10 rounded-2xl mb-8 items-start">
              <AlertTriangle className="text-red-400 h-5 w-5 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-text-secondary">
                <strong className="text-text-primary font-bold block mb-1">Permanent Deletion Notice:</strong>
                Executing an account and data purge is irreversible. Once processed, user login structures, warehouse records, and transaction logs will be permanently erased and cannot be restored.
              </div>
            </div>

            {/* Instructions list */}
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 space-y-8 text-text-secondary text-sm md:text-base leading-relaxed">
              
              <section className="space-y-4">
                <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white/5 border border-white/10 text-xs font-semibold">1</span>
                  Wiping Local Device Data
                </h2>
                <p>
                  Because Shop Stock Manager operates primarily as an offline-first local system:
                </p>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3">
                  <Trash2 className="h-5 w-5 text-text-secondary shrink-0 mt-1" />
                  <p className="text-sm">
                    Uninstalling the application from your mobile device automatically purges all locally stored databases, cache maps, log records, and authentication cookies in your device directory.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white/5 border border-white/10 text-xs font-semibold">2</span>
                  Requesting Cloud Purge
                </h2>
                <p>
                  In compliance with Google Play Store rules, we host an absolute data purge pipeline. If you have synchronized your account to online databases or want to ensure all metadata is fully removed, you can trigger a permanent erasure request.
                </p>
                <p>
                  To request permanent deletion of your user account profile logs, inventory states, and operational log histories, please click the action button below or email us:
                </p>
                
                <div className="py-4">
                  <a href={mailtoString} className="inline-block">
                    <Button className="h-12 bg-red-600 border border-red-500 hover:bg-red-700 text-white font-bold inline-flex items-center gap-2 px-6 rounded-xl">
                      <Mail size={16} />
                      Request Data Deletion
                    </Button>
                  </a>
                </div>

                <div className="mt-4 p-4 bg-white/5 rounded-2xl border border-white/5 space-y-2">
                  <p className="text-sm font-semibold text-text-primary">Manual Request Parameters:</p>
                  <ul className="list-disc pl-6 text-sm space-y-1 text-text-secondary">
                    <li><strong>Recipient:</strong> zainirfan565@gmail.com</li>
                    <li><strong>Subject:</strong> Shop Stock Manager: Account Deletion Request</li>
                    <li><strong>Details Needed:</strong> Account username, registration email address, and name of business profile.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-3 pt-4 border-t border-white/5">
                <h2 className="text-lg font-bold text-text-primary">Processing SLA</h2>
                <p>
                  Deletion requests are processed by our compliance team within <strong>5 to 7 business days</strong>. A confirmation email will be sent once all records are purged from the staging and production environments.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
