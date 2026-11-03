import Image from "next/image";
import Link from "next/link";
import { images, whatsappUrl, telUrl, site } from "@/data/site";
import { services } from "@/data/services";
import Icon, { WhatsAppIcon } from "@/components/Icon";
import { Button, Container } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/data/site";
import {
  ServicesSection,
  WhyChooseUs,
  HowItWorks,
  BeforeAfterSection,
  Testimonials,
  ServiceAreas,
  FAQ,
  FinalCTA,
} from "@/components/sections";

export const metadata = {
  title: { absolute: `Professional Cleaning Services You Can Trust | ${site.name}` },
  description:
    "Trusted house, deep, office, sofa, carpet, bathroom, kitchen and move-in/move-out cleaning. Vetted cleaners, upfront quotes and a 24-hour re-clean promise. Get a free quote today.",
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 hidden w-[44%] bg-navy-50 lg:block" />
      <Container className="relative grid items-center gap-14 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-700">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            Home &amp; office cleaning · Now taking bookings
          </p>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] tracking-tight text-navy-950 sm:text-6xl lg:text-[4.25rem]">
            Professional Cleaning Services <span className="relative whitespace-nowrap text-teal-600">You Can Trust<svg className="absolute -bottom-2 left-0 h-3 w-full text-teal-300" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9c40-6 120-8 196-3" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg></span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-500">
            Vetted, friendly cleaners who show up on time, follow a detailed checklist and leave your home or office
            truly spotless. Clear quotes, flexible scheduling and a 24-hour re-clean promise.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/quote" variant="navy" size="lg">
              Get a Free Quote <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button href={whatsappUrl()} external variant="whatsapp" size="lg">
              <WhatsAppIcon /> Chat on WhatsApp
            </Button>
          </div>

          <ul className="mt-10 grid max-w-lg grid-cols-1 gap-3 text-sm text-navy-600 sm:grid-cols-3">
            {[
              ["shield", "Vetted cleaners"],
              ["tag", "Upfront pricing"],
              ["calendar", "Flexible slots"],
            ].map(([icon, label]) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-50 text-navy-800">
                  <Icon name={icon} className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-xl lg:ml-auto lg:mr-0">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(7,17,38,0.55)]">
              <Image
                src={images.hero}
                alt="SparkleCare professional cleaner vacuuming a modern living room"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-4 hidden w-40 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-left-12 lg:w-48">
              <div className="relative aspect-[3/4]">
                <Image src={images.heroAlt} alt="Smiling SparkleCare cleaner holding supplies" fill sizes="200px" className="object-cover" />
              </div>
            </div>
            <div className="absolute -right-2 top-6 rounded-2xl bg-white p-4 shadow-xl sm:-right-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-400 text-navy-950">
                  <Icon name="sparkles" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-950">8 cleaning services</p>
                  <p className="text-xs text-navy-400">Homes &amp; offices</p>
                </div>
              </div>
            </div>
            <a
              href={telUrl()}
              className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-navy-900 px-5 py-4 text-white shadow-xl transition hover:bg-navy-800 sm:right-8"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                <Icon name="phone" className="h-4 w-4 text-teal-300" />
              </span>
              <span>
                <span className="block text-xs text-navy-300">Call for a quote</span>
                <span className="block text-sm font-semibold">{site.contact.phoneDisplay}</span>
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceStrip() {
  return (
    <div className="border-y border-navy-100 bg-white">
      <Container className="flex gap-8 overflow-x-auto py-5 [scrollbar-width:none] lg:justify-between">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="flex shrink-0 items-center gap-2 text-sm font-medium text-navy-500 transition hover:text-navy-950">
            <Icon name={s.icon} className="h-4 w-4 text-teal-500" />
            {s.name}
          </Link>
        ))}
      </Container>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceStrip />
      <ServicesSection limit={8} />
      <WhyChooseUs />
      <HowItWorks />
      <BeforeAfterSection limit={2} />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
      <JsonLd data={faqSchema} />
    </>
  );
}
