import Image from "next/image";
import Link from "next/link";
import { whyChooseUs, howItWorks, testimonials, serviceAreas, faqs as defaultFaqs, images, whatsappUrl, telUrl, px, site } from "@/data/site";
import { services } from "@/data/services";
import Icon, { WhatsAppIcon } from "./Icon";
import { Button, Container, SectionHeading, PlaceholderNote, Eyebrow } from "./ui";
import ServiceCard from "./ServiceCard";
import BeforeAfter from "./BeforeAfter";

/* ───────────────── Page hero (inner pages) ───────────────── */
export function PageHero({ eyebrow, title, text, image, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {image && (
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
      <div className="grain absolute inset-0 opacity-30" />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-navy-300">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span className="text-navy-500">/</span>
                  {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span className="text-teal-300">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">{text}</p>}
      </Container>
    </section>
  );
}

/* ───────────────── Services grid ───────────────── */
export function ServicesSection({ limit, heading = true }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="py-20 sm:py-28">
      <Container>
        {heading && (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our services"
              title="Cleaning services tailored to your space"
              text="From weekly upkeep to one-off deep cleans, choose the service that fits your home or workplace."
            />
            <Button href="/services" variant="outline" className="shrink-0">
              View all services <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
          </div>
        )}
        <div className={`${heading ? "mt-14" : ""} grid gap-6 sm:grid-cols-2 xl:grid-cols-4`}>
          {list.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────── Why choose us ───────────────── */
export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-50/60 py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={`Why choose ${site.name}`}
              title="Care in every corner, trust in every visit"
              text="We're a young company built on a simple idea: do the job properly, communicate clearly and treat every space as if it were our own."
            />
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src={images.aboutSecondary} alt="Cleaner wiping a wooden table" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-navy-950">Cleaning care that fits your space</p>
                <p className="mt-1 text-sm text-navy-500">Contact our team to discuss your cleaning needs.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:self-center">
            {whyChooseUs.map((f) => (
              <div key={f.title} className="rounded-3xl border border-navy-100 bg-white p-7 transition hover:shadow-[0_20px_50px_-30px_rgba(7,17,38,0.4)]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-600">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-950">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-500">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────── How it works ───────────────── */
export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
      <div className="grain absolute inset-0 opacity-30" />
      <div className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-teal-400/10 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          light
          align="center"
          eyebrow="How it works"
          title="Spotless in four simple steps"
          text="No complicated booking systems. Just a quick conversation and a clean you can count on."
        />
        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, i) => (
            <li key={step.title} className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
              <span className="font-display text-5xl text-teal-300/90">0{i + 1}</span>
              <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-300">{step.text}</p>
              {i < howItWorks.length - 1 && (
                <Icon name="arrowRight" className="absolute -right-5 top-12 hidden h-5 w-5 text-navy-500 lg:block" />
              )}
            </li>
          ))}
        </ol>
        <div className="mt-14 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/quote" size="lg">Get a Free Quote <Icon name="arrowRight" className="h-4 w-4" /></Button>
          <Button href={whatsappUrl()} external variant="ghostLight" size="lg"><WhatsAppIcon /> Ask on WhatsApp</Button>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────── Before & after ───────────────── */
export const beforeAfterItems = [
  { label: "Living room refresh", after: px(7167073, 1400), alt: "Living room" },
  { label: "Kitchen deep clean", after: px(7546566, 1400), alt: "Modern kitchen" },
  { label: "Sofa & carpet care", after: px(7587783, 1400), alt: "Grey sofa on carpet" },
  { label: "Move-out clean", after: px(8146213, 1400), alt: "Empty room with hardwood floor" },
];

export function BeforeAfterSection({ limit = 2 }) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Before & after"
            title={`See the ${site.name} difference`}
            text="Drag the slider to compare. Every clean follows a detailed checklist so results are consistent, visit after visit."
          />
          <Button href="/gallery" variant="outline" className="shrink-0">
            View gallery <Icon name="arrowRight" className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {beforeAfterItems.slice(0, limit).map((b) => (
            <BeforeAfter key={b.label} {...b} />
          ))}
        </div>
        <PlaceholderNote className="mt-8">
          Sample imagery: &quot;before&quot; views are simulated from stock photography. Replace with your own job photos before launch.
        </PlaceholderNote>
      </Container>
    </section>
  );
}

/* ───────────────── Testimonials ───────────────── */
export function Testimonials() {
  return (
    <section className="bg-navy-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title="Customer feedback"
          text="Replace these demo samples with verified feedback from your customers before publishing."
        />
        <div className="mt-5 flex justify-center">
          <PlaceholderNote>These are sample reviews for this demo, not verified customer feedback.</PlaceholderNote>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <figure
              key={t.name}
              className={`flex flex-col rounded-3xl p-8 ${i === 1 ? "bg-navy-900 text-white" : "border border-navy-100 bg-white"}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-teal-400">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Icon key={k} name="star" className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <Icon name="quote" className={`h-8 w-8 ${i === 1 ? "text-navy-600" : "text-navy-100"}`} strokeWidth={2.5} />
              </div>
              <blockquote className={`mt-6 flex-1 text-[17px] leading-relaxed ${i === 1 ? "text-navy-100" : "text-navy-700"}`}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className={`mt-8 flex items-center gap-3 border-t pt-6 ${i === 1 ? "border-white/10" : "border-navy-100"}`}>
                <span className={`grid h-11 w-11 place-items-center rounded-full font-semibold ${i === 1 ? "bg-teal-400 text-navy-950" : "bg-navy-100 text-navy-800"}`}>
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className={`block font-semibold ${i === 1 ? "text-white" : "text-navy-950"}`}>{t.name}</span>
                  <span className={`block text-sm ${i === 1 ? "text-navy-300" : "text-navy-400"}`}>{t.service} · {t.location}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────── Service areas ───────────────── */
export function ServiceAreas() {
  return (
    <section className="py-20 sm:py-28" id="service-areas">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Bareilly service area"
              title="Where we clean"
              text="Based in Civil Lines, we serve Bareilly, Uttar Pradesh. Contact us with your neighbourhood to confirm availability."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="navy">Check availability</Button>
              <Button href={telUrl()} variant="outline"><Icon name="phone" className="h-4 w-4" /> Call us</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {serviceAreas.map((a, i) => (
              <div
                key={a.code}
                className={`rounded-3xl border border-navy-100 p-6 ${i === 0 ? "sm:col-span-2 bg-gradient-to-br from-amber-50 to-white" : "bg-white"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-xs font-bold tracking-wider text-amber-300">{a.code}</span>
                  <h3 className="text-lg font-semibold text-navy-950">{a.country}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {a.cities.map((c) => (
                    <li key={c} className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-3 py-1.5 text-sm text-navy-600">
                      <Icon name="pin" className="h-3.5 w-3.5 text-teal-500" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────── FAQ ───────────────── */
export function FAQ({ items = defaultFaqs, title = "Frequently asked questions", eyebrow = "FAQ", withCta = true }) {
  return (
    <section className="bg-navy-50/60 py-20 sm:py-28" id="faq">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={eyebrow} title={title} text="Can't find what you're looking for? We're happy to help." />
            {withCta && (
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={whatsappUrl("Namaste! I have a question for Sagar Deep Cleaning Service.")} external variant="whatsapp">
                  <WhatsAppIcon /> Ask on WhatsApp
                </Button>
              </div>
            )}
          </div>
          <div className="space-y-3 lg:col-span-8">
            {items.map((f, i) => (
              <details key={f.q} className="group rounded-2xl border border-navy-100 bg-white px-6 open:shadow-[0_20px_50px_-35px_rgba(7,17,38,0.5)]" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-navy-950">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-700 transition group-open:rotate-45 group-open:bg-teal-400 group-open:text-navy-950">
                    <Icon name="plus" className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </summary>
                <p className="pb-6 pr-10 leading-relaxed text-navy-500">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────── Final CTA ───────────────── */
export function FinalCTA({ title = "Ready for a cleaner, calmer space?", text = "Get a free, no-obligation quote in minutes. Tell us what you need and we'll take care of the rest." }) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
          <Image src={images.cta} alt="" fill sizes="100vw" className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/60" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
              <p className="mt-5 max-w-xl text-lg text-navy-200">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Button href="/quote" size="lg">Get a Free Quote <Icon name="arrowRight" className="h-4 w-4" /></Button>
              <Button href={whatsappUrl()} external variant="whatsapp" size="lg"><WhatsAppIcon /> WhatsApp</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
