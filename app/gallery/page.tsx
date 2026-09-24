import type { Metadata } from "next";
import PageIntro from "../../components/PageIntro";
import GalleryGrid from "../../components/GalleryGrid";
import { allProjectImages, projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual gallery of Ashraya Architects projects."
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Gallery"
        title="Spaces, surfaces and structure — the work up close."
        lede={`${allProjectImages.length} views across ${projects.filter((project) => project.cover).length} projects. Visualization and design communication by the studio.`}
      />
      <div style={{ paddingBottom: "clamp(88px, 12vw, 176px)" }}>
        <GalleryGrid />
      </div>
    </>
  );
}
