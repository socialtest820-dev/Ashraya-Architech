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

      <section className="archiveHero">
        <div className="archiveHeroLead">
          <p className="eyebrow">Careers</p>
          <h1>{careers.headline}</h1>
          <p style={{ marginTop: "24px", maxWidth: "800px", fontSize: "clamp(16px, 1.5vw, 20px)" }}>
            {careers.proposition}
          </p>
        </div>
      </section>

      <div className="studio-blocks-wrapper">
        <section className="studio-block">
          <div className="studio-grid-layout">
            <div className="studio-left-col">
              <span className="studio-num">01</span>
              <p className="eyebrow">Studio culture</p>
              <h2>How we work together.</h2>
            </div>
            <div className="studio-right-col">
              <div className="values-grid">
                {careers.culture.map((item) => (
                  <article className="value-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="studio-block" id="roles">
          <div className="studio-grid-layout">
            <div className="studio-left-col">
              <span className="studio-num">02</span>
              <p className="eyebrow">Open roles</p>
              <h2>Current openings.</h2>
            </div>
            <div className="studio-right-col">
              <div className="roles-accordion">
                {careers.roles.map((role) => (
                  <details className="role-card-modern" key={role.title}>
                    <summary className="role-summary-modern">
                      <div className="role-summary-content">
                        <strong>{role.title}</strong>
                        <span className="expertise-label" style={{ marginBottom: 0, marginTop: "8px", fontSize: "10px" }}>
                          {role.department} / {role.location} / {role.type} / {role.experience}
                        </span>
                      </div>
                      <span className="role-icon-plus">+</span>
                    </summary>
                    <div className="role-body-modern">
                      <p className="role-summary-text">{role.summary}</p>
                      <div className="role-columns-grid">
                        <div>
                          <span className="expertise-label">Responsibilities</span>
                          <ul>
                            {role.responsibilities.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="expertise-label">Requirements</span>
                          <ul>
                            {role.requirements.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <a href={`mailto:${firm.email}?subject=Application — ${role.title}`} className="ctaGhost" style={{ background: "var(--ink)", color: "#fff", border: "none", marginTop: "32px", width: "fit-content" }}>
                        <Mail size={16} />
                        Apply for this role
                      </a>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="studio-block" style={{ borderBottom: "none" }}>
          <div className="studio-grid-layout">
            <div className="studio-left-col">
              <span className="studio-num">03</span>
              <p className="eyebrow">How to apply</p>
              <h2>Five steps, one conversation.</h2>
            </div>
            <div className="studio-right-col">
              <div className="apply-columns-modern">
                <ol className="apply-steps-modern">
                  {careers.applicationSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
                <div className="apply-requirements-modern">
                  <div className="req-block">
                    <span className="expertise-label">Portfolio</span>
                    <p>{careers.portfolioRequirements}</p>
                  </div>
                  <div className="req-block">
                    <span className="expertise-label">CV</span>
                    <p>{careers.cvRequirements}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
