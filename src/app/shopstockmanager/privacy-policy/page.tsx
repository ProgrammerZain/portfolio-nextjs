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
          <div className="mx-auto max-w-3xl">
            {/* Navigation back */}
            <Link
              to="/shopstockmanager"
              className="text-text-secondary hover:text-brand-400 mb-8 inline-flex items-center gap-2 text-sm transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to App Overview</span>
            </Link>

            {/* Header */}
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-brand-500/10 border-brand-500/20 w-fit rounded-2xl border p-3">
                <Shield className="text-brand-400 h-8 w-8" />
              </div>
              <div>
                <h1 className="text-text-primary text-3xl font-extrabold tracking-tight md:text-4xl">
                  Privacy Policy
                </h1>
                <p className="text-text-secondary mt-1 text-xs">
                  Shop Stock Manager · Last Updated: {lastUpdated}
                </p>
              </div>
            </div>

            {/* Content card */}
            <div className="glass text-text-secondary space-y-8 rounded-3xl border border-white/5 p-8 text-sm leading-relaxed md:p-10 md:text-base">
              <section className="space-y-3">
                <h2 className="text-text-primary text-lg font-bold">1. Overview</h2>
                <p>
                  This Privacy Policy details the data collection, storage, and processing
                  practices for <strong>Shop Stock Manager</strong> (the
                  &ldquo;Application&rdquo;), a mobile inventory management system. We are
                  committed to maintaining the highest privacy standards for our users.
                </p>
                <p>
                  Shop Stock Manager is architected as an{" "}
                  <strong>offline-first local application</strong>. All transactions,
                  inventories, and authentication logs are managed entirely on your local
                  device.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-text-primary text-lg font-bold">
                  2. Information We Process
                </h2>
                <p>
                  To deliver core inventory tracking, the Application locally processes
                  and stores the following data:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong className="text-text-primary">User Account Data:</strong>{" "}
                    Name, email address, and hashed password for local authentication.
                  </li>
                  <li>
                    <strong className="text-text-primary">Inventory Data:</strong> Product
                    details (names, SKUs, barcodes, brands, units, cost prices, selling
                    prices, stock quantities, minimum stock alerts, descriptions, and
                    local image paths), categories, and supplier contact information.
                  </li>
                  <li>
                    <strong className="text-text-primary">Stock Transactions:</strong>{" "}
                    Historical logs of stock movements (quantities, transaction types,
                    reference notes, and timestamps) to generate inventory logs and
                    metrics.
                  </li>
                  <li>
                    <strong className="text-text-primary">Business Settings:</strong>{" "}
                    Local configurations including business name, default currency
                    setting, business address, phone number, and logo preset icon.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-text-primary text-lg font-bold">
                  3. Purpose & Core Functionality
                </h2>
                <p>
                  Your data is processed and stored{" "}
                  <strong>strictly for local application features</strong>. These purposes
                  include:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Allowing you to secure the app on your device using a local login
                    credential.
                  </li>
                  <li>
                    Maintaining historical logs of your stock movements (Stock In, Stock
                    Out, and Adjustments) so you can review recent changes.
                  </li>
                  <li>
                    Calculating dashboard statistics and reporting cost vs. retail
                    valuation metrics.
                  </li>
                  <li>
                    Allowing you to generate and export inventory reports as CSV files or
                    export/import database backups as local JSON files.
                  </li>
                </ul>
                <p>
                  Since the application operates entirely offline on your device, we do
                  not transmit, share, or sell your inventory data or personal
                  credentials. There are no remote analytics trackers or advertisement
                  networks integrated.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-text-primary text-lg font-bold">
                  4. Data Storage & Security
                </h2>
                <p>
                  All data is stored locally on your device. Business data is managed
                  within a local SQLite database (WatermelonDB), and session tokens are
                  maintained on-device using AsyncStorage.
                </p>
                <p>
                  Access to the application requires logging in with your local account
                  credentials. We recommend securing your mobile device using device locks
                  (passcode, PIN, or biometrics) to safeguard your local files and
                  database records from unauthorized access.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-text-primary text-lg font-bold">
                  5. No Cloud Data Transmission
                </h2>
                <p>
                  The application operates completely offline. There is no automated
                  synchronization, cloud backup, or remote data transfer. You are solely
                  responsible for managing your data. You can back up your inventory
                  database locally by exporting it as a JSON text backup under the
                  Settings menu, which you can save or share to another device manually.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-text-primary text-lg font-bold">
                  6. Data Deletion & Retention
                </h2>
                <p>
                  You retain full ownership and control over your local data. Since all
                  information is saved on-device, deleting or uninstalling the Application
                  from your mobile device will permanently purge all local databases, user
                  authentication records, and stock transactions.
                </p>
                <p>
                  If you want to clear your data without uninstalling the app, you can
                  restore a blank database or clear app data in your device's application
                  settings.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-text-primary text-lg font-bold">
                  7. Contact Information
                </h2>
                <p>
                  If you have any questions or require clarifications regarding this
                  Privacy Policy or local data handling, you can reach out directly:
                </p>
                <div className="w-fit rounded-xl border border-white/5 bg-white/5 p-4">
                  <p className="text-sm">
                    <strong>Developer Support:</strong> Zain Irfan
                  </p>
                  <p className="text-sm">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:zainirfan565@gmail.com"
                      className="text-brand-400 hover:underline"
                    >
                      zainirfan565@gmail.com
                    </a>
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
