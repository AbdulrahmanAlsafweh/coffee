import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import {
  CraftIcon,
  GatheringIcon,
  HeritageIcon,
  SourcingIcon,
} from "@/components/icons";
import { team, timeline, values } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Qahwa Najd, our Najdi roots, sourcing philosophy, and the team crafting Saudi coffee rituals.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeIn className="space-y-6">
          <SectionHeading
            eyebrow="Our Heritage"
            title="Najdi hospitality, poured with intention"
            description="Qahwa Najd is a portfolio brand rooted in Saudi Arabia, crafted to honor heritage rituals through modern specialty coffee."
          />
          <div className="space-y-4 text-sm text-espresso-600">
            <p>
              We source bright, lightly roasted beans and blend them with cardamom,
              saffron, and subtle smoke notes inspired by the Najd region.
            </p>
            <p>
              Our roasting philosophy emphasizes clarity and aroma, preserving the delicate
              spice trail that makes Saudi qahwa unmistakable.
            </p>
            <p>
              Every detail — from the dallah to the date tray — is designed to feel
              ceremonial, refined, and unmistakably Saudi.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="relative">
          <Image
            src="/images/gallery-2.svg"
            alt="Saudi coffee hospitality setup"
            width={520}
            height={520}
            className="rounded-[32px] shadow-soft"
          />
        </FadeIn>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Timeline"
          title="From Najdi roots to modern ritual"
          description="The milestones that shaped the Qahwa Najd experience."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {timeline.map((item, index) => (
            <FadeIn
              key={item.year}
              delay={index * 0.12}
              className="rounded-[24px] border border-sand-200 bg-cream-50 p-6 shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-espresso-400">
                {item.year}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-espresso-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-espresso-600">{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Values"
          title="Principles that guide every pour"
          description="A balance of heritage, craftsmanship, and human connection."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const icons = [HeritageIcon, CraftIcon, SourcingIcon, GatheringIcon];
            const Icon = icons[index % icons.length];
            return (
              <FadeIn
                key={value.title}
                className="rounded-[24px] border border-sand-200 bg-cream-50 p-6 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand-100 text-espresso-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-espresso-950">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-espresso-600">{value.description}</p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Team"
          title="The minds behind the ritual"
          description="A small group of Saudi creatives crafting a premium coffee identity."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <FadeIn
              key={member.name}
              className="rounded-[24px] border border-sand-200 bg-cream-50 p-6 shadow-card"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={320}
                height={320}
                className="h-48 w-full rounded-[20px] object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-espresso-950">
                {member.name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso-400">
                {member.role}
              </p>
              <p className="mt-2 text-sm text-espresso-600">{member.bio}</p>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
