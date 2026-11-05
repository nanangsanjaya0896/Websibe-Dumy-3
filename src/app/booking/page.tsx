import type { Metadata } from "next";
import { ContactBooking } from "@/components/contact-booking";
import { getService } from "@/lib/data";

export const metadata: Metadata = {
  title: "Booking Servis AC ARKTIS — Konfirmasi 15 Menit",
  description:
    "Isi data 3 menit, pilih jadwal, kami konfirmasi via WhatsApp. Tanpa komitmen sebelum konfirmasi.",
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ layanan?: string }>;
}) {
  const sp = await searchParams;
  const svc = sp.layanan && getService(sp.layanan) ? sp.layanan : undefined;
  return <ContactBooking variant="booking" defaultService={svc} />;
}
