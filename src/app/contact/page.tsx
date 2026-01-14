import type { Metadata } from "next";
import ContactClient from "@/app/contact/contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Qahwa Najd for Saudi coffee collaborations, events, and portfolio inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
