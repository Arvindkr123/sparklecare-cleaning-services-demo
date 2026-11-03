import { Suspense } from "react";
import { site, images, whatsappUrl, telUrl, howItWorks } from "@/data/site";
import Icon, { WhatsAppIcon } from "@/components/Icon";
import { Container, CheckItem } from "@/components/ui";
import { PageHero } from "@/components/sections";
import QuoteFormWithParams from "@/components/QuoteFormWithParams";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Get a Free Quote",
  description: `Request a free, no-obligation cleaning quote from ${site.name}. Choose your service, share a few details and get a clear price fast.`,
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free quote"
        title="Get your free cleaning quote"
        text="Tell us what you need and we'll come back with a clear, upfront price. No obligation, no pressure."
        image={images.hero}
        crumbs={[{ label: "Get a Quote" }]}
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-navy-100 bg-white p-7 shadow-[0_30px_60px_-40px_rgba(7,17,38,0.45)] sm:p-10">
              <h2 className="font-display text-3xl text-navy-950">Your details</h2>
              <p className="mt-2 text-navy-500">Fields marked * are required.</p>
              <div className="mt-8">
                <Suspense fallback={<QuoteForm />}>
                  <QuoteFormWithParams />
                </Suspense>
              </div>
            </div>
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-[2rem] bg-navy-900 p-8 text-white">
              <h2 className="font-display text-2xl">What happens next?</h2>
              <ol className="mt-6 space-y-5">
                {howItWorks.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-400 text-sm font-bold text-navy-950">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-navy-300">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-[2rem] border border-navy-100 p-8">
              <h2 className="font-display text-2xl text-navy-950">Every quote includes</h2>
              <ul className="mt-5 space-y-3">
                <CheckItem>Clear scope of work</CheckItem>
                <CheckItem>Upfront, written price</CheckItem>
                <CheckItem>Estimated time on site</CheckItem>
                <CheckItem>24-hour re-clean promise</CheckItem>
              </ul>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1fb857]">
                  <WhatsAppIcon /> WhatsApp
                </a>
                <a href={telUrl()} className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 px-5 py-3 text-sm font-semibold text-navy-900 hover:border-navy-900">
                  <Icon name="phone" className="h-4 w-4" /> Call us
                </a>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
