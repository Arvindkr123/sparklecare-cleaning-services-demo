"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site, telUrl, mailUrl, whatsappUrl } from "@/data/site";
import Icon, { WhatsAppIcon } from "./Icon";
import { Button, Container } from "./ui";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-navy-950 text-[13px] text-navy-200 md:block">
        <Container className="flex h-10 items-center justify-between">
          <p className="text-navy-300">{site.tagline}</p>
          <div className="flex items-center gap-6">
            <a href={telUrl()} className="inline-flex items-center gap-1.5 hover:text-white">
              <Icon name="phone" className="h-3.5 w-3.5" /> {site.contact.phoneDisplay}
            </a>
            <a href={mailUrl()} className="inline-flex items-center gap-1.5 hover:text-white">
              <Icon name="mail" className="h-3.5 w-3.5" /> {site.contact.email}
            </a>
          </div>
        </Container>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "border-navy-100 bg-white/90 shadow-[0_8px_30px_-20px_rgba(7,17,38,0.35)] backdrop-blur-xl" : "border-transparent bg-white"
        }`}
      >
        <Container className="flex h-18 items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                      isActive(l.href) ? "text-navy-950" : "text-navy-500 hover:text-navy-950"
                    }`}
                  >
                    {l.label}
                    {isActive(l.href) && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-teal-400" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="grid h-11 w-11 place-items-center rounded-full border border-navy-100 text-[#1fb857] transition hover:border-[#25D366] hover:bg-[#25D366]/5"
            >
              <WhatsAppIcon />
            </a>
            <Button href="/quote" variant="navy">
              Get a Free Quote <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-navy-100 text-navy-900 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </Container>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`fixed inset-x-0 bottom-0 top-18 z-40 bg-white transition-all duration-300 lg:hidden ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <Container className="flex h-full flex-col py-6">
            <nav aria-label="Mobile navigation">
              <ul className="divide-y divide-navy-100">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`flex items-center justify-between py-4 font-display text-2xl ${
                        isActive(l.href) ? "text-teal-600" : "text-navy-950"
                      }`}
                    >
                      {l.label}
                      <Icon name="arrowRight" className="h-5 w-5 text-navy-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto grid gap-3 pb-4">
              <Button href="/quote" variant="navy" size="lg">
                Get a Free Quote
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button href={whatsappUrl()} external variant="whatsapp" size="lg">
                  <WhatsAppIcon /> WhatsApp
                </Button>
                <Button href={telUrl()} variant="outline" size="lg">
                  <Icon name="phone" className="h-4 w-4" /> Call
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
