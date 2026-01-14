"use client";

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
import { media } from "@/data/media";
import { useLanguage } from "@/components/language-provider";

export default function AboutClient() {
  const { t, lang } = useLanguage();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeIn className="space-y-6">
          <SectionHeading
            eyebrow={t.about.intro.eyebrow}
            title={t.about.intro.title}
            description={t.about.intro.description}
          />
          <div className="space-y-4 text-sm text-espresso-600">
            {t.about.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="relative">
          <Image
            src={media.about}
            alt={t.about.intro.imageAlt}
            width={520}
            height={520}
            className="rounded-[32px] shadow-soft"
          />
        </FadeIn>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow={t.about.timeline.eyebrow}
          title={t.about.timeline.title}
          description={t.about.timeline.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {timeline.map((item, index) => {
            const title = lang === "ar" ? item.titleAr : item.title;
            const description = lang === "ar" ? item.descriptionAr : item.description;
            return (
              <FadeIn
                key={item.year}
                delay={index * 0.12}
                className="rounded-[24px] border border-sand-200 bg-cream-50 p-6 shadow-card"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-espresso-400">
                  {item.year}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-espresso-950">{title}</h3>
                <p className="mt-2 text-sm text-espresso-600">{description}</p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow={t.about.values.eyebrow}
          title={t.about.values.title}
          description={t.about.values.description}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const icons = [HeritageIcon, CraftIcon, SourcingIcon, GatheringIcon];
            const Icon = icons[index % icons.length];
            const title = lang === "ar" ? value.titleAr : value.title;
            const description = lang === "ar" ? value.descriptionAr : value.description;
            return (
              <FadeIn
                key={value.title}
                className="rounded-[24px] border border-sand-200 bg-cream-50 p-6 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand-100 text-espresso-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-espresso-950">{title}</h3>
                <p className="mt-2 text-sm text-espresso-600">{description}</p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow={t.about.team.eyebrow}
          title={t.about.team.title}
          description={t.about.team.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => {
            const name = lang === "ar" ? member.nameAr : member.name;
            const role = lang === "ar" ? member.roleAr : member.role;
            const bio = lang === "ar" ? member.bioAr : member.bio;
            return (
              <FadeIn
                key={member.name}
                className="rounded-[24px] border border-sand-200 bg-cream-50 p-6 shadow-card"
              >
                <Image
                  src={member.image}
                  alt={name}
                  width={320}
                  height={320}
                  className="h-48 w-full rounded-[20px] object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold text-espresso-950">{name}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso-400">
                  {role}
                </p>
                <p className="mt-2 text-sm text-espresso-600">{bio}</p>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
