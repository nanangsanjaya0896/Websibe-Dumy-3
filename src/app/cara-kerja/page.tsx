import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  CalendarCheck,
  ClipboardCheck,
  Droplets,
  MessageCircle,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { BRAND } from "@/lib/data";
import { Breadcrumb, ButtonPrimary, Container, Micro, Section, SectionHeader, TrustDots } from "@/components/ui";
import { BeforeAfter, Reveal } from "@/components/interactive";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Cara Kerja Servis AC ARKTIS — 4 Langkah",
  description:
    "Pesan 3 menit, konfirmasi 15 menit, teknisi bersertifikat, laporan digital, garansi 30 hari.",
};

const STEPS = [
  {
    n: "01",
    icon: CalendarCheck,
    title: "Pesan dalam 3 menit",
    body: "Pilih layanan, pilih tanggal, isi nomor WhatsApp. Konfirmasi dalam 15 menit berisi nama dan foto teknisi yang akan datang.",
    micro: "KONFIRMASI 15 MENIT",
    img: "/images/svc-annual.jpg",
    alt: "Jadwal servis ARKTIS tercatat rapi dan terkonfirmasi",
  },
  {
    n: "02",
    icon: BadgeCheck,
    title: "Teknisi datang tepat waktu",
    body: "Teknisi bersertifikat dengan seragam rapi. ID resmi ditunjukkan sebelum masuk — kamu bisa verifikasi siapa dia.",
    micro: "ID RESMI DIVERIFIKASI",
    img: "/images/hero-home.jpg",
    alt: "Teknisi ARKTIS berseragam navy datang dan bekerja rapi di rumah pelanggan",
  },
  {
    n: "03",
    icon: Droplets,
    title: "Dikerjakan dengan standar",
    body: "Plastik pelindung dipasang, peralatan industri keluar, proses transparan. Kamu boleh melihat seluruh pengerjaan.",
    micro: "STANDAR INDUSTRI",
    img: "/images/svc-standard.jpg",
    alt: "Pengerjaan cuci AC ARKTIS dengan plastik pelindung dan peralatan profesional",
  },
  {
    n: "04",
    icon: ClipboardCheck,
    title: "Rapi, laporan, bergaransi",
    body: "Sisa air dibersihkan, laporan digital dikirim via WhatsApp, garansi 30 hari aktif otomatis. Pergi tanpa jejak.",
    micro: "GARANSI 30 HARI AKTIF",
    img: "/images/family.jpg",
    alt: "Ruang keluarga yang sejuk dan bersih setelah servis ARKTIS selesai",
  },
];

const STANDARDS = [
  "Datang dalam jendela waktu yang dijanjikan.",
  "Menunjukkan ID sebelum masuk rumah.",
  "Melindungi lantai, dinding, dan perabot sebelum mulai.",
  "Menjelaskan temuan dengan bahasa sederhana.",
  "Mengonfirmasi biaya tambahan sebelum dikerjakan.",
  "Membersihkan area kerja sebelum pulang.",
];

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: "Garansi 30 Hari Penuh",
    body: "Standar industri hanya 7 hari — kami empat kali lipatnya. Ada masalah dalam 30 hari, kami kembali tanpa biaya. Masih tidak puas? Uang kembali penuh.",
  },
  {
    icon: BadgeCheck,
    title: "Teknisi Terverifikasi & Bersertifikat",
    body: "200+ jam pelatihan intensif, ujian sertifikasi resmi, dan pemeriksaan latar belakang menyeluruh. Kamu tahu persis siapa yang masuk ke rumahmu.",
  },
  {
    icon: Tag,
    title: "Harga Transparan, Nol Kejutan",
    body: "Harga di website adalah harga final. Spare part dan tambahan apa pun selalu dikonfirmasi dan disetujui kamu sebelum dikerjakan.",
  },
];

