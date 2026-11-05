"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  ArrowRight,
  Check,
  ChevronDown,
  Lock,
  MessageCircle,
  Minus,
  Plus,
} from "lucide-react";
import { BRAND, SERVICES, getService, rupiah } from "@/lib/data";
import { cn } from "@/lib/cn";

/* ———————————————— BOOKING FORM ———————————————— */

const SLOTS = ["08–11", "11–14", "14–17", "17–20"];

type Fields = {
  name: string;
  whatsapp: string;
  service: string;
  date: string;
  slot: string;
  postcode: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function normalizeWa(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("62")) d = "0" + d.slice(2);
  if (!d.startsWith("0") && d.length > 0) d = "0" + d;
  return d;
}

export function BookingForm({ defaultService }: { defaultService?: string }) {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [fields, setFields] = useState<Fields>({
    name: "",
    whatsapp: "",
    service: defaultService ?? "",
    date: "",
    slot: "",
    postcode: "",
  });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [orderNumber, setOrderNumber] = useState("");

  const set = (k: keyof Fields, v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Fields> = {};
    if (fields.name.trim().length < 3) e.name = "Nama minimal 3 karakter.";
    const wa = normalizeWa(fields.whatsapp);
    if (!/^0\d{9,12}$/.test(wa)) e.whatsapp = "Nomor WhatsApp perlu 10–13 digit.";
    if (!fields.service) e.service = "Pilih layanan dulu, ya.";
    if (!fields.date || fields.date < today) e.date = "Pilih tanggal yang tersedia.";
    if (!fields.slot) e.slot = "Pilih salah satu rentang jam.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, whatsapp: normalizeWa(fields.whatsapp) }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "gagal");
      setOrderNumber(data.orderNumber);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        aria-live="polite"
        className="rounded-xl border border-mint/40 bg-mint/10 p-8 md:p-10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint/20 text-[#2f7d76]">
          <Check size={22} strokeWidth={2.6} />
        </span>
        <h3 className="mt-6 text-[24px] font-semibold leading-snug text-navy">
          Terima kasih, {fields.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 max-w-[440px] leading-relaxed text-slate">
          Kami akan konfirmasi via WhatsApp dalam <strong className="text-charcoal">15 menit</strong>.
          Simpan nomor order kamu:
        </p>
        <p className="num-tabular mt-5 inline-block rounded-md border border-mint/40 bg-white px-5 py-3 text-[20px] font-semibold tracking-[0.08em] text-navy">
          {orderNumber}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-primary !min-h-[48px]"
          >
            Buka WhatsApp Sekarang
            <ArrowRight size={15} strokeWidth={2.2} />
          </a>
          <button
            onClick={() => {
              setStatus("idle");
              setFields({ name: "", whatsapp: "", service: "", date: "", slot: "", postcode: "" });
            }}
            className="btn-base btn-ghost !min-h-[48px]"
          >
            Buat Booking Lain
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-6">
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-md border border-ember/30 bg-ember/5 px-5 py-4 text-[14px] text-charcoal"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-ember" />
          <p>
            Ada yang gagal terkirim. Coba lagi, atau{" "}
            <a href={BRAND.whatsappLink} className="font-medium text-glacier underline underline-offset-2">
              chat kami di WhatsApp
            </a>
            .
          </p>
        </div>
      )}

      <Field label="Nama lengkap" error={errors.name} htmlFor="f-name">
        <input
          id="f-name"
          className={cn("field-input", errors.name && "field-error")}
          placeholder="Mis. Ratna Sari"
          value={fields.name}
          onChange={(e) => set("name", e.target.value)}
          autoComplete="name"
        />
      </Field>

      <Field label="Nomor WhatsApp aktif" error={errors.whatsapp} htmlFor="f-wa">
        <div className="relative">
          <span className="pointer-events-none absolute left-[18px] top-1/2 -translate-y-1/2 font-dm text-[14px] font-medium text-slate/70">
            +62
          </span>
          <input
            id="f-wa"
            className={cn("field-input !pl-[52px]", errors.whatsapp && "field-error")}
            placeholder="812 3456 7890"
            inputMode="tel"
            value={fields.whatsapp}
            onChange={(e) => set("whatsapp", e.target.value)}
            autoComplete="tel-national"
          />
        </div>
      </Field>

      <Field label="Pilih layanan" error={errors.service} htmlFor="f-service">
        <div className="relative">
          <select
            id="f-service"
            className={cn(
              "field-input appearance-none pr-12",
              errors.service && "field-error",
              !fields.service && "text-slate/50"
            )}
            value={fields.service}
            onChange={(e) => set("service", e.target.value)}
          >
            <option value="" disabled>
              — Pilih layanan —
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name} — mulai {rupiah(s.price)}
              </option>
            ))}
            <option value="belum-tahu">Belum tahu, minta rekomendasi teknisi</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate"
          />
        </div>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Tanggal yang diinginkan" error={errors.date} htmlFor="f-date">
          <input
            id="f-date"
            type="date"
            min={today}
            className={cn("field-input", errors.date && "field-error")}
            value={fields.date}
            onChange={(e) => set("date", e.target.value)}
          />
        </Field>
        <Field label="Kode pos / kecamatan (opsional)" htmlFor="f-zip">
          <input
            id="f-zip"
            className="field-input"
            placeholder="Mis. 16424"
            inputMode="numeric"
            value={fields.postcode}
            onChange={(e) => set("postcode", e.target.value)}
          />
        </Field>
      </div>

      <div>
        <span className="field-label">Rentang jam kunjungan</span>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4" role="radiogroup" aria-label="Rentang jam kunjungan">
          {SLOTS.map((s) => (
            <button
              key={s}
              type="button"
              role="radio"
              aria-checked={fields.slot === s}
              onClick={() => set("slot", s)}
              className={cn(
                "h-12 rounded-md border font-dm text-[13.5px] font-medium transition-all",
                fields.slot === s
                  ? "border-glacier bg-glacier text-white shadow-[0_4px_14px_rgba(46,109,164,0.3)]"
                  : "hairline bg-white text-slate hover:border-glacier/50 hover:text-glacier"
              )}
            >
              {s}
            </button>
          ))}
        </div>
        {errors.slot && <ErrorText>{errors.slot}</ErrorText>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "btn-base btn-primary w-full !text-[15px]",
          status === "loading" && "cursor-wait opacity-75"
        )}
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
            Memproses…
          </>
        ) : (
          <>
            Amankan Jadwal Saya Sekarang
            <ArrowRight size={16} strokeWidth={2.2} />
          </>
        )}
      </button>

      <p className="flex items-start gap-2.5 font-dm text-[12.5px] leading-relaxed text-slate">
        <Lock size={13} className="mt-0.5 shrink-0 text-mint" strokeWidth={2.4} />
        Data pribadimu aman. Tidak ada spam. Tidak ada komitmen sebelum kamu konfirmasi.
      </p>

      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-mist/70" />
        <span className="font-dm text-[11px] uppercase tracking-[0.14em] text-slate/60">atau</span>
        <span className="h-px flex-1 bg-mist/70" />
      </div>

      <a
        href={BRAND.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 font-dm text-[14px] font-medium text-[#1d9e78] transition-opacity hover:opacity-75"
      >
        <MessageCircle size={16} />
        Lebih suka via WhatsApp? Chat dengan Tim ARKTIS
        <ArrowRight size={14} />
      </a>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="field-label">
        {label}
      </label>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 flex items-center gap-1.5 text-[13px] text-ember" aria-live="polite">
      <AlertCircle size={13} strokeWidth={2.4} />
      {children}
    </p>
  );
}

