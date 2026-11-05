import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, HeartHandshake, KeyRound, MapPin, Target } from "lucide-react";
import { CITIES, JOURNEY, TEAM } from "@/lib/data";
import { LogoMark } from "@/components/logo";
import { Breadcrumb, ButtonPrimary, Container, Micro, Monogram, Section, SectionHeader, TextLink } from "@/components/ui";
import { Reveal } from "@/components/interactive";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Tentang ARKTIS — Teknisi Bersertifikat & Terverifikasi",
  description:
    "Kisah pendirian, standar pelatihan 200+ jam, dan komitmen pelayanan premium.",
};

const VALUES = [
  {
    icon: KeyRound,
    title: "Kepercayaan dulu, penjualan kemudian",
    body: "Kami tidak akan pernah menawarkan layanan yang tidak kamu butuhkan. Titik.",
  },
  {
    icon: Target,
    title: "Presisi tanpa kompromi",
    body: "Angka, jarak, dan janji kami bisa dipertanggungjawabkan — di setiap kunjungan.",
  },
  {
    icon: HeartHandshake,
    title: "Rumahmu seperti rumah kami",
    body: "Alas kaki dilepas, perabot dilindungi, area kerja selalu lebih bersih dari sebelumnya.",
  },
];

export default function TentangPage() {
  return (
    <>
      {/* Hero editorial — satu-satunya halaman berlatar oat */}
      <section className="grain relative overflow-hidden bg-oat pb-16 pt-36 md:pb-24 md:pt-44">
        <LogoMark size={380} className="watermark -right-20 -top-16 text-navy" />
        <Container>
          <Reveal>
            <Breadcrumb trail={[{ label: "Beranda", href: "/" }, { label: "Tentang" }]} />
            <Micro className="mt-8">SEJAK 2019 · DIMULAI DARI KECEWA</Micro>
            <h1 className="display-hero mt-5 max-w-[15ch] text-navy">
              Kami Membangun ARKTIS Karena Kami Juga Pernah Kecewa.
            </h1>
            <p className="lead-text mt-6 max-w-[52ch] text-slate">
              Bukan perusahaan besar. Hanya sekelompok orang yang percaya servis AC di rumah bisa
              dikerjakan dengan standar yang benar.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Founder's note */}
      <Section className="bg-oat pt-0 md:pt-6">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <div className="grain relative aspect-[4/5] overflow-hidden rounded-xl shadow-lift">
                <Image
                  src="/images/founder.jpg"
                  alt="Pendiri ARKTIS, Rizky Ardiansyah, di ruang tamu setelah servis AC"
                  fill
                  sizes="(min-width:1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="flex h-full flex-col justify-center">
                <Micro>KATA PENDIRI</Micro>
                <p className="mt-4 font-dm text-[12px] uppercase tracking-[0.14em] text-slate">
                  Rizky Ardiansyah — Pendiri &amp; CEO, ARKTIS HOME SERVICE
                </p>
                <h2 className="mt-6 font-serif text-[26px] italic leading-[1.35] text-navy md:text-[30px]">
                  “Saya membangun ARKTIS karena saya lelah kecewa.”
                </h2>
                <div className="mt-7 space-y-5 text-[15.5px] leading-[1.8] text-slate">
                  <p>
                    Dulu, setiap kali saya memanggil tukang servis AC, selalu ada saja yang
                    mengecewakan — datang terlambat, harga berubah di tengah jalan, atau hasil
                    kerjanya tidak memuaskan. Dan saya tahu, jutaan keluarga Indonesia merasakan hal
                    yang sama.
                  </p>
                  <p>
                    Karena itu saya mendirikan ARKTIS. Bukan sekadar bisnis servis AC — tapi komitmen
                    bahwa layanan teknisi di Indonesia bisa, dan harus, sama profesionalnya dengan
                    standar internasional.
                  </p>
                  <p>
                    Setiap teknisi ARKTIS adalah orang yang saya pilih sendiri, saya latih langsung,
                    dan saya percaya untuk masuk ke rumah pelanggan kami. Karena bagi saya,
                    kepercayaan adalah segalanya.
                  </p>
                </div>
                <p className="mt-9 font-serif text-[34px] italic leading-none text-glacier">
                  Rizky A.
                </p>
                <TextLink href="/cara-kerja" className="mt-7">
                  Baca kisah pendirian lengkap
                </TextLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Angka perjalanan */}
      <Section tight className="bg-white">
        <Container>
          <SectionHeader micro="PERJALANAN" title="Enam tahun, satu standar." />
          <div className="relative grid gap-10 md:grid-cols-4">
            <span className="absolute left-0 right-0 top-[26px] hidden h-px bg-mist md:block" aria-hidden="true" />
            {JOURNEY.map((j, i) => (
              <Reveal key={j.year} delay={i * 90}>
                <div className="relative">
                  <span className="relative z-10 mb-4 flex h-3.5 w-3.5 rounded-full border-2 border-glacier bg-white" />
                  <p className="num-tabular text-[34px] font-semibold text-navy">{j.year}</p>
                  <p className="mt-2 text-[14px] text-slate">{j.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Teknisi bersertifikat — ID card sebagai komponen nyata */}
      <Section className="bg-navy grain relative">
        <LogoMark size={420} className="watermark -bottom-24 -left-24 text-white" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative mx-auto w-full max-w-[420px]">
                {/* ID card */}
                <div className="rotate-[-2deg] rounded-lg bg-white p-6 shadow-lift transition-transform duration-300 hover:rotate-0">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <LogoMark size={28} className="text-glacier" />
                      <div className="leading-none">
                        <p className="font-dm text-[10px] font-bold tracking-[0.2em] text-navy">ARKTIS</p>
                        <p className="mt-1 font-dm text-[7px] tracking-[0.3em] text-slate">HOME SERVICE</p>
                      </div>
                    </div>
                    <span className="rounded-sm bg-ice px-2.5 py-1 font-dm text-[9px] font-semibold tracking-[0.14em] text-glacier">
                      TEKNISI RESMI
                    </span>
                  </div>
                  <div className="mt-6 flex items-center gap-5">
                    <Monogram initials="BP" tone="bg-navy text-ice" size={64} className="rounded-md ring-mist" />
                    <div>
                      <p className="text-[16px] font-semibold text-navy">Bagus Pramono</p>
                      <p className="font-dm text-[11px] text-slate">Kepala Teknisi · Wilayah Jabodetabek</p>
                      <p className="num-tabular mt-2 font-dm text-[11px] tracking-[0.1em] text-glacier">
                        ARTK-2024-017
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t hairline pt-4">
                    <p className="font-dm text-[9.5px] uppercase tracking-[0.14em] text-slate">
                      Valid thru · 12/2026
                    </p>
                    <BadgeCheck size={18} className="text-mint" />
                  </div>
                </div>
                {/* lanyard shadow card */}
                <div className="absolute -bottom-6 -right-4 h-full w-full rounded-lg border border-white/10" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <Micro>TEKNISI KAMI</Micro>
              <h2 className="headline-section mt-4 text-white">
                Teknisi Bersertifikat &amp; Terverifikasi.
              </h2>
              <p className="mt-6 max-w-[48ch] text-[15.5px] leading-[1.8] text-white/70">
                Setiap teknisi ARKTIS melalui pelatihan intensif 200+ jam, ujian sertifikasi resmi,
                dan pemeriksaan latar belakang menyeluruh. Kamu bisa melihat ID resmi mereka sebelum
                masuk rumah.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["200+ jam pelatihan", "Sertifikasi resmi", "Verified ID"].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/20 px-4 py-2 font-dm text-[12.5px] text-white/75"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Tim inti */}
      <Section tight className="bg-paper">
        <Container>
          <SectionHeader
            micro="ORANG-ORANGNYA"
            title="Tim inti di balik setiap kunjungan."
            sub="Bukan 'tukang'. Profesional yang bangga dengan kerjanya."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <div className="card-lift flex items-center gap-4 rounded-lg border hairline bg-white p-5 shadow-soft">
                  <Monogram initials={m.initials} tone={i % 2 ? "bg-navy text-ice" : "bg-glacier text-white"} size={56} />
                  <div>
                    <p className="text-[15.5px] font-semibold text-navy">{m.name}</p>
                    <p className="text-[13px] text-slate">{m.role}</p>
                    <p className="mt-1 font-dm text-[11px] uppercase tracking-[0.12em] text-mint">
                      Sejak {m.since}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Nilai */}
      <Section tight className="bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-xl border hairline bg-paper p-8">
                  <v.icon size={30} strokeWidth={1.5} className="text-glacier" />
                  <h3 className="mt-5 text-[18px] font-semibold leading-snug text-navy">{v.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-slate">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Area layanan */}
      <Section tight className="bg-ice">
        <Container>
          <SectionHeader
            align="left"
            micro="AREA JANGKAUAN"
            title="Kami ada di kotamu."
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {CITIES.map((c, i) => (
              <Reveal key={c.name} delay={i * 70}>
                <div className="border-t-2 border-glacier/40 pt-5">
                  <p className="flex items-center gap-2 text-[18px] font-semibold text-navy">
                    <MapPin size={16} className="text-glacier" />
                    {c.name}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {c.districts.map((d) => (
                      <li key={d} className="text-[13.5px] text-slate">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-12 text-[14px] text-slate">
              Belum ada di kotamu?{" "}
              <TextLink href="/kontak" className="ml-1">
                Masukkan kode pos di halaman kontak untuk cek ketersediaan
              </TextLink>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section tight className="bg-oat">
        <Container>
          <Reveal>
            <div className="rounded-xl border hairline bg-white p-10 text-center shadow-soft md:p-14">
              <Micro>KENALI KAMI LEBIH DEKAT</Micro>
              <h2 className="mx-auto mt-4 max-w-[20ch] text-[28px] font-semibold leading-snug text-navy md:text-[36px]">
                Kenali teknisi yang akan datang ke rumahmu.
              </h2>
              <ButtonPrimary href="/booking" className="mt-8">
                Pesan Servis Hari Ini
              </ButtonPrimary>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
