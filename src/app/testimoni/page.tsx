import type { Metadata } from "next";
import Image from "next/image";
import { Droplets, MessageCircle, Timer, TrendingDown, Wind } from "lucide-react";
import { BRAND } from "@/lib/data";
import { Breadcrumb, ButtonGhost, ButtonPrimary, Container, Micro, Section, SectionHeader, Stars, TextLink } from "@/components/ui";
import { DistBars, Reveal, TestimonialFilter } from "@/components/interactive";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan ARKTIS — 4.9/5 dari 1.847 Ulasan",
  description:
    "Cerita nyata pelanggan di Jabodetabek, Bandung, Surabaya, Semarang, lengkap dengan foto before-after.",
};

const CASES = [
  {
    tag: "STUDI KASUS 01 · DEPOK",
    title: "Dari Bau Apek ke Kamar Anak yang Sehat",
    img: "/images/svc-deep.jpg",
    alt: "Perbandingan filter AC kotor dan bersih pada studi kasus deep cleaning di Depok",
    metrics: [
      { icon: Wind, v: "3 unit", l: "DEEP CLEANING" },
      { icon: Timer, v: "90 mnt", l: "PENGERJAAN" },
      { icon: Droplets, v: "0", l: "KELUHAN BAU" },
      { icon: TrendingDown, v: "Drastis", l: "BERSIN ANAK TURUN" },
    ],
    body: "Dua tahun bau apek dikira masalah kamar. Ternyata evaporator yang berjamur. Setelah deep cleaning menyeluruh, keluhan bau hilang total dan frekuensi bersin anak turun drastis dalam minggu pertama.",
  },
  {
    tag: "STUDI KASUS 02 · BEKASI",
    title: "Turun 22% Tagihan Listrik dengan Perawatan Rutin",
    img: "/images/svc-annual.jpg",
    alt: "Ruangan segar rumah pelanggan Bekasi setelah empat kunjungan perawatan tahunan ARKTIS",
    metrics: [
      { icon: Wind, v: "4 unit", l: "ANNUAL CARE" },
      { icon: Timer, v: "4×", l: "KUNJUNGAN TERJADWAL" },
      { icon: TrendingDown, v: "-22%", l: "TAGIHAN / BULAN" },
      { icon: Droplets, v: "0", l: "PANGGILAN DARURAT" },
    ],
    body: "Tagihan listrik naik pelan-pelan dan AC terasa makin tidak dingin. Setelah empat kunjungan perawatan terjadwal, konsumsi listrik turun sekitar 22% per bulan — dan tidak ada satu pun panggilan darurat sepanjang tahun.",
  },
];

