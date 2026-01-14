"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  message: "",
};

export default function ContactClient() {
  const { t, isRTL } = useLanguage();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  function validate(values: FormState) {
    const nextErrors: Partial<FormState> = {};
    if (values.name.trim().length < 2) {
      nextErrors.name = t.contact.errors.name;
    }
    if (!/^\\+?[0-9\\s-]{7,}$/.test(values.phone)) {
      nextErrors.phone = t.contact.errors.phone;
    }
    if (values.message.trim().length < 10) {
      nextErrors.message = t.contact.errors.message;
    }
    return nextErrors;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setStatus(t.contact.statusSuccess);
      setForm(initialState);
    } else {
      setStatus(null);
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText("+966 11 555 8822");
      setToast(t.contact.toastCopied);
    } catch {
      setToast(t.contact.toastFailed);
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 md:px-10">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-sand-200 bg-cream-50 p-6 shadow-card md:p-8">
          <form onSubmit={handleSubmit} className={cn("space-y-5", isRTL && "text-right")}>
            <div>
              <label
                htmlFor="contact-name"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso-400"
              >
                {t.contact.name}
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(event) => handleChange("name", event.target.value)}
                className="mt-2 w-full rounded-full border border-sand-200 bg-sand-50 px-4 py-2 text-sm text-espresso-800 focus:border-espresso-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <p id="name-error" className="mt-2 text-xs text-espresso-600">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso-400"
              >
                {t.contact.phone}
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(event) => handleChange("phone", event.target.value)}
                className="mt-2 w-full rounded-full border border-sand-200 bg-sand-50 px-4 py-2 text-sm text-espresso-800 focus:border-espresso-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone ? (
                <p id="phone-error" className="mt-2 text-xs text-espresso-600">
                  {errors.phone}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso-400"
              >
                {t.contact.message}
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={form.message}
                onChange={(event) => handleChange("message", event.target.value)}
                className="mt-2 w-full rounded-[20px] border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-espresso-800 focus:border-espresso-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-xs text-espresso-600">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <Button type="submit" variant="primary" className="w-full">
              {t.contact.submit}
            </Button>
            {status ? (
              <p className="text-xs text-espresso-600" role="status" aria-live="polite">
                {status}
              </p>
            ) : null}
          </form>
        </div>

        <div className="space-y-6">
          <div
            className={cn(
              "rounded-[28px] border border-sand-200 bg-sand-50 p-6 shadow-card",
              isRTL && "text-right"
            )}
          >
            <div className="space-y-3 text-sm text-espresso-600">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-espresso-400">
                {t.contact.storeInfo}
              </p>
              <p>{t.contact.address}</p>
              <div className={cn("flex flex-wrap items-center gap-3", isRTL && "justify-end")}>
                <span>+966 11 555 8822</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-full border border-sand-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-espresso-600 hover:border-espresso-400"
                >
                  {t.contact.copy}
                </button>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "rounded-[28px] border border-sand-200 bg-cream-50 p-6 shadow-card",
              isRTL && "text-right"
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-espresso-400">
              {t.contact.hours}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-espresso-600">
              {t.contact.hoursList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 right-6 z-50 rounded-full bg-espresso-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 shadow-card"
            role="status"
            aria-live="polite"
          >
            {toast}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
