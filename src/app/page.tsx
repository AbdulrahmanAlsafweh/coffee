import type { Metadata } from "next";
import HomeClient from "@/app/home-client";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover Qahwa Najd, a premium Saudi specialty coffee portfolio blending Najdi ritual with modern roasting.",
};

export default function Home() {
  return <HomeClient />;
}
