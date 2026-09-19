"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { projects, sectors, projectStatuses } from "../../data/projects";

type FilterKey = "all" | "featured" | "sector" | "status";

export default function ProjectsPage() {
  const [sectorFilter, setSectorFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filtered = useMemo(
    () =>
      projects.filter((project) => {
        if (featuredOnly && !project.featured) return false;
        if (sectorFilter !== "All" && project.sector !== sectorFilter) return false;
        if (statusFilter !== "All" && project.status !== statusFilter) return false;
        return true;
      }),
    [sectorFilter, statusFilter, featuredOnly]
  );

  const heroCover = projects[0]?.cover ?? "";
  const hasFilters = sectorFilter !== "All" || statusFilter !== "All" || featuredOnly;

  return (
    <main className="subPage">
      <SiteHeader />

      <section className="archiveHero">
        {heroCover && (
          <span
            className="archiveHeroBackdrop"
            style={{ backgroundImage: `url("${heroCover}")` }}
            aria-hidden="true"
          />
        )}
        <div className="archiveHeroLead">
          <p className="eyebrow">Work</p>
          <h1>Selected projects across sectors and scales.</h1>
          <p>
            Explore selected work across architecture, interiors, commercial and corporate projects,
            urban design and related disciplines — showing both completed outcomes and the design
            thinking behind them.
          </p>
        </div>
      </section>

      <section className="filterBar" aria-label="Project filters">
        <div className="filterGroup">
          <span className="filterLabel">Sector</span>
          <div className="filterChips">
            {["All", ...sectors].map((sector) => (
              <button
                key={sector}
                className={sectorFilter === sector ? "chip isActive" : "chip"}
                onClick={() => setSectorFilter(sector)}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
        <div className="filterGroup">
          <span className="filterLabel">Status</span>
          <div className="filterChips">
            {["All", ...projectStatuses].map((status) => (
              <button
                key={status}
                className={statusFilter === status ? "chip isActive" : "chip"}
                onClick={() => setStatusFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
        <div className="filterGroup">
          <button
            className={featuredOnly ? "chip isActive" : "chip"}
            onClick={() => setFeaturedOnly((value) => !value)}
          >
            Featured only
          </button>
          {hasFilters && (
            <button
              className="chip chipReset"
              onClick={() => {
                setSectorFilter("All");
                setStatusFilter("All");
                setFeaturedOnly(false);
              }}
            >
              Reset
            </button>
          )}
        </div>
      </section>

      <section className="projectArchive" aria-label="All projects">
        {filtered.map((project, index) => (
          <Link href={`/projects/${project.slug}`} className="projectArchiveCard" key={project.slug}>
            <div className="archiveStack" aria-hidden="true">
              {project.cover ? (
                project.images.slice(0, 3).map((image, imageIndex) => (
                  <span
                    key={`${project.slug}-${imageIndex}`}
                    style={{
                      backgroundImage: `url("${image.src}")`,
                      transform: `translate(${imageIndex * 22}px, ${imageIndex * 18}px) rotate(${(imageIndex - 1) * 4}deg)`
                    }}
                  />
                ))
              ) : (
                <span className="archiveStackPlaceholder">In design</span>
              )}
            </div>
            <div className="archiveInfo">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <small>
                {project.sector} / {project.location} / {project.status}
              </small>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="archiveEmpty">No projects match this filter combination yet.</p>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
