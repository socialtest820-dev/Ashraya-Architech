import Image from "next/image";

export default function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "logoMark realLogoMark compact" : "logoMark realLogoMark"} aria-label="Asharaya Architect logo">
      <Image src="/loggo.svg" alt="" width={2245} height={2245} priority={!compact} />
    </span>
  );
}
