import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
    <main className="subPage">
      <SiteHeader />

      <section className="archiveHero">
        <div className="archiveHeroLead">
          <p className="eyebrow">Expertise</p>
          <h1>One integrated journey from brief to building.</h1>
          <p>
            Each discipline is part of a single project journey. Services are shaped around the
            client brief, site, programme, budget, project stage and desired outcome — so design
            intent remains consistent from early ideas through decision-making and execution
            support.
          </p>
        </div>
      </section>

      <section className="expertiseSections">
        {expertise.map((item, index) => {
          const related = (featuredBySlug[item.slug] ?? [])
            .map((slug) => projects.find((project) => project.slug === slug))
            .filter((project): project is NonNullable<typeof project> => Boolean(project?.cover));

          return (
            <section className="expertiseSection" id={item.slug} key={item.slug}>
              <div className="expertiseSectionHead">
                <span className="sectionNumber">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="eyebrow">{item.proposition}</p>
                  <h2>{item.name}</h2>
                  <p className="expertiseOverview">{item.overview}</p>
                </div>
              </div>
              <div className="expertiseSectionBody">
                <div>
                  <span className="filterLabel">Sub-services</span>
                  <ul>
                    {item.subServices.map((sub) => (
                      <li key={sub}>{sub}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="filterLabel">Typical deliverables</span>
                  <ul>
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
                {related.length > 0 && (
                  <div>
                    <span className="filterLabel">Selected projects</span>
                    <div className="expertiseProjects">
                      {related.map((project) => (
                        <Link href={`/projects/${project.slug}`} key={project.slug}>
                          <span
                            style={{ backgroundImage: `url("${project.cover}")` }}
                            aria-hidden="true"
                          />
                          <strong>{project.title}</strong>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </section>

      <section className="homeSectors" aria-label="Sectors">
        <p className="eyebrow">Sectors we serve</p>
        <div className="sectorChips">
          {sectorSummary.map((sector) => (
            <Link key={sector} href="/projects" className="sectorChip">
              {sector}
            </Link>
          ))}
        </div>
      </section>

      <section className="contactSection studioContact">
        <p className="eyebrow">Discuss a project</p>
        <h2>Tell us the brief, site and stage — we will respond with a clear next step.</h2>
        <Link href="/contact#start-a-project" className="ctaPrimary contactCta">
          Start a Project
          <ArrowUpRight size={17} />
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
