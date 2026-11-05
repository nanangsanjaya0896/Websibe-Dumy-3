import { ArrowRight } from "lucide-react";
import { ButtonPrimary, Container, Micro } from "@/components/ui";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="grain relative flex min-h-[100svh] items-center bg-arctic">
      <LogoMark size={420} className="watermark -right-20 -top-20 text-white" />
      <Container>
        <Micro>404</Micro>
        <h1 className="display-hero mt-6 max-w-[12ch] text-white">Halaman ini tidak ditemukan.</h1>
        <p className="lead-text mt-6 max-w-[40ch] text-white/65">
          Mungkin tautannya sudah berubah. Udara bersih tetap menunggumu di beranda.
        </p>
        <div className="mt-10">
          <ButtonPrimary href="/">
            Kembali ke Beranda
            <ArrowRight size={16} strokeWidth={2.2} />
          </ButtonPrimary>
        </div>
      </Container>
    </div>
  );
}
