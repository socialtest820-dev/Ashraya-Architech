import type { CSSProperties } from "react";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { allProjectImages, projects } from "../../data/projects";

export const metadata = {
  title: "Gallery | Ashraya Architects",
  description: "A visual gallery of Ashraya Architects projects."
};

export default function GalleryPage() {
  return (
    <main className="subPage">
      <SiteHeader />

      <section className="galleryHero">
        <p className="eyebrow">Gallery</p>
        <h1>Spaces, surfaces and structure — the work up close.</h1>
        <div className="galleryStats">
          <span>{projects.filter((project) => project.cover).length} featured projects</span>
          <span>{allProjectImages.length} images</span>
          <span>Visualization & design communication by the studio</span>
        </div>
      </section>

      <section className="galleryCascade" aria-label="Project image gallery">
        {allProjectImages.map((image, index) => (
          <Link
            href={`/projects/${image.projectSlug}`}
            className="galleryFrame"
            key={`${image.projectSlug}-${image.imageIndex}`}
            style={{ "--i": index } as CSSProperties}
          >
            <span className="galleryImage" style={{ backgroundImage: `url("${image.src}")` }} aria-hidden="true" />
            <span className="galleryCaption">
              <strong>{image.projectTitle}</strong>
              <small>{image.caption}</small>
            </span>
          </Link>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