export default function CaraKerjaPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ice pb-16 pt-36 md:pb-24 md:pt-44">
        <Container>
          <Reveal>
            <Breadcrumb trail={[{ label: "Beranda", href: "/" }, { label: "Cara Kerja" }]} />
            <Micro className="mt-8">EMPAT LANGKAH · NOL KERUMITAN</Micro>
            <h1 className="display-hero mt-5 max-w-[14ch] text-navy">
              Dari Pesan Sampai Bersih, Semua Jelas.
            </h1>
            <p className="lead-text mt-6 max-w-[50ch] text-slate">
              Kamu tidak perlu menyiapkan apa pun. Cukup beri kami akses ke unit AC.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
              {STEPS.map((st, i) => (
                <div key={st.n} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-glacier/30 bg-white text-glacier shadow-soft">
                    <st.icon size={17} strokeWidth={1.7} />
                  </span>
                  <span className="font-dm text-[12px] font-medium leading-tight text-slate">{st.title}</span>
                  {i < 3 && <span className="hidden h-px flex-1 bg-mist/80 md:block" />}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4 langkah alternating */}
      <Section className="bg-white">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {STEPS.map((st, i) => (
              <div
                key={st.n}
                className={cn(
                  "grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20",
                  i % 2 === 1 && "md:[&>*:first-child]:order-2"
                )}
              >
                <Reveal>
                  <div className="grain relative aspect-[4/3] overflow-hidden rounded-xl shadow-soft">
                    <Image
                      src={st.img}
                      alt={st.alt}
                      fill
                      sizes="(min-width:768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <div className="md:max-w-[420px]">
                    <div className="flex items-baseline gap-4">
                      <span className="num-tabular text-[52px] font-semibold leading-none text-mist md:text-[64px]">
                        {st.n}
                      </span>
                      <Micro>{st.micro}</Micro>
                    </div>
                    <h2 className="mt-4 text-[26px] font-semibold leading-snug text-navy md:text-[30px]">
                      {st.title}
                    </h2>
                    <p className="mt-4 text-[15.5px] leading-[1.75] text-slate">{st.body}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Standar kerja */}
      <Section tight className="bg-paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal>
              <Micro>KOMITMEN, BUKAN SLOGAN</Micro>
              <h2 className="headline-section mt-4 text-navy">Standar Kerja ARKTIS.</h2>
              <p className="mt-5 max-w-[40ch] text-[15px] leading-relaxed text-slate">
                Enam aturan yang berlaku di setiap rumah, setiap kunjungan, setiap teknisi.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="divide-y divide-mist/60 border-y hairline">
                {STANDARDS.map((std, i) => (
                  <li key={std} className="flex items-center gap-4 py-5">
                    <span className="num-tabular w-8 shrink-0 font-dm text-[12px] text-slate/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ShieldCheck size={17} strokeWidth={1.8} className="shrink-0 text-glacier" />
                    <span className="text-[15.5px] font-medium text-charcoal">{std}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Before / After besar */}
      <Section tight className="bg-white">
        <Container>
          <SectionHeader
            align="left"
            micro="HASIL NYATA"
            title="Beda yang bisa kamu geser sendiri."
          />
          <Reveal>
            <BeforeAfter
              src="/images/svc-deep.jpg"
              altBefore="AC berdebu tebal dengan fin berjamur sebelum servis"
              altAfter="AC bersih sempurna dengan fin mengkilap setelah servis ARKTIS"
            />
            <p className="micro-label mt-5 !text-slate/55">
              DIAMBIL DARI PEKERJAAN NYATA, TANPA RETOUCH BERLEBIH
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Peralatan */}
      <Section className="bg-charcoal grain relative">
        <Container>
          <SectionHeader
            dark
            micro="FITUR PERALATAN"
            title="Peralatan Profesional Kelas Industri."
            sub="Bukan alat rumahan. Setiap unit kerja kami membawa standar yang sama."
          />
          <Reveal>
            <div className="grain relative overflow-hidden rounded-xl border border-white/10 shadow-lift">
              <Image
                src="/images/tools-flatlay.jpg"
                alt="Toolkit profesional ARKTIS: nozzle tekanan tinggi, manometer digital, multimeter presisi, dan UV sterilizer"
                width={1600}
                height={1067}
                sizes="(min-width:1200px) 1100px, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 grid gap-5 md:grid-cols-5">
              {[
                "Nozzle tekanan tinggi presisi",
                "Manometer digital dua jalur",
                "Multimeter presisi kelistrikan",
                "UV-C sterilizer portable",
                "Cairan food-grade & ramah lingkungan",
              ].map((t) => (
                <p
                  key={t}
                  className="border-t border-white/15 pt-4 font-dm text-[12.5px] leading-relaxed text-white/60"
                >
                  {t}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Jaminan */}
      <Section className="bg-ice">
        <Container>
          <SectionHeader
            micro="TIGA JAMINAN"
            title="Kenapa ribuan rumah tenang mempercayakan kuncinya."
          />
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {GUARANTEES.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className="card-lift h-full rounded-xl border hairline bg-white p-8 shadow-soft md:p-9">
                  <g.icon size={56} strokeWidth={1.05} className="text-glacier" />
                  <h3 className="mt-6 text-[19px] font-semibold text-navy">{g.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-slate">{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <div className="mt-16 text-center">
              <TrustDots
                className="justify-center"
                items={[
                  "2.847 rumah dilayani",
                  "4.9/5 dari 1.847 ulasan",
                  "98% pelanggan kembali",
                  "Garansi 30 hari",
                ]}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section tight className="grain relative bg-navy">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Micro>SEKARANG GILIRANMU</Micro>
              <h2 className="headline-section mt-4 max-w-[16ch] text-white">
                Sudah paham cara kerjanya?
              </h2>
            </div>
            <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row md:flex-col lg:flex-row">
              <ButtonPrimary href="/booking">Pesan Servis Hari Ini</ButtonPrimary>
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
