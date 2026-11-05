import { NextResponse } from "next/server";
import { db } from "@/db";
import { bookings } from "@/db/schema";

type Payload = {
  name?: string;
  whatsapp?: string;
  service?: string;
  date?: string;
  slot?: string;
  postcode?: string;
};

const SLOTS = new Set(["08–11", "11–14", "14–17", "17–20"]);

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Format data tidak valid." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const whatsapp = (body.whatsapp ?? "").replace(/\D/g, "");
  const service = (body.service ?? "").trim();
  const date = (body.date ?? "").trim();
  const slot = (body.slot ?? "").trim();
  const postcode = (body.postcode ?? "").trim() || null;

  if (name.length < 3) {
    return NextResponse.json({ ok: false, error: "Nama minimal 3 karakter." }, { status: 422 });
  }
  if (!/^0\d{9,12}$/.test(whatsapp)) {
    return NextResponse.json(
      { ok: false, error: "Nomor WhatsApp perlu 10–13 digit." },
      { status: 422 }
    );
  }
  if (!service) {
    return NextResponse.json({ ok: false, error: "Layanan wajib dipilih." }, { status: 422 });
  }
  const today = new Date().toISOString().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < today) {
    return NextResponse.json(
      { ok: false, error: "Pilih tanggal yang tersedia." },
      { status: 422 }
    );
  }
  if (!SLOTS.has(slot)) {
    return NextResponse.json({ ok: false, error: "Rentang jam tidak valid." }, { status: 422 });
  }

  try {
    const orderNumber = await createOrderNumber();
    await db.insert(bookings).values({
      orderNumber,
      name,
      whatsapp: "+62" + whatsapp.slice(1),
      service,
      preferredDate: date,
      timeSlot: slot,
      postcode,
    });
    return NextResponse.json({ ok: true, orderNumber, name });
  } catch (err) {
    console.error("booking insert failed", err);
    return NextResponse.json(
      { ok: false, error: "Ada yang gagal terkirim. Coba lagi sebentar lagi." },
      { status: 500 }
    );
  }
}

async function createOrderNumber(): Promise<string> {
  const year = new Date().getFullYear();
  for (let i = 0; i < 5; i++) {
    const candidate = `ARTK-${year}-${String(Math.floor(1000 + Math.random() * 9000))}`;
    return candidate;
  }
  return `ARTK-${year}-${Date.now().toString().slice(-4)}`;
}
