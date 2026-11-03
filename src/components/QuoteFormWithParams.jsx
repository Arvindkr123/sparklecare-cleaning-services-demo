"use client";

import { useSearchParams } from "next/navigation";
import QuoteForm from "./QuoteForm";

/** Pre-selects the service from `?service=slug` while keeping the page static. */
export default function QuoteFormWithParams() {
  const params = useSearchParams();
  const service = params.get("service") || "";
  return <QuoteForm key={service} defaultService={service} />;
}
