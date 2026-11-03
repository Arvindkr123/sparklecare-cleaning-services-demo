"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { serviceAreas, whatsappUrl, mailUrl } from "@/data/site";
import { useForm } from "@/lib/useForm";
import { TextField, SelectField, TextAreaField } from "./FormFields";
import Icon, { WhatsAppIcon } from "./Icon";
import { buttonClass } from "./ui";
import FormSuccess from "./FormSuccess";

const schema = {
  name: { required: true, minLength: 2, maxLength: 80, requiredMessage: "Please enter your name." },
  phone: { required: true, type: "phone", requiredMessage: "Please enter a phone number so we can reach you." },
  email: { required: true, type: "email", requiredMessage: "Please enter your email address." },
  service: { required: true, requiredMessage: "Please select a service." },
  country: { required: true, requiredMessage: "Please select your country." },
  city: { required: true, minLength: 2, maxLength: 80, requiredMessage: "Please enter your city or area." },
  property: {},
  date: { type: "futureDate" },
  message: { maxLength: 1000 },
};

const propertyTypes = ["Apartment / Flat", "House / Villa", "Office", "Retail / Commercial", "Other"];

export default function QuoteForm({ defaultService = "", compact = false }) {
  const valid = services.some((s) => s.slug === defaultService) ? defaultService : "";
  const { values, field, validate, reset } = useForm(
    { name: "", phone: "", email: "", service: valid, country: "India", city: "", property: "", date: "", message: "" },
    schema
  );
  const [sent, setSent] = useState(null);

  const buildMessage = () => {
    const svc = services.find((s) => s.slug === values.service)?.name || values.service;
    return [
      "New quote request — Sagar Deep Cleaning Service",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim()}`,
      `Service: ${svc}`,
      `Location: ${values.city.trim()}, ${values.country}`,
      values.property && `Property type: ${values.property}`,
      values.date && `Preferred date: ${values.date}`,
      values.message.trim() && `Details: ${values.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const channel = e.nativeEvent?.submitter?.value === "email" ? "email" : "whatsapp";
    const msg = buildMessage();
    if (channel === "whatsapp") {
      window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = mailUrl("Quote request — Sagar Deep Cleaning Service", msg);
    }
    setSent(channel);
  };

  if (sent) {
    return (
      <FormSuccess
        channel={sent}
        title="Your quote request is ready"
        onReset={() => {
          reset();
          setSent(null);
        }}
      />
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" aria-label="Get a free quote">
      <TextField label="Full name" required autoComplete="name" placeholder="Jane Smith" {...field("name")} />
      <TextField label="Phone / WhatsApp" required type="tel" autoComplete="tel" placeholder="+91 72178 99735" {...field("phone")} />
      <TextField label="Email" required type="email" autoComplete="email" placeholder="you@example.com" {...field("email")} className="sm:col-span-2" />
      <SelectField
        label="Service required"
        required
        placeholder="Select a service"
        options={services.map((s) => ({ value: s.slug, label: s.name }))}
        {...field("service")}
        className="sm:col-span-2"
      />
      <SelectField label="Country" required placeholder="Select country" options={serviceAreas.map((a) => a.country).concat("Other")} {...field("country")} />
      <TextField label="City / Area" required autoComplete="address-level2" placeholder="e.g. Civil Lines, Bareilly" {...field("city")} />
      {!compact && (
        <>
          <SelectField label="Property type" placeholder="Select (optional)" options={propertyTypes} {...field("property")} />
          <TextField label="Preferred date" type="date" min={today} {...field("date")} />
          <TextAreaField
            label="Tell us about your space"
            placeholder="e.g. 3-bedroom apartment, 2 bathrooms, pets at home, focus on kitchen…"
            hint="Optional — size, rooms, special requests."
            {...field("message")}
            className="sm:col-span-2"
          />
        </>
      )}

      <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row">
        <button type="submit" value="whatsapp" className={buttonClass("whatsapp", "lg", "flex-1")}>
          <WhatsAppIcon /> Send via WhatsApp
        </button>
        <button type="submit" value="email" className={buttonClass("navy", "lg", "flex-1")}>
          <Icon name="mail" className="h-4 w-4" /> Send via Email
        </button>
      </div>
      <p className="text-xs leading-relaxed text-navy-400 sm:col-span-2">
        Free, no-obligation quote. Your details are only used to respond to your enquiry — see our{" "}
        <a href="/privacy-policy" className="underline hover:text-navy-700">Privacy Policy</a>.
      </p>
    </form>
  );
}
