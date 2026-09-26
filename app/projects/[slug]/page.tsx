import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Media from "../../../components/Media";
import ProjectGallery from "../../../components/ProjectGallery";
import { getProject, projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  return {
    title: project?.title ?? "Project",
    description: project?.summary,
    openGraph: {
      title: project?.title ?? "Project",
      description: project?.summary,
      images: project?.cover ? [project.cover] : []
    }
  };
}

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const gallery = project.images.filter((image) => image.src !== project.cover);

  return (
    <article>
      <header className="projectHead">
        <div>
          <Link href="/projects" className="textLink" data-reveal>
            <ArrowLeft /> All projects
          </Link>
          <h1 className="display" data-reveal style={d(1)}>
            {project.title}
          </h1>
        </div>
        <p className="lede" data-reveal style={d(2)}>
          {project.summary}
        </p>
      </header>

      <Media
        src={project.cover}
        alt={`${project.title} — ${project.images.find((image) => image.src === project.cover)?.caption ?? "cover view"}`}
        className="projectHero"
        priority
        natural
      />

      <section className="section wrap split">
        <div className="stickyCol">
          <dl className="metaList" data-reveal>
            <div>
              <dt>Type</dt>
              <dd>{project.type}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{project.location}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{project.year}</dd>
            </div>
            <div className="full">
              <dt>Sector</dt>
              <dd>{project.sector}</dd>
            </div>
            <div className="full">
              <dt>Scope</dt>
              <dd>{project.area}</dd>
            </div>
            <div className="full">
              <dt>Services</dt>
              <dd>{project.services.join(", ")}</dd>
            </div>
          </dl>
        </div>
        <div className="story">
          {project.story.map((paragraph, i) => (
            <p key={i} data-reveal>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {project.video && (
        <section className="videoBlock" style={{ paddingBottom: "clamp(64px, 8vw, 120px)" }}>
          <p className="eyebrow" data-reveal style={{ marginBottom: 24 }}>
            Walkthrough film
          </p>
          <video src={project.video} controls muted playsInline preload="metadata" poster={project.cover} data-reveal />
        </section>
      )}

      {gallery.length > 0 && <ProjectGallery images={gallery} title={project.title} />}

      <div style={{ height: "clamp(88px, 12vw, 176px)" }} />

      <Link href={`/projects/${next.slug}`} className={next.cover ? "nextProject" : "nextProject noImage"}>
        {next.cover && <Media src={next.cover} alt="" reveal={false} parallax />}
        <div className="nextCopy">
          <div>
            <p className="eyebrow">Next project</p>
            <h2 className="display" style={{ marginTop: 18 }}>
              {next.title}
            </h2>
          </div>
          <span className="textLink" style={{ color: "#fff" }}>
            {next.type} <ArrowRight />
          </span>
        </div>
      </Link>
    </article>
  );
}
