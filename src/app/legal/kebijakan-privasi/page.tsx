import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — ARKTIS",
  description: "Bagaimana ARKTIS mengumpulkan, menggunakan, dan melindungi data pribadimu.",
};

export default function PrivasiPage() {
  return (
    <LegalDoc
      crumb="Kebijakan Privasi"
      micro="DOKUMEN LEGAL"
      title="Kebijakan Privasi"
      effective="1 Januari 2025"
      sections={[
        {
          id: "data",
          heading: "Data yang Kami Kumpulkan",
          paragraphs: [
            "Kami hanya mengumpulkan data yang dibutuhkan untuk melayanimu: nama lengkap, nomor WhatsApp aktif, alamat atau kode pos untuk kunjungan, serta riwayat layanan dan preferensi jadwal.",
            "Kami tidak pernah meminta data yang tidak relevan dengan layanan — tidak ada pertanyaan soal pendapatan, dokumen identitas, atau data sensitif lainnya.",
          ],
        },
        {
          id: "tujuan",
          heading: "Tujuan Penggunaan Data",
          paragraphs: [
            "Data kamu digunakan untuk tiga hal saja: mengonfirmasi dan menjalankan booking, mengirim laporan hasil servis via WhatsApp, serta mengingatkan jadwal perawatan berikutnya jika kamu berlangganan.",
            "Kami tidak menjual, menyewakan, atau membagikan data kamu kepada pihak ketiga untuk tujuan pemasaran apa pun.",
          ],
        },
        {
          id: "retensi",
          heading: "Penyimpanan & Retensi",
          paragraphs: [
            "Data booking disimpan selama 24 bulan untuk keperluan garansi dan riwayat layanan. Setelah itu, data dihapus atau dianonimkan secara permanen.",
            "Foto before-after pekerjaan hanya disimpan dengan persetujuanmu dan tidak pernah dipublikasikan tanpa izin tertulis.",
          ],
        },
        {
          id: "hak",
          heading: "Hak Kamu atas Data",
          paragraphs: [
            "Kamu berhak meminta salinan data yang kami simpan, meminta koreksi, dan meminta penghapusan data kapan saja. Permintaan penghapusan kami proses maksimal 7 hari kerja.",
          ],
        },
        {
          id: "kontak",
          heading: "Kontak Petugas Privasi",
          paragraphs: [
            `Untuk semua pertanyaan dan permintaan terkait data pribadi, hubungi Petugas Perlindungan Data kami di ${BRAND.privacyEmail}.`,
          ],
        },
      ]}
    />
  );
}
