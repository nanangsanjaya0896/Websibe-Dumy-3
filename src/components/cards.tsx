import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { SERVICES, rupiah, type Service } from "@/lib/data";
import { cn } from "@/lib/cn";
import { LogoMark } from "./logo";
import { TextLink } from "./ui";

/* ————————— Kartu layanan: ≤ 5 baris teks, hierarki ketat ————————— */

export function ServiceCard({
  service,
  tone = "light",
}: {
  service: Service;
  tone?: "light" | "dark";
}) {
  return (
    <article
      className={cn(
        "card-lift group flex h-full flex-col overflow-hidden rounded-lg border hairline shadow-soft",
        tone === "light" ? "bg-white" : "bg-white"
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.img}
          alt={service.imgAlt}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" aria-hidden="true" />
        {service.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-navy/85 px-3.5 py-1.5 font-dm text-[10.5px] font-medium uppercase tracking-[0.12em] text-mint backdrop-blur-sm">
            {service.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-[21px] font-semibold leading-tight tracking-[-0.01em] text-navy">
          {service.name}
        </h3>
        <p className="mt-1.5 text-[13.5px] font-light text-slate">{service.sub}</p>

        <ul className="mt-5 space-y-2">
          {service.includes.slice(0, 3).map((inc) => (
            <li key={inc} className="flex items-center gap-2.5 text-[13.5px] text-slate">
              <span className="h-1 w-1 rounded-full bg-mint" />
              {inc}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-3 pt-7">
          <div>
            <p className="font-dm text-[10px] uppercase tracking-[0.14em] text-slate/70">Mulai</p>
            <p className="num-tabular mt-1 text-[24px] font-semibold text-navy">
              {rupiah(service.price)}
              <span className="ml-1 font-display text-[12px] font-normal text-slate">
                /{service.priceUnit}
              </span>
            </p>
          </div>
          <p className="flex items-center gap-1.5 font-dm text-[12px] text-slate">
            <Clock size={13} className="text-glacier" />
            {service.duration}
          </p>
        </div>

        <div className="mt-5 border-t hairline pt-5">
          <TextLink href={`/layanan/${service.slug}`}>Detail layanan</TextLink>
        </div>
      </div>
    </article>
  );
}

/* ————————— Ghost card: "Lihat semua 6 layanan →" ————————— */

export function GhostServiceCard() {
  return (
    <Link
      href="/layanan"
      className="group flex min-h-[320px] flex-col items-center justify-center gap-5 rounded-lg border-2 border-dashed border-mist bg-transparent p-8 text-center transition-all hover:border-glacier/50 hover:bg-ice/40"
    >
      <LogoMark size={44} className="text-glacier/40 transition-colors group-hover:text-glacier" />
      <div>
        <p className="text-[17px] font-semibold text-navy">Masih ada 3 layanan lagi</p>
        <p className="mt-1 text-[13.5px] text-slate">Freon, pasang baru, dan paket tahunan.</p>
      </div>
      <span className="link-arrow font-dm text-[14px] font-medium text-glacier">
        Lihat semua 6 layanan
        <ArrowRight size={15} strokeWidth={2.2} />
      </span>
    </Link>
  );
}

/* ————————— Kartu besar untuk halaman index layanan ————————— */

export function ServiceCardLarge({ service, index }: { service: Service; index: number }) {
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-xl border hairline bg-white shadow-soft">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={service.img}
          alt={service.imgAlt}
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" aria-hidden="true" />
        <span className="num-tabular absolute bottom-4 left-4 font-dm text-[12px] font-medium tracking-[0.2em] text-white/85">
          {service.num} — 06
        </span>
        {service.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-navy/85 px-3.5 py-1.5 font-dm text-[10.5px] font-medium uppercase tracking-[0.12em] text-mint backdrop-blur-sm">
            {service.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7 md:p-8">
        <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.01em] text-navy">
          {service.name}
        </h3>
        <p className="mt-1.5 text-[14px] font-light text-slate">{service.sub}</p>
        <ul className="mt-6 space-y-2.5">
          {service.includes.slice(0, 3).map((inc) => (
            <li key={inc} className="flex items-center gap-3 text-[14px] text-slate">
              <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-glacier/10 text-glacier">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              {inc}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
          <div>
            <p className="font-dm text-[10px] uppercase tracking-[0.14em] text-slate/70">Mulai</p>
            <p className="num-tabular mt-1 text-[30px] font-semibold leading-none text-navy">
              {rupiah(service.price)}
            </p>
            <p className="mt-1.5 text-[12px] text-slate">per {service.priceUnit}</p>
          </div>
          <div className="flex h-11 items-center gap-2 rounded-full bg-ice px-4 font-dm text-[12.5px] font-medium text-glacier">
            <Clock size={14} />
            {service.duration}
          </div>
        </div>
        <Link
          href={`/layanan/${service.slug}`}
          className="btn-base btn-ghost mt-7 w-full group-hover:border-glacier group-hover:bg-glacier group-hover:text-white"
        >
          Detail layanan
          <ArrowRight size={15} strokeWidth={2.2} />
        </Link>
      </div>
    </article>
  );
}

export function priceOf(slug: string) {
  const s = SERVICES.find((x) => x.slug === slug);
  return s ? rupiah(s.price) : "";
}
