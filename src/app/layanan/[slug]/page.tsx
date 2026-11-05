import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock,
  MessageCircle,
  ShieldCheck,
  Tag,
  X,
} from "lucide-react";
import { BRAND, SERVICES, TESTIMONIALS, getService, rupiah } from "@/lib/data";
import { Breadcrumb, ButtonPrimary, CheckRow, Container, Micro, Section, SectionHeader, TextLink, TrustDots } from "@/components/ui";
import { Accordion, BeforeAfter, Reveal, TestimonialCard } from "@/components/interactive";
import { ServiceCard } from "@/components/cards";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} Mulai ${rupiah(s.price)} — ARKTIS`,
    description: `${s.headlineSub} Garansi 30 hari, teknisi bersertifikat.`,
  };
}

const STEPS = [
  { n: "01", title: "Pesan dalam 3 menit", body: "Pilih layanan dan jadwal. Konfirmasi dalam 15 menit via WhatsApp." },
  { n: "02", title: "Teknisi datang tepat waktu", body: "Seragam rapi, ID resmi ditunjukkan sebelum masuk rumah." },
  { n: "03", title: "Dikerjakan dengan standar", body: "Plastik pelindung, peralatan industri, proses transparan." },
  { n: "04", title: "Rapi, laporan, bergaransi", body: "Area dibersihkan, laporan digital terkirim, garansi 30 hari aktif." },
];

const TESTI_MATCH: Record<string, string[]> = {
  "cuci-ac-standard": ["Cuci AC"],
  "cuci-ac-deep-cleaning": ["Cuci AC"],
  "servis-perbaikan-ac": ["Perbaikan"],
  "isi-freon": ["Freon", "Perbaikan"],
  "pasang-ac-baru": ["Pasang AC"],
  "perawatan-tahunan": ["Paket Tahunan"],
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const relatedTestis = TESTIMONIALS.filter((t) =>
    TESTI_MATCH[s.slug]?.includes(t.category)
  ).slice(0, 2);
  const cross = s.crossSell.map((c) => getService(c)!).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    provider: { "@type": "LocalBusiness", name: BRAND.name },
    areaServed: ["Jabodetabek", "Bandung", "Surabaya", "Semarang"],
    offers: {
      "@type": "Offer",
      price: s.price,
      priceCurrency: "IDR",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* D1 — sub-navigasi pill sticky */}
      <div className="sticky top-[71px] z-30 border-b hairline bg-paper/90 backdrop-blur-xl">
        <Container>
          <div className="no-scrollbar flex gap-2 overflow-x-auto py-3">
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/layanan/${svc.slug}`}
                className={cn(
                  "whitespace-nowrap rounded-full border px-4 py-2 font-dm text-[12.5px] font-medium transition-all",
                  svc.slug === s.slug
                    ? "border-glacier bg-glacier text-white"
                    : "hairline bg-white text-slate hover:border-glacier/50 hover:text-glacier"
                )}
              >
                {svc.name}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* D2 — hero split 65/35 */}
      <section className="bg-paper pb-16 pt-10 md:pb-24 md:pt-14">
        <Container>
          <Reveal>
            <Breadcrumb
              trail={[
                { label: "Beranda", href: "/" },
                { label: "Layanan", href: "/layanan" },
                { label: s.name },
              ]}
            />
            <Micro className="mt-7">{s.micro}</Micro>
            <h1 className="mt-4 max-w-[20ch] text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-navy md:text-[52px]">
              {s.headline}
            </h1>
            <p className="lead-text mt-5 max-w-[56ch] text-slate">{s.headlineSub}</p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.55fr_1fr]">
            <Reveal>
              <div className="grain relative aspect-[16/11] overflow-hidden rounded-xl shadow-soft">
                <Image
                  src={s.img}
                  alt={s.imgAlt}
                  fill
                  priority
                  sizes="(min-width:1024px) 62vw, 100vw"
                  className="object-cover"
                />
                {s.badge && (
                  <span className="absolute left-5 top-5 z-[3] rounded-full bg-navy/85 px-4 py-2 font-dm text-[11px] font-medium uppercase tracking-[0.12em] text-mint backdrop-blur-sm">
                    {s.badge}
                  </span>
                )}
              </div>
            </Reveal>

            {/* Panel harga sticky */}
            <Reveal delay={120}>
              <aside className="lg:sticky lg:top-[150px]">
                <div className="rounded-xl border hairline bg-white p-7 shadow-soft md:p-8">
                  <p className="font-dm text-[11px] uppercase tracking-[0.14em] text-slate">{s.name}</p>
                  <p className="num-tabular mt-3 text-[40px] font-semibold leading-none text-navy">
                    {rupiah(s.price)}
                  </p>
                  <p className="mt-2 text-[13px] text-slate">
                    per {s.priceUnit}
                    {s.priceNote && <span className="text-slate/70"> · ({s.priceNote})</span>}
                  </p>

                  <div className="mt-6 space-y-3 border-t hairline pt-6 text-[13.5px] text-slate">
                    <p className="flex items-center gap-2.5">
                      <Clock size={15} className="text-glacier" /> {s.duration}
                    </p>
                    <p className="flex items-center gap-2.5">
                      <BadgeCheck size={15} className="text-glacier" /> Jabodetabek · Bandung · Surabaya · Semarang
                    </p>
                  </div>

                  <ButtonPrimary href={`/booking?layanan=${s.slug}`} className="mt-7 w-full">
                    Pesan Layanan Ini
                  </ButtonPrimary>
                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 font-dm text-[13px] font-medium text-[#1d9e78] hover:underline"
                  >
                    <MessageCircle size={14} /> Tanya dulu via WhatsApp
                  </a>

                  <div className="mt-6 space-y-2.5 border-t hairline pt-6">
                    {["Garansi 30 hari", "Teknisi bersertifikat", "Harga final"].map((t) => (
                      <p key={t} className="flex items-center gap-2.5 font-dm text-[12.5px] text-slate">
                        <Check size={13} className="text-mint" strokeWidth={3} /> {t}
                      </p>
                    ))}
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* D3 — apa yang kamu dapatkan */}
      <Section tight className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Reveal>
              <Micro>TERMASUK DALAM LAYANAN</Micro>
              <h2 className="headline-section mt-4 text-navy">Apa yang kamu dapatkan.</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate">
                Semua dikerjakan dengan standar yang sama di setiap rumah — tanpa kecuali.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="divide-y divide-mist/60 border-y hairline">
                {s.includes.map((inc, i) => (
                  <li key={inc} className="flex items-center gap-4 py-5">
                    <span className="num-tabular w-8 shrink-0 font-dm text-[12px] tracking-[0.1em] text-slate/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-glacier/10 text-glacier">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-[16px] font-medium text-charcoal">{inc}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* D4 — before / after */}
      <Section tight className="bg-ice">
        <Container>
          <SectionHeader
            align="left"
            micro="BUKTI VISUAL"
            title="Sebelum dan sesudah."
            sub="Diambil dari pekerjaan nyata, tanpa retouch berlebih. Geser untuk membandingkan."
          />
          <Reveal>
            <BeforeAfter
              src={s.img}
              altBefore={`Kondisi AC sebelum ${s.name.toLowerCase()}`}
              altAfter={`Kondisi AC setelah ${s.name.toLowerCase()} oleh ARKTIS`}
              ratio="aspect-[4/3] md:aspect-[21/9]"
            />
          </Reveal>
        </Container>
      </Section>

      {/* D5 — proses 4 langkah */}
      <Section tight className="bg-white">
        <Container>
          <SectionHeader micro="EMPAT LANGKAH · NOL KERUMITAN" title="Begini prosesnya." />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((st, i) => (
              <Reveal key={st.n} delay={i * 80}>
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="num-tabular flex h-12 w-12 items-center justify-center rounded-full border border-glacier/30 bg-ice font-dm text-[15px] font-semibold text-glacier">
                      {st.n}
                    </span>
                    {i < 3 && <span className="hidden h-px flex-1 bg-mist/70 lg:block" aria-hidden="true" />}
                  </div>
                  <h3 className="mt-5 text-[16.5px] font-semibold text-navy">{st.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate">{st.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* D6 — cocok / tidak cocok */}
      <Section tight className="bg-paper">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-mint/35 bg-mint/[0.07] p-8 md:p-9">
                <Micro>COCOK UNTUK KAMU JIKA</Micro>
                <ul className="mt-6 space-y-4">
                  {s.fitFor.map((f) => (
                    <CheckRow key={f}>{f}</CheckRow>
                  ))}
                </ul>
              </div>
            </Reveal>
            {s.notFor && s.notFor.length > 0 && (
              <Reveal delay={100}>
                <div className="h-full rounded-xl border hairline bg-white p-8 md:p-9">
                  <Micro className="!text-slate/60">SEBAIKNYA PILIH LAIN JIKA</Micro>
                  <ul className="mt-6 space-y-4">
                    {s.notFor.map((n) => (
                      <li key={n.text} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate/10 text-slate">
                          <X size={11} strokeWidth={3} />
                        </span>
                        <span className="text-[15px] leading-relaxed text-slate">
                          {n.text}
                          {n.target && (
                            <>
                              {" — "}
                              <Link
                                href={`/layanan/${n.target}`}
                                className="link-underline font-medium text-glacier"
                              >
                                {getService(n.target)?.name}
                              </Link>
                            </>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>
        </Container>
      </Section>

      {/* Khusus paket tahunan — timeline 12 bulan */}
      {s.yearlyTimeline && (
        <Section tight className="bg-navy grain relative">
          <Container>
            <SectionHeader
              dark
              micro="SETAHUN TERPETAKAN"
              title="Jadwal setahunmu, terlihat jelas."
              sub="Empat kunjungan cuci dan dua pengecekan — diingatkan otomatis via WhatsApp."
            />
            <Reveal>
              <div className="overflow-x-auto pb-2">
                <div className="grid min-w-[720px] grid-cols-12 gap-2">
                  {MONTHS.map((m, i) => {
                    const cuci = [0, 3, 6, 9].includes(i);
                    const cek = [5, 11].includes(i);
                    return (
                      <div
                        key={m}
                        className={cn(
                          "rounded-md border px-2 py-4 text-center",
                          cuci
                            ? "border-glacier/50 bg-glacier/20"
                            : cek
                              ? "border-mint/40 bg-mint/10"
                              : "border-white/10"
                        )}
                      >
                        <p className="font-dm text-[11px] uppercase tracking-[0.12em] text-white/45">{m}</p>
                        <p
                          className={cn(
                            "mt-2 font-dm text-[11px] font-semibold leading-tight",
                            cuci ? "text-sky" : cek ? "text-mint" : "text-white/20"
                          )}
                        >
                          {cuci ? "CUCI" : cek ? "CEK" : "—"}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 font-dm text-[12px] text-white/55">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm bg-glacier" /> Cuci AC (4×/tahun)
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm bg-mint" /> Pengecekan gratis (2×/tahun)
                </span>
              </div>
            </Reveal>
          </Container>
        </Section>
      )}

      {/* D7 — testimoni relevan */}
      {relatedTestis.length > 0 && (
        <Section tight className="bg-white">
          <Container>
            <SectionHeader
              micro="KATA PELANGGAN"
              title={`Yang merasakan ${s.name.toLowerCase()}.`}
            />
            <div className={cn("grid gap-6", relatedTestis.length > 1 ? "md:grid-cols-2" : "max-w-[560px] mx-auto")}>
              {relatedTestis.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <TestimonialCard t={t} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* D8 — FAQ spesifik layanan */}
      <Section tight className="bg-ice">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <SectionHeader micro="PERTANYAAN SPESIFIK" title="Soal layanan ini." />
            <Reveal>
              <Accordion items={s.faqs} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* D9 — cross-sell */}
      <Section tight className="bg-paper">
        <Container>
          <SectionHeader
            align="left"
            micro="SERING DIBELI BERSAMA"
            title="Lengkapi sekalian."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:max-w-[68%]">
            {cross.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <ServiceCard service={c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* D10 — CTA penutup */}
      <Section tight className="grain relative bg-navy">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Micro>HARGA FINAL · GARANSI 30 HARI</Micro>
              <h2 className="headline-section mt-4 max-w-[18ch] text-white">
                {s.name}, mulai {rupiah(s.price)}.
              </h2>
              <TrustDots
                dark
                className="mt-5"
                items={["Konfirmasi 15 menit", "Teknisi bersertifikat", "Reschedule gratis"]}
              />
            </div>
            <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row md:flex-col lg:flex-row">
              <ButtonPrimary href={`/booking?layanan=${s.slug}`}>Pesan Layanan Ini</ButtonPrimary>
              <a href={BRAND.whatsappLink} target="_blank" rel="noreferrer" className="btn-base btn-ghost-dark">
                <MessageCircle size={16} />
                Chat WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
