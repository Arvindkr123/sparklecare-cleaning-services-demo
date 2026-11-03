"use client";

import { telUrl, site } from "@/data/site";
import Icon from "./Icon";

export default function FormSuccess({ channel, title, onReset }) {
  return (
    <div role="status" aria-live="polite" className="rounded-2xl border border-teal-200 bg-teal-50/60 p-8 text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-teal-400 text-navy-950">
        <Icon name="check" className="h-7 w-7" strokeWidth={2.5} />
      </span>
      <h3 className="mt-5 font-display text-2xl text-navy-950">{title}</h3>
      <p className="mx-auto mt-3 max-w-md leading-relaxed text-navy-600">
        {channel === "whatsapp"
          ? "We've opened WhatsApp with your details pre-filled — just tap send to reach our team."
          : "We've opened your email app with your details pre-filled — just hit send to reach our team."}{" "}
        We aim to reply within a few business hours.
      </p>
      <p className="mt-4 text-sm text-navy-500">
        Nothing opened? Call us on{" "}
        <a href={telUrl()} className="font-semibold text-navy-900 underline">{site.contact.phoneDisplay}</a>.
      </p>
      <button type="button" onClick={onReset} className="mt-6 text-sm font-semibold text-teal-700 underline-offset-4 hover:underline">
        Submit another request
      </button>
    </div>
  );
}
