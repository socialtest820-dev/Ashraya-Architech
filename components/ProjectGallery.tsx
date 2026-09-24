"use client";

import { useState } from "react";
import Media from "./Media";
import Lightbox from "./Lightbox";
import type { ProjectImage } from "../data/projects";

// Rhythm of full-width, paired and offset frames, repeating down the page.
const pattern = ["", "half", "half", "offset"];

export default function ProjectGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);

  // A lone trailing "half" frame would leave a gap, so it is promoted to full width.
  const layout = images.map((_, index) =>
    index % pattern.length === 1 && index === images.length - 1 ? "" : pattern[index % pattern.length]
  );

  return (
    <>
      <div className="projectGallery">
        {images.map((image, index) => (
          <figure key={image.src} className={layout[index]}>
            <button
              type="button"
              style={{ display: "block", width: "100%" }}
              onClick={() => setActive(index)}
              aria-label={`Open image: ${image.caption}`}
            >
              <Media
                src={image.src}
                alt={`${title} — ${image.caption}`}
                sizes={layout[index] === "half" ? "(max-width: 860px) 100vw, 50vw" : "100vw"}
                parallax={layout[index] === ""}
              />
            </button>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      <Lightbox images={images} index={active} onChange={setActive} />
    </>
  );
}
