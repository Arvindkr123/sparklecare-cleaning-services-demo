import Link from "next/link";
import { site } from "@/data/site";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service",
  description: `Terms and conditions for using ${site.name}'s website and cleaning services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="[Insert date]" crumb="Terms of Service">
      <p>
        These terms govern your use of the {site.name} website and the cleaning services we provide. By booking a service
        you agree to these terms. [Insert legal business name and registration details.]
      </p>

      <h2>1. Quotes &amp; bookings</h2>
      <p>
        Quotes are based on the information you provide. If the property size, condition or scope differs significantly
        on arrival, we will discuss any price adjustment with you before continuing. A booking is confirmed once we have
        confirmed it in writing (message or email).
      </p>

      <h2>2. Access &amp; preparation</h2>
      <ul>
        <li>Please ensure safe access to the property at the agreed time, along with running water and electricity.</li>
        <li>Secure valuables and fragile items, and let us know about pets, alarms or sensitive surfaces.</li>
      </ul>

      <h2>3. Rescheduling &amp; cancellation</h2>
      <p>
        Contact us as early as possible if you need to reschedule or cancel. [Add the business&apos;s cancellation and
        any applicable fee policy before publishing.]
      </p>

      <h2>4. Payment</h2>
      <p>[Insert accepted payment methods, deposit requirements and payment timing.]</p>

      <h2>5. Service feedback</h2>
      <p>
        Contact us to share any feedback or concerns about the cleaning service.
      </p>

      <h2>6. Damage &amp; liability</h2>
      <p>
        We take care when working in your home. Please contact us about any accidental damage as soon as possible. [Insert liability terms and
        insurance details only if applicable — do not claim insurance you do not hold.]
      </p>

      <h2>7. Results</h2>
      <p>
        Some stains, wear or damage may not be fully removable. We will always be honest about expected results before
        starting work.
      </p>

      <h2>8. Website use</h2>
      <p>
        Website content is provided for general information. Images may include stock photography for illustration.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about these terms? Visit our <Link href="/contact" className="text-teal-700 underline">contact page</Link>.
      </p>
    </LegalPage>
  );
}