export default function TestimoniPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1847",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="grain relative bg-paper pb-14 pt-36 text-center md:pb-20 md:pt-44">
        <Container>
          <Reveal>
            <div className="flex justify-center">
              <Breadcrumb trail={[{ label: "Beranda", href: "/" }, { label: "Testimoni" }]} />
            </div>
            <Micro className="mt-8">1.847 ULASAN TERVERIFIKASI</Micro>
            <h1 className="display-hero mx-auto mt-5 max-w-[15ch] text-navy">
              Kata Mereka yang Sudah Kami Datangi.
            </h1>
            <p className="lead-text mx-auto mt-6 max-w-[48ch] text-slate">
              Setiap ulasan berasal dari pelanggan dengan nomor order nyata. Kami tidak menghapus
              yang kurang baik.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Rating summary */}
      <Section tight className="bg-white">
        <Container>
          <Reveal>
            <div className="grid items-center gap-10 rounded-xl border hairline bg-paper p-8 shadow-soft md:grid-cols-[1fr_1.4fr] md:p-12">
              <div className="text-center md:text-left">
                <p className="num-tabular text-[72px] font-semibold leading-none text-navy md:text-[88px]">
                  4.9<span className="text-[0.38em] font-medium text-slate">/5.0</span>
                </p>
                <Stars n={5} size={20} className="mt-4 justify-center md:justify-start" />
                <p className="mt-3 font-dm text-[13px] text-slate">dari 1.847 ulasan terverifikasi</p>
              </div>
              <DistBars />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Grid dengan filter */}
      <Section className="bg-paper">
        <Container>
          <SectionHeader
            micro="ARSIP LENGKAP"
            title="Sembilan cerita pilihan."
            sub="Saring berdasarkan layanan yang ingin kamu baca."
          />
          <TestimonialFilter />
        </Container>
      </Section>

      {/* Studi kasus */}
      <Section className="bg-ice">
        <Container>
          <SectionHeader
            micro="DIBEDAH SATU-SATU"
            title="Studi kasus nyata."
            sub="Angka di balik cerita — dari pekerjaan dengan dokumentasi lengkap."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {CASES.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <article className="card-lift flex h-full flex-col overflow-hidden rounded-xl border hairline bg-white shadow-soft">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {/* split before/after statis */}
                    <Image
                      src={c.img}
                      alt={c.alt}
                      fill
                      sizes="(min-width:1024px) 25vw, 100vw"
                      className="object-cover [filter:grayscale(0.6)_sepia(0.28)_brightness(0.66)]"
                      style={{ clipPath: "inset(0 50% 0 0)" }}
                    />
                    <div className="absolute inset-0">
                      <Image
                        src={c.img}
                        alt=""
                        fill
                        sizes="(min-width:1024px) 25vw, 100vw"
                        className="object-cover"
                        style={{ clipPath: "inset(0 0 0 50%)" }}
                      />
                    </div>
                    <span className="absolute left-4 top-4 z-10 rounded-sm bg-arctic/55 px-2.5 py-1.5 font-dm text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      Sebelum
                    </span>
                    <span className="absolute right-4 top-4 z-10 rounded-sm bg-white/75 px-2.5 py-1.5 font-dm text-[10px] uppercase tracking-[0.14em] text-glacier backdrop-blur-sm">
                      Sesudah
                    </span>
                    <span className="absolute inset-y-0 left-1/2 z-10 w-px bg-white/70" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <Micro className="!text-glacier">{c.tag}</Micro>
                    <h3 className="mt-3 text-[21px] font-semibold leading-snug text-navy">{c.title}</h3>
                    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
                      {c.metrics.map((m) => (
                        <div key={m.l}>
                          <m.icon size={17} strokeWidth={1.6} className="text-mint" />
                          <p className="num-tabular mt-2 text-[19px] font-semibold text-navy">{m.v}</p>
                          <p className="mt-0.5 font-dm text-[9.5px] uppercase tracking-[0.12em] text-slate">
                            {m.l}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 border-t hairline pt-5 text-[14px] leading-[1.75] text-slate">
                      {c.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ulasan kurang baik — blok kejujuran */}
      <Section tight className="bg-white">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <Reveal>
              <Micro className="!text-slate/60">TRANSPARANSI PENUH</Micro>
              <article className="mt-6 rounded-xl border hairline bg-paper p-8 shadow-soft">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Stars n={3} size={14} />
                  <span className="font-dm text-[11.5px] uppercase tracking-[0.12em] text-slate/70">
                    Ulasan 3 bintang · Jakarta Timur · Agu 2024
                  </span>
                </div>
                <p className="mt-5 text-[16px] leading-[1.75] text-charcoal/85">
                  “Teknisi datang 40 menit terlambat dari jadwal karena macet total. Pengerjaannya
                  sendiri rapi dan hasilnya bagus — tapi keterlambatannya mengganggu jadwal saya.”
                </p>
                <div className="mt-6 rounded-lg border-l-2 border-glacier bg-ice/60 p-5">
                  <p className="font-dm text-[11px] uppercase tracking-[0.14em] text-glacier">
                    Tanggapan &amp; tindak lanjut ARKTIS
                  </p>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate">
                    Kami meminta maaf dan memberi diskon 20% untuk kunjungan berikutnya. Sejak itu,
                    semua jadwal kami beri buffer 30 menit dan kamu mendapat notifikasi WhatsApp
                    otomatis jika teknisi terlambat lebih dari 10 menit.
                  </p>
                </div>
              </article>
              <p className="mt-5 text-center font-dm text-[12.5px] text-slate/70">
                Kami tidak hanya menampilkan ulasan terbaik. Ini yang kami pelajari dari kesalahan
                kami.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tight className="grain relative bg-navy">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Micro>GILIRAN RUMAHMU</Micro>
              <h2 className="headline-section mt-4 max-w-[14ch] text-white">Giliran rumahmu.</h2>
            </div>
            <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row md:flex-col lg:flex-row">
              <ButtonPrimary href="/booking">Pesan Servis Hari Ini</ButtonPrimary>
              <ButtonGhost href="/cara-kerja" dark>
                Baca cara kerja kami
              </ButtonGhost>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
