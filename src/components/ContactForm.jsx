"use client";

import { useState } from "react";
import { whatsappUrl, mailUrl } from "@/data/site";
import { useForm } from "@/lib/useForm";
import { TextField, SelectField, TextAreaField } from "./FormFields";
import Icon, { WhatsAppIcon } from "./Icon";
import { buttonClass } from "./ui";
import FormSuccess from "./FormSuccess";

const schema = {
  name: { required: true, minLength: 2, maxLength: 80, requiredMessage: "Please enter your name." },
  email: { required: true, type: "email", requiredMessage: "Please enter your email address." },
  phone: { type: "phone" },
  topic: { required: true, requiredMessage: "Please choose a topic." },
  message: { required: true, minLength: 10, maxLength: 1500, requiredMessage: "Please write a short message." },
};

const topics = ["General enquiry", "Booking question", "Existing booking", "Commercial / office cleaning", "Feedback", "Careers"];

export default function ContactForm() {
  const { values, field, validate, reset } = useForm({ name: "", email: "", phone: "", topic: "", message: "" }, schema);
  const [sent, setSent] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const channel = e.nativeEvent?.submitter?.value === "whatsapp" ? "whatsapp" : "email";
    const msg = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      values.phone.trim() && `Phone: ${values.phone.trim()}`,
      `Topic: ${values.topic}`,
      "",
      values.message.trim(),
    ]
      .filter((x) => typeof x === "string")
      .join("\n");
    if (channel === "whatsapp") window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    else window.location.href = mailUrl(`${values.topic} — Sagar Deep Cleaning Service website`, msg);
    setSent(channel);
  };

  if (sent) {
    return (
      <FormSuccess
        channel={sent}
        title="Thanks for reaching out"
        onReset={() => {
          reset();
          setSent(null);
        }}
      />
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" aria-label="Contact Sagar Deep Cleaning Service">
      <TextField label="Full name" required autoComplete="name" placeholder="Jane Smith" {...field("name")} />
      <TextField label="Email" required type="email" autoComplete="email" placeholder="you@example.com" {...field("email")} />
      <TextField label="Phone" type="tel" autoComplete="tel" placeholder="Optional" {...field("phone")} />
      <SelectField label="Topic" required placeholder="Select a topic" options={topics} {...field("topic")} />
      <TextAreaField label="Message" required rows={5} placeholder="How can we help?" {...field("message")} className="sm:col-span-2" />
      <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row">
        <button type="submit" value="email" className={buttonClass("navy", "lg", "flex-1")}>
          <Icon name="mail" className="h-4 w-4" /> Send Message
        </button>
        <button type="submit" value="whatsapp" className={buttonClass("whatsapp", "lg", "flex-1")}>
          <WhatsAppIcon /> Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
