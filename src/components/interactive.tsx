"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight, MessageCircle, Minus, Plus, Search } from "lucide-react";
import { cn } from "@/lib/cn";
import { BRAND, FAQ_GROUPS, RATING_DISTRIBUTION, TESTIMONIAL_FILTERS, TESTIMONIALS } from "@/lib/data";
import { Monogram, Stars } from "./ui";

/* ———————————————— FAQ browser (search + grup) ———————————————— */

export function FaqBrowser() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const groups = FAQ_GROUPS.map((g) => ({
    ...g,
    items: g.items.filter((i) => (i.q + " " + i.a).toLowerCase().includes(query)),
  })).filter((g) => g.items.length > 0);

  return (
    <div>
      <div className="relative mx-auto max-w-[560px]">
        <Search size={17} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate/60" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari pertanyaan…"
          aria-label="Cari pertanyaan"
          className="field-input !pl-12"
        />
      </div>

      {groups.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="text-slate">
            Tidak ada hasil untuk “{q}”.
          </p>
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="link-arrow mx-auto mt-4 inline-flex font-dm text-[14px] font-medium text-glacier"
          >
            Tanya langsung via WhatsApp
            <ChevronRight size={14} />
          </a>
        </div>
      ) : (
        <div className="mx-auto mt-14 max-w-[760px] space-y-14">
          {groups.map((g, gi) => (
            <div key={g.group}>
              <div className="mb-4 flex items-center gap-4">
                <p className="micro-label">{g.group}</p>
                <span className="h-px flex-1 bg-mist/70" aria-hidden="true" />
              </div>
              <Accordion items={g.items} defaultOpen={gi === 0 && !query ? 0 : -1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ———————————————— Rating distribution bars ———————————————— */

export function DistBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-3">
      {RATING_DISTRIBUTION.map((r, i) => (
        <div key={r.star} className="flex items-center gap-4">
          <span className="w-6 shrink-0 font-dm text-[12.5px] font-medium text-slate">
            {r.star}★
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-mist/50">
            <div
              className="h-full rounded-full bg-glacier transition-[width] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              style={{ width: on ? `${r.pct}%` : "0%", transitionDelay: `${i * 90}ms` }}
            />
          </div>
          <span className="num-tabular w-10 text-right font-dm text-[12.5px] text-slate">
            {r.pct}%
          </span>
        </div>
      ))}
    </div>
  );
}

/* ———————————————— Scroll reveal (480ms, stagger 60ms) ———————————————— */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ———————————————— Animated counter ———————————————— */

export function CountUp({
  to,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 1400,
  className,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          const v = to * eased;
          el.textContent =
            prefix +
            v.toLocaleString("id-ID", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            }) +
            suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={className}>
      {prefix + (0).toLocaleString("id-ID", { minimumFractionDigits: decimals }) + suffix}
    </span>
  );
}

/* ———————————————— Accordion (hairline, +/−) ———————————————— */

export function Accordion({
  items,
  defaultOpen = 0,
  className,
}: {
  items: { q: string; a: string }[];
  defaultOpen?: number;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const uid = useId();

  return (
    <div className={cn("divide-y divide-mist/60 border-y hairline", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`${uid}-panel-${i}`}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-glacier"
            >
              <span className="text-[16px] font-medium leading-snug text-navy md:text-[17px]">
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border hairline transition-all duration-200",
                  isOpen ? "border-glacier bg-glacier text-white" : "text-glacier"
                )}
              >
                {isOpen ? <Minus size={14} strokeWidth={2.4} /> : <Plus size={14} strokeWidth={2.4} />}
              </span>
            </button>
            <div
              id={`${uid}-panel-${i}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[640px] pb-7 pr-12 text-[15.5px] leading-[1.75] text-slate">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ———————————————— Before / After drag slider ———————————————— */

export function BeforeAfter({
  src,
  altBefore,
  altAfter,
  className,
  ratio = "aspect-[4/3] md:aspect-[16/9]",
}: {
  src: string;
  altBefore: string;
  altAfter: string;
  className?: string;
  ratio?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(94, Math.max(6, pct)));
  };

  useEffect(() => {
    const move = (e: PointerEvent) => dragging.current && setFromClientX(e.clientX);
    const up = () => (dragging.current = false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative w-full select-none overflow-hidden rounded-xl shadow-soft",
        ratio,
        className
      )}
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      role="slider"
      aria-label="Geser untuk membandingkan kondisi sebelum dan sesudah"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(6, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(94, p + 4));
      }}
    >
      {/* SEBELUM — didesaturasi, kusam, dingin */}
      <Image
        src={src}
        alt={altBefore}
        fill
        sizes="(min-width:1024px) 60vw, 100vw"
        className="object-cover [filter:grayscale(0.6)_sepia(0.28)_brightness(0.66)_contrast(0.92)]"
        draggable={false}
      />
      <div className="absolute inset-0 bg-[#3d3a30]/15" aria-hidden="true" />

      {/* SESUDAH — bersih, sejuk, terang */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        aria-hidden="true"
      >
        <Image
          src={src}
          alt={altAfter}
          fill
          sizes="(min-width:1024px) 60vw, 100vw"
          className="object-cover [filter:saturate(1.06)_brightness(1.04)]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-sky/10 mix-blend-overlay" />
      </div>

      {/* handle */}
      <div
        className="absolute inset-y-0 z-10 w-px bg-white/80 shadow-[0_0_12px_rgba(10,22,40,0.35)]"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lift transition-transform group-active:scale-95">
          <ChevronRight size={13} className="-ml-1 rotate-180 text-glacier" strokeWidth={2.6} />
          <ChevronRight size={13} className="-mr-1 text-glacier" strokeWidth={2.6} />
        </span>
      </div>

      {/* label mikro */}
      <span className="micro-label absolute left-4 top-4 z-10 rounded-sm bg-arctic/55 px-2.5 py-1.5 !text-[10px] text-white backdrop-blur-sm">
        Sebelum
      </span>
      <span className="micro-label absolute right-4 top-4 z-10 rounded-sm bg-white/70 px-2.5 py-1.5 !text-[10px] !text-glacier backdrop-blur-sm">
        Sesudah
      </span>
    </div>
  );
}

/* ———————————————— Testimonial card ———————————————— */

export function TestimonialCard({
  t,
  compact = false,
}: {
  t: (typeof TESTIMONIALS)[number];
  compact?: boolean;
}) {
  return (
    <article className="card-lift flex h-full flex-col rounded-lg border hairline bg-white p-7 shadow-soft">
      <div className="flex items-center gap-4">
        <Monogram initials={t.initials} tone={t.tone} size={52} />
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold text-navy">{t.name}</p>
          <p className="font-dm text-[12px] text-slate">{t.city}</p>
        </div>
        <div className="ml-auto text-right">
          <Stars n={t.rating} size={13} />
          <p className="mt-1 font-dm text-[11px] text-slate/80">{t.date}</p>
        </div>
      </div>
      <h3 className="mt-5 text-[17px] font-semibold leading-snug text-charcoal">
        “{t.quote}”
      </h3>
      {!compact && (
        <p className="mt-3 text-[14.5px] leading-[1.7] text-slate">{t.body}</p>
      )}
      {t.beforeAfter && (
        <div className="mt-5 flex gap-2.5">
          {["Sebelum", "Sesudah"].map((label, idx) => (
            <figure key={label} className="relative h-[72px] w-[72px] overflow-hidden rounded-md">
              <Image
                src="/images/svc-deep.jpg"
                alt={`${label} — ${t.service.toLowerCase()}`}
                fill
                sizes="72px"
                className={cn(
                  "object-cover",
                  idx === 0 && "[filter:grayscale(0.6)_sepia(0.3)_brightness(0.62)]"
                )}
              />
              <figcaption className="absolute bottom-1 left-1 rounded-sm bg-arctic/60 px-1.5 py-0.5 font-dm text-[8.5px] uppercase tracking-[0.1em] text-white">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
      <div className="mt-auto pt-6">
        <span className="inline-flex items-center rounded-full border hairline px-3 py-1.5 font-dm text-[11px] font-medium tracking-[0.06em] text-glacier">
          {t.service}
        </span>
      </div>
    </article>
  );
}

/* ———————————————— Testimonial filter (chip + grid) ———————————————— */

export function TestimonialFilter() {
  const [cat, setCat] = useState("Semua");
  const list =
    cat === "Semua" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.category === cat);

  return (
    <div>
      <div className="no-scrollbar -mx-6 flex gap-2.5 overflow-x-auto px-6 pb-2 md:mx-0 md:flex-wrap md:justify-center md:px-0">
        {TESTIMONIAL_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setCat(f)}
            className={cn(
              "whitespace-nowrap rounded-full border px-5 py-2.5 font-dm text-[13px] font-medium transition-all",
              cat === f
                ? "border-glacier bg-glacier text-white"
                : "hairline bg-white text-slate hover:border-glacier/50 hover:text-glacier"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="mt-14 text-center">
          <p className="text-slate">Belum ada ulasan di kategori ini.</p>
          <button
            onClick={() => setCat("Semua")}
            className="link-arrow mx-auto mt-3 font-dm text-[14px] font-medium text-glacier"
          >
            Lihat semua ulasan
            <ChevronRight size={14} />
          </button>
        </div>
      ) : (
        <div
          key={cat}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((t, i) => (
            <div
              key={t.name}
              className="reveal is-in"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
