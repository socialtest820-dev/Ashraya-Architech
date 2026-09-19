import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProjectRail from "../components/ProjectRail";
import { projects } from "../data/projects";
import {
  expertise,
  facts,
  differentiators,
  insights,
  firm,
  careers,
  sectorSummary
} from "../data/firm";

export const metadata: Metadata = {
  title: "Ashraya Architects | Architecture & Design Practice",
  description:
    "Ashraya Architects is a multidisciplinary architecture and design practice working across architecture, interiors, commercial projects, urban design and visualization."
};

const heroProject = projects.find((project) => project.slug === "nilkanth-skyline") ?? projects[0];

export default function Home() {
  const latestInsights = insights.slice(0, 3);

  return (
    <main>
      <SiteHeader />

      <section className="homeHeroNew">
        <div
          className="heroMedia"
          style={{ backgroundImage: `url("${heroProject.cover}")` }}
          aria-hidden="true"
        />
        <div className="heroMediaVeil" aria-hidden="true" />
        <div className="heroContent">
          <p className="eyebrow">Multidisciplinary architecture & design — Surat, Gujarat</p>
          <h1>{firm.heroHeadline}</h1>
          <p className="heroSupport">{firm.heroSupport}</p>
          <div className="heroActions">
            <Link href="/projects" className="ctaPrimary">
              Explore Our Work
              <ArrowUpRight size={17} />
            </Link>
            <Link href="/contact#start-a-project" className="ctaGhost">
              Start a Project
            </Link>
          </div>
        </div>
        <div className="heroFootline">
          <span>{firm.tagline}</span>
          <span>Est. {firm.founded}</span>
        </div>
      </section>

      <section className="indexBand" aria-label="Practice at a glance">
        <Link href="/projects">
          <strong>{projects.length}</strong>
          <span>Launch projects</span>
        </Link>
        <Link href="/projects?filter=ongoing">
          <strong>10</strong>
          <span>Ongoing projects</span>
        </Link>
        <Link href="/studio">
          <strong>{expertise.length}</strong>
          <span>Disciplines</span>
        </Link>
        <Link href="/studio#people">
          <strong>2</strong>
          <span>Co-founders</span>
        </Link>
      </section>

      <section className="homeIntro">
        <div className="sectionNumber">01</div>
        <div>
          <p className="eyebrow">The practice</p>
          <h2>One vision. Multiple disciplines. Meaningful impact.</h2>
        </div>
        <div className="homeIntroCopy">
          <p>{firm.intro50}</p>
          <Link href="/studio" className="textLink">
            About the studio
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <div id="work">
        <ProjectRail />
      </div>

      <section className="homeExpertise" id="expertise">
        <div className="homeExpertiseHead">
          <p className="eyebrow">Expertise</p>
          <h2>Integrated capability from first study to final detail.</h2>
          <p>
            Services are shaped around the client brief, site, programme and budget — with design
            intent kept consistent from early ideas through documentation and execution support.
          </p>
        </div>
        <div className="expertiseList">
          {expertise.map((item) => (
            <Link href={`/expertise#${item.slug}`} className="expertiseRow" key={item.slug}>
              <span className="expertiseIndex">{String(expertise.indexOf(item) + 1).padStart(2, "0")}</span>
              <strong>{item.name}</strong>
              <span className="expertiseShort">{item.short}</span>
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </div>
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

      <section className="homeWhy">
        <div className="sectionNumber">02</div>
        <div>
          <p className="eyebrow">Why Ashraya</p>
          <h2>What clients can rely on, stated plainly.</h2>
        </div>
        <div className="whyGrid">
          {differentiators.map((item, index) => (
            <article className="whyBlock" key={item.title} style={{ "--reveal-index": index } as React.CSSProperties}>
              <span className="whyIndex">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="homeFacts" aria-label="Firm facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
      </section>

      <section className="homeInsights">
        <div className="homeInsightsHead">
          <div>
            <p className="eyebrow">Insights</p>
            <h2>Design thinking, in the open.</h2>
          </div>
          <Link href="/insights" className="textLink">
            All insights
            <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="insightGrid">
          {latestInsights.map((insight) => (
            <Link href={`/insights/${insight.slug}`} className="insightCard" key={insight.slug}>
              <span
                className="insightCover"
                style={{ backgroundImage: `url("${insight.cover}")` }}
                aria-hidden="true"
              />
              <span className="insightMeta">
                <small>
                  {insight.category} / {insight.readingTime}
                </small>
                <strong>{insight.title}</strong>
                <p>{insight.excerpt}</p>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="homeCareers">
        <div>
          <p className="eyebrow">Careers</p>
          <h2>{careers.headline}</h2>
          <p>{careers.proposition}</p>
        </div>
        <Link href="/careers" className="textLink">
          View open roles
          <ArrowUpRight size={17} />
        </Link>
      </section>

      <section id="contact" className="contactSection">
        <p className="eyebrow">Begin a project</p>
        <h2>Have a project, collaboration or idea to discuss? Start a conversation with Ashraya Architects.</h2>
        <div className="contactActions">
          <Link href="/contact#start-a-project" className="ctaPrimary">
            Start a Project
            <ArrowUpRight size={17} />
          </Link>
          <a href={`mailto:${firm.email}`} className="ctaGhost">
            <Mail size={17} />
            {firm.email}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
