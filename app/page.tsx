import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Media from "../components/Media";
import LogoMark from "../components/LogoMark";
import { firm, facts, process, insights, careers, designPrinciples } from "../data/firm";
import { projects } from "../data/projects";

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

const features = [
  {
    title: "Architecture",
    copy: "Buildings designed as complete journeys — research, concept, development, documentation and execution support under one design leadership. From private residences to multi-storey residential and commercial developments.",
    image: "/assets/projects/skyline-05.jpg",
    alt: "Nilkanth Skyline tower elevation",
    label: "Nilkanth Skyline, Surat",
    href: "/expertise#architecture",
    link: "Architecture"
  },
  {
    title: "Urban Design & Master Planning",
    copy: "Township and master plans organised around clear movement hierarchies, walkable clusters and landscape planned as infrastructure — built to evolve without losing identity.",
    image: "/assets/projects/swarnbhumi-07.jpg",
    alt: "Aerial view of the Swarnbhumi township plan",
    label: "Swarnbhumi, Gujarat",
    href: "/expertise#master-planning",
    link: "Urbanism"
  },
  {
    title: "Commercial & Corporate",
    copy: "Commercial addresses designed for stability and clarity — disciplined facades, efficient floor plates and ground levels that give arrival real dignity.",
    image: "/assets/projects/empire-04.jpg",
    alt: "The Empire commercial building at sunset",
    label: "The Empire, Surat",
    href: "/projects/the-empire",
    link: "The Empire"
  },
  {
    title: "Interior Design",
    copy: "Interiors where material, light and furniture are coordinated with the architecture rather than applied over it — resolved down to every junction and detail.",
    image: "/assets/projects/skyline-12.jpg",
    alt: "Double-height entrance lobby at Nilkanth Skyline",
    label: "Nilkanth Skyline — entrance lobby",
    href: "/expertise#interior-design",
    link: "Interiors"
  },
  {
    title: "3D Development & Visualization",
    copy: "In-house visualization used as a working design tool — testing form, light and material early, then carrying projects clearly to clients, buyers and authorities.",
    image: "/assets/projects/swarnbhumi-05.jpg",
    alt: "Swarnbhumi township entrance visualization",
    label: "Swarnbhumi — township entrance",
    href: "/expertise#visualization",
    link: "Visualization"
  }
];

export default function HomePage() {
  const word = "Ashraya";

  return (
    <>
      <section className="homeIntro" aria-label="Introduction">
        <div className="introMark">
          <LogoMark size={84} />
          <h1 className="introWord" aria-label={firm.name}>
            {word.split("").map((letter, index) => (
              <span key={index} style={{ "--i": index } as React.CSSProperties} aria-hidden="true">
                {letter}
              </span>
            ))}
          </h1>
          <p className="introSub">Architects · Surat</p>
        </div>
        <div className="scrollCue" aria-hidden="true">
          Scroll
          <i />
        </div>
      </section>

      <section className="heroScrub" data-scrub aria-label={firm.heroHeadline}>
        <div className="heroSticky">
          <div className="heroFrame">
            <Image
              src="/assets/projects/skyline-07.jpg"
              alt="Nilkanth Skyline at dusk"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="heroCaption">Nilkanth Skyline, Surat</p>
          <div className="heroCopy">
            <h2 className="display">{firm.heroHeadline}</h2>
            <p>{firm.heroSupport}</p>
          </div>
        </div>
      </section>

      <section className="section wrap practice">
        <div>
          <p className="eyebrow" data-reveal>
            The Practice
          </p>
          <h2 className="h2" data-reveal style={d(1)}>
            Thoughtful design, carried from concept to built reality.
          </h2>
        </div>
        <div className="practiceBody">
          <p data-reveal style={d(2)}>
            {firm.intro50}
          </p>
          <div className="practiceStats" data-reveal style={d(3)}>
            {facts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
          <Link href="/studio" className="textLink" data-reveal style={d(4)}>
            About the studio <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="featureRows" aria-label="What we do">
        {features.map((item) => (
          <article className="featureRow" key={item.title}>
            <Media src={item.image} alt={item.alt} className="" sizes="(max-width: 860px) 100vw, 66vw" parallax />
            <div className="featureText">
              <span className="num" data-reveal>
                {item.label}
              </span>
              <h2 className="h3" data-reveal style={d(1)}>
                {item.title}
              </h2>
              <p className="body" data-reveal style={d(2)}>
                {item.copy}
              </p>
              <Link href={item.href} className="textLink" data-reveal style={d(3)}>
                {item.link} <ArrowRight />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section wrap">
        <div className="sectionHead">
          <div>
            <p className="eyebrow" data-reveal>
              Selected Work
            </p>
            <h2 className="h2" data-reveal style={d(1)}>
              Projects across scales and sectors.
            </h2>
          </div>
          <Link href="/projects" className="textLink" data-reveal>
            All {projects.length} projects <ArrowRight />
          </Link>
        </div>
        <div className="workGrid">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <Link href={`/projects/${project.slug}`} className="workCard" key={project.slug} data-reveal>
                <Media src={project.cover} alt={project.title} sizes="(max-width: 860px) 100vw, 58vw" reveal={false} />
                <div className="workInfo">
                  <div>
                    <h3 className="h3">{project.title}</h3>
                    <p>
                      {project.type} · {project.location}
                    </p>
                  </div>
                  <span className="status" data-status={project.status}>
                {project.status}
              </span>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <section className="section calm wrap">
        <div className="split">
          <div className="stickyCol">
            <p className="eyebrow" data-reveal>
              Design Philosophy
            </p>
          </div>
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
        </div>
      </section>

      <section className="section wrap">
        <div className="split">
          <div className="stickyCol">
            <p className="eyebrow" data-reveal>
              How We Work
            </p>
            <h2 className="h2" data-reveal style={{ ...d(1), marginTop: 20 }}>
              From discovery to handover.
            </h2>
            <p className="body" data-reveal style={{ ...d(2), marginTop: 24, maxWidth: "38ch" }}>
              {firm.mission}
            </p>
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
        <div className="sectionHead">
          <div>
            <p className="eyebrow" data-reveal>
              Insights
            </p>
            <h2 className="h2" data-reveal style={d(1)}>
              Notes from the studio.
            </h2>
          </div>
          <Link href="/insights" className="textLink" data-reveal>
            All insights <ArrowRight />
          </Link>
        </div>
        <div className="cardGrid">
          {insights.slice(0, 3).map((item, index) => (
            <Link href={`/insights/${item.slug}`} className="card" key={item.slug} data-reveal style={d(index)}>
              <Media src={item.cover} alt="" sizes="(max-width: 600px) 100vw, 33vw" reveal={false} />
              <div className="cardMeta">
                <span>{item.category}</span>
                <span>{item.readingTime}</span>
              </div>
              <h3 className="h3">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="featureRows" aria-label="Careers" style={{ paddingBottom: "clamp(88px, 12vw, 176px)" }}>
        <article className="featureRow">
          <Media
            src="/assets/projects/skyline-10.jpg"
            alt="Residents' lounge at Nilkanth Skyline"
            sizes="(max-width: 860px) 100vw, 66vw"
            parallax
          />
          <div className="featureText">
            <span className="num" data-reveal>
              Careers
            </span>
            <h2 className="h3" data-reveal style={d(1)}>
              {careers.headline}
            </h2>
            <p className="body" data-reveal style={d(2)}>
              {careers.proposition}
            </p>
            <Link href="/careers" className="textLink" data-reveal style={d(3)}>
              Open positions <ArrowRight />
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
