import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import {
  firm,
  story,
  values,
  designPrinciples,
  differentiators,
  facts,
  people,
  timeline,
  process
} from "../../data/firm";

export const metadata: Metadata = {
  title: "Studio | Ashraya Architects",
  description:
    "Learn about Ashraya Architects, our multidisciplinary design approach, values, process and ambition to connect design thinking with reliable project delivery."
};

export default function StudioPage() {
  return (
    <main className="subPage">
      <SiteHeader />

      <section className="archiveHero">
        <div className="archiveHeroLead">
          <p className="eyebrow">Studio</p>
          <h1>From vision to built reality.</h1>
          <p style={{ marginTop: "24px", maxWidth: "800px", fontSize: "clamp(16px, 1.5vw, 20px)" }}>
            {firm.intro100}
          </p>
        </div>
      </section>

      <section className="studio-metrics-band">
        <div className="studio-metrics-grid">
          {facts.map((fact) => (
            <div key={fact.label} className="studio-metric">
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="studio-blocks-wrapper">
        <section className="studio-block" id="story">
          <div className="studio-grid-layout">
            <div className="studio-left-col">
              <span className="studio-num">01</span>
              <p className="eyebrow">Our story</p>
              <h2>Shelter, belonging and identity — the idea behind the name.</h2>
            </div>
            <div className="studio-right-col">
              <div className="story-paragraphs">
                {story.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="story-timeline">
                {timeline.map((item) => (
                  <div key={item.year} className="timeline-row">
                    <strong>{item.year}</strong>
                    <p>{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="studio-block" id="vision">
          <div className="studio-grid-layout">
            <div className="studio-left-col">
              <span className="studio-num">02</span>
              <h2>Vision, Mission & Purpose</h2>
            </div>
            <div className="studio-right-col">
              <div className="vmp-grid">
                <div className="vmp-block">
                  <p className="eyebrow">Vision</p>
                  <p>{firm.vision}</p>
                </div>
                <div className="vmp-block">
                  <p className="eyebrow">Mission</p>
                  <p>{firm.mission}</p>
                </div>
                <div className="vmp-block">
                  <p className="eyebrow">Purpose</p>
                  <p>{firm.purpose}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="studio-block" id="values">
          <div className="studio-grid-layout">
            <div className="studio-left-col">
              <span className="studio-num">03</span>
              <p className="eyebrow">Core values</p>
              <h2>Six values that shape how we work.</h2>
            </div>
            <div className="studio-right-col">
              <div className="values-grid">
                {values.map((value) => (
                  <article className="value-card" key={value.title}>
                    <h3>{value.title}</h3>
                    <p>{value.copy}</p>
                  </article>
                ))}
              </div>
              <div className="principles-row">
                <span className="expertise-label">Design principles</span>
                <div className="expertise-sector-list" style={{ justifyContent: "flex-start", marginTop: "12px" }}>
                  {designPrinciples.map((principle) => (
                    <span className="expertise-sector-badge" key={principle}>
                      {principle}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="studio-block" id="philosophy">
          <div className="studio-grid-layout">
            <div className="studio-left-col">
              <span className="studio-num">04</span>
              <p className="eyebrow">Design philosophy</p>
              <h2>Purposeful, contextual and buildable.</h2>
              <p className="studio-desc">{firm.designPhilosophy}</p>
            </div>
            <div className="studio-right-col">
              <div className="values-grid">
                {differentiators.slice(0, 4).map((item) => (
                  <article className="value-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="studio-block" id="process">
          <div className="studio-grid-layout">
            <div className="studio-left-col">
              <span className="studio-num">05</span>
              <p className="eyebrow">How we work</p>
              <h2>A disciplined process from discovery to handover.</h2>
              <p className="studio-desc">
                Not every commission uses every stage — service scope, procurement route and client
                requirements set the sequence. Formal approval points keep decisions predictable at
                every gate.
              </p>
            </div>
            <div className="studio-right-col">
              <div className="process-list">
                {process.map((stage) => (
                  <div className="process-row" key={stage.stage}>
                    <span className="process-stage-num">{stage.stage}</span>
                    <div className="process-content">
                      <strong>{stage.title}</strong>
                      <p>{stage.copy}</p>
                      <small className="expertise-label" style={{ marginTop: "12px" }}>Output: {stage.output}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="studio-block" id="people">
          <div className="studio-grid-layout">
            <div className="studio-left-col">
              <span className="studio-num">06</span>
              <p className="eyebrow">People</p>
              <h2>Leadership.</h2>
            </div>
            <div className="studio-right-col">
              <div className="people-grid">
                {people.map((person) => (
                  <article className="person-card" key={person.name}>
                    <div className="person-monogram" aria-hidden="true">
                      {person.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <h3>{person.name}</h3>
                    <small className="expertise-label" style={{ marginTop: "8px", marginBottom: "16px" }}>{person.role}</small>
                    <p>{person.bio}</p>
                    <div className="expertise-sector-list" style={{ justifyContent: "flex-start", marginTop: "24px" }}>
                      {person.focus.map((item) => (
                        <span className="expertise-sector-badge" key={item} style={{ fontSize: "11px", padding: "8px 16px" }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="expertise-footer-cta">
        <p className="eyebrow">Begin a project</p>
        <h2>Share your site, programme and timeline — we will respond with a clear next step.</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/contact#start-a-project" className="ctaPrimary">
            Start a Project
            <ArrowUpRight size={17} style={{ marginLeft: "8px" }} />
          </Link>
          <a href={`mailto:${firm.email}`} className="ctaGhost">
            <Mail size={17} style={{ marginRight: "8px" }} />
            {firm.email}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
