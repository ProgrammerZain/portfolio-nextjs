import type { ContactFormData } from "@/types";

export type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}
