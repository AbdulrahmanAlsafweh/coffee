import type { Metadata } from "next";
import AboutClient from "@/app/about/about-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Qahwa Najd, our Najdi roots, sourcing philosophy, and the team crafting Saudi coffee rituals.",
};

export default function AboutPage() {
  return <AboutClient />;
}
