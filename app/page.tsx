import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Media from "../components/Media";
import LogoMark from "../components/LogoMark";
import { firm, process } from "../data/firm";

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

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





      <section className="section wrap" style={{ position: "relative", zIndex: 10, background: "var(--bg)" }}>
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


    </>
  );
}
