"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) {
      setStatus("Please enter a valid email.");
      return;
    }
    setStatus("Thanks for subscribing. We'll keep you posted.");
    setEmail("");
  }

  return (
    <footer className="relative mt-20 border-t border-sand-200/70 bg-sand-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div className={cn("space-y-4", isRTL && "text-right")}>
          <p className="text-lg font-semibold text-espresso-950">Qahwa Najd</p>
          <p className="text-sm text-espresso-600">
            Specialty Saudi coffee portfolio highlighting cultural rituals, modern craft, and
            sensory hospitality.
          </p>
        </div>

        <div className={cn("space-y-3 text-sm", isRTL && "text-right")}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-espresso-400">
            Quick Links
          </p>
          <div className="flex flex-col gap-2">
            <Link href="/about" className="text-espresso-600 hover:text-espresso-950">
              {t.nav.about}
            </Link>
            <Link href="/menu" className="text-espresso-600 hover:text-espresso-950">
              {t.nav.menu}
            </Link>
            <Link href="/gallery" className="text-espresso-600 hover:text-espresso-950">
              {t.nav.gallery}
            </Link>
            <Link href="/contact" className="text-espresso-600 hover:text-espresso-950">
              {t.nav.contact}
            </Link>
          </div>
        </div>

        <div className={cn("space-y-4", isRTL && "text-right")}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-espresso-400">
            Newsletter
          </p>
          <p className="text-sm text-espresso-600">
            Join the Qahwa Najd circle for seasonal roasts and cultural events.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              aria-label="Email address"
              className="w-full rounded-full border border-sand-200 bg-cream-50 px-4 py-2 text-sm text-espresso-800 focus:border-espresso-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
            />
            <Button type="submit" variant="secondary" className="w-full">
              Subscribe
            </Button>
            {status ? (
              <p className="text-xs text-espresso-600" role="status" aria-live="polite">
                {status}
              </p>
            ) : null}
          </form>
        </div>
      </div>

      <div className="border-t border-sand-200/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-espresso-500 md:flex-row md:px-10">
          <span>© 2026 Qahwa Najd. Saudi Arabia.</span>
          <a
            href="https://wa.me/96181309837"
            className="font-semibold text-espresso-600 hover:text-espresso-950"
            aria-label="Developed by abdulrahman.dev on WhatsApp"
          >
            Developed by abdulrahman.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
