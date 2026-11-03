/**
 * ─────────────────────────────────────────────────────────────
 *  SparkleCare — central business configuration
 * ─────────────────────────────────────────────────────────────
 *  ⚠️  PLACEHOLDER DATA: every value marked `PLACEHOLDER` below
 *  must be replaced with real business details before launch.
 *  The 555-01xx phone range is reserved for fictional use and the
 *  `.example` domain is reserved for documentation, so nothing
 *  here will reach a real person by accident.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "SparkleCare",
  tagline: "Professional Cleaning. Exceptional Care.",
  description:
    "SparkleCare provides professional home and office cleaning services — house, deep, office, sofa, carpet, bathroom, kitchen and move-in/move-out cleaning. Get a free, no-obligation quote today.",
  // PLACEHOLDER — set to your production domain
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sparklecare.example",

  contact: {
    // PLACEHOLDER phone number (fictional 555 range)
    phoneDisplay: "+1 (555) 010-2030",
    phoneHref: "+15550102030",
    // PLACEHOLDER WhatsApp number — digits only, with country code, no "+"
    whatsapp: "15550102030",
    // PLACEHOLDER email address
    email: "hello@sparklecare.example",
    // PLACEHOLDER address
    address: {
      street: "100 Placeholder Avenue, Suite 1",
      city: "Your City",
      region: "Your State",
      postalCode: "00000",
      country: "US",
    },
    hours: [
      { days: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
      { days: "Saturday", time: "9:00 AM – 5:00 PM" },
      { days: "Sunday", time: "By appointment" },
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

export const whatsappUrl = (message = "Hi SparkleCare! I'd like to ask about your cleaning services.") =>
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
    country: "United States",
    code: "US",
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Dallas", "Miami"],
  },
  {
    country: "United Kingdom",
    code: "UK",
    cities: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Bristol"],
  },
  {
    country: "Australia",
    code: "AU",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast"],
  },
  {
    country: "United Arab Emirates",
    code: "AE",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Al Ain", "Ras Al Khaimah"],
  },
  {
    country: "India",
    code: "IN",
    cities: ["Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad", "Chennai", "Pune"],
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
    title: "Satisfaction promise",
    text: "If something isn't right, tell us within 24 hours and we'll come back to re-clean that area at no extra cost.",
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
    text: "Check the results. Not completely happy? We'll make it right within 24 hours.",
  },
];

/**
 * ⚠️ PLACEHOLDER TESTIMONIALS — these are illustrative samples only.
 * Replace with genuine customer reviews (with permission) before launch.
 */
export const testimonials = [
  {
    name: "Sarah M.",
    location: "London, UK",
    service: "Deep Cleaning",
    rating: 5,
    quote:
      "The team was on time, friendly and incredibly thorough. Our kitchen hasn't looked this good since we moved in. Booking over WhatsApp was effortless.",
  },
  {
    name: "Arjun K.",
    location: "Bengaluru, India",
    service: "Sofa Cleaning",
    rating: 5,
    quote:
      "Our fabric sofa had years of stains from the kids. It came out looking fresh and smelled clean without any harsh chemical smell. Great value.",
  },
  {
    name: "Jessica T.",
    location: "Sydney, Australia",
    service: "Move-out Cleaning",
    rating: 5,
    quote:
      "Needed an end-of-lease clean at short notice. They followed the checklist from our agent to the letter. Stress-free from start to finish.",
  },
  {
    name: "Omar R.",
    location: "Dubai, UAE",
    service: "Office Cleaning",
    rating: 5,
    quote:
      "We use SparkleCare for our office twice a week. Reliable, discreet and the team leaves everything spotless before we arrive in the morning.",
  },
  {
    name: "Michael D.",
    location: "Chicago, USA",
    service: "House Cleaning",
    rating: 5,
    quote:
      "Clear pricing, great communication and consistently excellent work. It's one less thing to worry about every other week.",
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
    q: "What if I'm not happy with the clean?",
    a: "Tell us within 24 hours and we'll return to re-clean the areas in question at no additional cost. Your satisfaction is the whole point.",
  },
  {
    q: "Can I reschedule or cancel a booking?",
    a: "Yes. We ask for at least 24 hours' notice to reschedule or cancel. Please see our Terms of Service for full details.",
  },
  {
    q: "Which areas do you serve?",
    a: "We're growing across selected cities in the USA, UK, Australia, UAE and India. Availability varies by location, so send us your area and we'll confirm right away.",
  },
];
