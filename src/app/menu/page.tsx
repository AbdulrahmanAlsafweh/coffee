import type { Metadata } from "next";
import MenuClient from "@/app/menu/menu-client";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse the Qahwa Najd menu: Saudi qahwa rituals, espresso interpretations, cold brew, and Najdi-inspired dishes.",
};

export default function MenuPage() {
  return <MenuClient />;
}
