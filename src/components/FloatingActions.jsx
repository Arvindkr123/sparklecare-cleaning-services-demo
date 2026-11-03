import Link from "next/link";
import { whatsappUrl, telUrl } from "@/data/site";
import Icon, { WhatsAppIcon } from "./Icon";

/** Floating WhatsApp button (desktop) + sticky action bar (mobile) */
export default function FloatingActions() {
  return (
    <>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sagar Deep Cleaning Service on WhatsApp"
        className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-5 text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.75)] transition hover:-translate-y-0.5 md:inline-flex"
      >
        <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/15">
          <span className="absolute inset-0 animate-ping rounded-full bg-white/20" />
          <WhatsAppIcon className="relative h-5 w-5" />
        </span>
        <span className="text-sm font-semibold">Chat with us</span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-navy-100 bg-white/95 backdrop-blur md:hidden">
        <a href={telUrl()} className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-navy-700">
          <Icon name="phone" className="h-5 w-5" /> Call
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-[#1a9e4b]"
        >
          <WhatsAppIcon className="h-5 w-5" /> WhatsApp
        </a>
        <Link href="/quote" className="flex flex-col items-center gap-1 bg-navy-900 py-2.5 text-[11px] font-semibold text-white">
          <Icon name="sparkles" className="h-5 w-5 text-teal-300" /> Free Quote
        </Link>
      </div>
    </>
  );
}
