/* eslint-disable @next/next/no-img-element */
import { firm } from "../data/firm";

export default function LogoMark({
  size = 30,
  className,
  alt = firm.name
}: {
  size?: number;
  className?: string;
  alt?: string;
}) {
  return <img src="/logo.svg" alt={alt} width={size} height={size} className={className} decoding="async" />;
}
