import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/data";

const BASE = "https://arktisservice.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/layanan",
    "/harga",
    "/cara-kerja",
    "/tentang",
    "/testimoni",
    "/faq",
    "/kontak",
    "/booking",
    "/legal/kebijakan-privasi",
    "/legal/syarat-layanan",
  ].map((p) => ({
    url: `${BASE}${p || "/"}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const servicePages = SERVICES.map((s) => ({
    url: `${BASE}/layanan/${s.slug}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}
