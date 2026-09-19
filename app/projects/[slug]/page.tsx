import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { getProject, projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  return {
    title: project ? `${project.title} | Ashraya Architects` : "Project | Ashraya Architects",
    description: project?.summary ?? "Project detail for Ashraya Architects."
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const meta = [
    { label: "Sector", value: project.sector },
    { label: "Location", value: project.location },
    { label: "Status", value: project.status },
    { label: "Timeline", value: project.year },
    ...(project.area ? [{ label: "Scope", value: project.area }] : [])
  ];

  const related = projects
    .filter((item) => item.slug !== project.slug && item.cover)
    .slice(0, 3);

  return (
    <main className="subPage">
      <SiteHeader />

      {/* ---------- Hero ---------- */}
      <section className="projectStoryHero">
        <div className="storyCopy">
          <Link href="/projects" className="backLink">
            Back to projects
          </Link>
          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p className="storySummary">{project.summary}</p>
        </div>
        {project.cover ? (
          <div
            className="storyCover"
            style={{ backgroundImage: `url("${project.cover}")` }}
            role="img"
            aria-label={`${project.title} — cover view`}
          />
        ) : (
          <div className="storyCover storyCoverEmpty" aria-hidden="true">
            <span>In design — visuals to follow</span>
          </div>
        )}
      </section>

      {/* ---------- Meta strip ---------- */}
      <section className="storyMetaBand" aria-label="Project facts">
        <div className="storyMetaGrid">
          {meta.map((item) => (
            <div className="storyMetaCell" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Services ---------- */}
      {project.services.length > 0 && (
        <section className="storyServicesBand">
          <span className="filterLabel">Services provided</span>
          <div className="storyServiceChips">
            {project.services.map((service) => (
              <span className="storyServiceChip" key={service}>
                {service}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ---------- Narrative ---------- */}
      <section className="storyNarrative">
        <div className="storyNarrativeInner">
          <div className="storyNarrativeHead">
            <span className="storyNarrativeNumber">01</span>
            <p className="eyebrow">The project</p>
            <h2>Design thinking behind {project.title}.</h2>
          </div>
          <div className="storyNarrativeBody">
            {project.story.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Video ---------- */}
      {project.video && (
        <section className="storyVideo" aria-label="Project walkthrough">
          <div className="storyVideoHead">
            <span className="storyNarrativeNumber">02</span>
            <p className="eyebrow">Walkthrough</p>
            <h2>Move through the design.</h2>
          </div>
          <div className="storyVideoFrame">
            <video src={project.video} controls muted loop playsInline preload="metadata" />
          </div>
          <p className="storyVideoCaption">Walkthrough film — {project.title}</p>
        </section>
      )}

      {/* ---------- Gallery ---------- */}
      {project.images.length > 0 && (
        <section className="storyGallery" aria-label={`${project.title} images`}>
          <div className="storyGalleryHead">
            <span className="storyNarrativeNumber">{project.video ? "03" : "02"}</span>
            <p className="eyebrow">Gallery</p>
            <h2>{project.images.length} views of the project.</h2>
          </div>
          <div className="imageProcession">
            {project.images.map((image, index) => (
              <figure
                className="storyImage"
                key={`${project.slug}-${index}`}
                style={{ "--i": index } as CSSProperties}
              >
                <div style={{ backgroundImage: `url("${image.src}")` }} role="img" aria-label={image.caption} />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <em>{image.caption}</em>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ---------- Related ---------- */}
      {related.length > 0 && (
        <section className="storyRelated">
          <div className="storyRelatedHead">
            <p className="eyebrow">Continue browsing</p>
            <h2>More selected work.</h2>
          </div>
          <div className="nextProjectBand storyRelatedBand">
            {related.map((item) => (
              <Link href={`/projects/${item.slug}`} key={item.slug}>
                <span style={{ backgroundImage: `url("${item.cover}")` }} aria-hidden="true" />
                <strong>{item.title}</strong>
                <small>{item.type}</small>
                <i className="relatedArrow" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </i>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
