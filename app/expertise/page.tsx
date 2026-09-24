import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageIntro from "../../components/PageIntro";
import Media from "../../components/Media";
import { expertise, sectorSummary, differentiators, process } from "../../data/firm";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Architecture, interior design, urban design, master planning, feasibility, tendering and documentation, visualization and product design."
};

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

export default function ExpertisePage() {
  return (
    <>
      <PageIntro
        eyebrow="Expertise"
        title="Eight disciplines, one design leadership."
        lede="Architecture, interiors, planning, visualization and documentation are held together by one team — so ideas stay consistent from the first sketch to the site."
      />

      <Media
        src="/assets/projects/swarnbhumi-07.jpg"
        alt="Aerial view of the Swarnbhumi township plan"
        className="pageHero"
        parallax
        priority
      />

      <section className="section wrap">
        <div className="accordion">
          {expertise.map((item, index) => (
            <details key={item.slug} id={item.slug} open={index === 0} data-reveal>
              <summary>
                <span className="title">{item.name}</span>
                <span className="aside">{item.short}</span>
                <span className="plus" aria-hidden="true" />
              </summary>
              <div className="accordionBody">
                <div>
                  <p className="lede">{item.proposition}</p>
                  <p className="body">{item.overview}</p>
                </div>
                <div>
                  <div className="listBlock">
                    <h4>Services</h4>
                    <ul>
                      {item.subServices.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="listBlock">
                    <h4>Deliverables</h4>
                    <ul>
                      {item.deliverables.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section calm wrap">
        <div className="sectionHead">
          <div>
            <p className="eyebrow" data-reveal>
              Why Ashraya
            </p>
            <h2 className="h2" data-reveal style={d(1)}>
              What sets the practice apart.
            </h2>
          </div>
        </div>
        <div className="textGrid">
          {differentiators.map((item, index) => (
            <div key={item.title} data-reveal style={d(index % 3)}>
              <h3 className="h3">{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <div className="split">
          <div className="stickyCol">
            <p className="eyebrow" data-reveal>
              Process
            </p>
            <h2 className="h2" data-reveal style={{ ...d(1), marginTop: 20 }}>
              Eleven stages, clear approval points.
            </h2>
          </div>
          <ol className="processList">
            {process.map((step) => (
              <li className="processItem" key={step.stage} data-reveal>
                <span className="stage">{step.stage}</span>
                <h3 className="h3">{step.title}</h3>
                <p>{step.copy}</p>
                <span className="out">{step.output}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tight wrap" style={{ paddingTop: 0 }}>
        <div className="split">
          <p className="eyebrow" data-reveal>
            Sectors
          </p>
          <div>
            <ul className="pillList" data-reveal>
              {sectorSummary.map((sector) => (
                <li key={sector}>{sector}</li>
              ))}
            </ul>
            <Link href="/projects" className="textLink" style={{ marginTop: 40 }} data-reveal>
              See the projects <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
