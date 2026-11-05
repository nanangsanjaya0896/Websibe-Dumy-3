import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal";

export const metadata: Metadata = {
  title: "Syarat Layanan — ARKTIS",
  description: "Cakupan garansi 30 hari, kebijakan pembatalan, dan syarat penggunaan layanan ARKTIS.",
};

export default function SyaratPage() {
  return (
    <LegalDoc
      crumb="Syarat Layanan"
      micro="DOKUMEN LEGAL"
      title="Syarat Layanan"
      effective="1 Januari 2025"
      sections={[
        {
          id: "cakupan",
          heading: "Cakupan Garansi 30 Hari",
          paragraphs: [
            "Setiap layanan ARKTIS dilindungi garansi 30 hari sejak tanggal pengerjaan. Jika masalah yang sama muncul kembali dalam masa garansi, kami datang dan memperbaiki tanpa biaya apa pun.",
            "Untuk layanan pemasangan AC baru, garansi pemasangan berlaku 90 hari, mencakup kebocoran sambungan, kestabilan bracket, dan kerapian instalasi.",
          ],
        },
        {
          id: "pengecualian",
          heading: "Pengecualian Garansi",
          paragraphs: [
            "Garansi tidak berlaku untuk kerusakan akibat listrik rumah yang tidak stabil, intervensi atau bongkar-pasang oleh pihak lain setelah kunjungan kami, serta kerusakan komponen yang sudah kami laporkan sebelumnya tetapi belum disetujui untuk diganti.",
          ],
        },
        {
          id: "pembatalan",
          heading: "Pembatalan & Perubahan Jadwal",
          paragraphs: [
            "Kamu dapat membatalkan atau mengubah jadwal hingga 2 jam sebelum waktu kunjungan tanpa biaya apa pun, cukup melalui WhatsApp.",
            "Pembatalan dalam kurun 2 jam sebelum kunjungan dapat dikenakan biaya perjalanan sebesar Rp 50.000 jika teknisi sudah berangkat.",
          ],
        },
        {
          id: "refund",
          heading: "Kebijakan Pengembalian Dana",
          paragraphs: [
            "Jika setelah perbaikan ulang kamu tetap tidak puas dengan hasil layanan, kamu berhak atas pengembalian dana penuh untuk biaya jasa layanan tersebut.",
            "Biaya spare part yang sudah terpasang dan berfungsi tidak dapat dikembalikan.",
          ],
        },
        {
          id: "perubahan",
          heading: "Perubahan Syarat",
          paragraphs: [
            "Perubahan syarat layanan akan diumumkan di halaman ini minimal 14 hari sebelum berlaku. Versi yang berlaku adalah versi dengan tanggal efektif terbaru di bagian atas dokumen ini.",
          ],
        },
      ]}
    />
  );
}
