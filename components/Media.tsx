import Image from "next/image";
import LogoMark from "./LogoMark";

type MediaProps = {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
  reveal?: boolean;
  style?: React.CSSProperties;
  natural?: boolean;
};

// Image frame with optional scroll parallax and clip reveal. Falls back to a calm placeholder.
export default function Media({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority,
  parallax,
  reveal = true,
  style,
  natural
}: MediaProps) {
  if (!src) {
    return (
      <div className={`media placeholder ${className}`} style={style}>
        <span>
          <LogoMark size={44} />
          Imagery to follow
        </span>
      </div>
    );
  }

  return (
    <div
      className={`media ${className} ${natural ? 'isNatural' : ''}`}
      data-parallax={parallax && !natural ? "" : undefined}
      data-reveal={reveal ? "" : undefined}
      style={style}
    >
      <div className="zoom">
        <div className="px">
          {natural ? (
            <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} loading={priority ? "eager" : "lazy"} />
          ) : (
            <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
          )}
        </div>
      </div>
    </div>
  );
}
