import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import { site, images, serviceAreas } from "@/data/site";
import { services } from "@/data/services";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", axes: ["opsz"] });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Professional House & Office Cleaning Services`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "cleaning services",
    "house cleaning",
    "deep cleaning",
    "office cleaning",
    "sofa cleaning",
    "carpet cleaning",
    "move out cleaning",
    "end of tenancy cleaning",
    "cleaners near me",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [{ url: images.hero, width: 1600, height: 1067, alt: "SparkleCare professional cleaner at work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [images.hero],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0c1a36",
  width: "device-width",
  initialScale: 1,
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  image: images.hero,
  telephone: site.contact.phoneHref,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.street,
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.region,
    postalCode: site.contact.address.postalCode,
    addressCountry: site.contact.address.country,
  },
  areaServed: serviceAreas.flatMap((a) => a.cities.map((c) => ({ "@type": "City", name: `${c}, ${a.country}` }))),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/services/${s.slug}` },
    })),
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="bg-white pb-16 font-sans text-navy-900 antialiased md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <JsonLd data={localBusiness} />
      </body>
    </html>
  );
}
