import { Clock, Mail, MessageCircle, Phone, RotateCcw, ShieldCheck, Timer } from "lucide-react";
import { BRAND, CITIES } from "@/lib/data";
import { Breadcrumb, Container, Micro, Section } from "@/components/ui";
import { BookingForm } from "@/components/forms";
import { Reveal } from "@/components/interactive";

/* Panel info sticky + form — dipakai oleh /kontak dan /booking */
export function ContactBooking({
  variant,
  defaultService,
}: {
  variant: "kontak" | "booking";
  defaultService?: string;
}) {
  return (
    <>
      <Section className="grain relative bg-paper pt-36 md:pt-44">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            {/* Kiri — form */}
            <Reveal>
              <div>
                <Breadcrumb
                  trail={[
                    { label: "Beranda", href: "/" },
                    { label: variant === "booking" ? "Booking" : "Kontak" },
                  ]}
                />
                <Micro className="mt-8">
                  {variant === "booking" ? "3 MENIT SELESAI" : "KAMI MERESPONS CEPAT"}
                </Micro>
                <h1 className="display-hero mt-5 text-navy">Amankan Jadwalmu.</h1>
                <p className="lead-text mt-5 max-w-[46ch] text-slate">
                  Booking selesai dalam 3 menit. Konfirmasi dalam 15 menit — berisi nama dan foto
                  teknisi yang akan datang.
                </p>
                <div className="mt-12">
                  <BookingForm defaultService={defaultService} />
                </div>
              </div>
            </Reveal>

            {/* Kanan — panel info sticky */}
            <Reveal delay={140}>
              <aside className="lg:sticky lg:top-[110px]">
                <div className="rounded-xl border hairline bg-white p-7 shadow-soft md:p-8">
                  <p className="font-dm text-[11px] font-medium uppercase tracking-[0.16em] text-slate">
                    Kontak langsung
                  </p>
                  <div className="mt-6 space-y-5 text-[14.5px]">
                    <a
                      href={BRAND.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3.5 text-charcoal transition-colors hover:text-glacier"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d9e78]/10 text-[#1d9e78]">
                        <MessageCircle size={17} />
                      </span>
                      <span>
                        <span className="block text-[12px] text-slate">WhatsApp</span>
                        {BRAND.whatsapp}
                      </span>
                    </a>
                    <a
                      href={`tel:${BRAND.phone}`}
                      className="flex items-center gap-3.5 text-charcoal transition-colors hover:text-glacier"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ice text-glacier">
                        <Phone size={17} />
                      </span>
                      <span>
                        <span className="block text-[12px] text-slate">Telepon (bebas pulsa)</span>
                        {BRAND.phone}
                      </span>
                    </a>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="flex items-center gap-3.5 text-charcoal transition-colors hover:text-glacier"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ice text-glacier">
                        <Mail size={17} />
                      </span>
                      <span>
                        <span className="block text-[12px] text-slate">Email</span>
                        {BRAND.email}
                      </span>
                    </a>
                    <div className="flex items-start gap-3.5 text-charcoal">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ice text-glacier">
                        <Clock size={17} />
                      </span>
                      <span className="text-[13.5px] leading-relaxed">
                        <span className="block text-[12px] text-slate">Jam operasional</span>
                        {BRAND.hours[0]}
                        <br />
                        {BRAND.hours[1]}
                      </span>
                    </div>
                  </div>

                  <div className="mt-7 flex items-center gap-5 border-t hairline pt-7">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=192x192&margin=6&color=26-43-74&data=${encodeURIComponent(BRAND.whatsappLink)}`}
                      alt="Pindai untuk chat WhatsApp ARKTIS"
                      width={96}
                      height={96}
                      loading="lazy"
                      className="rounded-md border hairline bg-white p-1.5"
                    />
                    <p className="text-[12.5px] leading-relaxed text-slate">
                      Pindai untuk chat langsung dengan tim booking kami.
                    </p>
                  </div>

                  <div className="mt-7 border-t hairline pt-6">
                    <p className="micro-label !text-glacier">Area layanan</p>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-slate">
                      {CITIES.map((c) => c.name).join(" · ")}
                    </p>
                    <p className="mt-4 flex items-center gap-2 font-dm text-[12px] text-[#277069]">
                      <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-mint" />
                      Rata-rata respons WhatsApp: 4 menit di jam kerja.
                    </p>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Reassurance row */}
      <Section tight className="bg-white">
        <Container>
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { icon: Timer, t: "Konfirmasi 15 menit", d: "Berisi nama & foto teknisi yang datang." },
              { icon: RotateCcw, t: "Reschedule gratis", d: "Ubah jadwal hingga 2 jam sebelumnya." },
              { icon: ShieldCheck, t: "Garansi 30 hari", d: "Ada masalah, kami kembali tanpa biaya." },
            ].map((r, i) => (
              <Reveal key={r.t} delay={i * 70}>
                <r.icon size={26} strokeWidth={1.5} className="mx-auto text-glacier" />
                <h3 className="mt-4 text-[16px] font-semibold text-navy">{r.t}</h3>
                <p className="mx-auto mt-1.5 max-w-[28ch] text-[13.5px] text-slate">{r.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

/* Peta abstrak minimal Jawa Barat–timur: silhouette hairline + 4 titik kota */
export function AreaMap() {
  const dots = [
    { x: 128, y: 86, label: "Jabodetabek" },
    { x: 206, y: 108, label: "Bandung" },
    { x: 372, y: 62, label: "Semarang" },
    { x: 520, y: 96, label: "Surabaya" },
  ];
  return (
    <div className="relative overflow-hidden rounded-xl border hairline bg-ice/60 p-6 shadow-soft md:p-10">
      <svg
        viewBox="0 0 640 220"
        className="h-auto w-full"
        role="img"
        aria-label="Peta abstrak area layanan ARKTIS: Jabodetabek, Bandung, Semarang, dan Surabaya di Pulau Jawa"
      >
        <path
          d="M40 96 C90 60, 150 84, 210 104 C270 124, 320 84, 380 60 C440 40, 500 60, 560 84 C585 94, 600 110, 596 128 C590 156, 540 158, 490 150 C420 138, 350 160, 280 168 C210 176, 130 156, 80 132 C58 122, 30 112, 40 96 Z"
          fill="white"
          stroke="#c8d8e8"
          strokeWidth="1.2"
        />
        <path
          d="M330 150 C360 158, 395 152, 420 146"
          fill="none"
          stroke="#e8eef6"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
        {dots.map((d) => (
          <g key={d.label}>
            <circle cx={d.x} cy={d.y} r="14" fill="#2e6da4" opacity="0.12" />
            <circle cx={d.x} cy={d.y} r="4.5" fill="#2e6da4" />
            <text
              x={d.x}
              y={d.y - 14}
              textAnchor="middle"
              className="fill-navy"
              style={{ fontSize: 12.5, fontFamily: "var(--font-dm)", fontWeight: 600, letterSpacing: "0.06em" }}
            >
              {d.label.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
      <p className="mt-4 text-center font-dm text-[12px] uppercase tracking-[0.16em] text-slate/70">
        4 kota · 34 teknisi · respon rata-rata 90 menit
      </p>
    </div>
  );
}
