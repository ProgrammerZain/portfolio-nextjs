import type { ContactFormData } from "@/types";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export class ContactSubmissionError extends Error {}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

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
      email: data.email,
      message: data.message,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new ContactSubmissionError(
      result.message ?? "Something went wrong. Please try again.",
    );
  }
}
