import Link from "next/link";
import { BRAND, SERVICES } from "@/lib/data";
import { LogoLockup } from "./logo";
import { Container } from "./ui";

/* Ikon sosial digambar tangan (line-art 1.7px) agar konsisten dengan sistem ikon ARKTIS. */
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TiktokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 3v10.8a3.7 3.7 0 1 1-3.2-3.66" />
      <path d="M14.5 5.5c.6 2.3 2.3 3.9 4.9 4" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function WhatsappIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
      <path d="M9.2 8.4c.3-.7.6-.7 1-.7l.9 2.2-1 .9c.5 1.3 1.6 2.4 2.9 2.9l.9-1 2.2.9c0 .4 0 .8-.7 1.1-1.6.9-5.2-.9-6.6-2.3-1.2-1.2-1.6-2.7-.6-4.1Z" />
    </svg>
  );
}

const INFO_LINKS = [
  { href: "/cara-kerja", label: "Cara Kerja" },
  { href: "/harga", label: "Harga & Paket" },
  { href: "/tentang", label: "Area Jangkauan" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/faq", label: "FAQ" },
  { href: "/legal/kebijakan-privasi", label: "Kebijakan Privasi" },
];

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram ARKTIS" },
  { icon: TiktokIcon, label: "TikTok ARKTIS" },
  { icon: YoutubeIcon, label: "YouTube ARKTIS" },
  { icon: WhatsappIcon, label: "WhatsApp ARKTIS" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr] lg:gap-10">
          {/* Kolom 1 — identitas */}
          <div>
            <LogoLockup dark />
            <p className="mt-6 font-dm text-[13px] tracking-[0.02em] text-white/45">
              {BRAND.taglineEn}
            </p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/60">{BRAND.tagline}</p>
            <p className="mt-6 font-dm text-[11px] uppercase tracking-[0.16em] text-mint/80">
              Jabodetabek · Bandung · Surabaya · Semarang
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/55 transition-all hover:border-white/40 hover:text-white"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2 — layanan */}
          <nav aria-label="Layanan">
            <p className="font-dm text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
              Layanan
            </p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/layanan/${s.slug}`}
                    className="link-underline text-[14px] text-white/65 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kolom 3 — informasi */}
          <nav aria-label="Informasi">
            <p className="font-dm text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
              Informasi
            </p>
            <ul className="mt-5 space-y-3">
              {INFO_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="link-underline text-[14px] text-white/65 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kolom 4 — kontak */}
          <div>
            <p className="font-dm text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
              Kontak
            </p>
            <ul className="mt-5 space-y-3 text-[14px] text-white/65">
              <li>
                <a href={BRAND.whatsappLink} className="link-underline transition-colors hover:text-white">
                  WhatsApp: {BRAND.whatsapp}
                </a>
              </li>
              <li>Telepon: {BRAND.phone} (bebas pulsa)</li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="link-underline transition-colors hover:text-white">
                  {BRAND.email}
                </a>
              </li>
              <li className="pt-1 text-[13px] leading-relaxed text-white/45">
                {BRAND.hours[0]}
                <br />
                {BRAND.hours[1]}
              </li>
            </ul>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=192x192&margin=8&color=26-43-74&data=${encodeURIComponent(BRAND.whatsappLink)}`}
              alt="Kode QR menuju WhatsApp ARKTIS"
              width={88}
              height={88}
              loading="lazy"
              className="mt-6 rounded-md border border-white/12 bg-white p-1.5"
            />
          </div>
        </div>

        {/* Bar bawah */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 font-dm text-[12px] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2025 ARKTIS HOME SERVICE. Semua hak dilindungi undang-undang.</p>
          <p>Dipercaya lebih dari 2.000 keluarga Indonesia.</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/legal/kebijakan-privasi" className="transition-colors hover:text-white/75">
              Kebijakan Privasi
            </Link>
            <Link href="/legal/syarat-layanan" className="transition-colors hover:text-white/75">
              Syarat Layanan
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
