import { cn } from "@/lib/cn";

/* Emblem abstrak: daun kipas AC dikomposisi ulang menjadi kristal es 6 arah.
   Hairline 1.5–2px, tanpa shadow, tanpa gradient — kemurnian mark adalah pesannya. */
export function LogoMark({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  const blade = "M24 4.5 L29 16.5 L24 23 L19 16.5 Z";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <path
          key={deg}
          d={blade}
          transform={`rotate(${deg} 24 24)`}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      ))}
      <path
        d="M24 20.5 L27 22.2 L27 25.8 L24 27.5 L21 25.8 L21 22.2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LogoLockup({
  dark = false,
  size = 30,
  className,
}: {
  dark?: boolean;
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} className={dark ? "text-white" : "text-glacier"} />
      <span className="leading-none">
        <span
          className={cn(
            "block font-dm text-[16px] font-bold tracking-[0.18em]",
            dark ? "text-white" : "text-navy"
          )}
        >
          ARKTIS
        </span>
        <span
          className={cn(
            "mt-1 block font-dm text-[8.5px] font-medium tracking-[0.34em]",
            dark ? "text-white/50" : "text-slate"
          )}
        >
          HOME SERVICE
        </span>
      </span>
    </span>
  );
}
