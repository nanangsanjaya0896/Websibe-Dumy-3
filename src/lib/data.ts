/* ————————————————————————————————————————————————
   ARKTIS HOME SERVICE — single source of truth
   ———————————————————————————————————————————————— */

export const BRAND = {
  name: "ARKTIS HOME SERVICE",
  tagline: "Udara Bersih. Rumah Nyaman. Tangan Terpercaya.",
  taglineEn: "Certified AC Service. Fast. Clean. Guaranteed.",
  phone: "0800-ARKTIS",
  whatsapp: "+62 812-ARKTIS-1",
  whatsappLink: "https://wa.me/6281247658921",
  email: "halo@arktisservice.id",
  privacyEmail: "privasi@arktisservice.id",
  hours: ["Senin–Sabtu 07.00–20.00 WIB", "Minggu 08.00–17.00 WIB"],
  stats: {
    homes: 2847,
    rating: 4.9,
    reviews: 1847,
    returning: 98,
  },
};

export function rupiah(n: number): string {
  return "Rp " + n.toLocaleString("id-ID");
}

/* ———————————————— SERVICES ———————————————— */

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  num: string;
  name: string;
  sub: string;
  micro: string;
  headline: string;
  headlineSub: string;
  price: number;
  priceUnit: string;
  priceNote?: string;
  duration: string;
  badge?: string;
  img: string;
  imgAlt: string;
  includes: string[];
  fitFor: string[];
  notFor?: { text: string; target?: string }[];
  faqs: ServiceFaq[];
  crossSell: string[];
  yearlyTimeline?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "cuci-ac-standard",
    num: "01",
    name: "Cuci AC Standard",
    sub: "Bersih menyeluruh, cepat selesai",
    micro: "PERAWATAN RUTIN · 45 MENIT",
    headline: "Cuci AC Standard — Bersih Menyeluruh, Cepat Selesai.",
    headlineSub:
      "Untuk AC yang rutin dirawat tiap 2–3 bulan. Bersih di bagian yang paling sering kotor.",
    price: 80000,
    priceUnit: "unit",
    duration: "± 45 menit",
    badge: "Paling Populer",
    img: "/images/svc-standard.jpg",
    imgAlt: "Teknisi ARKTIS menyemprot kisi-kisi AC dengan air bertekanan di rumah pelanggan",
    includes: [
      "Bongkar cover AC",
      "Semprot tekanan air bersih",
      "Bersihkan filter & kisi-kisi",
      "Pasang kembali & uji fungsi",
    ],
    fitFor: [
      "AC yang dicuci rutin tiap 2–3 bulan",
      "Tidak ada keluhan bau atau bunyi",
      "Butuh perawatan cepat di sela aktivitas",
    ],
    notFor: [
      { text: "AC berjamur berat atau berbau apek kuat", target: "cuci-ac-deep-cleaning" },
      { text: "AC yang sudah 2 tahun tidak dibersihkan", target: "cuci-ac-deep-cleaning" },
    ],
    faqs: [
      {
        q: "Seberapa sering sebaiknya cuci AC standard?",
        a: "Idealnya setiap 2–3 bulan untuk pemakaian harian. Jika ada hewan peliharaan atau lingkungan berdebu, 1–2 bulan sekali.",
      },
      {
        q: "Apakah airnya mengotori dinding dan lantai?",
        a: "Tidak. Kami selalu memasang plastik pelindung penuh di bawah unit dan membersihkan area kerja sebelum pulang.",
      },
      {
        q: "Ada diskon untuk lebih dari satu unit?",
        a: "Ada — unit kedua dan seterusnya dalam satu kunjungan mendapat diskon 10% otomatis, tanpa syarat rumit.",
      },
    ],
    crossSell: ["cuci-ac-deep-cleaning", "perawatan-tahunan"],
  },
  {
    slug: "cuci-ac-deep-cleaning",
    num: "02",
    name: "Cuci AC Deep Cleaning",
    sub: "Pembersihan mendalam hingga akar kotoran",
    micro: "PALING MENYELURUH · 90 MENIT",
    headline: "Deep Cleaning — Sampai ke Akar Kotorannya.",
    headlineSub: "Untuk AC yang lama tidak dibersihkan, berbau, atau mulai tidak dingin.",
    price: 150000,
    priceUnit: "unit",
    duration: "± 90 menit",
    badge: "Terbaik untuk AC Lama",
    img: "/images/svc-deep.jpg",
    imgAlt: "Teknisi ARKTIS merendam evaporator AC dalam cairan pembersih saat deep cleaning",
    includes: [
      "Bongkar total semua komponen",
      "Rendam kimia anti-jamur & bakteri",
      "Sterilisasi UV (opsional)",
      "Bilas bersih & keringkan sempurna",
      "Uji performa pendinginan",
    ],
    fitFor: [
      "AC lebih dari 6 bulan tidak dibersihkan",
      "Muncul bau apek saat AC menyala",
      "Anggota keluarga alergi atau sering bersin",
      "AC terasa kurang dingin",
    ],
    notFor: [
      { text: "AC baru dan rutin dicuci tiap 2–3 bulan", target: "cuci-ac-standard" },
    ],
    faqs: [
      {
        q: "Apa bedanya dengan cuci standard?",
        a: "Deep cleaning membongkar seluruh komponen dan merendam evaporator dalam cairan anti-jamur — menjangkau kotoran yang tidak tersentuh cuci biasa.",
      },
      {
        q: "Apakah cairan pembersihnya aman untuk anak?",
        a: "Ya. Semua cairan kami food-grade dan ramah lingkungan, dan unit dibilas hingga bersih sebelum dipasang kembali.",
      },
      {
        q: "Berapa lama efek bersihnya bertahan?",
        a: "Umumnya 4–6 bulan untuk pemakaian normal. Untuk hasil konsisten, banyak pelanggan melanjutkan ke Paket Tahunan.",
      },
    ],
    crossSell: ["perawatan-tahunan", "isi-freon"],
  },
  {
    slug: "servis-perbaikan-ac",
    num: "03",
    name: "Servis & Perbaikan AC",
    sub: "Diagnosa akurat, perbaikan tepat sasaran",
    micro: "DIAGNOSA · 60–120 MENIT",
    headline: "Servis & Perbaikan — Diagnosa Akurat, Bukan Tebak-tebakan.",
    headlineSub:
      "Multimeter, pengalaman, dan kejujuran. Biaya spare part selalu dikonfirmasi sebelum dikerjakan.",
    price: 100000,
    priceUnit: "kunjungan",
    priceNote: "belum termasuk spare part",
    duration: "± 60–120 menit",
    img: "/images/svc-repair.jpg",
    imgAlt: "Teknisi ARKTIS mengukur arus listrik unit outdoor AC dengan multimeter digital",
    includes: [
      "Diagnosa menyeluruh",
      "Penggantian komponen bermasalah",
      "Pengecekan sistem kelistrikan",
      "Uji fungsi pasca-perbaikan",
    ],
    fitFor: [
      "AC mati total atau sering error",
      "Air menetes dari unit indoor",
      "Muncul bunyi aneh saat menyala",
      "AC menyala tapi tidak mendinginkan",
    ],
    notFor: [
      { text: "AC sehat dan hanya butuh pembersihan", target: "cuci-ac-standard" },
    ],
    faqs: [
      {
        q: "Bagaimana aturan biaya spare part?",
        a: "Harga Rp 100.000 adalah jasa diagnosa dan pengerjaan. Jika perlu spare part, kami sampaikan kebutuhan dan estimasi harga sebelum dikerjakan — kamu bebas memutuskan.",
      },
      {
        q: "Kalau ternyata tidak bisa diperbaiki hari itu?",
        a: "Kamu hanya membayar biaya diagnosa dan mendapat laporan tertulis plus rekomendasi tindakan. Tanpa tekanan untuk lanjut.",
      },
      {
        q: "Apakah ada garansi perbaikan?",
        a: "Ada. Semua perbaikan bergaransi 30 hari. Masalah yang sama muncul lagi, kami kembali tanpa biaya.",
      },
    ],
    crossSell: ["isi-freon", "cuci-ac-deep-cleaning"],
  },
  {
    slug: "isi-freon",
    num: "04",
    name: "Isi Ulang Freon AC",
    sub: "Dingin maksimal seperti pertama kali",
    micro: "PERFORMA · 30–60 MENIT",
    headline: "Isi Ulang Freon — Dingin Seperti Pertama Kali.",
    headlineSub: "Freon R32 / R410A bergaransi, dengan laporan tekanan tertulis setelah pengisian.",
    price: 200000,
    priceUnit: "unit",
    duration: "± 30–60 menit",
    img: "/images/svc-freon.jpg",
    imgAlt: "Tabung freon dan manometer digital ARKTIS terhubung ke unit outdoor AC",
    includes: [
      "Cek tekanan sistem",
      "Isi freon R32 / R410A bergaransi",
      "Uji performa pendinginan",
      "Laporan tekanan tertulis",
    ],
    fitFor: [
      "AC kurang dingin padahal unit bersih",
      "Pipa AC membeku atau berembun berlebih",
      "Freon belum pernah dicek lebih dari 2 tahun",
    ],
    notFor: [
      { text: "AC kotor dan belum dicuci — bersihkan dulu", target: "cuci-ac-standard" },
    ],
    faqs: [
      {
        q: "Freon apa yang dipakai?",
        a: "Kami menyediakan R32 dan R410A — refrigerant modern yang ramah ozon dan sesuai hampir semua AC keluaran 10 tahun terakhir.",
      },
      {
        q: "Apakah freon bisa habis sendiri?",
        a: "Tidak pada sistem sehat. Jika tekanan turun drastis, ada kebocoran — teknisi kami akan mencari titik bocornya, bukan sekadar mengisi ulang.",
      },
      {
        q: "Berapa lama freon bertahan setelah diisi?",
        a: "Pada sistem tanpa kebocoran, bertahun-tahun. Karena itu kami selalu cek kebocoran dulu sebelum mengisi.",
      },
    ],
    crossSell: ["cuci-ac-standard", "servis-perbaikan-ac"],
  },
  {
    slug: "pasang-ac-baru",
    num: "05",
    name: "Pasang AC Baru",
    sub: "Pemasangan rapi, presisi & bergaransi",
    micro: "INSTALASI · 2–3 JAM",
    headline: "Pasang AC Baru — Rapi, Presisi, Bergaransi.",
    headlineSub: "Bracket premium, casing pipa rapi, dan garansi pemasangan 90 hari.",
    price: 350000,
    priceUnit: "unit",
    duration: "± 2–3 jam",
    img: "/images/svc-pasang.jpg",
    imgAlt: "Teknisi ARKTIS memasang bracket AC baru dengan waterpass di dinding kamar",
    includes: [
      "Bracket premium",
      "Pipa 3 meter",
      "Kabel power & instalasi",
      "Finishing casing rapi",
      "Garansi pemasangan 90 hari",
    ],
    fitFor: [
      "Pindah ke rumah baru",
      "Mengganti AC lama dengan unit baru",
      "Butuh pemasangan yang rapi secara visual",
    ],
    notFor: [{ text: "Bongkar pasang saat pindahan — ada paket khusus di halaman harga" }],
    faqs: [
      {
        q: "Apakah harga sudah termasuk unit AC-nya?",
        a: "Belum — harga adalah jasa pemasangan termasuk bracket, pipa 3 meter, dan kabel. Unit AC kamu yang menyediakan, atau kami bantu rekomendasikan.",
      },
      {
        q: "Bagaimana jika pipa butuh lebih dari 3 meter?",
        a: "Tambahan pipa dihitung per meter dan selalu kami konfirmasi harganya sebelum pengerjaan dimulai.",
      },
      {
        q: "Apakah bisa pasang di semua jenis dinding?",
        a: "Bisa — beton, bata, maupun bata ringan. Teknisi kami membawa anchor yang sesuai untuk tiap material.",
      },
    ],
    crossSell: ["perawatan-tahunan", "isi-freon"],
  },
  {
    slug: "perawatan-tahunan",
    num: "06",
    name: "Perawatan Berkala Tahunan",
    sub: "Perlindungan setahun, satu harga",
    micro: "LANGGANAN · HEMAT 40%",
    headline: "Perawatan Tahunan — Satu Harga, Setahun Tenang.",
    headlineSub: "Empat kunjungan terjadwal, prioritas booking, dan diskon spare part sepanjang tahun.",
    price: 600000,
    priceUnit: "tahun / unit",
    duration: "4 kunjungan / tahun",
    badge: "Hemat hingga 40%",
    img: "/images/svc-annual.jpg",
    imgAlt: "Teknisi ARKTIS mencatat laporan perawatan tahunan dengan termometer digital",
    includes: [
      "4× cuci AC per tahun",
      "2× pengecekan gratis",
      "Prioritas booking",
      "Diskon 20% spare part",
      "Laporan per kunjungan",
    ],
    fitFor: [
      "Rumah dengan 2 unit AC atau lebih",
      "Tidak mau repot mengingat jadwal servis",
      "Ingin biaya perawatan yang pasti setahun penuh",
      "Keluarga dengan anak atau penderita alergi",
    ],
    notFor: [{ text: "Baru sekali pakai dan ingin coba dulu", target: "cuci-ac-standard" }],
    faqs: [
      {
        q: "Bagaimana jadwal kunjungannya diatur?",
        a: "Setelah aktivasi, kamu memilih bulan pertama — sisanya kami jadwalkan otomatis tiap 3 bulan dan diingatkan via WhatsApp H-2.",
      },
      {
        q: "Bisakah satu paket dipakai untuk beberapa unit?",
        a: "Paket dihitung per unit. Untuk 3 unit, kamu cukup mengambil 3 paket — totalnya tetap jauh lebih hemat dari servis satuan.",
      },
      {
        q: "Bagaimana jika saya pindah rumah di tengah tahun?",
        a: "Paket bisa dialihkan ke alamat baru selama masih di area layanan kami, atau dialihkan ke penghuni baru.",
      },
    ],
    crossSell: ["cuci-ac-deep-cleaning", "pasang-ac-baru"],
    yearlyTimeline: true,
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

/* ———————————————— TESTIMONIALS ———————————————— */

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  date: string;
  quote: string;
  body: string;
  service: string;
  category: string;
  initials: string;
  tone: string; // monogram tint
  beforeAfter?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ibu Ratna Sari",
    city: "Depok",
    rating: 5,
    date: "12 Okt 2024",
    quote: "AC saya seperti baru lagi!",
    body: "AC saya sudah 2 tahun tidak pernah dicuci. Setelah pakai ARKTIS Deep Cleaning, udara di kamar jadi beda banget — segar dan tidak apek lagi. Teknisinya datang tepat waktu, rapi, sopan, dan membersihkan semua sisa air sebelum pulang.",
    service: "Deep Cleaning — 2 unit",
    category: "Cuci AC",
    initials: "RS",
    tone: "bg-ice text-glacier",
    beforeAfter: true,
  },
  {
    name: "Bapak Dani Wibowo",
    city: "Bekasi",
    rating: 5,
    date: "3 Nov 2024",
    quote: "Pesan jam 9, datang jam 10.30.",
    body: "Saya sudah coba beberapa jasa servis AC sebelumnya, tapi ARKTIS benar-benar beda. Harganya transparan — dikasih tahu dulu sebelum dikerjakan, tidak ada biaya tambahan yang mengejutkan.",
    service: "Freon Refill + Repair",
    category: "Freon",
    initials: "DW",
    tone: "bg-navy text-ice",
  },
  {
    name: "Andi & Sari Prasetyo",
    city: "Tangerang Selatan",
    rating: 5,
    date: "28 Nov 2024",
    quote: "3 unit AC kami selalu prima.",
    body: "Kami berlangganan Paket Tahunan untuk 3 unit AC. Setiap kunjungan selalu profesional dan tepat waktu. Tagihan listrik turun sekitar 20%, dan anak kami yang punya alergi jadi jauh lebih jarang bersin.",
    service: "Annual Care — 3 unit",
    category: "Paket Tahunan",
    initials: "AS",
    tone: "bg-glacier text-white",
    beforeAfter: true,
  },
  {
    name: "Ibu Yuni Hartati",
    city: "Bandung",
    rating: 5,
    date: "9 Sep 2024",
    quote: "Bau apeknya benar-benar hilang.",
    body: "Sudah coba semprot pengharum ruangan segala macam, ternyata masalahnya di AC. Sekali deep cleaning, bau apek yang setahun mengganggu hilang total. Ruangan terasa jauh lebih ringan.",
    service: "Deep Cleaning",
    category: "Cuci AC",
    initials: "YH",
    tone: "bg-ice text-glacier",
  },
  {
    name: "Bapak Hendra Gunawan",
    city: "Surabaya",
    rating: 5,
    date: "21 Sep 2024",
    quote: "Tidak ada biaya kejutan sama sekali.",
    body: "Yang paling saya hargai: sebelum ganti kapasitor, teknisinya telepon dulu, jelaskan harganya, baru dikerjakan setelah saya setuju. Cara kerja seperti ini yang bikin saya mau pesan lagi.",
    service: "Servis & Perbaikan",
    category: "Perbaikan",
    initials: "HG",
    tone: "bg-navy text-ice",
  },
  {
    name: "Ibu Melati Anggraini",
    city: "Semarang",
    rating: 5,
    date: "2 Okt 2024",
    quote: "Anak saya berhenti bersin malam hari.",
    body: "Anak saya alergi debu dan tiap malam bersin terus. Setelah tiga unit AC di rumah di-deep clean, malam pertama langsung terasa bedanya. Sekarang tidurnya nyenyak, kami juga.",
    service: "Deep Cleaning — 3 unit",
    category: "Cuci AC",
    initials: "MA",
    tone: "bg-glacier text-white",
  },
  {
    name: "Bapak Fajar Nugroho",
    city: "Depok",
    rating: 5,
    date: "17 Okt 2024",
    quote: "Pipa dan casing-nya rapi banget.",
    body: "Pasang dua unit AC di rumah baru. Yang bikin kagum: pipa dan casing-nya lurus rapi seperti garis arsitek. Sebelum pulang, semua sisa pengeboran disapu bersih.",
    service: "Pasang AC Baru — 2 unit",
    category: "Pasang AC",
    initials: "FN",
    tone: "bg-ice text-glacier",
  },
  {
    name: "Ibu Kartika Dewi",
    city: "Jakarta Selatan",
    rating: 5,
    date: "30 Okt 2024",
    quote: "Teknisinya sopan dan sabar menjelaskan.",
    body: "Empat unit dicuci standard. Teknisinya pakai alas kaki dalam rumah tanpa diminta, dan sabar menjelaskan kondisi tiap unit dengan bahasa sederhana. Rasanya aman mempersilakan masuk rumah.",
    service: "Standard Wash — 4 unit",
    category: "Cuci AC",
    initials: "KD",
    tone: "bg-navy text-ice",
  },
  {
    name: "Keluarga Susanto",
    city: "Tangerang",
    rating: 5,
    date: "12 Des 2024",
    quote: "3 tahun langganan, tidak pernah kecewa.",
    body: "Sudah tiga tahun pakai Annual Care untuk dua unit. Jadwalnya selalu diingatkan, teknisinya konsisten rapi, dan AC kami tidak pernah sekalipun bermasalah di tengah malam.",
    service: "Annual Care — 2 unit",
    category: "Paket Tahunan",
    initials: "SU",
    tone: "bg-glacier text-white",
  },
];

