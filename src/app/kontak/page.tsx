import type { Metadata } from "next";
import { AreaMap, ContactBooking } from "@/components/contact-booking";
import { Container, Micro, Section } from "@/components/ui";
import { Reveal } from "@/components/interactive";

export const metadata: Metadata = {
  title: "Kontak ARKTIS — Booking Servis AC, Konfirmasi 15 Menit",
  description:
    "Hubungi ARKTIS via WhatsApp, telepon, atau form booking. Melayani Jabodetabek, Bandung, Surabaya, Semarang.",
};

export default function KontakPage() {
  return (
    <>
      <ContactBooking variant="kontak" />
      <Section tight className="bg-paper">
        <Container>
          <div className="mb-10 max-w-[560px]">
            <Micro>AREA LAYANAN</Micro>
            <h2 className="headline-section mt-4 text-navy">Empat kota, satu standar.</h2>
          </div>
          <Reveal>
            <AreaMap />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
