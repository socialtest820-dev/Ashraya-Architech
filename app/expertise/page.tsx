import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { expertise, sectorSummary } from "../../data/firm";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Expertise | Ashraya Architects",
  description:
    "Architecture, interiors, urban design, master planning, documentation and visualization — integrated design capability from Ashraya Architects."
};

const featuredBySlug: Record<string, string[]> = {
  architecture: ["nilkanth-skyline", "valsad-bungalow", "the-empire"],
  "interior-design": ["valsad-bungalow", "uttam-bungalow"],
  "urban-design": ["swarnbhumi"],
  "master-planning": ["swarnbhumi", "tithal-farmhouse"],
  "design-consultancy": ["the-empire", "tithal-farmhouse"],
  "tendering-documentation": ["valsad-bungalow", "uttam-bungalow"],
  visualization: ["nilkanth-skyline", "the-empire", "swarnbhumi"],
  "product-design": []
};

export default function ExpertisePage() {
  return (
    <main className="expertise-page-container">
      <SiteHeader />

      <section className="expertise-hero">
        <p className="eyebrow">Expertise</p>
        <h1>One integrated journey from brief to building.</h1>
        <p className="hero-desc">
          Each discipline is part of a single project journey. Services are shaped around the
          client brief, site, programme, budget, project stage and desired outcome — so design
          intent remains consistent from early ideas through decision-making and execution
          support.
        </p>
      </section>

      <section className="expertise-blocks-wrapper">
        {expertise.map((item, index) => {
          const related = (featuredBySlug[item.slug] ?? [])
            .map((slug) => projects.find((project) => project.slug === slug))
            .filter((project): project is NonNullable<typeof project> => Boolean(project?.cover));

          return (
            <section className="expertise-block" id={item.slug} key={item.slug}>
              <div className="expertise-grid-layout">
                {/* LEFT COLUMN: Text and Lists */}
                <div className="expertise-left-col">
                  <div className="expertise-header-group">
                    <span className="expertise-num">{String(index + 1).padStart(2, "0")}</span>
                    <div className="expertise-title-area">
                      <p className="eyebrow">{item.proposition}</p>
                      <h2>{item.name}</h2>
                      <p className="expertise-overview">{item.overview}</p>
                    </div>
                  </div>
                  <div className="expertise-details-group">
                    <div className="expertise-list-col">
                      <span className="expertise-label">Sub-services</span>
                      <ul>
                        {item.subServices.map((sub) => (
                          <li key={sub}>{sub}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="expertise-list-col">
                      <span className="expertise-label">Typical deliverables</span>
                      <ul>
                        {item.deliverables.map((deliverable) => (
                          <li key={deliverable}>{deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Project Images */}
                <div className="expertise-right-col">
                  {related.length > 0 && (
                    <div className="expertise-project-list">
                      {related.map((project) => (
                        <Link href={`/projects/${project.slug}`} key={project.slug} className="expertise-card">
                          <span
                            className="expertise-image"
                            style={{ backgroundImage: `url("${project.cover}")` }}
                            aria-hidden="true"
                          />
                          <strong className="expertise-card-title">{project.title}</strong>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </section>

      <section className="expertise-sector-band">
        <p className="expertise-label" style={{textAlign: "center", marginBottom: "0"}}>Sectors we serve</p>
        <div className="expertise-sector-list">
          {sectorSummary.map((sector) => (
            <span key={sector} className="expertise-sector-badge">{sector}</span>
          ))}
        </div>
      </section>

      <section className="expertise-footer-cta">
        <h2>Tell us the brief, site and stage — we will respond with a clear next step.</h2>
        <Link href="/contact" className="ctaPrimary">
          Start a project
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
