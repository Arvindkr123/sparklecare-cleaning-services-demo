import { Container, Button } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="max-w-xl text-center">
        <p className="font-display text-7xl text-teal-500">404</p>
        <h1 className="mt-6 font-display text-4xl text-navy-950">This page has been swept away</h1>
        <p className="mt-4 text-navy-500">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="navy">Back to home</Button>
          <Button href="/services" variant="outline">Our services</Button>
        </div>
      </Container>
    </section>
  );
}
