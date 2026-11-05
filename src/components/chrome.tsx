"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, MessageCircle, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/cn";
import { LogoLockup } from "./logo";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const home = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const darkText = scrolled || !home;
  const solid = scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "border-b hairline bg-paper/90 shadow-[0_1px_0_rgba(10,22,40,0.03)] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1330px] items-center justify-between px-6 md:px-10">
          <Link href="/" aria-label="ARKTIS Home Service — beranda" className="relative z-50">
            <LogoLockup dark={!darkText} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative py-2 font-dm text-[13.5px] font-medium tracking-[0.01em] transition-colors",
                    darkText
                      ? active
                        ? "text-glacier"
                        : "text-slate hover:text-charcoal"
                      : active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  )}
                >
                  {l.label}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-glacier" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/booking"
              className="btn-base btn-primary hidden !min-h-[44px] !px-6 !text-[13px] sm:inline-flex"
            >
              Pesan Servis
              <ArrowRight size={15} strokeWidth={2.2} />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              className={cn(
                "relative z-50 flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
                open ? "text-white" : darkText ? "text-navy" : "text-white"
              )}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-arctic transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex-1 overflow-y-auto px-8 pb-6 pt-28">
          <nav className="flex flex-col" aria-label="Menu mobile">
            {[{ href: "/", label: "Beranda" }, ...NAV_LINKS].map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "border-b hairline-dark py-5 text-[26px] font-medium tracking-[-0.01em] text-white/90 transition-all duration-300",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: `${60 + i * 45}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="micro-label mt-8">Melayani Jabodetabek · Bandung · Surabaya · Semarang</p>
        </div>
        <div className="border-t hairline-dark p-6">
          <Link href="/booking" className="btn-base btn-primary w-full">
            Pesan Servis Hari Ini
            <ArrowRight size={16} strokeWidth={2.2} />
          </Link>
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 font-dm text-[13px] text-white/60"
          >
            <MessageCircle size={15} /> Atau chat langsung via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

export function StickyBookBar() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const hidden = pathname === "/booking" || pathname === "/kontak";

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(max > 0 && window.scrollY / max > 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t hairline bg-white/95 backdrop-blur-xl transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <div className="leading-tight">
          <p className="font-dm text-[10px] uppercase tracking-[0.14em] text-slate">Mulai dari</p>
          <p className="num-tabular text-[18px] font-semibold text-navy">Rp 80.000</p>
        </div>
        <Link href="/booking" className="btn-base btn-primary !min-h-[46px] flex-1 !px-5">
          Pesan Servis
          <ArrowRight size={15} strokeWidth={2.2} />
        </Link>
      </div>
    </div>
  );
}
