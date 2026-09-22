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
          <p style={{ marginTop: "24px", maxWidth: "800px", fontSize: "clamp(16px, 1.5vw, 20px)" }}>
            Explore selected work across architecture, interiors, commercial and corporate projects,
            urban design and related disciplines — showing both completed outcomes and the design
            thinking behind them.
          </p>
        </div>
      </section>

      <section className="projects-filter-bar">
        <div className="filterGroup">
          <span className="expertise-label">Sector</span>
          <div className="expertise-sector-list" style={{ justifyContent: "flex-start", marginTop: "12px", gap: "8px" }}>
            {["All", ...sectors].map((sector) => (
              <button
                key={sector}
                className={sectorFilter === sector ? "expertise-sector-badge active" : "expertise-sector-badge"}
                onClick={() => setSectorFilter(sector)}
                style={{ cursor: "pointer", background: sectorFilter === sector ? "var(--ink)" : "transparent", color: sectorFilter === sector ? "#fff" : "var(--ink)" }}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
        
        <div className="filter-group-row">
          <div className="filterGroup">
            <span className="expertise-label">Status</span>
            <div className="expertise-sector-list" style={{ justifyContent: "flex-start", marginTop: "12px", gap: "8px" }}>
              {["All", ...projectStatuses].map((status) => (
                <button
                  key={status}
                  className={statusFilter === status ? "expertise-sector-badge active" : "expertise-sector-badge"}
                  onClick={() => setStatusFilter(status)}
                  style={{ cursor: "pointer", background: statusFilter === status ? "var(--ink)" : "transparent", color: statusFilter === status ? "#fff" : "var(--ink)" }}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
          <div className="filterGroup" style={{ alignSelf: "flex-end", marginBottom: "4px" }}>
            <button
              className={featuredOnly ? "expertise-sector-badge active" : "expertise-sector-badge"}
              onClick={() => setFeaturedOnly((value) => !value)}
              style={{ cursor: "pointer", background: featuredOnly ? "var(--ink)" : "transparent", color: featuredOnly ? "#fff" : "var(--ink)" }}
            >
              Featured only
            </button>
            {hasFilters && (
              <button
                className="expertise-sector-badge reset"
                onClick={() => {
                  setSectorFilter("All");
                  setStatusFilter("All");
                  setFeaturedOnly(false);
                }}
                style={{ cursor: "pointer", border: "1px solid transparent", marginLeft: "12px" }}
              >
                Reset filters
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="projects-grid-wrapper">
        <div className="projects-grid">
          {filtered.map((project, index) => (
            <Link href={`/projects/${project.slug}`} className="project-card" key={project.slug}>
              <div className="project-card-image" style={{ backgroundImage: `url("${project.cover}")` }}>
                {!project.cover && <span className="project-placeholder">In design</span>}
              </div>
              <div className="project-card-content">
                <span className="expertise-label" style={{ marginBottom: "12px" }}>
                  {String(index + 1).padStart(2, "0")} / {project.sector}
                </span>
                <h2 className="project-card-title">{project.title}</h2>
                <p className="project-card-excerpt">{project.summary}</p>
                <small className="project-card-meta">
                  {project.location} / {project.status}
                </small>
              </div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="archiveEmpty" style={{ padding: "100px 5vw", textAlign: "center", color: "var(--muted)" }}>
              No projects match this filter combination yet.
            </p>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
