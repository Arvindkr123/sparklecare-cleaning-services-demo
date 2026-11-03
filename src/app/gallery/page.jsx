import Image from "next/image";
import { images, px } from "@/data/site";
import { Container, SectionHeading, PlaceholderNote } from "@/components/ui";
import { PageHero, FinalCTA, beforeAfterItems } from "@/components/sections";
import BeforeAfter from "@/components/BeforeAfter";

export const metadata = {
  title: "Gallery",
  description: "See SparkleCare's cleaning work — before and after comparisons and photos from homes and offices we've cleaned.",
  alternates: { canonical: "/gallery" },
};

const photos = [
  { id: 6197121, alt: "Two cleaners deep cleaning a modern kitchen", tag: "Deep Cleaning", span: "sm:col-span-2 sm:row-span-2" },
  { id: 4239123, alt: "Cleaner polishing a bathroom faucet", tag: "Bathroom" },
  { id: 9462139, alt: "Vacuuming a carpet in a stylish home", tag: "Carpet" },
  { id: 6265836, alt: "Spotless modern kitchen with glossy cabinets", tag: "Kitchen" },
  { id: 9462162, alt: "Cleaner dusting a television", tag: "House Cleaning" },
  { id: 36303748, alt: "Cleaning cart in an office hallway", tag: "Office", span: "sm:col-span-2" },
  { id: 11833895, alt: "Freshly cleaned grey sofa", tag: "Sofa" },
  { id: 9462326, alt: "Housekeepers preparing a bed", tag: "House Cleaning" },
  { id: 4239131, alt: "Cleaning a bathroom sink with gloves", tag: "Bathroom" },
  { id: 6196694, alt: "Cleaner vacuuming in a modern interior", tag: "House Cleaning" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Results that speak for themselves"
        text="A look at the kind of transformations our team delivers across homes and workplaces."
        image={images.cta}
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Before & after" title="Drag to compare" text="Slide across each image to see the difference a professional clean makes." />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {beforeAfterItems.map((b) => (
              <BeforeAfter key={b.label} {...b} />
            ))}
          </div>
          <PlaceholderNote className="mt-8">
            Sample imagery: &quot;before&quot; views are simulated from licensed stock photography. Replace with your own job photos before launch.
          </PlaceholderNote>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="On the job" title="Our cleaning in action" />
          <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {photos.map((p) => (
              <figure key={p.id} className={`group relative overflow-hidden rounded-3xl bg-navy-100 ${p.span || ""}`}>
                <Image src={px(p.id, 1200)} alt={p.alt} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900 backdrop-blur">
                  {p.tag}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-xs text-navy-400">Photography: Pexels (stock imagery for illustration).</p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
