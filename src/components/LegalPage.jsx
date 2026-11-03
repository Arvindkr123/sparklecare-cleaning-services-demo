import { Container, PlaceholderNote } from "./ui";
import { PageHero } from "./sections";

export default function LegalPage({ title, updated, children, crumb }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text={`Last updated: ${updated}`} crumbs={[{ label: crumb }]} />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <PlaceholderNote>
            This is a placeholder template provided for convenience and is not legal advice. Have it reviewed by a
            qualified professional and adapted to the laws of each country you operate in (e.g. GDPR / UK GDPR, CCPA,
            Australian Privacy Act, UAE PDPL, India DPDP Act) before publishing.
          </PlaceholderNote>
          <div className="prose-legal mt-8">{children}</div>
        </Container>
      </section>
    </>
  );
}