export const TESTIMONIAL_FILTERS = [
  "Semua",
  "Cuci AC",
  "Perbaikan",
  "Pasang AC",
  "Paket Tahunan",
  "Freon",
];

export const RATING_DISTRIBUTION = [
  { star: 5, pct: 87 },
  { star: 4, pct: 10 },
  { star: 3, pct: 2 },
  { star: 2, pct: 1 },
  { star: 1, pct: 0 },
];

/* ———————————————— FAQ ———————————————— */

export type FaqGroup = { group: string; items: ServiceFaq[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    group: "Layanan & Proses",
    items: [
      {
        q: "Seberapa sering AC harus dicuci?",
        a: "Idealnya setiap 2–3 bulan untuk pemakaian harian. Jika ada hewan peliharaan atau lingkungan berdebu, 1–2 bulan sekali.",
      },
      {
        q: "Berapa lama proses cuci AC?",
        a: "Standard ± 45 menit per unit. Deep cleaning 60–90 menit. Estimasi akurat diberikan saat konfirmasi.",
      },
      {
        q: "Apakah teknisi membawa peralatan sendiri?",
        a: "Ya, 100%. Kamu tidak perlu menyiapkan apa pun selain akses ke unit AC.",
      },
      {
        q: "Apakah AC inverter bisa diservis?",
        a: "Ya, semua jenis AC bisa kami tangani — termasuk inverter, split wall, dan cassette.",
      },
    ],
  },
  {
    group: "Harga & Pembayaran",
    items: [
      {
        q: "Apakah ada biaya tambahan?",
        a: "Tidak ada. Harga di halaman ini harga final. Satu-satunya kemungkinan adalah spare part, dan itu selalu dikonfirmasi lebih dulu.",
      },
      {
        q: "Bagaimana jika AC butuh spare part baru?",
        a: "Teknisi menginformasikan kebutuhan dan estimasi harga sebelum pekerjaan dimulai. Kamu bebas menentukan.",
      },
      {
        q: "Metode pembayaran apa saja yang diterima?",
        a: "Tunai, transfer bank, QRIS, dan e-wallet. Pembayaran dilakukan setelah pekerjaan selesai dan kamu periksa hasilnya.",
      },
      {
        q: "Apakah bisa servis beberapa unit sekaligus?",
        a: "Bisa, dan lebih hemat. Mulai 5 unit dalam satu kunjungan mendapat harga khusus Rp 70.000 per unit untuk cuci standard.",
      },
    ],
  },
  {
    group: "Jadwal & Pembatalan",
    items: [
      {
        q: "Bagaimana cara membatalkan atau mengubah jadwal?",
        a: "Bisa hingga 2 jam sebelum jadwal, tanpa biaya. Cukup hubungi kami via WhatsApp.",
      },
      {
        q: "Apakah harus ada orang di rumah saat servis?",
        a: "Ya, minimal satu orang dewasa di rumah selama pengerjaan — demi keamanan dan kenyamanan bersama.",
      },
    ],
  },
  {
    group: "Jaminan & Kualitas",
    items: [
      {
        q: "Bagaimana jika saya tidak puas dengan hasilnya?",
        a: "Hubungi kami dalam 30 hari, kami kembali memperbaiki tanpa biaya. Jika masih tidak puas, uang kembali penuh.",
      },
      {
        q: "Apakah ARKTIS melayani area saya?",
        a: "Saat ini kami melayani Jabodetabek, Bandung, Surabaya, dan Semarang. Cek kode pos kamu di halaman kontak.",
      },
    ],
  },
];

