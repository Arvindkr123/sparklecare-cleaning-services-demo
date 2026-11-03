/**
 * ─────────────────────────────────────────────────────────────
 *  Sagar Deep Cleaning Service — central business configuration
 * ─────────────────────────────────────────────────────────────
 *  ⚠️  DEMO DATA: values marked `PLACEHOLDER` below
 *  must be replaced with real business details before launch.
 *  The `.example` domain is reserved for documentation.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Sagar Deep Cleaning Service",
  tagline: "Trusted cleaning for homes and businesses in Bareilly.",
  description:
    "Sagar Deep Cleaning Service offers home and office cleaning in Bareilly, Uttar Pradesh. Contact us for a quote for deep cleaning and other cleaning services.",
  // PLACEHOLDER — set to your production domain
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sagardeepcleaning.example",

  contact: {
    phoneDisplay: "+91 72178 99735",
    phoneHref: "+917217899735",
    whatsapp: "917217899735",
    // PLACEHOLDER email address
    email: "hello@sagardeepcleaning.example",
    address: {
      street: "Civil Lines",
      city: "Bareilly",
      region: "Uttar Pradesh",
      postalCode: "243001",
      country: "IN",
    },
    hours: [
      { days: "Booking availability", time: "Call or WhatsApp to confirm" },
    ],
  },

  social: {
    // PLACEHOLDER social links — replace or remove
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const fullAddress = () => {
  const a = site.contact.address;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
};

export const mapsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress())}`;

export const whatsappUrl = (message = "Namaste! I'd like to ask Sagar Deep Cleaning Service about cleaning services in Bareilly.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const telUrl = () => `tel:${site.contact.phoneHref}`;

export const mailUrl = (subject = "Cleaning enquiry", body = "") =>
  `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

/** Pexels image helper — images are resized/optimised by next/image */
export const px = (id, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  hero: px(6195275),
  heroAlt: px(9462192, 1000),
  about: px(9462326),
  aboutSecondary: px(9462157, 1000),
  team: px(6195118),
  cta: px(7167073),
};

export const serviceAreas = [
  {
    country: "India",
    code: "IN",
    cities: ["Bareilly, Uttar Pradesh"],
  },
];

export const whyChooseUs = [
  {
    icon: "shield",
    title: "Vetted, trained cleaners",
    text: "Every team member is interviewed, reference-checked and trained on our cleaning checklists before their first job.",
  },
  {
    icon: "leaf",
    title: "Family & pet-friendly products",
    text: "We prioritise low-odour, eco-conscious products, and can use your preferred supplies on request.",
  },
  {
    icon: "clipboard",
    title: "Detailed checklists",
    text: "Room-by-room checklists mean nothing gets missed — and you always know exactly what's included.",
  },
  {
    icon: "clock",
    title: "Punctual & flexible",
    text: "Choose a time that suits you, including early mornings, evenings and weekends where available.",
  },
  {
    icon: "tag",
    title: "Clear, upfront quotes",
    text: "You receive a written quote before we start. No hidden fees, no surprise add-ons.",
  },
  {
    icon: "heart",
    title: "Customer feedback",
    text: "Share your feedback with us after a clean so we can understand your experience.",
  },
];

export const howItWorks = [
  {
    title: "Request a quote",
    text: "Tell us about your space and the service you need — via the form, WhatsApp or a quick call.",
  },
  {
    title: "Get a clear price",
    text: "We confirm scope, timing and a transparent price. No obligation, no pressure.",
  },
  {
    title: "We clean, you relax",
    text: "Our team arrives on time, fully equipped, and follows a detailed checklist for your space.",
  },
  {
    title: "Walk-through & feedback",
    text: "Review the results and share any feedback with our team.",
  },
];

/**
 * ⚠️ PLACEHOLDER TESTIMONIALS — these are illustrative samples only.
 * Replace with genuine customer reviews (with permission) before launch.
 */
export const testimonials = [
  {
    name: "Demo Customer 1",
    location: "Bareilly, Uttar Pradesh",
    service: "Deep Cleaning",
    rating: 5,
    quote:
      "A sample review for the deep cleaning service. Replace this with feedback from a real customer.",
  },
  {
    name: "Demo Customer 2",
    location: "Bareilly, Uttar Pradesh",
    service: "Sofa Cleaning",
    rating: 5,
    quote:
      "A sample review for the sofa cleaning service. Replace this with feedback from a real customer.",
  },
  {
    name: "Demo Customer 3",
    location: "Bareilly, Uttar Pradesh",
    service: "Office Cleaning",
    rating: 5,
    quote:
      "A sample review for the office cleaning service. Replace this with feedback from a real customer.",
  },
  {
    name: "Demo Customer 4",
    location: "Bareilly, Uttar Pradesh",
    service: "Office Cleaning",
    rating: 5,
    quote:
      "A sample review for the office cleaning service. Replace this with feedback from a real customer.",
  },
  {
    name: "Demo Customer 5",
    location: "Bareilly, Uttar Pradesh",
    service: "House Cleaning",
    rating: 5,
    quote:
      "A sample review for the house cleaning service. Replace this with feedback from a real customer.",
  },
];

export const faqs = [
  {
    q: "How do I get a quote?",
    a: "Fill in our quick quote form, message us on WhatsApp or give us a call. Share the service you need, the size of your space and your preferred date — we'll reply with a clear, no-obligation price.",
  },
  {
    q: "Do I need to provide cleaning supplies or equipment?",
    a: "No. Our team brings professional equipment and cleaning products. If you'd prefer we use specific products — for allergies or personal preference — just let us know.",
  },
  {
    q: "Do I need to be home during the clean?",
    a: "It's entirely up to you. Many customers provide access instructions and go about their day. We'll confirm arrival and completion with you by message.",
  },
  {
    q: "How long does a typical cleaning take?",
    a: "It depends on the size and condition of the space and the service chosen. A standard house clean for a two-bedroom home usually takes 2–4 hours; deep and move-out cleans take longer. We'll give you an estimate with your quote.",
  },
  {
    q: "Are your products safe for children and pets?",
    a: "We prioritise low-odour, eco-conscious products and follow manufacturer guidance on every surface. Let us know about pets, allergies or sensitive surfaces when booking.",
  },
  {
    q: "How can I share feedback about a clean?",
    a: "Call or message us after your service and let us know about your experience.",
  },
  {
    q: "Can I reschedule or cancel a booking?",
    a: "Yes. We ask for at least 24 hours' notice to reschedule or cancel. Please see our Terms of Service for full details.",
  },
  {
    q: "Which areas do you serve?",
    a: "Sagar Deep Cleaning Service is based in Civil Lines, Bareilly. Contact us with your neighbourhood to confirm service availability.",
  },
];
