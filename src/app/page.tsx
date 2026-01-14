import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredItems } from "@/data/menu";
import { testimonials } from "@/data/testimonials";
import { media } from "@/data/media";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import { HeroActions } from "@/components/hero-actions";
import { buttonClasses } from "@/components/ui/button-classes";
import { CardamomIcon, DatesIcon, SaffronIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover Qahwa Najd, a premium Saudi specialty coffee portfolio blending Najdi ritual with modern roasting.",
};

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10">
      <section className="relative grid items-center gap-10 overflow-hidden rounded-[32px] p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="absolute inset-0 -z-10 rounded-[32px] bg-cream-50/70" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 rounded-[32px] bg-ornament opacity-40" aria-hidden="true" />

        <FadeIn className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-espresso-400">
            Qahwa Najd - Saudi Arabia
          </p>
          <h1 className="text-4xl font-semibold text-espresso-950 md:text-5xl lg:text-6xl">
            Saudi coffee culture refined into a modern, premium ritual.
          </h1>
          <p className="max-w-xl text-base text-espresso-600 md:text-lg">
            Crafted in Riyadh, Qahwa Najd celebrates Najdi hospitality with light roasts,
            aromatic spices, and ceremonial presentation.
          </p>
          <HeroActions />
        </FadeIn>

        <FadeIn className="relative flex items-center justify-center p-2 md:p-4">
          <div className="absolute -left-6 top-6 h-24 w-24 rounded-full border border-gold-500/40" />
          <Image
            src={media.hero}
            alt="Signature Saudi Qahwa service"
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
            eyebrow="Signature Ritual"
            title="Saudi Qahwa Experience"
            description="An elegant ritual shaped by cardamom, saffron, and dates - served with quiet ceremony."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Cardamom", icon: CardamomIcon },
            { title: "Saffron", icon: SaffronIcon },
            { title: "Dates", icon: DatesIcon },
          ].map((item) => (
            <FadeIn
              key={item.title}
              className="rounded-[24px] border border-sand-200 bg-cream-50 p-6 shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand-100 text-espresso-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-espresso-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-espresso-600">
                A refined aromatic note that defines the Najdi pour.
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured Selection"
          title="Curated signature drinks"
          description="A rotating edit of our most celebrated qahwa, espresso, and cold brew creations."
        />
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {featuredItems.map((item) => (
            <FadeIn
              key={item.id}
              className="min-w-[260px] snap-start rounded-[24px] border border-sand-200 bg-cream-50 p-5 shadow-card md:min-w-0"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={320}
                height={240}
                className="h-44 w-full rounded-[20px] object-cover"
              />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-base font-semibold text-espresso-950">
                  {item.name}
                </h3>
                <span className="text-sm font-semibold text-espresso-700">
                  SAR {item.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-espresso-600">{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-[32px] border border-sand-200 bg-cream-50 px-6 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Voices"
            title="Testimonials from Saudi coffee lovers"
            description="A few words from collaborators and community members who value the Najdi ritual."
          />
        </FadeIn>
        <div className="grid gap-5">
          {testimonials.map((testimonial) => (
            <FadeIn
              key={testimonial.name}
              className="rounded-[22px] border border-sand-200 bg-sand-50 p-5"
            >
              <p className="text-sm text-espresso-700">"{testimonial.quote}"</p>
              <div className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-espresso-400">
                {testimonial.name} - {testimonial.title}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn className="relative">
          <Image
            src={media.interior}
            alt="Qahwa Najd interior"
            width={520}
            height={380}
            className="rounded-[32px] shadow-soft"
          />
        </FadeIn>
        <FadeIn className="space-y-5">
          <SectionHeading
            eyebrow="Our Story"
            title="A portfolio brand rooted in Najdi hospitality"
            description="From sourcing to roasting, every detail honors Saudi culture while embracing modern elegance."
          />
          <Link
            href="/about"
            className={buttonClasses({ variant: "secondary", size: "md" })}
          >
            Discover the story
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
