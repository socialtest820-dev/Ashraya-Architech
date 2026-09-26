"use client";

import { useState } from "react";
import Link from "next/link";
import Media from "./Media";
import { projects, sectors } from "../data/projects";

export default function ProjectArchive() {
  const [filter, setFilter] = useState("All");
  const options = ["All", ...sectors.filter((sector) => projects.some((project) => project.sector === sector))];
  const list = filter === "All" ? projects : projects.filter((project) => project.sector === filter);

  return (
    <section className="wrap" style={{ paddingBottom: "clamp(88px, 12vw, 176px)" }}>
      <div className="filterBar" role="group" aria-label="Filter projects by sector">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={filter === option ? "isActive" : ""}
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
          >
            {option}
            <sup>{option === "All" ? projects.length : projects.filter((p) => p.sector === option).length}</sup>
          </button>
        ))}
      </div>

      <div className="projectGrid" key={filter}>
        {list.map((project, index) => {
          return (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className={`projectCard fadeSwap${project.cover ? "" : " isPending"}`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <Media
                src={project.cover}
                alt={project.title}
                sizes="(max-width: 860px) 100vw, 50vw"
                parallax={false}
              />
              <div className="projectCardInfo">
                <div>
                  <h2 className="h3">{project.title}</h2>
                  <p>
                    {project.type} · {project.location}
                  </p>
                </div>
                <span className="status" data-status={project.status}>
                {project.status}
              </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
