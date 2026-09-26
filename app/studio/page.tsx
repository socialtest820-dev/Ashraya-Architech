import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageIntro from "../../components/PageIntro";
import Media from "../../components/Media";
import { firm, story, values, designPrinciples, facts, people, timeline, sustainability, technology } from "../../data/firm";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Learn about Ashraya Architects, our multidisciplinary design approach, values, process and ambition to connect design thinking with reliable project delivery."
};

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export default function StudioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Studio"
        title="Architecture that responds to people, place and purpose."
        lede={firm.positioning}
      />

      <Media
        src="/assets/projects/skyline-12.jpg"
        alt="Double-height entrance lobby at Nilkanth Skyline"
        className="pageHero"
        parallax
        priority
      />

      <section className="section wrap split">
        <div className="stickyCol">
          <p className="eyebrow" data-reveal>
            Our Story
          </p>
          <h2 className="h2" data-reveal style={{ ...d(1), marginTop: 20 }}>
            Shelter, belonging and identity.
          </h2>
        </div>
        <div className="story">
          {story.slice(0, -1).map((paragraph, index) => (
            <p key={index} data-reveal>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="section calm wrap">
        <div className="textGrid">
          {[
            { title: "Vision", copy: firm.vision },
            { title: "Mission", copy: firm.mission },
            { title: "Purpose", copy: firm.purpose }
          ].map((item, index) => (
            <div key={item.title} data-reveal style={d(index)}>
              <h3 className="h3">{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap split">
        <p className="eyebrow" data-reveal>
          Design Philosophy
        </p>
        <div>
          <p className="bigQuote" data-reveal>
            {firm.designPhilosophy}
          </p>
          <ul className="pillList" style={{ marginTop: 48 }} data-reveal>
            {designPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(18px, 1.8vw, 28px)"
          }}
        >
          <Media
            src="/assets/projects/vimal-02.jpg"
            alt="Valsad Bungalow, corner view"
            className="ratio-tall"
            parallax
          />
          <Media
            src="/assets/projects/swarnbhumi-02.jpg"
            alt="Swarnbhumi residences"
            className="ratio-tall"
            parallax
            style={{ marginTop: "clamp(0px, 8vw, 120px)" }}
          />
        </div>
      </div>

      <section className="section wrap">
        <div className="sectionHead">
          <div>
            <p className="eyebrow" data-reveal>
              Values
            </p>
            <h2 className="h2" data-reveal style={d(1)}>
              How we work, every day.
            </h2>
          </div>
        </div>
        <div className="textGrid">
          {values.map((value, index) => (
            <div key={value.title} data-reveal style={d(index % 3)}>
              <h3 className="h3">{value.title}</h3>
              <p>{value.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap split">
        <p className="eyebrow" data-reveal>
          Sustainability & Impact
        </p>
        <div>
          <p className="bigQuote" data-reveal>
            {sustainability.position}
          </p>
          <div className="textGrid two" style={{ marginTop: 56 }}>
            {sustainability.principles.map((principle, index) => (
              <div key={principle.title} data-reveal style={d(index % 2)}>
                <h3 className="h3">{principle.title}</h3>
                <p>{principle.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap split" style={{ paddingTop: 0 }}>
        <p className="eyebrow" data-reveal>
          Technology & Workflow
        </p>
        <div>
          <p className="bigQuote" data-reveal>
            {technology.philosophy}
          </p>
          <div className="textGrid two" style={{ marginTop: 56 }}>
            {technology.practices.map((practice, index) => (
              <div key={practice.title} data-reveal style={d(index % 2)}>
                <h3 className="h3">{practice.title}</h3>
                <p>{practice.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section calm wrap">
        <div className="sectionHead">
          <div>
            <p className="eyebrow" data-reveal>
              Leadership
            </p>
            <h2 className="h2" data-reveal style={d(1)}>
              Founded in {firm.founded} by two architects.
            </h2>
          </div>
        </div>
        <div className="people">
          {people.map((person, index) => (
            <article className="person" key={person.name} data-reveal style={d(index)}>
              <div className="monogram" aria-hidden="true">
                {initials(person.name)}
              </div>
              <div>
                <h3 className="h3" style={{ fontSize: "clamp(22px, 1.8vw, 28px)" }}>
                  {person.name}
                </h3>
                <p className="role">{person.role}</p>
                <p className="body">{person.bio}</p>
                <ul className="pillList">
                  {person.focus.map((focus) => (
                    <li key={focus}>{focus}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="facts" style={{ marginTop: "clamp(72px, 9vw, 120px)" }}>
          {facts.map((fact, index) => (
            <div className="fact" key={fact.label} data-reveal style={d(index)}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap split">
        <p className="eyebrow" data-reveal>
          Timeline
        </p>
        <div>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.year} data-reveal>
                <strong>{item.year}</strong>
                <p>{item.event}</p>
              </li>
            ))}
          </ol>
          <Link href="/careers" className="textLink" style={{ marginTop: 40 }} data-reveal>
            Join the studio <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
