import { site, images, telUrl, mailUrl, mapsUrl, whatsappUrl, fullAddress } from "@/data/site";
import Icon, { WhatsAppIcon } from "@/components/Icon";
import { Container, PlaceholderNote, Button } from "@/components/ui";
import { PageHero, ServiceAreas, FAQ } from "@/components/sections";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} in Bareilly by phone, WhatsApp or email. Get answers about our cleaning services or request a quote.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  { icon: "phone", label: "Call us", value: site.contact.phoneDisplay, href: telUrl(), cta: "Call now" },
  { icon: "whatsapp", label: "WhatsApp", value: "Chat with our team", href: whatsappUrl(), cta: "Open chat", external: true },
  { icon: "mail", label: "Email", value: site.contact.email, href: mailUrl(), cta: "Send email" },
  { icon: "pin", label: "Visit / Map", value: fullAddress(), href: mapsUrl(), cta: "Open in Google Maps", external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's make your space shine"
        text="For cleaning enquiries and booking availability in Bareilly, call or message our team."
        image={images.heroAlt}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="relative -mt-12 pb-8">
        <Container className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group rounded-3xl border border-navy-100 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(7,17,38,0.5)] transition hover:-translate-y-1 hover:border-teal-300"
            >
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${c.icon === "whatsapp" ? "bg-[#25D366]/10 text-[#1a9e4b]" : "bg-teal-50 text-teal-600"}`}>
                {c.icon === "whatsapp" ? <WhatsAppIcon className="h-6 w-6" /> : <Icon name={c.icon} className="h-6 w-6" />}
              </span>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-navy-400">{c.label}</p>
              <p className="mt-1 break-words font-semibold text-navy-950">{c.value}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600">
                {c.cta} <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </Container>
        <Container>
          <PlaceholderNote className="mt-6">
            The email address is a demo placeholder. Phone and address details are set for this Bareilly demo.
          </PlaceholderNote>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-navy-100 p-7 sm:p-10">
              <h2 className="font-display text-3xl text-navy-950">Send us a message</h2>
              <p className="mt-2 text-navy-500">Fill in the form and choose how you&apos;d like to send it — email or WhatsApp.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-[2rem] bg-navy-900 p-8 text-white">
              <h2 className="font-display text-2xl">Booking availability</h2>
              <ul className="mt-6 divide-y divide-white/10">
                {site.contact.hours.map((h) => (
                  <li key={h.days} className="flex justify-between py-3 text-sm">
                    <span className="text-navy-300">{h.days}</span>
                    <span className="font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-navy-400">Please call or WhatsApp to confirm current booking availability.</p>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-teal-50 to-white p-8 ring-1 ring-teal-100">
              <h2 className="font-display text-2xl text-navy-950">Need a price?</h2>
              <p className="mt-2 text-navy-600">Our quote form takes under a minute and lets you pick your exact service.</p>
              <Button href="/quote" variant="navy" className="mt-6">
                Get a Free Quote <Icon name="arrowRight" className="h-4 w-4" />
              </Button>
            </div>
            <a
              href={mapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-[2rem] border border-navy-100 bg-navy-50 p-8"
              aria-label="Open our location in Google Maps"
            >
              <svg className="absolute inset-0 h-full w-full text-navy-100" aria-hidden="true">
                <defs>
                  <pattern id="map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M32 0H0v32" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
                <path d="M-10 120 Q 120 60 220 140 T 460 90" stroke="#c3cfe6" strokeWidth="10" fill="none" />
              </svg>
              <div className="relative flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-teal-300 shadow-lg transition group-hover:scale-110">
                  <Icon name="pin" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold text-navy-950">{fullAddress()}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                    Open in Google Maps <Icon name="arrowRight" className="h-4 w-4" />
                  </p>
                </div>
              </div>
            </a>
          </aside>
        </Container>
      </section>

      <ServiceAreas />
      <FAQ />
    </>
  );
}
