import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../../components/PageIntro";
import Media from "../../components/Media";
import { careers, firm } from "../../data/firm";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles and internships at Ashraya Architects, Surat."
};

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

export default function CareersPage() {
  return (
    <>
      <PageIntro eyebrow="Careers" title={careers.headline} lede={careers.proposition} />

      <Media
        src="/assets/projects/skyline-09.jpg"
        alt="Fitness studio at Nilkanth Skyline"
        className="pageHero"
        parallax
        priority
      />

      <section className="section wrap">
        <div className="sectionHead">
          <div>
            <p className="eyebrow" data-reveal>
              Studio Culture
            </p>
            <h2 className="h2" data-reveal style={d(1)}>
              Learning through real responsibility.
            </h2>
          </div>
        </div>
        <div className="textGrid two">
          {careers.culture.map((item, index) => (
            <div key={item.title} data-reveal style={d(index % 2)}>
              <h3 className="h3">{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section calm wrap">
        <div className="sectionHead">
          <div>
            <p className="eyebrow" data-reveal>
              Open Positions
            </p>
            <h2 className="h2" data-reveal style={d(1)}>
              Current roles in Surat.
            </h2>
          </div>
        </div>
        <div className="accordion" style={{ borderColor: "var(--stone)" }}>
          {careers.roles.map((role) => (
            <details key={role.title} data-reveal style={{ borderColor: "var(--stone)" }}>
              <summary>
                <span className="title">{role.title}</span>
                <span className="aside">
                  {role.type} · {role.experience}
                </span>
                <span className="plus" aria-hidden="true" />
              </summary>
              <div className="accordionBody">
                <div>
                  <p className="lede">{role.summary}</p>
                  <p className="small">
                    {role.department} · {role.location}
                  </p>
                  <a
                    className="button"
                    style={{ marginTop: 28 }}
                    href={`mailto:${firm.email}?subject=${encodeURIComponent(`Application — ${role.title}`)}`}
                  >
                    Apply for this role <ArrowUpRight size={16} />
                  </a>
                </div>
                <div>
                  <div className="listBlock">
                    <h4>Responsibilities</h4>
                    <ul>
                      {role.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="listBlock">
                    <h4>Requirements</h4>
                    <ul>
                      {role.requirements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section wrap split">
        <div className="stickyCol">
          <p className="eyebrow" data-reveal>
            How to Apply
          </p>
          <h2 className="h2" data-reveal style={{ ...d(1), marginTop: 20 }}>
            Five simple steps.
          </h2>
        </div>
        <div>
          <ol className="processList">
            {careers.applicationSteps.map((step, index) => (
              <li className="processItem" key={step} data-reveal style={{ gridTemplateColumns: "72px minmax(0, 1fr)" }}>
                <span className="stage">{String(index + 1).padStart(2, "0")}</span>
                <p style={{ fontSize: 17 }}>{step}</p>
              </li>
            ))}
          </ol>
          <div className="textGrid two" style={{ marginTop: 56 }}>
            <div data-reveal>
              <h3 className="h3">Portfolio</h3>
              <p>{careers.portfolioRequirements}</p>
            </div>
            <div data-reveal style={d(1)}>
              <h3 className="h3">CV</h3>
              <p>{careers.cvRequirements}</p>
            </div>
          </div>
          <a
            className="button"
            style={{ marginTop: 40 }}
            href={`mailto:${firm.email}?subject=${encodeURIComponent("Application — Ashraya Architects")}`}
            data-reveal
          >
            Send your application <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
