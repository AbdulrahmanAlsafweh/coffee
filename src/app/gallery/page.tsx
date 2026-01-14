import type { Metadata } from "next";
import GalleryClient from "@/app/gallery/gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the Qahwa Najd gallery featuring Saudi coffee rituals, Najdi interiors, and artisan details.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
