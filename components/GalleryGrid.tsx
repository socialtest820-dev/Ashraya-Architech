"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { allProjectImages } from "../data/projects";

// Intrinsic image sizes keep the masonry stable while images load.
const sizes: Record<string, [number, number]> = {
  "/assets/projects/empire-01.jpg": [1254, 1254],
  "/assets/projects/empire-02.jpg": [1254, 1254],
  "/assets/projects/empire-03.jpg": [1448, 1086],
  "/assets/projects/empire-04.jpg": [1448, 1086],
  "/assets/projects/empire-05.jpg": [1448, 1086],
  "/assets/projects/empire-06.jpg": [1254, 1254],
  "/assets/projects/empire-07.jpg": [1448, 1086],
  "/assets/projects/skyline-01.jpg": [1500, 844],
  "/assets/projects/skyline-02.jpg": [1500, 844],
  "/assets/projects/skyline-03.jpg": [1500, 1125],
  "/assets/projects/skyline-04.jpg": [1500, 1125],
  "/assets/projects/skyline-05.jpg": [1500, 1250],
  "/assets/projects/skyline-06.jpg": [1500, 1250],
  "/assets/projects/skyline-07.jpg": [1500, 1250],
  "/assets/projects/skyline-08.jpg": [1500, 1250],
  "/assets/projects/skyline-09.jpg": [1500, 844],
  "/assets/projects/skyline-10.jpg": [1500, 844],
  "/assets/projects/skyline-11.jpg": [1500, 938],
  "/assets/projects/skyline-12.jpg": [1500, 1001],
  "/assets/projects/swarnbhumi-01.jpg": [1800, 1294],
  "/assets/projects/swarnbhumi-02.jpg": [1800, 1294],
  "/assets/projects/swarnbhumi-03.jpg": [1800, 1294],
  "/assets/projects/swarnbhumi-04.jpg": [1800, 1298],
  "/assets/projects/swarnbhumi-05.jpg": [1800, 1294],
  "/assets/projects/swarnbhumi-06.jpg": [1800, 1298],
  "/assets/projects/swarnbhumi-07.jpg": [1800, 1294],
  "/assets/projects/vimal-01.jpg": [1800, 1368],
  "/assets/projects/vimal-02.jpg": [1800, 1368]
};

export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);
  const images = allProjectImages.map((image) => ({ ...image, title: image.projectTitle }));

  return (
    <>
      <div className="masonry">
        {images.map((image, index) => (
          <button
            type="button"
            key={image.src}
            onClick={() => setActive(index)}
            data-reveal
            style={{ "--d": index % 3 } as React.CSSProperties}
          >
            <div className="media">
              <div className="zoom" style={{ position: "relative" }}>
                <Image
                  src={image.src}
                  alt={`${image.projectTitle} — ${image.caption}`}
                  width={sizes[image.src]?.[0] ?? 1500}
                  height={sizes[image.src]?.[1] ?? 1000}
                  sizes="(max-width: 700px) 100vw, 33vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <span className="cap">
              <strong>{image.projectTitle}</strong>
              <span>{image.caption}</span>
            </span>
          </button>
        ))}
      </div>
      <Lightbox images={images} index={active} onChange={setActive} />
    </>
  );
}
