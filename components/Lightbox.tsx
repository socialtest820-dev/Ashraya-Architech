"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export type LightboxImage = { src: string; caption: string; title?: string };

type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onChange: (index: number | null) => void;
};

export default function Lightbox({ images, index, onChange }: LightboxProps) {
  const open = index !== null;
  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onChange]
  );

  useEffect(() => {
    if (!open) return;
    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onChange(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.__lenis?.start();
      document.documentElement.style.overflow = "";
    };
  }, [open, onChange, step]);

  if (index === null) return null;
  const image = images[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
      <div className="lightboxBar">
        <span>
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <button type="button" className="menuButton" onClick={() => onChange(null)} autoFocus>
          Close <X size={18} />
        </button>
      </div>
      <div className="lightboxStage">
        <img key={image.src} src={image.src} alt={image.caption} />
        {images.length > 1 && (
          <>
            <button type="button" className="lightboxNav prev" onClick={() => step(-1)} aria-label="Previous image">
              <ArrowLeft size={18} />
            </button>
            <button type="button" className="lightboxNav next" onClick={() => step(1)} aria-label="Next image">
              <ArrowRight size={18} />
            </button>
          </>
        )}
      </div>
      <p className="lightboxCaption">
        {image.title && <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{image.title} — </strong>}
        {image.caption}
      </p>
    </div>
  );
}
