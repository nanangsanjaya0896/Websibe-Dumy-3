import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { BRAND, FAQ_GROUPS } from "@/lib/data";
import { Breadcrumb, ButtonPrimary, Container, Micro, Section, TrustDots } from "@/components/ui";
import { FaqBrowser, Reveal } from "@/components/interactive";

export const metadata: Metadata = {
  title: "FAQ Servis AC — Pertanyaan yang Sering Diajukan",
  description:
    "Berapa sering cuci AC, berapa lama, apakah bawa alat sendiri, dan semua jawaban jujur.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_GROUPS.flatMap((g) =>
      g.items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="grain relative bg-ice pb-14 pt-36 text-center md:pb-20 md:pt-44">
        <Container>
          <Reveal>
            <div className="flex justify-center">
              <Breadcrumb trail={[{ label: "Beranda", href: "/" }, { label: "FAQ" }]} />
            </div>
            <Micro className="mt-8">SEMUA YANG SERING DITANYAKAN</Micro>
            <h1 className="display-hero mx-auto mt-5 max-w-[13ch] text-navy">
              Kami Jawab Sejujur-jujurnya.
            </h1>
            <p className="lead-text mx-auto mt-6 max-w-[44ch] text-slate">
              Kalau pertanyaanmu belum ada di sini, chat kami — dijawab manusia, bukan bot.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <Reveal>
            <FaqBrowser />
          </Reveal>
        </Container>
      </Section>

      {/* Masih ada pertanyaan? */}
      <Section tight className="bg-gradient-to-b from-ice to-paper">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[760px] rounded-xl border hairline bg-white p-10 text-center shadow-soft md:p-14">
              <Micro>MASIH ADA PERTANYAAN?</Micro>
              <h2 className="mt-4 text-[26px] font-semibold leading-snug text-navy md:text-[32px]">
                Ceritakan situasi AC-mu, kami bantu pikirkan.
              </h2>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-ghost"
                >
                  <MessageCircle size={16} className="text-[#1d9e78]" />
                  Chat via WhatsApp
                </a>
                <ButtonPrimary href="/booking">Pesan Servis</ButtonPrimary>
              </div>
              <div className="mt-10">
                <TrustDots
                  className="justify-center"
                  items={["1.847 ulasan", "4.9/5 rating", "Garansi 30 hari", "0 klaim tak diselesaikan"]}
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