/* ———————————————— HARGA ———————————————— */

export const PRICE_ROWS = [
  { service: "Cuci AC Standard", price: 80000, unit: "unit", duration: "45 menit" },
  { service: "Cuci AC Deep Cleaning", price: 150000, unit: "unit", duration: "90 menit" },
  { service: "Servis & Perbaikan", price: 100000, unit: "kunjungan", duration: "60–120 menit" },
  { service: "Isi Ulang Freon R32/R410A", price: 200000, unit: "unit", duration: "30–60 menit" },
  { service: "Pasang AC Baru (1–1.5 PK)", price: 350000, unit: "unit", duration: "2–3 jam" },
  { service: "Bongkar + Pasang (pindahan)", price: 450000, unit: "unit", duration: "3 jam" },
  { service: "Cuci 5+ unit (satu kunjungan)", price: 70000, unit: "unit", duration: "hemat 12%" },
];

export const BONUSES = [
  {
    title: "Konsultasi AC gratis via WhatsApp sebelum servis",
    desc: "Ceritakan gejalanya, kami bantu tentukan layanan yang tepat.",
    value: "Rp 50.000 — GRATIS",
  },
  {
    title: "Laporan kondisi AC tertulis & digital",
    desc: "Dokumentasi foto before-after dikirim setelah servis selesai.",
    value: "Rp 30.000 — GRATIS",
  },
  {
    title: "Garansi servis 30 hari",
    desc: "Standar industri hanya 7 hari. Kami empat kali lipatnya.",
    value: "Nilai jaminan",
  },
  {
    title: "Diskon 10% untuk servis kedua & seterusnya",
    desc: "Otomatis berlaku di kunjungan yang sama, tanpa syarat rumit.",
    value: "Otomatis",
  },
];

