import { validateContactForm } from "@/lib/validation";
import { ContactSubmissionError } from "@/lib/contact-errors";
import type { ContactFormData } from "@/types";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const errors = validateContactForm(data);

  if (Object.keys(errors).length > 0) {
    throw new ContactSubmissionError("Please fix the highlighted fields.");
  }

  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY ?? process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new ContactSubmissionError(
      "Form is not configured. Missing Web3Forms access key.",
    );
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New portfolio message from ${data.name}`,
      from_name: data.name,
      ...data,
    }),
  });

  const result: { success?: boolean; message?: string } = await response.json();

  if (!response.ok || !result.success) {
    throw new ContactSubmissionError(
      result.message ?? "Something went wrong. Please try again.",
    );
  }
}
