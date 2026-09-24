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
  style
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
      className={`media ${className}`}
      data-parallax={parallax ? "" : undefined}
      data-reveal={reveal ? "" : undefined}
      style={style}
    >
      <div className="zoom">
        <div className="px">
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
}
