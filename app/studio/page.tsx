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

      <section className="studioHero">
        <div>
          <p className="eyebrow">Studio</p>
          <h1>From vision to built reality.</h1>
          <p>{firm.intro100}</p>
        </div>
      </section>

      <section className="studioBand" aria-label="Corporate facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
      </section>

      <section className="storySection" id="story">
        <div className="sectionNumber">01</div>
        <div>
          <p className="eyebrow">Our story</p>
          <h2>Shelter, belonging and identity — the idea behind the name.</h2>
        </div>
        <div className="storySectionCopy">
          {story.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="storyTimeline">
            {timeline.map((item) => (
              <div key={item.year} className="timelineRow">
                <strong>{item.year}</strong>
                <p>{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vmSection" id="vision">
        <div className="vmBlock">
          <p className="eyebrow">Vision</p>
          <p>{firm.vision}</p>
        </div>
        <div className="vmBlock">
          <p className="eyebrow">Mission</p>
          <p>{firm.mission}</p>
        </div>
        <div className="vmBlock">
          <p className="eyebrow">Purpose</p>
          <p>{firm.purpose}</p>
        </div>
      </section>

      <section className="valuesSection" id="values">
        <div className="sectionNumber">02</div>
        <div>
          <p className="eyebrow">Core values</p>
          <h2>Six values that shape how we work.</h2>
        </div>
        <div className="valuesGrid">
          {values.map((value) => (
            <article className="valueBlock" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
        <div className="principlesRow">
          <span className="filterLabel">Design principles</span>
          <div className="filterChips">
            {designPrinciples.map((principle) => (
              <span className="chip" key={principle}>
                {principle}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophySection">
        <div className="sectionNumber">03</div>
        <div>
          <p className="eyebrow">Design philosophy</p>
          <h2>Purposeful, contextual and buildable.</h2>
          <p className="philosophyCopy">{firm.designPhilosophy}</p>
        </div>
        <div className="whyGrid whyGridNarrow">
          {differentiators.slice(0, 4).map((item) => (
            <article className="whyBlock" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="processSection" id="process">
        <div className="sectionNumber">04</div>
        <div>
          <p className="eyebrow">How we work</p>
          <h2>A disciplined process from discovery to handover.</h2>
          <p>
            Not every commission uses every stage — service scope, procurement route and client
            requirements set the sequence. Formal approval points keep decisions predictable at
            every gate.
          </p>
        </div>
        <div className="processList">
          {process.map((stage) => (
            <div className="processRow" key={stage.stage}>
              <span className="processStage">{stage.stage}</span>
              <strong>{stage.title}</strong>
              <p>{stage.copy}</p>
              <small>{stage.output}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="peopleSection" id="people">
        <div className="sectionNumber">05</div>
        <div>
          <p className="eyebrow">People</p>
          <h2>Leadership.</h2>
        </div>
        <div className="peopleGrid">
          {people.map((person) => (
            <article className="personCard" key={person.name}>
              <div className="personMonogram" aria-hidden="true">
                {person.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h3>{person.name}</h3>
              <small>{person.role}</small>
              <p>{person.bio}</p>
              <div className="filterChips">
                {person.focus.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contactSection studioContact">
        <p className="eyebrow">Begin a project</p>
        <h2>Share your site, programme and timeline — we will respond with a clear next step.</h2>
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
