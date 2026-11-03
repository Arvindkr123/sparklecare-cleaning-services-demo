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
        Please give at least 24 hours&apos; notice to reschedule or cancel. [Insert any late-cancellation or lock-out fee
        policy.]
      </p>

      <h2>4. Payment</h2>
      <p>[Insert accepted payment methods, deposit requirements and payment timing.]</p>

      <h2>5. Satisfaction promise</h2>
      <p>
        If you&apos;re not satisfied with any area we cleaned, notify us within 24 hours of the service and we&apos;ll
        arrange to re-clean that area at no additional cost. This does not cover areas outside the agreed scope.
      </p>

      <h2>6. Damage &amp; liability</h2>
      <p>
        We take great care in your home. Please report any accidental damage within 24 hours. [Insert liability terms and
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
