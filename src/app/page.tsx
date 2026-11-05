import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  ChevronDown,
  HeartHandshake,
  Wind,
  MessageCircle,
  ShieldCheck,
  Snowflake,
  Star,
  Tag,
  X,
  Zap,
} from "lucide-react";
import { BRAND, FAQ_GROUPS, SERVICES, TESTIMONIALS, rupiah } from "@/lib/data";
import { LogoMark } from "@/components/logo";
import { ButtonGhost, ButtonPrimary, CheckRow, Container, Micro, Section, SectionHeader, Stars, TextLink, TrustDots } from "@/components/ui";
import { Accordion, BeforeAfter, CountUp, Reveal, TestimonialCard } from "@/components/interactive";
import { GhostServiceCard, ServiceCard } from "@/components/cards";
import { cn } from "@/lib/cn";

const BENEFITS = [
  {
    icon: Wind,
    title: "Udara Lebih Bersih & Sehat",
    body: "Debu, bakteri, dan jamur hilang dari sirkulasi udara rumahmu. Napas lebih lega, tidur lebih nyenyak, alergi berkurang.",
  },
  {
    icon: Zap,
    title: "Tagihan Listrik Lebih Hemat",
    body: "AC bersih bekerja lebih efisien. Pelanggan kami rata-rata hemat 15–25% per bulan.",
  },
  {
    icon: CalendarClock,
    title: "AC Lebih Awet",
    body: "Perawatan rutin memperpanjang usia AC hingga 2–3 kali lebih lama dari usia pakai biasanya.",
  },
  {
    icon: Snowflake,
    title: "Pendinginan Maksimal Kembali",
    body: "Kesejukan seperti saat pertama dipasang, dengan konsumsi energi yang lebih rendah.",
  },
  {
    icon: HeartHandshake,
    title: "Ketenangan untuk Keluarga",
    body: "Garansi 30 hari di setiap servis. Ada masalah, kami kembali tanpa biaya.",
  },
  {
    icon: BadgeCheck,
    title: "Pengalaman Servis Premium",
    body: "Teknisi rapi, komunikatif, profesional. Kami tangani dari awal hingga akhir.",
  },
];

const CHECKLIST = [
  "AC sudah lebih dari 3 bulan tidak dibersihkan",
  "Ruangan terasa pengap meski AC menyala",
  "Muncul bau tidak sedap atau apek",
  "Tagihan listrik membengkak tanpa sebab jelas",
  "AC tidak sedingin dulu meski suhu sudah rendah",
  "Anggota keluarga sering bersin di dalam rumah",
  "Ada bunyi aneh atau air menetes dari unit",
];

const PLATFORMS = ["Google Reviews 4.9", "Tokopedia 4.8", "GoService 4.9", "Instagram 4.9"];

