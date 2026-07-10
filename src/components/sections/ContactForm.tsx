"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { TextField } from "@mui/material";
import type { ContactFormData, SubmissionStatus } from "@/types";
import { validateContactForm, type FormErrors } from "@/lib/validation";
import { submitContactForm } from "@/services/contact";
import { ContactSubmissionError } from "@/lib/contact-errors";
import { cardSurfaceClass } from "@/lib/card-surface";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

const INITIAL_DATA: ContactFormData = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitContactForm(formData);
      setStatus("success");
      setFormData(INITIAL_DATA);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof ContactSubmissionError
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <GlassCard className={cn(cardSurfaceClass(true), "flex h-full flex-col gap-3 p-8")}>
        <CheckCircle2 className="text-brand-400" size={40} />
        <p className="text-lg font-bold">Message sent</p>
        <p className="text-text-secondary text-sm">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStatus("idle")}
          className="mt-2 w-fit"
        >
          Send another message
        </Button>
      </GlassCard>
    );
  }

  return (
    <GlassCard className={cn(cardSurfaceClass(), "h-full")}>
      <h3 className="text-xl font-bold">Send a message</h3>
      <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-5">
        <TextField
          label="Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          disabled={status === "loading"}
          fullWidth
          slotProps={{ inputLabel: { sx: { color: "var(--color-text-secondary)" } } }}
        />

        <TextField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          disabled={status === "loading"}
          fullWidth
        />

        <TextField
          label="Message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          error={!!errors.message}
          helperText={errors.message}
          disabled={status === "loading"}
          fullWidth
          multiline
          rows={5}
        />

        <AnimatePresence>
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400"
            >
              <XCircle size={16} />
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <Button type="submit" size="lg" disabled={status === "loading"} className="mt-2">
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </GlassCard>
  );
}
