import Link from "next/link";
import { site } from "@/data/site";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="[Insert date]" crumb="Privacy Policy">
      <p>
        {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains what
        personal information we collect when you use our website or contact us, how we use it, and the choices you have.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>Contact details you provide — such as your name, phone number, email address and city.</li>
        <li>Service details — such as the type of cleaning, property information and preferred dates.</li>
        <li>Messages you send us by email, phone or WhatsApp.</li>
        <li>Basic technical data your browser sends automatically (e.g. device type), if analytics are enabled.</li>
      </ul>

      <h2>2. How our forms work</h2>
      <p>
        Our website forms do not store your information on our web server. When you submit a form, your details are
        pre-filled into a WhatsApp message or email on your own device, which you then choose to send. Once received,
        your message is handled as described in this policy. WhatsApp and email providers process data under their own
        privacy policies.
      </p>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To respond to enquiries and provide quotes.</li>
        <li>To schedule, deliver and follow up on cleaning services.</li>
        <li>To improve our services and customer experience.</li>
        <li>To comply with legal and accounting obligations.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>4. Sharing your information</h2>
      <p>
        We only share information with team members and service providers who need it to deliver our services, or where
        required by law. [List any third-party processors, e.g. email provider, scheduling tool.]
      </p>

      <h2>5. Data retention</h2>
      <p>We keep personal information only as long as needed for the purposes above. [Insert retention period.]</p>

      <h2>6. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete or restrict use of your personal
        information, and to withdraw consent. To make a request, contact us using the details below.
      </p>

      <h2>7. Cookies</h2>
      <p>
        This website does not use advertising cookies. If analytics are added in future, this section will be updated
        and, where required, consent will be requested. [Update as applicable.]
      </p>

      <h2>8. Contact us</h2>
      <p>
        Questions about this policy? Email{" "}
        <a href={`mailto:${site.contact.email}`} className="text-teal-700 underline">{site.contact.email}</a> or visit our{" "}
        <Link href="/contact" className="text-teal-700 underline">contact page</Link>.
      </p>
    </LegalPage>
  );
}
