import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { cn } from "@/lib/cn";

/* ————————— kalender grid & kontainer ————————— */

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-14", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  tight = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(tight ? "py-16 md:py-24 lg:py-28" : "py-20 md:py-28 lg:py-40", className)}
    >
      {children}
    </section>
  );
}

/* ————————— micro-label & header seksi ————————— */

export function Micro({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("micro-label", dark && "text-mint", className)}>{children}</p>
  );
}

export function SectionHeader({
  micro,
  title,
  sub,
  align = "center",
  dark = false,
  className,
}: {
  micro?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "mx-auto max-w-[720px] text-center" : "max-w-[680px]",
        className
      )}
    >
      {micro && <Micro className="mb-4">{micro}</Micro>}
      <h2
        className={cn("headline-section", dark ? "text-white" : "text-navy")}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "lead-text mt-5",
            dark ? "text-white/65" : "text-slate"
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ————————— CTA ————————— */

export function ButtonPrimary({
  href,
  children,
  className,
  arrow = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={cn("btn-base btn-primary", className)}>
      {children}
      {arrow && <ArrowRight size={16} strokeWidth={2.2} />}
    </Link>
  );
}

export function ButtonGhost({
  href,
  children,
  className,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn("btn-base", dark ? "btn-ghost-dark" : "btn-ghost", className)}
    >
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  dark = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "link-arrow font-dm text-[14px] font-medium",
        dark ? "text-white/80 hover:text-white" : "text-glacier hover:text-navy",
        className
      )}
    >
      {children}
      <ArrowRight size={15} strokeWidth={2.2} />
    </Link>
  );
}

/* ————————— elemen kecil ————————— */

export function Stars({
  n = 5,
  size = 14,
  className,
}: {
  n?: number;
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${n} dari 5 bintang`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < n ? "fill-ember text-ember" : "fill-mist text-mist"}
          strokeWidth={0}
        />
      ))}
    </span>
  );
}

export function CheckRow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
          dark ? "bg-mint/15 text-mint" : "bg-glacier/10 text-glacier"
        )}
      >
        <Check size={12} strokeWidth={3} />
      </span>
      <span className={cn("text-[15px] leading-relaxed", dark ? "text-white/75" : "text-slate")}>
        {children}
      </span>
    </li>
  );
}

export function Monogram({
  initials,
  tone = "bg-ice text-glacier",
  size = 56,
  className,
}: {
  initials: string;
  tone?: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      style={{ width: size, height: size, fontSize: size * 0.34 }}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-dm font-semibold tracking-[0.06em] ring-1 ring-inset ring-mist/60",
        tone,
        className
      )}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

export function Breadcrumb({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-dm text-[12px] text-slate/80">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-mist">／</span>}
            {c.href ? (
              <Link href={c.href} className="transition-colors hover:text-glacier">
                {c.label}
              </Link>
            ) : (
              <span className="text-charcoal">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* Garis mikro kepercayaan: "Garansi 30 hari · Teknisi bersertifikat · Harga final" */
export function TrustDots({
  items,
  dark = false,
  className,
}: {
  items: string[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-3.5 gap-y-2 font-dm text-[12.5px]",
        dark ? "text-white/60" : "text-slate",
        className
      )}
    >
      {items.map((t, i) => (
        <li key={i} className="flex items-center gap-3.5">
          {i > 0 && <span className={cn("h-1 w-1 rounded-full", dark ? "bg-white/25" : "bg-mist")} />}
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
