"use client";

import { useState } from "react";
import { Button, ArrowIcon } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * ContactForm — minimal, three-field demo request.
 * Replace the `onSubmit` handler with a Server Action when wiring the backend.
 * Keys to watch: `aria-live` for the status, focus management, error display.
 */
export function ContactForm({ formId = "demo-form" }: { formId?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const email = (fd.get("email") || "").toString();
    if (!email.includes("@")) {
      setStatus("error");
      setError("Please use a real work email.");
      return;
    }

    // TODO: replace with a Server Action POST to your CRM.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-[14px] border border-[rgba(111,228,217,0.3)] bg-[var(--color-accent-glow)] p-7 text-[var(--color-text)]"
      >
        <p className="font-mono text-[11px] tracking-[0.12em] text-[var(--color-accent)]">
          THANK YOU
        </p>
        <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.012em]">
          We'll be in touch within 24 hours.
        </h3>
        <p className="mt-2 text-[14px] text-[var(--color-text-2)]">
          A senior product engineer will reach out — not a marketing form.
        </p>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={onSubmit}
      className="flex flex-col gap-5 rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-7"
    >
      <Field id="name" label="Your name" placeholder="Mira Voss" required />
      <Field id="email" type="email" label="Work email" placeholder="mira@operator.com" required />
      <Field
        id="message"
        label="What do you want to talk about?"
        placeholder="e.g. We're rolling out 4,000 5G sites in EMEA next year and want to evaluate Fieldforce against Sitetracker."
        textarea
      />
      <div
        aria-live="polite"
        className={cn(
          "min-h-[20px] text-[13.5px]",
          error ? "text-[var(--color-danger)]" : "text-transparent",
        )}
      >
        {error}
      </div>
      <div className="flex items-center gap-3">
        <Button
          asButton
          type="submit"
          disabled={status === "submitting"}
          trailingIcon={<ArrowIcon />}
          className={cn(status === "submitting" && "opacity-70")}
        >
          {status === "submitting" ? "Sending…" : "Book a demo"}
        </Button>
        <p className="text-[12px] text-[var(--color-text-3)]">
          Or email{" "}
          <a
            href="mailto:sales@fieldforce.com"
            className="text-[var(--color-accent)] underline-offset-[3px] hover:underline"
          >
            sales@fieldforce.com
          </a>
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required,
  textarea,
}: {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-[10px] border border-[var(--color-line)] bg-[var(--color-bg-base)] px-[14px] py-[12px] text-[14.5px] text-[var(--color-text)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-accent)] focus:outline-none";

  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-3)]">
        {label}
        {required && <span className="ml-1 text-[var(--color-accent)]">*</span>}
      </span>
      {textarea ? (
        <textarea id={id} name={id} placeholder={placeholder} rows={4} className={cls} required={required} />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={cls}
        />
      )}
    </label>
  );
}
