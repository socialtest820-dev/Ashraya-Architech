import type { Metadata } from "next";
import { Mail } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { careers, firm } from "../../data/firm";

export const metadata: Metadata = {
  title: "Careers | Ashraya Architects",
  description:
    "Explore careers at Ashraya Architects. Discover our studio culture, learning opportunities, project exposure, open roles and internship opportunities."
};

export default function CareersPage() {
  return (
    <main className="subPage">
      <SiteHeader />

      <section className="studioHero">
        <div>
          <p className="eyebrow">Careers</p>
          <h1>{careers.headline}</h1>
          <p>{careers.proposition}</p>
        </div>
      </section>

      <section className="studioGrid" aria-label="Studio culture">
        {careers.culture.map((item, index) => (
          <article className="studioBlock" key={item.title} style={{ "--reveal-index": index } as React.CSSProperties}>
            <span className="sectionNumber">{String(index + 1).padStart(2, "0")}</span>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="rolesSection" id="roles">
        <div className="sectionNumber">01</div>
        <div>
          <p className="eyebrow">Open roles</p>
          <h2>Current openings.</h2>
        </div>
        <div className="rolesList">
          {careers.roles.map((role) => (
            <details className="roleCard" key={role.title}>
              <summary>
                <span className="roleTitle">
                  <strong>{role.title}</strong>
                  <small>
                    {role.department} / {role.location} / {role.type} / {role.experience}
                  </small>
                </span>
                <span className="roleToggle" aria-hidden="true" />
              </summary>
              <div className="roleBody">
                <p>{role.summary}</p>
                <div className="roleColumns">
                  <div>
                    <span className="filterLabel">Responsibilities</span>
                    <ul>
                      {role.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="filterLabel">Requirements</span>
                    <ul>
                      {role.requirements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a href={`mailto:${firm.email}?subject=Application — ${role.title}`} className="textLink">
                  <Mail size={16} />
                  Apply for this role
                </a>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="applySection">
        <div className="sectionNumber">02</div>
        <div>
          <p className="eyebrow">How to apply</p>
          <h2>Five steps, one conversation.</h2>
        </div>
        <div className="applyColumns">
          <ol className="applySteps">
            {careers.applicationSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="applyRequirements">
            <div>
              <span className="filterLabel">Portfolio</span>
              <p>{careers.portfolioRequirements}</p>
            </div>
            <div>
              <span className="filterLabel">CV</span>
              <p>{careers.cvRequirements}</p>
            </div>
            <a href={`mailto:${firm.email}?subject=Careers Application`} className="ctaPrimary contactCta">
              <Mail size={16} />
              {firm.email}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
