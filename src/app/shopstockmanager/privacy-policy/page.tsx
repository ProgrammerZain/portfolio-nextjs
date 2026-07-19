"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "July 18, 2026";

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
              <div className="p-3 bg-brand-500/10 border border-brand-500/20 rounded-2xl w-fit">
                <Shield className="h-8 w-8 text-brand-400" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-text-primary tracking-tight md:text-4xl">
                  Privacy Policy
                </h1>
                <p className="text-xs text-text-secondary mt-1">
                  Shop Stock Manager · Last Updated: {lastUpdated}
                </p>
              </div>
            </div>

            {/* Content card */}
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 space-y-8 text-text-secondary text-sm md:text-base leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary">1. Overview</h2>
                <p>
                  This Privacy Policy details the data collection, storage, and processing practices for <strong>Shop Stock Manager</strong> (the &ldquo;Application&rdquo;), a mobile inventory management system. We are committed to maintaining the highest privacy standards for our users.
                </p>
                <p>
                  Shop Stock Manager is architected as an <strong>offline-first local application</strong>. All transactions, inventories, and authentication logs are managed primarily on your device directory.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary">2. Information We Process</h2>
                <p>
                  To deliver core inventory tracking and system operations, the Application securely processes and locally manages the following data categories:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-text-primary">User Authentication & Profile Logs:</strong> Full names, emails, credentials, and business roles (e.g., Owner, Admin, Manager, Staff) to govern access control.
                  </li>
                  <li>
                    <strong className="text-text-primary">Internal Stock Transaction Operations:</strong> Detailed records of inventory levels, warehouse unit counts, currency definitions, tax margins, and operational activity logs tracking who performed each modification.
                  </li>
                  <li>
                    <strong className="text-text-primary">Device Directory & State Properties:</strong> Storage paths for business logos, staff avatar assets, database state flags, and system-level version identifiers.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary">3. Purpose & Core Functionality</h2>
                <p>
                  Your data is processed <strong>strictly for local core app functionality</strong>. These purposes include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enforcing secure, role-based database read and write locks on local inventory datasets.</li>
                  <li>Maintaining accurate, unalterable historical logs of stock movements and manager audits.</li>
                  <li>Managing local database updates, version checks, and schema migrations.</li>
                </ul>
                <p>
                  We do not sell, rent, lease, or share your processed data with any third-party advertisers or external analytics platforms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary">4. Data Storage & Security</h2>
                <p>
                  Because the application is designed to be sync-ready and offline-first, all data assets are stored securely on the local device using a SQLite database container.
                </p>
                <p>
                  Access to database transactions requires validation via the local application login. We recommend securing your mobile device using biometric locks or strong passwords to prevent unauthorized access to your local files and inventory states.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary">5. Cloud Synchronization (Optional)</h2>
                <p>
                  The database contains sync-ready fields (e.g., status flags, timestamps, conflict resolution counts) designed for future cloud backups. No automated external transmission occurs unless you explicitly enable cloud synchronization features. In such instances, authentication tokens and backup payloads are transmitted exclusively via secure, encrypted SSL/TLS layers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary">6. Data Deletion & Retention</h2>
                <p>
                  You retain full ownership and control over your data. Since all information is saved on-device, deleting the Application from your mobile device will permanently purge all local databases, user authentication states, and stock transactions. 
                </p>
                <p>
                  For cloud-synchronized states, users can initiate data purges directly. For instructions on this process, please review our dedicated <Link to="/shopstockmanager/delete-account" className="text-brand-400 hover:underline">Data Deletion Instructions</Link> page.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary">7. Contact Information</h2>
                <p>
                  If you have any questions or require clarifications regarding this Privacy Policy or local data handling, you can reach out directly:
                </p>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 w-fit">
                  <p className="text-sm">
                    <strong>Developer Support:</strong> Zain Irfan
                  </p>
                  <p className="text-sm">
                    <strong>Email:</strong> <a href="mailto:zainirfan565@gmail.com" className="text-brand-400 hover:underline">zainirfan565@gmail.com</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
