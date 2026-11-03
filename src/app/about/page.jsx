import Image from "next/image";
import { images, site } from "@/data/site";
import Icon from "@/components/Icon";
import { Container, SectionHeading, CheckItem, Button } from "@/components/ui";
import { PageHero, WhyChooseUs, Testimonials, FinalCTA } from "@/components/sections";

export const metadata = {
  title: "About Us",
  description: `Learn about ${site.name} — a growing cleaning company built on reliability, clear communication and genuine care for every home and workplace we clean.`,
  alternates: { canonical: "/about" },
};

const values = [
  { icon: "heart", title: "Care", text: "We treat every home and workplace with the same respect we'd want for our own." },
  { icon: "clipboard", title: "Consistency", text: "Checklists, training and quality checks mean reliable results, every visit." },
  { icon: "users", title: "Honesty", text: "Clear quotes, realistic expectations and straightforward communication." },
  { icon: "leaf", title: "Responsibility", text: "We favour eco-conscious products and minimise waste wherever practical." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SparkleCare"
        title="A cleaning company built on care, not shortcuts"
        text="We started SparkleCare with a simple belief: professional cleaning should feel effortless for the customer and be done properly every single time."
        image={images.team}
        crumbs={[{ label: "About Us" }]}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src={images.about} alt="Two SparkleCare cleaners preparing a bed in a bright room" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-2 max-w-[16rem] rounded-2xl bg-navy-900 p-6 text-white shadow-xl sm:-right-8">
              <p className="font-display text-xl leading-snug">&ldquo;Do it properly, or don&apos;t do it at all.&rdquo;</p>
              <p className="mt-3 text-sm text-navy-300">— Our founding principle</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Small team. High standards. Real care."
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-navy-500">
              <p>
                SparkleCare is a young, growing cleaning business. We know that letting someone into your home or
                workplace takes trust — so we&apos;ve built our service around earning it: careful hiring, thorough
                training and clear communication from the first message to the final walk-through.
              </p>
              <p>
                Whether it&apos;s a weekly clean of a family home, a one-off deep clean before guests arrive or an
                end-of-tenancy clean on a tight deadline, our approach is the same: detailed checklists, the right
                products for each surface and a team that takes pride in the result.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              <CheckItem>Interviewed &amp; reference-checked team</CheckItem>
              <CheckItem>Room-by-room cleaning checklists</CheckItem>
              <CheckItem>Upfront, written quotes</CheckItem>
              <CheckItem>24-hour re-clean promise</CheckItem>
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/quote" variant="navy" size="lg">Get a Free Quote</Button>
              <Button href="/services" variant="outline" size="lg">Explore services</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <SectionHeading align="center" eyebrow="Our values" title="What we stand for" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl border border-navy-100 p-8 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-teal-300">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl text-navy-950">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-500">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
