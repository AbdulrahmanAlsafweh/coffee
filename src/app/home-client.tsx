"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredItems } from "@/data/menu";
import { testimonials } from "@/data/testimonials";
import { media } from "@/data/media";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import { HeroActions } from "@/components/hero-actions";
import { buttonClasses } from "@/components/ui/button-classes";
import { CardamomIcon, DatesIcon, SaffronIcon } from "@/components/icons";
// 
export default function HomeClient() {
  const { t, lang } = useLanguage();

  const signatureCards = [
    { key: "cardamom", icon: CardamomIcon },
    { key: "saffron", icon: SaffronIcon },
    { key: "dates", icon: DatesIcon },
  ] as const;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10">
      <section className="relative grid items-center gap-10 overflow-hidden rounded-[32px] p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="absolute inset-0 -z-10 rounded-[32px] bg-cream-50/70" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 rounded-[32px] bg-ornament opacity-40" aria-hidden="true" />

        <FadeIn className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-espresso-400">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold text-espresso-950 md:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="max-w-xl text-base text-espresso-600 md:text-lg">
            {t.hero.description}
          </p>
          <HeroActions />
        </FadeIn>

        <FadeIn className="relative flex items-center justify-center p-2 md:p-4">
          <div className="absolute -left-6 top-6 h-24 w-24 rounded-full border border-gold-500/40" />
          <Image
            src={media.hero}
            alt={t.hero.heroAlt}
            width={520}
            height={520}
            className="rounded-[32px] object-cover shadow-soft"
            priority
          />
        </FadeIn>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <FadeIn>
          <SectionHeading
            eyebrow={t.home.signature.eyebrow}
            title={t.home.signature.title}
            description={t.home.signature.description}
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {signatureCards.map((item) => (
            <FadeIn
              key={item.key}
              className="rounded-[24px] border border-sand-200 bg-cream-50 p-6 shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand-100 text-espresso-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-espresso-950">
                {t.home.signature.cards[item.key].title}
              </h3>
              <p className="mt-2 text-sm text-espresso-600">
                {t.home.signature.cards[item.key].description}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow={t.home.featured.eyebrow}
          title={t.home.featured.title}
          description={t.home.featured.description}
        />
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {featuredItems.map((item) => {
            const name = lang === "ar" ? item.nameAr : item.name;
            const description = lang === "ar" ? item.descriptionAr : item.description;
            return (
              <FadeIn
                key={item.id}
                className="min-w-[260px] snap-start rounded-[24px] border border-sand-200 bg-cream-50 p-5 shadow-card md:min-w-0"
              >
                <Image
                  src={item.image}
                  alt={name}
                  width={320}
                  height={240}
                  className="h-44 w-full rounded-[20px] object-cover"
                />
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-espresso-950">{name}</h3>
                  <span className="text-sm font-semibold text-espresso-700">
                    {t.common.currency} {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-espresso-600">{description}</p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="grid gap-8 rounded-[32px] border border-sand-200 bg-cream-50 px-6 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <FadeIn>
          <SectionHeading
            eyebrow={t.home.testimonials.eyebrow}
            title={t.home.testimonials.title}
            description={t.home.testimonials.description}
          />
        </FadeIn>
        <div className="grid gap-5">
          {testimonials.map((testimonial) => {
            const quote = lang === "ar" ? testimonial.quoteAr : testimonial.quote;
            const name = lang === "ar" ? testimonial.nameAr : testimonial.name;
            const title = lang === "ar" ? testimonial.titleAr : testimonial.title;
            return (
              <FadeIn
                key={testimonial.name}
                className="rounded-[22px] border border-sand-200 bg-sand-50 p-5"
              >
                <p className="text-sm text-espresso-700">"{quote}"</p>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-espresso-400">
                  {name} - {title}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn className="relative">
          <Image
            src={media.interior}
            alt={t.home.story.interiorAlt}
            width={520}
            height={380}
            className="rounded-[32px] shadow-soft"
          />
        </FadeIn>
        <FadeIn className="space-y-5">
          <SectionHeading
            eyebrow={t.home.story.eyebrow}
            title={t.home.story.title}
            description={t.home.story.description}
          />
          <Link href="/about" className={buttonClasses({ variant: "secondary", size: "md" })}>
            {t.home.story.cta}
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
