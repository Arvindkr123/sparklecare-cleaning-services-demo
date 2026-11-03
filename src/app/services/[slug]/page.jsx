import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import { site, whatsappUrl, telUrl } from "@/data/site";
import Icon, { WhatsAppIcon } from "@/components/Icon";
import { Container, SectionHeading, CheckItem, Button } from "@/components/ui";
import { PageHero, FAQ, FinalCTA, ServiceAreas } from "@/components/sections";
import QuoteForm from "@/components/QuoteForm";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} Services`,
    description: `${s.short} Book professional ${s.name.toLowerCase()} with ${site.name} — vetted cleaners, upfront quotes and a 24-hour re-clean promise.`,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.name} | ${site.name}`, description: s.short, images: [{ url: s.image, alt: s.imageAlt }] },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const waMsg = `Hi SparkleCare! I'd like a quote for ${service.name}.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} by ${site.name}`,
    description: service.intro,
    provider: { "@type": "HouseCleaningService", name: site.name, url: site.url, telephone: site.contact.phoneHref },
    url: `${site.url}/services/${service.slug}`,
    image: service.image,
  };

  return (
    <>
      <PageHero
        eyebrow="Service details"
        title={service.name}
        text={service.short}
        image={service.image}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.name }]}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
              <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
            </div>

            <h2 className="mt-12 font-display text-3xl text-navy-950 sm:text-4xl">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-500">{service.intro}</p>

            <h2 className="mt-12 font-display text-3xl text-navy-950">What&apos;s included</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.includes.map((i) => (
                <CheckItem key={i}>{i}</CheckItem>
              ))}
            </ul>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-navy-100 p-6">
                <Icon name="clock" className="h-6 w-6 text-teal-500" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-navy-400">Typical duration</p>
                <p className="mt-1 text-navy-900">{service.duration}</p>
              </div>
              <div className="rounded-3xl border border-navy-100 p-6">
                <Icon name="repeat" className="h-6 w-6 text-teal-500" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-navy-400">Frequency</p>
                <p className="mt-1 text-navy-900">{service.frequency}</p>
              </div>
            </div>

            <h2 className="mt-12 font-display text-3xl text-navy-950">Ideal for</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {service.idealFor.map((x) => (
                <li key={x} className="rounded-full bg-navy-50 px-4 py-2 text-sm font-medium text-navy-700">{x}</li>
              ))}
            </ul>

            <div className="mt-12 rounded-3xl bg-teal-50 p-8">
              <h3 className="font-display text-2xl text-navy-950">Pricing</h3>
              <p className="mt-3 leading-relaxed text-navy-600">
                Every space is different, so we price {service.name.toLowerCase()} based on size, condition and any
                add-ons you need. Request a free quote and you&apos;ll receive a clear, written price before any work begins.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-[2rem] border border-navy-100 bg-white p-7 shadow-[0_30px_60px_-40px_rgba(7,17,38,0.5)] sm:p-8">
                <h2 className="font-display text-2xl text-navy-950">Get a free quote</h2>
                <p className="mt-2 text-sm text-navy-500">No obligation. We usually reply within a few business hours.</p>
                <div className="mt-6">
                  <QuoteForm defaultService={service.slug} compact />
                </div>
              </div>
              <div className="rounded-[2rem] bg-navy-900 p-7 text-white">
                <p className="font-semibold">Prefer to talk?</p>
                <p className="mt-1 text-sm text-navy-300">Speak to our team directly.</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Button href={whatsappUrl(waMsg)} external variant="whatsapp"><WhatsAppIcon /> WhatsApp</Button>
                  <Button href={telUrl()} variant="ghostLight"><Icon name="phone" className="h-4 w-4" /> Call now</Button>
                </div>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <FAQ items={service.faqs} title={`${service.name} FAQs`} />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Related services" title="You might also need" />
            <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-teal-600">
              All services <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <ServiceAreas />
      <FinalCTA title={`Book your ${service.name.toLowerCase()} today`} />
      <JsonLd data={schema} />
    </>
  );
}
