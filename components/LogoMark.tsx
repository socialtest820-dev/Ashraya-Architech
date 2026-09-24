/* eslint-disable @next/next/no-img-element */
export default function LogoMark({ size = 30, className }: { size?: number; className?: string }) {
  return <img src="/loggo.svg" alt="" width={size} height={size} className={className} decoding="async" />;
}
