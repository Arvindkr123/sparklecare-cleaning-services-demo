import { px } from "./site";

export const services = [
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    icon: "home",
    short: "Regular weekly, fortnightly or one-off cleaning to keep your home fresh and tidy.",
    image: px(9462162),
    imageAlt: "Professional cleaner dusting a television in a bright living room",
    intro:
      "Come home to a consistently clean, calm space. Our house cleaning service covers all the essentials — kitchens, bathrooms, bedrooms and living areas — on a schedule that fits your life.",
    includes: [
      "Dusting of reachable surfaces, shelves and skirting boards",
      "Vacuuming and mopping of all floors",
      "Kitchen surfaces, sink, hob exterior and appliance fronts",
      "Bathroom sanitising — toilet, basin, shower and mirrors",
      "Making beds and tidying living areas",
      "Emptying bins and replacing liners",
    ],
    idealFor: ["Busy professionals", "Families with children", "Pet owners", "Regular upkeep"],
    duration: "2–4 hours for a typical 2–3 bedroom home",
    frequency: "Weekly, fortnightly, monthly or one-off",
    faqs: [
      {
        q: "Will I get the same cleaner each time?",
        a: "Wherever possible, yes. For recurring bookings we aim to send the same cleaner or team so they get to know your home and preferences.",
      },
      {
        q: "Can I customise what gets cleaned?",
        a: "Absolutely. Tell us your priority areas and anything to skip, and we'll tailor the checklist for you.",
      },
    ],
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    icon: "sparkles",
    short: "A top-to-bottom, detailed clean that reaches the areas regular cleaning misses.",
    image: px(6197121),
    imageAlt: "Two cleaners deep cleaning a modern kitchen",
    intro:
      "Ideal as a reset or seasonal refresh. Our deep clean goes well beyond the surface — degreasing, descaling and detailing every room so your home feels genuinely renewed.",
    includes: [
      "Everything in our standard house clean",
      "Inside microwave, and oven/fridge on request",
      "Descaling taps, shower screens and tiles",
      "Cleaning door frames, switches and handles",
      "Wiping cabinet fronts and kitchen backsplash",
      "Detailed dusting of vents, light fittings and high areas",
    ],
    idealFor: ["Spring cleaning", "Before or after hosting", "First clean before a regular plan", "Post-renovation touch-up"],
    duration: "4–8 hours depending on size and condition",
    frequency: "One-off or every 3–6 months",
    faqs: [
      {
        q: "How is deep cleaning different from regular cleaning?",
        a: "Regular cleaning maintains a home; deep cleaning restores it. It includes detailed, time-intensive tasks such as descaling, degreasing and cleaning hard-to-reach areas.",
      },
      {
        q: "Do you clean inside appliances?",
        a: "Inside the microwave is included. Inside the oven and fridge can be added — just mention it when requesting your quote.",
      },
    ],
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    icon: "building",
    short: "Reliable, discreet cleaning for offices, studios and small commercial spaces.",
    image: px(36303748),
    imageAlt: "Cleaning cart in a bright office hallway",
    intro:
      "A clean workplace is a productive one. We provide flexible office cleaning before or after business hours, so your team walks into a fresh, hygienic space every day.",
    includes: [
      "Desks, workstations and meeting room tables",
      "Kitchenette and break area cleaning",
      "Restroom sanitising and restocking (supplies provided by client)",
      "Vacuuming carpets and mopping hard floors",
      "Disinfecting high-touch points — handles, switches, lift buttons",
      "Emptying bins and recycling",
    ],
    idealFor: ["Small and medium offices", "Co-working spaces", "Clinics and studios", "Retail back-offices"],
    duration: "Tailored to floor area and schedule",
    frequency: "Daily, several times a week, or weekly",
    faqs: [
      {
        q: "Can you clean outside business hours?",
        a: "Yes. Early-morning, evening and weekend slots are available depending on your location.",
      },
      {
        q: "Do you offer a site visit before quoting?",
        a: "For larger commercial spaces we're happy to arrange a short walk-through so we can quote accurately.",
      },
    ],
  },
  {
    slug: "sofa-cleaning",
    name: "Sofa Cleaning",
    icon: "sofa",
    short: "Gentle, effective upholstery cleaning that lifts stains, odours and allergens.",
    image: px(11833895),
    imageAlt: "Clean grey sofa with cushions in a modern living room",
    intro:
      "Sofas trap dust, spills and odours over time. We assess your upholstery fabric first, then use the appropriate method to refresh it safely and thoroughly.",
    includes: [
      "Fabric assessment and spot-test before cleaning",
      "Thorough vacuuming including crevices and under cushions",
      "Pre-treatment of visible stains",
      "Appropriate cleaning method for your fabric type",
      "Deodorising treatment",
      "Guidance on drying time and aftercare",
    ],
    idealFor: ["Fabric sofas and armchairs", "Homes with pets or children", "Allergy sufferers", "Pre-sale or rental refresh"],
    duration: "1–3 hours depending on number of seats",
    frequency: "Every 6–12 months recommended",
    faqs: [
      {
        q: "How long does a sofa take to dry?",
        a: "Drying time varies with fabric, method and ventilation — typically a few hours. We'll advise on the day.",
      },
      {
        q: "Can every stain be removed?",
        a: "Many stains lift completely, but some older or set-in stains may only lighten. We'll always be honest about expected results before we begin.",
      },
    ],
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    icon: "carpet",
    short: "Deep carpet and rug cleaning to remove embedded dirt and revive colour.",
    image: px(9462139),
    imageAlt: "Vacuum cleaner on a carpet in a stylish home",
    intro:
      "Carpets hold far more dirt than meets the eye. Our carpet cleaning removes embedded grime, freshens fibres and helps extend the life of your carpets and rugs.",
    includes: [
      "Pre-inspection of carpet type and condition",
      "High-powered pre-vacuum",
      "Pre-treatment of high-traffic areas and spots",
      "Deep cleaning suited to your carpet fibre",
      "Deodorising on request",
      "Furniture moved and replaced where safe to do so",
    ],
    idealFor: ["Wall-to-wall carpets", "Area rugs", "Stairs and hallways", "End-of-tenancy"],
    duration: "1–4 hours depending on area",
    frequency: "Every 6–12 months, or as needed",
    faqs: [
      {
        q: "Do I need to move furniture first?",
        a: "We can move light furniture for you. Please clear small items and fragile objects before we arrive.",
      },
      {
        q: "Is carpet cleaning safe for wool carpets?",
        a: "Yes — we identify the fibre first and choose a suitable, gentle method for natural fibres like wool.",
      },
    ],
  },
  {
    slug: "bathroom-cleaning",
    name: "Bathroom Cleaning",
    icon: "droplet",
    short: "Hygienic, sparkling bathrooms — limescale, soap scum and grime removed.",
    image: px(4239123),
    imageAlt: "Cleaner wearing gloves polishing a bathroom faucet",
    intro:
      "Bathrooms need more than a quick wipe. We tackle limescale, soap scum and grout grime, then sanitise every surface so your bathroom looks and feels hotel-fresh.",
    includes: [
      "Descaling taps, shower heads and screens",
      "Scrubbing tiles and grout lines",
      "Sanitising toilet, basin, bath and shower tray",
      "Polishing mirrors, chrome and glass",
      "Cleaning cabinet fronts and shelves",
      "Mopping and disinfecting floors",
    ],
    idealFor: ["Hard-water areas", "Shared homes", "Guest bathrooms", "Rental properties"],
    duration: "1–2 hours per bathroom",
    frequency: "Add to a regular clean or book one-off",
    faqs: [
      {
        q: "Can you remove mould?",
        a: "We can clean surface mould from tiles and sealant. Persistent or deep-rooted mould may indicate a ventilation or damp issue that needs a specialist.",
      },
      {
        q: "Will you damage natural stone?",
        a: "No — tell us about marble or natural stone and we'll use pH-appropriate, stone-safe products.",
      },
    ],
  },
  {
    slug: "kitchen-cleaning",
    name: "Kitchen Cleaning",
    icon: "kitchen",
    short: "Degreasing and detailing for cooktops, cabinets, appliances and surfaces.",
    image: px(6265836),
    imageAlt: "Spotless modern kitchen with glossy cabinets",
    intro:
      "The kitchen works harder than any room in the house. Our kitchen clean removes grease and build-up from surfaces, appliances and cabinetry, leaving a hygienic space to cook in.",
    includes: [
      "Degreasing hob, backsplash and extractor exterior",
      "Cleaning cabinet fronts, handles and countertops",
      "Sink and tap descaling and polishing",
      "Appliance exteriors — fridge, dishwasher, oven",
      "Inside oven, fridge or cabinets on request",
      "Floor scrubbing and mopping",
    ],
    idealFor: ["Busy family kitchens", "Before or after events", "Rental handovers", "Seasonal refresh"],
    duration: "2–4 hours depending on size",
    frequency: "One-off or add to a regular clean",
    faqs: [
      {
        q: "Do you clean inside the oven?",
        a: "Yes, as an add-on. Heavily soiled ovens may take extra time — we'll factor this into your quote.",
      },
      {
        q: "Should I empty my cupboards?",
        a: "Only if you'd like the insides cleaned. Otherwise we'll focus on exteriors and surfaces.",
      },
    ],
  },
  {
    slug: "move-in-move-out-cleaning",
    name: "Move-in / Move-out Cleaning",
    icon: "boxes",
    short: "Thorough end-of-tenancy and pre-move cleaning for a smooth handover.",
    image: px(7203820),
    imageAlt: "Person packing cardboard boxes in a bright apartment before moving",
    intro:
      "Moving is stressful enough. Our move-in / move-out clean covers every room in detail, helping tenants with handovers and giving new owners a fresh start.",
    includes: [
      "Full deep clean of all rooms in an empty property",
      "Inside all cupboards, wardrobes and drawers",
      "Inside oven, fridge and other appliances",
      "Skirting boards, doors, frames and switches",
      "Windows (interior), sills and tracks",
      "Bathrooms descaled and sanitised",
    ],
    idealFor: ["Tenants ending a lease", "Landlords and agents", "Home buyers and sellers", "New-build handovers"],
    duration: "4–10 hours depending on property size",
    frequency: "One-off",
    faqs: [
      {
        q: "Can you follow my landlord's checklist?",
        a: "Yes. Share your agent's or landlord's checklist and we'll work through it item by item.",
      },
      {
        q: "Does the property need to be empty?",
        a: "Ideally yes — an empty property lets us clean inside every cupboard and behind where furniture stood.",
      },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