/* ———————————————— PRICE CALCULATOR ———————————————— */

const CALC_SERVICES = [
  { slug: "cuci-ac-standard", name: "Cuci AC Standard", unit: 80000 },
  { slug: "cuci-ac-deep-cleaning", name: "Cuci AC Deep Cleaning", unit: 150000 },
  { slug: "isi-freon", name: "Isi Ulang Freon", unit: 200000 },
  { slug: "pasang-ac-baru", name: "Pasang AC Baru", unit: 350000 },
];

export function PriceCalculator() {
  const router = useRouter();
  const [units, setUnits] = useState(3);
  const [service, setService] = useState("cuci-ac-deep-cleaning");
  const [freq, setFreq] = useState<"once" | "yearly">("once");

  const result = useMemo(() => {
    const svc = CALC_SERVICES.find((s) => s.slug === service)!;
    if (freq === "yearly") {
      const planTotal = 600000 * units;
      const normal = svc.unit * 4 * units + 2 * 100000 * units;
      const save = Math.max(0, normal - planTotal);
      return {
        total: planTotal,
        save,
        note: "4× cuci + 2× cek gratis + prioritas + diskon 20% spare part",
        href: `/booking?layanan=perawatan-tahunan`,
        label: "Paket Tahunan ARKTIS CARE",
      };
    }
    const perUnit = svc.slug === "cuci-ac-standard" && units >= 5 ? 70000 : svc.unit;
    const total = perUnit * units;
    const save = svc.slug === "cuci-ac-standard" && units >= 5 ? units * 10000 : 0;
    return {
      total,
      save,
      note: `Sekali kunjungan · ${units} unit ${svc.name.toLowerCase()}`,
      href: `/booking?layanan=${svc.slug}`,
      label: svc.name,
    };
  }, [units, service, freq]);

  return (
    <div className="rounded-xl border hairline bg-white p-7 shadow-soft md:p-9">
      <p className="micro-label !text-glacier">Kalkulator estimasi</p>
      <h3 className="mt-3 text-[22px] font-semibold text-navy">Hitung estimasi biayamu</h3>

      <div className="mt-7 grid gap-6 md:grid-cols-3">
        <div>
          <span className="field-label">Jumlah unit AC</span>
          <div className="flex h-14 items-center justify-between rounded-md border hairline px-2">
            <button
              type="button"
              aria-label="Kurangi unit"
              onClick={() => setUnits((u) => Math.max(1, u - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate transition-colors hover:bg-ice hover:text-glacier"
            >
              <Minus size={16} />
            </button>
            <span className="num-tabular text-[18px] font-semibold text-navy">{units}</span>
            <button
              type="button"
              aria-label="Tambah unit"
              onClick={() => setUnits((u) => Math.min(8, u + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate transition-colors hover:bg-ice hover:text-glacier"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="calc-svc" className="field-label">
            Jenis layanan
          </label>
          <div className="relative">
            <select
              id="calc-svc"
              className="field-input !h-14 appearance-none pr-10"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {CALC_SERVICES.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
            <ChevronDown size={15} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate" />
          </div>
        </div>

        <div>
          <span className="field-label">Frekuensi</span>
          <div className="grid h-14 grid-cols-2 gap-2">
            {(
              [
                ["once", "Sekali"],
                ["yearly", "Tahunan"],
              ] as const
            ).map(([v, l]) => (
              <button
                key={v}
                type="button"
                onClick={() => setFreq(v)}
                className={cn(
                  "rounded-md border font-dm text-[13.5px] font-medium transition-all",
                  freq === v
                    ? "border-glacier bg-glacier text-white"
                    : "hairline bg-white text-slate hover:border-glacier/50"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-ice/70 p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-dm text-[11px] uppercase tracking-[0.14em] text-slate">
              {result.label} · {units} unit
            </p>
            <p className="num-tabular mt-2 text-[34px] font-semibold text-navy">
              {rupiah(result.total)}
            </p>
            <p className="mt-1.5 text-[13px] text-slate">{result.note}</p>
          </div>
          {result.save > 0 && (
            <div className="rounded-full border border-mint/50 bg-mint/10 px-4 py-2 font-dm text-[13px] font-semibold text-[#277069]">
              Hemat {rupiah(result.save)}
            </div>
          )}
        </div>
        <button
          onClick={() => router.push(result.href)}
          className="btn-base btn-primary mt-6 w-full sm:w-auto"
        >
          Pesan dengan estimasi ini
          <ArrowRight size={15} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
