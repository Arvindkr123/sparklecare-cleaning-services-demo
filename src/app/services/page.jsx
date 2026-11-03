import Image from "next/image";
import { images, site } from "@/data/site";
import { services } from "@/data/services";
import Icon from "@/components/Icon";
import { Container, Button } from "@/components/ui";
import { PageHero, HowItWorks, FAQ, FinalCTA } from "@/components/sections";

export const metadata = {
  title: "Our Cleaning Services",
  description:
    `Explore ${site.name}'s cleaning services in Bareilly: house cleaning, deep cleaning, office cleaning, sofa, carpet, bathroom, kitchen and move-in/move-out cleaning.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Professional cleaning for every space"
        text="Eight specialist services, one consistent standard. Pick the clean you need — or tell us about your space and we'll recommend the right fit."
        image={images.hero}
        crumbs={[{ label: "Services" }]}
      />

      <section className="py-20 sm:py-28">
        <Container className="space-y-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="group grid overflow-hidden rounded-[2rem] border border-navy-100 bg-white transition hover:shadow-[0_30px_60px_-35px_rgba(7,17,38,0.4)] md:grid-cols-12"
            >
              <div className={`relative aspect-[16/10] md:col-span-5 md:aspect-auto md:min-h-[320px] ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 md:col-span-7 lg:p-12">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-600">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-navy-300">0{i + 1}</span>
                </div>
                <h2 className="mt-5 font-display text-3xl text-navy-950">{s.name}</h2>
                <p className="mt-3 max-w-xl leading-relaxed text-navy-500">{s.intro}</p>
                <ul className="mt-6 grid gap-2 text-sm text-navy-600 sm:grid-cols-2">
                  {s.includes.slice(0, 4).map((inc) => (
                    <li key={inc} className="flex gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" strokeWidth={2.5} />
                      {inc}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={`/services/${s.slug}`} variant="navy">
                    View details <Icon name="arrowRight" className="h-4 w-4" />
                  </Button>
                  <Button href={`/quote?service=${s.slug}`} variant="outline">Get a quote</Button>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <HowItWorks />
      <FAQ />
      <FinalCTA title="Not sure which service you need?" text={`Tell us about your space and ${site.name} will recommend the right clean — free and with no obligation.`} />
    </>
  );
}
