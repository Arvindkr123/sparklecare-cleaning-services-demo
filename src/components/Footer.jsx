import Link from "next/link";
import { site, navLinks, telUrl, mailUrl, mapsUrl, whatsappUrl, fullAddress } from "@/data/site";
import { services } from "@/data/services";
import Icon, { WhatsAppIcon } from "./Icon";
import { Container } from "./ui";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="grain pointer-events-none absolute inset-0 opacity-40" />
      <Container className="relative">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm leading-relaxed text-navy-300">
              {site.tagline} Contact us for home and office cleaning in Bareilly.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                ["facebook", "Facebook", "M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z"],
                ["instagram", "Instagram", "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-1.5h.01"],
                ["linkedin", "LinkedIn", "M4 9h4v12H4zM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4 6h4v2c.6-1.1 2-2.2 4-2.2 3.5 0 4 2.3 4 5.2v7h-4v-6c0-1.5 0-3.2-2-3.2s-2 1.5-2 3.1V21h-4z"],
              ].map(([key, label, d]) => (
                <a
                  key={key}
                  href={site.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-navy-200 transition hover:border-teal-400 hover:text-teal-300"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Company</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-teal-300">{l.label}</Link>
                </li>
              ))}
              <li><Link href="/quote" className="transition hover:text-teal-300">Get a Quote</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition hover:text-teal-300">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Get in touch</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={telUrl()} className="flex items-start gap-3 transition hover:text-teal-300">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 text-teal-400" /> {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition hover:text-teal-300">
                  <WhatsAppIcon className="mt-0.5 h-4 w-4 text-teal-400" /> Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={mailUrl()} className="flex items-start gap-3 break-all transition hover:text-teal-300">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" /> {site.contact.email}
                </a>
              </li>
              <li>
                <a href={mapsUrl()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition hover:text-teal-300">
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" /> {fullAddress()}
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs text-navy-400">
              * The email and social links are demo placeholders; update them before launch.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-navy-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
