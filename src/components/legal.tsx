import { Container, Breadcrumb, Micro } from "@/components/ui";
import { LogoMark } from "@/components/logo";

export type LegalSection = { id: string; heading: string; paragraphs: string[] };

/* Dokumen legal: satu kolom 720px, daftar isi sticky di kiri (desktop) */
export function LegalDoc({
  crumb,
  micro,
  title,
  effective,
  sections,
}: {
  crumb: string;
  micro: string;
  title: string;
  effective: string;
  sections: LegalSection[];
}) {
  return (
    <div className="bg-white pb-28 pt-36 md:pt-44">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-[110px]">
              <Micro className="!text-slate/60">DAFTAR ISI</Micro>
              <nav aria-label="Daftar isi dokumen">
                <ul className="mt-5 space-y-3 border-l hairline">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="-ml-px block border-l-2 border-transparent pl-4 text-[13px] text-slate transition-colors hover:border-glacier hover:text-navy"
                      >
                        {String(i + 1).padStart(2, "0")}. {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <article className="max-w-[720px]">
            <LogoMark size={28} className="text-glacier" />
            <div className="mt-6">
              <Breadcrumb trail={[{ label: "Beranda", href: "/" }, { label: "Legal" }, { label: crumb }]} />
            </div>
            <Micro className="mt-8">{micro}</Micro>
            <h1 className="mt-4 text-[34px] font-semibold leading-tight tracking-[-0.015em] text-navy md:text-[44px]">
              {title}
            </h1>
            <p className="mt-4 font-dm text-[13px] text-slate">Berlaku efektif: {effective}</p>

            <div className="mt-10 space-y-12">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28 border-t hairline pt-8">
                  <h2 className="text-[22px] font-semibold text-navy">
                    {String(i + 1).padStart(2, "0")}. {s.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {s.paragraphs.map((p, j) => (
                      <p key={j} className="text-[15.5px] leading-[1.8] text-slate">
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </div>
  );
}
