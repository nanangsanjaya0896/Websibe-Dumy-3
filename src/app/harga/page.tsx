import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarClock,
  ClipboardCheck,
  Home,
  MessageCircle,
  Percent,
  ShieldCheck,
} from "lucide-react";
import { BONUSES, BRAND, FAQ_GROUPS, PRICE_ROWS, rupiah } from "@/lib/data";
import { Breadcrumb, ButtonPrimary, CheckRow, Container, Micro, Section, SectionHeader, TextLink } from "@/components/ui";
import { Accordion, Reveal } from "@/components/interactive";
import { PriceCalculator } from "@/components/forms";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Harga Servis AC Transparan — ARKTIS",
  description:
    "Daftar harga lengkap tanpa biaya tersembunyi. Paket tahunan hemat hingga 40%. Bonus senilai Rp 130.000.",
};

const BONUS_ICONS = [MessageCircle, ClipboardCheck, ShieldCheck, Percent];

export default function HargaPage() {
  return (
    <>
      {/* Hero harga */}
      <section className="grain relative overflow-hidden bg-paper pb-16 pt-36 md:pb-24 md:pt-44">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
            <Reveal>
              <Breadcrumb trail={[{ label: "Beranda", href: "/" }, { label: "Harga & Paket" }]} />
              <Micro className="mt-8">TRANSPARAN · TANPA BIAYA TERSEMBUNYI</Micro>
              <h1 className="display-hero mt-5 max-w-[13ch] text-navy">
                Harga Jelas Sebelum Kami Datang.
              </h1>
              <p className="lead-text mt-6 max-w-[46ch] text-slate">
                Yang tertera di sini adalah yang kamu bayar. Konfirmasi dulu, baru kami kerjakan.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-lg border hairline bg-white p-6 shadow-soft">
                <p className="font-dm text-[11px] uppercase tracking-[0.14em] text-slate">
                  Estimasi rata-rata 1 rumah
                </p>
                <div className="mt-4 flex items-baseline gap-3 text-[15px] text-charcoal">
                  <Home size={16} className="translate-y-0.5 text-glacier" /> 2 unit AC
                </div>
                <p className="num-tabular mt-2 text-[30px] font-semibold text-navy">
                  {rupiah(160000)}
                </p>
                <p className="mt-1 font-dm text-[12.5px] text-slate">± 90 menit · sudah termasuk laporan</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Tabel harga tunggal */}
      <Section tight className="bg-white">
        <Container>
          <SectionHeader
            align="left"
            micro="DAFTAR HARGA"
            title="Satu tabel, semua layanan."
          />
          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-glacier/25 text-left">
                    {["Layanan", "Harga mulai", "Satuan", "Durasi"].map((h) => (
                      <th
                        key={h}
                        className="pb-4 pr-8 font-dm text-[11px] font-medium uppercase tracking-[0.14em] text-slate"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRICE_ROWS.map((r) => (
                    <tr key={r.service} className="border-b hairline transition-colors hover:bg-ice/50">
                      <td className="py-5 pr-8 text-[15.5px] font-medium text-navy">{r.service}</td>
                      <td className="num-tabular py-5 pr-8 text-[17px] font-semibold text-glacier">
                        {rupiah(r.price)}
                      </td>
                      <td className="py-5 pr-8 font-dm text-[13px] text-slate">per {r.unit}</td>
                      <td className="py-5 font-dm text-[13px] text-slate">{r.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-[13px] italic leading-relaxed text-slate/80">
              Harga belum termasuk spare part. Semua tambahan dikonfirmasi sebelum dikerjakan — kamu
              yang memutuskan.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Dua kartu paket */}
      <Section className="bg-ice">
        <Container>
          <SectionHeader
            micro="LEBIH HEMAT"
            title="Paket Bundling untuk Rumahmu"
            sub="Untuk rumah dengan beberapa unit — atau untuk setahun penuh ketenangan."
          />
          <div className="mx-auto grid max-w-[920px] gap-6 md:grid-cols-2">
            {/* Paket Rumah Hemat */}
            <Reveal>
              <div className="card-lift flex h-full flex-col rounded-xl border hairline bg-white p-8 shadow-soft md:p-9">
                <span className="w-fit rounded-full bg-ice px-3.5 py-1.5 font-dm text-[11px] font-semibold uppercase tracking-[0.1em] text-glacier">
                  Hemat 9%
                </span>
                <h3 className="mt-6 text-[22px] font-semibold text-navy">Paket Rumah Hemat</h3>
                <p className="mt-1.5 text-[13.5px] font-light text-slate">
                  Untuk rumah dengan 3 unit AC dalam satu kunjungan.
                </p>
                <p className="num-tabular mt-6 text-[38px] font-semibold leading-none text-navy">
                  {rupiah(219000)}
                </p>
                <p className="mt-2 text-[12.5px] text-slate">
                  <s>{rupiah(240000)}</s> · hemat {rupiah(21000)}
                </p>
                <ul className="mt-7 space-y-3">
                  {["3 unit Cuci AC Standard", "Satu kunjungan, selesai ± 2,5 jam", "Semua bonus tetap berlaku"].map(
                    (f) => (
                      <CheckRow key={f}>{f}</CheckRow>
                    )
                  )}
                </ul>
                <div className="mt-auto pt-8">
                  <TextLink href="/booking">Pesan Paket Rumah Hemat</TextLink>
                </div>
              </div>
            </Reveal>

            {/* Paket Tahunan — featured */}
            <Reveal delay={100}>
              <div className="card-lift relative flex h-full flex-col rounded-xl border-[1.5px] border-glacier bg-white p-8 shadow-lift md:p-9">
                <span className="absolute -top-3.5 left-8 rounded-full bg-ember px-3.5 py-1.5 font-dm text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                  Hemat hingga 40%
                </span>
                <div className="mt-2 flex items-center gap-2.5">
                  <CalendarClock size={20} className="text-glacier" strokeWidth={1.6} />
                  <h3 className="text-[22px] font-semibold text-navy">Paket Tahunan ARKTIS CARE</h3>
                </div>
                <p className="mt-1.5 text-[13.5px] font-light text-slate">
                  Perlindungan setahun, satu harga pasti.
                </p>
                <p className="num-tabular mt-6 text-[38px] font-semibold leading-none text-navy">
                  {rupiah(600000)}
                  <span className="ml-1.5 font-display text-[13px] font-normal text-slate">/tahun/unit</span>
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    "4× cuci AC per tahun, terjadwal",
                    "2× pengecekan gratis",
                    "Prioritas booking sepanjang tahun",
                    "Diskon 20% semua spare part",
                    "Laporan digital tiap kunjungan",
                  ].map((f) => (
                    <CheckRow key={f}>{f}</CheckRow>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <ButtonPrimary href="/booking?layanan=perawatan-tahunan" className="w-full">
                    Aktifkan ARKTIS CARE
                  </ButtonPrimary>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Kalkulator */}
      <Section tight className="bg-paper" id="kalkulator">
        <Container>
          <SectionHeader
            micro="HITUNG SENDIRI"
            title="Kalkulator Estimasi"
            sub="Geser, pilih, lihat angkanya — tanpa menebak-nebak."
          />
          <Reveal>
            <PriceCalculator />
          </Reveal>
        </Container>
      </Section>

      {/* Bonus */}
      <Section className="bg-gradient-to-b from-glacier/10 via-ice to-ice" id="bonus">
        <Container>
          <SectionHeader
            micro="NILAI LEBIH"
            title="Bonus Eksklusif untuk Setiap Pemesanan"
            sub="Nilai lebih yang tidak kamu duga."
          />
          <div className="mx-auto grid max-w-[860px] gap-4">
            {BONUSES.map((b, i) => {
              const Icon = BONUS_ICONS[i];
              return (
                <Reveal key={b.title} delay={i * 70}>
                  <div className="flex items-center gap-5 rounded-lg border hairline bg-white p-5 shadow-soft md:p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint/12 text-[#277069]">
                      <Icon size={19} strokeWidth={1.7} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[15.5px] font-semibold leading-snug text-charcoal">{b.title}</p>
                      <p className="mt-1 text-[13px] text-slate">{b.desc}</p>
                    </div>
                    <span className="hidden shrink-0 rounded-full border border-mint/45 bg-mint/10 px-3.5 py-1.5 font-dm text-[11.5px] font-semibold text-[#277069] sm:block">
                      {b.value}
                    </span>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={280}>
              <div className="mt-3 rounded-full border border-glacier/30 bg-white px-7 py-4 text-center font-dm text-[14px] font-semibold text-navy shadow-soft">
                Total nilai bonus: {rupiah(130000)}+ —{" "}
                <span className="text-glacier">gratis di setiap pemesanan.</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Jaminan harga */}
      <Section tight className="bg-white">
        <Container>
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { t: "Harga final = harga tertulis", d: "Tidak ada satu rupiah pun kejutan di akhir." },
              { t: "Tanpa biaya survei", d: "Konsultasi dan cek lokasi selalu gratis." },
              { t: "Reschedule gratis", d: "Ubah jadwal hingga 2 jam sebelum kunjungan." },
            ].map((j, i) => (
              <Reveal key={j.t} delay={i * 70}>
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-glacier/10 text-glacier">
                  <ShieldCheck size={20} strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-navy">{j.t}</h3>
                <p className="mx-auto mt-2 max-w-[30ch] text-[13.5px] leading-relaxed text-slate">{j.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ harga */}
      <Section tight className="bg-paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <SectionHeader micro="SOAL HARGA" title="Masih ragu soal biaya?" />
            <Reveal>
              <Accordion
                items={[
                  FAQ_GROUPS[1].items[0],
                  FAQ_GROUPS[1].items[1],
                  {
                    q: "Apakah harga berbeda per area?",
                    a: "Tidak. Harga sama di Jabodetabek, Bandung, Surabaya, dan Semarang — tanpa biaya transport tambahan di area layanan.",
                  },
                  {
                    q: "Apakah ada biaya pembatalan?",
                    a: "Tidak ada. Kamu bisa membatalkan atau mengubah jadwal hingga 2 jam sebelum kunjungan, gratis penuh.",
                  },
                ]}
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CTA penutup */}
      <Section tight className="grain relative bg-navy">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="headline-section max-w-[16ch] text-white">
              Harga sudah jelas. Giliran jadwalnya.
            </h2>
            <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row md:flex-col lg:flex-row">
              <ButtonPrimary href="/booking">Pesan dengan Harga Ini</ButtonPrimary>
              <a href={BRAND.whatsappLink} target="_blank" rel="noreferrer" className="btn-base btn-ghost-dark">
                <MessageCircle size={16} />
                Tanya via WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