/* ———————————————— TENTANG ———————————————— */

export const JOURNEY = [
  { year: "2019", text: "1 teknisi, 1 motor" },
  { year: "2021", text: "12 teknisi, Jabodetabek" },
  { year: "2023", text: "2.000 rumah, 4 kota" },
  { year: "2025", text: "34 teknisi, 6 kota" },
];

export const TEAM = [
  { name: "Rizky Ardiansyah", role: "Pendiri & CEO", since: "2019", initials: "RA" },
  { name: "Bagus Pramono", role: "Kepala Teknisi", since: "2019", initials: "BP" },
  { name: "Sari Wulandari", role: "Operasional & Jadwal", since: "2020", initials: "SW" },
  { name: "Yoga Saputra", role: "Spesialis Perbaikan", since: "2021", initials: "YS" },
  { name: "Dewi Kurnia", role: "Layanan Pelanggan", since: "2021", initials: "DK" },
  { name: "Firmansyah Alwi", role: "Spesialis Instalasi", since: "2022", initials: "FA" },
];

export const CITIES = [
  { name: "Jabodetabek", districts: ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"] },
  { name: "Bandung", districts: ["Bandung Kota", "Cimahi", "Bandung Barat"] },
  { name: "Surabaya", districts: ["Surabaya", "Sidoarjo", "Gresik"] },
  { name: "Semarang", districts: ["Semarang", "Kendal", "Ungaran"] },
];

/* ———————————————— NAV ———————————————— */

export const NAV_LINKS = [
  { href: "/layanan", label: "Layanan" },
  { href: "/harga", label: "Harga" },
  { href: "/cara-kerja", label: "Cara Kerja" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/tentang", label: "Tentang" },
  { href: "/faq", label: "FAQ" },
];
