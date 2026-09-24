import type { Metadata } from "next";
import PageIntro from "../../components/PageIntro";
import ProjectArchive from "../../components/ProjectArchive";

export const metadata: Metadata = {
  title: "Projects",
  description: "Architecture, township planning, commercial and residential projects by Ashraya Architects."
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Work across architecture, interiors and urban scale."
        lede="Residential developments, township master plans, commercial addresses and private homes — each approached as a complete design journey from concept to built reality."
      />
      <ProjectArchive />
    </>
  );
}