const certItems = [
  "Penghargaan Layanan Terbaik 2024",
  "Anggota Asosiasi Teknisi AC Indonesia",
  "Certified Green Service",
  "Top Rated Google 2024",
  "Terdaftar & Berizin Resmi",
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.name,
    description: BRAND.tagline,
    telephone: BRAND.phone,
    email: BRAND.email,
    areaServed: ["Jabodetabek", "Bandung", "Surabaya", "Semarang"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1847",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ————————— H1 · HERO FULL-BLEED ————————— */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-arctic">
        <Image
          src="/images/hero-home.jpg"
          alt="Teknisi ARKTIS membersihkan kisi-kisi AC di ruang tamu rumah modern Indonesia"
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover object-[70%_center] md:object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-arctic/90 via-arctic/45 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-arctic/80 to-transparent"
          aria-hidden="true"
        />
        <LogoMark
          size={340}
          className="watermark -bottom-16 -right-16 text-white"
        />

        <Container className="relative z-10 pb-20 pt-40 md:pb-28">
          <Reveal>
            <Micro>SERVIS AC BERSERTIFIKAT · SEJAK 2019</Micro>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-hero mt-6 max-w-[16ch] text-white">
              Rumahmu Layak Mendapatkan Udara yang Lebih Bersih.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead-text mt-7 max-w-[46ch] text-white/75">
              Teknisi bersertifikat datang ke rumahmu — rapi, tepat waktu, harga jelas di depan.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonPrimary href="/booking">Pesan Servis Hari Ini</ButtonPrimary>
              <ButtonGhost href="/harga" dark>
                Lihat Paket &amp; Harga
              </ButtonGhost>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/70">
              <span className="flex items-center gap-2">
                <Stars n={5} size={13} />
                <strong className="font-dm font-semibold text-white">4.9/5</strong> dari 1.847 ulasan
              </span>
              <span className="hidden h-3 w-px bg-white/25 sm:block" />
              <span>Garansi 30 hari</span>
              <span className="hidden h-3 w-px bg-white/25 sm:block" />
              <span>2.847 rumah dilayani</span>
            </div>
          </Reveal>
        </Container>

        <a
          href="#mengapa"
          aria-label="Gulir ke bawah"
          className="absolute bottom-6 right-6 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors hover:text-white md:flex"
        >
          <ChevronDown size={18} className="animate-float-slow" />
        </a>
      </section>

      {/* ————————— H2 · MENGAPA INI PENTING ————————— */}
      <Section id="mengapa" className="bg-paper">
        <Container>
          <Reveal className="mx-auto max-w-[720px] text-center">
            <Micro>MENGAPA INI PENTING</Micro>
            <h2 className="mt-5 text-[24px] font-semibold leading-[1.32] tracking-[-0.01em] text-navy md:text-[28px]">
              AC yang kotor bukan cuma bikin ruangan pengap — tapi jadi sarang debu, bakteri, dan
              jamur yang dihirup keluargamu setiap hari.
            </h2>
            <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.75] text-slate">
              ARKTIS hadir dengan teknisi bersertifikat, peralatan profesional, dan standar
              kebersihan tertinggi — supaya setiap napas di rumahmu adalah napas yang segar.
            </p>
            <p className="micro-label mt-10 !text-slate/55">
              MELAYANI JABODETABEK · BANDUNG · SURABAYA · SEMARANG
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ————————— H3 · CTA PANEL PERTAMA ————————— */}
      <Section className="bg-gradient-to-b from-ice via-ice to-paper pt-0 md:pt-0">
        <Container>
          <Reveal>
            <div className="grain relative mx-auto max-w-[880px] overflow-hidden rounded-xl border hairline bg-gradient-to-br from-ice via-white to-mist/40 px-6 py-14 text-center shadow-soft md:px-16 md:py-20">
              <LogoMark size={220} className="watermark -right-10 -top-10 text-glacier" />
              <h2 className="headline-section text-navy">Jadwalkan Servis AC-mu Sekarang.</h2>
              <p className="mt-4 font-dm text-[14px] tracking-[0.04em] text-slate">
                Cepat · Mudah · Tanpa Antri Panjang
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonPrimary href="/booking">Pesan Servis Hari Ini</ButtonPrimary>
                <ButtonGhost href="/layanan">Lihat Semua Paket Layanan</ButtonGhost>
              </div>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-dm text-[13.5px] font-medium text-[#1d9e78] underline-offset-4 hover:underline"
              >
                <MessageCircle size={15} />
                Atau chat langsung via WhatsApp
              </a>
              <p className="mt-8 flex items-center justify-center gap-2 font-dm text-[12px] text-slate/80">
                <span className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-mint" />
                Slot servis hari ini terbatas — amankan jadwalmu sekarang.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ————————— H4 · SOCIAL PROOF (NAVY) ————————— */}
      <Section className="grain relative bg-navy" tight>
        <Container>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {[
              {
                v: <CountUp to={2847} suffix="+" />,
                label: "Rumah Telah Dilayani",
                sub: "dan terus bertambah setiap hari",
              },
              {
                v: (
                  <>
                    <CountUp to={4.9} decimals={1} />
                    <span className="text-[0.45em] font-medium text-white/50"> / 5.0</span>
                  </>
                ),
                label: "Rating Kepuasan Pelanggan",
                sub: "dari 1.847 ulasan terverifikasi",
              },
              {
                v: <CountUp to={98} suffix="%" />,
                label: "Pelanggan Kembali Memesan",
                sub: "karena kualitas yang konsisten",
              },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div
                  className={cn(
                    "border-white/10 md:border-l md:pl-8",
                    i === 0 && "md:border-l-0 md:pl-0"
                  )}
                >
                  <p className="num-tabular text-[52px] font-semibold leading-none text-white md:text-[64px]">
                    {s.v}
                  </p>
                  <p className="micro-label mt-4">{s.label}</p>
                  <p className="mt-2 text-[13.5px] text-white/55">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Strip avatar monogram */}
          <Reveal delay={200}>
            <div className="mt-14 flex flex-wrap items-center gap-6 border-y border-white/10 py-7">
              <div className="flex -space-x-3">
                {TESTIMONIALS.slice(0, 8).map((t) => (
                  <span
                    key={t.name}
                    title={t.name}
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full font-dm text-[13px] font-semibold ring-2 ring-navy",
                      t.tone
                    )}
                  >
                    {t.initials}
                  </span>
                ))}
              </div>
              <p className="text-[14px] text-white/60">
                +2.847 keluarga Indonesia telah mempercayai ARKTIS
              </p>
            </div>
          </Reveal>

          {/* Platform marquee */}
          <div className="marquee-mask mt-10 overflow-hidden" aria-hidden="true">
            <div className="animate-marquee flex w-max items-center gap-14">
              {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, i) => (
                <span key={i} className="flex items-center gap-2.5 font-dm text-[13px] tracking-[0.04em] text-white/45">
                  <Star size={13} className="fill-mint text-mint" strokeWidth={0} />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ————————— H5 · PROBLEM IDENTIFICATION ————————— */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            align="left"
            micro="KAPAN TERAKHIR KALI?"
            title="Kapan Terakhir Kali AC-mu Dicuci?"
          />
          <Reveal>
            <BeforeAfter
              src="/images/svc-deep.jpg"
              altBefore="Filter AC penuh debu dan fin berjamur sebelum dibersihkan"
              altAfter="Filter putih bersih dan fin aluminium mengkilap setelah servis ARKTIS"
              ratio="aspect-[4/3] md:aspect-[21/9]"
            />
          </Reveal>
          <div className="mt-5 grid gap-3 text-[13.5px] italic leading-relaxed text-slate/80 md:grid-cols-2 md:not-italic md:text-[14px]">
            <p>Kiri — filter penuh debu, fin berjamur, udara terasa berat.</p>
            <p className="md:text-right">Kanan — filter putih bersih, fin mengkilap, udara segar mengalir.</p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {CHECKLIST.map((c, i) => (
              <Reveal key={c} delay={(i % 2) * 70}>
                <div className="flex items-start gap-3.5 border-b hairline pb-4">
                  <X size={16} className="mt-1 shrink-0 text-[#b85433]/80" strokeWidth={2.2} />
                  <p className="text-[15px] leading-relaxed text-charcoal/85">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-12 max-w-[620px] text-[17px] leading-relaxed text-navy">
              Kalau kamu mengangguk di salah satu poin, AC-mu sudah waktunya dapat perhatian
              profesional.{" "}
              <TextLink href="/cara-kerja" className="ml-1">
                Cek penyebabnya di halaman Cara Kerja
              </TextLink>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ————————— H6 · LAYANAN PREVIEW ————————— */}
      <Section className="bg-ice">
        <Container>
          <SectionHeader
            micro="6 LAYANAN · 1 STANDAR"
            title="Solusi Lengkap untuk Setiap Kebutuhan AC-mu"
            sub="Pilih paket yang paling sesuai dengan kondisimu."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {SERVICES.slice(0, 3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
            <Reveal delay={240}>
              <GhostServiceCard />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ————————— H7 · BENEFITS (NAVY GRID) ————————— */}
      <Section className="grain relative bg-navy">
        <LogoMark size={420} className="watermark -left-24 top-10 text-white" />
        <Container>
          <SectionHeader
            dark
            micro="HASIL NYATA"
            title="Apa yang Kamu Rasakan Setelah Servis ARKTIS"
            sub="Bukan sekadar janji — tapi hasil nyata."
          />
          <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80} className="h-full">
                <div className="flex h-full flex-col bg-navy p-8 transition-colors duration-300 hover:bg-[#1f3255] md:p-9">
                  <b.icon size={44} strokeWidth={1.3} className="text-mint" />
                  <h3 className="mt-6 text-[18px] font-semibold leading-snug text-white">{b.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-white/60">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ————————— H8 · TESTIMONI PREVIEW ————————— */}
      <Section className="bg-gradient-to-b from-paper to-ice">
        <Container>
          <SectionHeader
            micro="CERITA NYATA"
            title="Cerita Nyata dari Keluarga yang Sudah Merasakan"
            sub="Bukan aktor, bukan endorser — pelanggan sungguhan."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <TestimonialCard t={t} compact />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <TextLink href="/testimoni">Baca semua cerita</TextLink>
          </Reveal>
        </Container>
      </Section>

      {/* ————————— H9 · BONUS TEASER ————————— */}
      <Section tight className="bg-gradient-to-r from-glacier/10 via-ice to-ice">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-xl border hairline bg-white/80 p-8 shadow-soft backdrop-blur md:flex-row md:items-center md:p-10">
              <div className="max-w-[560px]">
                <Micro>BONUS SETIAP PEMESANAN</Micro>
                <h2 className="mt-3 text-[24px] font-semibold leading-snug text-navy md:text-[28px]">
                  Senilai {rupiah(130000)}+ — gratis di setiap pemesanan.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5 md:max-w-[380px] md:justify-end">
                {["Konsultasi Gratis", "Laporan Digital", "Garansi 30 Hari", "Diskon 10%"].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-mint/45 bg-mint/10 px-4 py-2 font-dm text-[12.5px] font-medium text-[#277069]"
                  >
                    {b}
                  </span>
                ))}
                <TextLink href="/harga#bonus" className="mt-2 w-full md:justify-end">
                  Lihat detail paket
                </TextLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ————————— H10 · TRUST RINGKAS ————————— */}
      <Section className="bg-paper">
        <Container>
          <SectionHeader micro="BUKTI SEBELUM JANJI" title="Mengapa Kamu Bisa Percaya ARKTIS" />
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Garansi 30 Hari Penuh",
                body: "Empat kali lebih panjang dari standar industri. Ada masalah, kami kembali tanpa biaya.",
              },
              {
                icon: BadgeCheck,
                title: "Teknisi Bersertifikat & Terverifikasi",
                body: "200+ jam pelatihan dan pemeriksaan latar belakang. ID resmi ditunjukkan sebelum masuk rumah.",
              },
              {
                icon: Tag,
                title: "Harga Transparan, Nol Kejutan",
                body: "Yang tertera adalah yang kamu bayar. Tambahan apa pun dikonfirmasi sebelum dikerjakan.",
              },
            ].map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className="text-center md:text-left">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg border hairline bg-white text-glacier shadow-soft">
                    <g.icon size={26} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 text-[18px] font-semibold text-navy">{g.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-[1.7] text-slate">{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y hairline py-6">
              {certItems.map((c) => (
                <span key={c} className="font-dm text-[11.5px] uppercase tracking-[0.1em] text-slate/55">
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-8 text-center">
              <TrustDots
                className="justify-center"
                items={[
                  "2.847 rumah dilayani",
                  "4.9/5 rating",
                  "98% pelanggan kembali",
                  "Garansi 30 hari",
                  "0 klaim tak diselesaikan",
                ]}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ————————— H11 · FAQ PREVIEW ————————— */}
      <Section className="bg-ice">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal>
              <SectionHeader
                align="left"
                className="mb-8"
                micro="SEJUJUR-JUJURNYA"
                title="Pertanyaan yang Sering Diajukan"
                sub="Kalau pertanyaanmu belum terjawab, chat kami — dijawab manusia, bukan bot."
              />
              <TextLink href="/faq">Lihat semua pertanyaan</TextLink>
            </Reveal>
            <Reveal delay={120}>
              <Accordion
                items={[
                  FAQ_GROUPS[0].items[0],
                  FAQ_GROUPS[0].items[1],
                  FAQ_GROUPS[0].items[2],
                  FAQ_GROUPS[1].items[0],
                ]}
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ————————— H12 · CTA PENUTUP ————————— */}
      <Section className="relative overflow-hidden bg-arctic">
        <Image
          src="/images/family.jpg"
          alt="Keluarga Indonesia menikmati ruang keluarga yang sejuk setelah servis ARKTIS"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-arctic via-arctic/78 to-arctic/40" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="max-w-[640px]">
            <Reveal>
              <Micro>SAATNYA BERTINDAK</Micro>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="headline-section mt-5 text-white">
                Berikan Keluargamu Udara Terbaik yang Mereka Layak Dapatkan.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead-text mt-6 text-white/70">
                Jangan tunggu AC rusak total atau keluarga jatuh sakit. Satu langkah kecil hari ini,
                manfaatnya terasa setahun penuh.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <ButtonPrimary href="/booking">Amankan Jadwal Saya</ButtonPrimary>
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-ghost-dark"
                >
                  <MessageCircle size={16} />
                  Chat dengan Tim ARKTIS
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-8 font-dm text-[12px] text-white/50">
                Data pribadimu aman. Tidak ada spam. Tidak ada komitmen sebelum kamu konfirmasi.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
