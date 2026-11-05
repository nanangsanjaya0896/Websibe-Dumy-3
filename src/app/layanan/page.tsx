import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck, CircleAlert, MessageCircle, SquarePlus, Wind } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BRAND, SERVICES, rupiah } from "@/lib/data";
import { ServiceCardLarge } from "@/components/cards";
import { Breadcrumb, ButtonPrimary, Container, Micro, Section, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/interactive";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "6 Layanan Servis AC Rumah — ARKTIS",
  description:
    "Cuci AC standard, deep cleaning, perbaikan, isi freon, pasang baru, dan perawatan tahunan. Harga mulai Rp 80.000.",
};

const QUICK: { icon: LucideIcon; q: string; href: string }[] = [
  { icon: Wind, q: "AC bau atau tidak dingin?", href: "/layanan/cuci-ac-deep-cleaning" },
  { icon: CircleAlert, q: "AC mati atau error?", href: "/layanan/servis-perbaikan-ac" },
  { icon: SquarePlus, q: "Ingin AC baru dipasang?", href: "/layanan/pasang-ac-baru" },
  { icon: CalendarCheck, q: "Capek mikirin jadwal?", href: "/layanan/perawatan-tahunan" },
];

const TABLE_ROWS = [
  { name: "Cuci AC Standard", fit: "Perawatan rutin 2–3 bulan", job: "Cuci filter, kisi & coil bagian luar", price: "Rp 80.000", time: "45 mnt" },
  { name: "Cuci AC Deep Cleaning", fit: "AC lama, bau, jamur", job: "Bongkar total + rendam kimia + UV", price: "Rp 150.000", time: "90 mnt" },
  { name: "Servis & Perbaikan", fit: "AC mati, error, bocor", job: "Diagnosa + ganti komponen + uji", price: "Rp 100.000", time: "60–120 mnt" },
  { name: "Isi Ulang Freon", fit: "AC bersih tapi kurang dingin", job: "Cek tekanan + isi R32/R410A", price: "Rp 200.000", time: "30–60 mnt" },
  { name: "Pasang AC Baru", fit: "Unit baru / pindahan", job: "Bracket + pipa + kabel + casing", price: "Rp 350.000", time: "2–3 jam" },
  { name: "Perawatan Tahunan", fit: "2+ unit, anti-ribet", job: "4× cuci + 2× cek + prioritas", price: "Rp 600.000", time: "Setahun" },
];

export default function LayananPage() {
  return (
    <>
      {/* Hero ringkas — tipografi murni, tanpa foto */}
      <section className="grain relative overflow-hidden bg-ice pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-glacier/8 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <Breadcrumb trail={[{ label: "Beranda", href: "/" }, { label: "Layanan" }]} />
            <Micro className="mt-8">6 LAYANAN · 1 STANDAR</Micro>
            <h1 className="display-hero mt-5 max-w-[14ch] text-navy">
              Pilih Layanan yang Kamu Butuhkan.
            </h1>
            <p className="lead-text mt-6 max-w-[52ch] text-slate">
              Semua layanan dikerjakan teknisi bersertifikat dengan standar dan garansi yang sama.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Quick selector */}
      <Section tight className="bg-paper">
        <Container>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK.map((item, i) => (
              <Reveal key={item.q} delay={i * 70}>
                <Link
                  href={item.href}
                  className="group flex h-full items-center gap-4 rounded-lg border hairline bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-glacier/50 hover:shadow-lift"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ice text-glacier transition-colors group-hover:bg-glacier group-hover:text-white">
                    <item.icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="text-[14.5px] font-medium leading-snug text-charcoal">{item.q}</span>
                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-mist transition-all group-hover:translate-x-0.5 group-hover:text-glacier"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Grid enam kartu besar */}
      <Section className="bg-paper pt-0 md:pt-4">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 90}>
                <ServiceCardLarge service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tabel perbandingan */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            micro="PERBANDINGAN CEPAT"
            title="Bingung Pilih yang Mana?"
            sub="Bandingkan dalam satu pandangan — semua harga harga final."
          />
          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-glacier/25">
                    {["Layanan", "Cocok untuk", "Yang dikerjakan", "Harga", "Waktu"].map((h) => (
                      <th
                        key={h}
                        className="pb-4 pr-6 font-dm text-[11px] font-medium uppercase tracking-[0.14em] text-slate"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((r) => (
                    <tr key={r.name} className="border-b hairline transition-colors hover:bg-ice/50">
                      <td className="py-5 pr-6 text-[15px] font-semibold text-navy">{r.name}</td>
                      <td className="py-5 pr-6 text-[14px] text-slate">{r.fit}</td>
                      <td className="py-5 pr-6 text-[14px] text-slate">{r.job}</td>
                      <td className="num-tabular py-5 pr-6 text-[15px] font-semibold text-glacier">{r.price}</td>
                      <td className="py-5 font-dm text-[13px] text-slate">{r.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Tidak yakin? */}
      <Section tight className="bg-ice">
        <Container>
          <Reveal>
            <div className="grid items-center gap-8 rounded-xl border hairline bg-white p-8 shadow-soft md:grid-cols-[1.4fr_1fr] md:p-12">
              <div>
                <Micro>KONSULTASI GRATIS</Micro>
                <h2 className="mt-4 text-[26px] font-semibold leading-snug text-navy md:text-[32px]">
                  Tidak yakin? Ceritakan gejalanya dulu.
                </h2>
                <p className="mt-4 max-w-[48ch] leading-relaxed text-slate">
                  Teknisi kami bantu tentukan layanan yang tepat. Gratis, tanpa kewajiban apa pun.
                </p>
              </div>
              <div className="flex flex-col gap-3.5">
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-ghost w-full"
                >
                  <MessageCircle size={16} className="text-[#1d9e78]" />
                  Tanya via WhatsApp
                </a>
                <ButtonPrimary href="/booking" className="w-full">
                  Booking dengan Diagnosa Awal
                </ButtonPrimary>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA penutup */}
      <Section tight className="grain relative bg-navy">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Micro>SUDAH TAHU YANG DIBUTUHKAN?</Micro>
              <h2 className="headline-section mt-4 max-w-[16ch] text-white">
                Jadwal hari ini masih tersedia.
              </h2>
            </div>
            <ButtonPrimary href="/booking" className="shrink-0">
              Pesan Servis Hari Ini
            </ButtonPrimary>
          </div>
        </Container>
      </Section>
    </>
  );
}
