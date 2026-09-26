import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Media from "../../../components/Media";
import { insights } from "../../../data/firm";

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = insights.find((entry) => entry.slug === params.slug);
  return {
    title: item?.title ?? "Insight",
    description: item?.excerpt,
    openGraph: {
      title: item?.title ?? "Insight",
      description: item?.excerpt,
      images: item?.cover ? [item.cover] : []
    }
  };
}

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

export default function InsightPage({ params }: { params: { slug: string } }) {
  const index = insights.findIndex((entry) => entry.slug === params.slug);
  if (index < 0) notFound();
  const item = insights[index];
  const next = insights[(index + 1) % insights.length];

  return (
    <article>
      <header className="pageIntro" style={{ textAlign: "center", display: "grid", justifyItems: "center" }}>
        <Link href="/insights" className="textLink" data-reveal>
          <ArrowLeft /> All insights
        </Link>
        <p className="eyebrow" data-reveal style={{ ...d(1), marginTop: 48 }}>
          {item.category} · {item.readingTime} read
        </p>
        <h1 className="h1" data-reveal style={{ ...d(2), maxWidth: "18ch" }}>
          {item.title}
        </h1>
      </header>

      <Media src={item.cover} alt="" className="pageHero" parallax priority />

      <section className="section wrap">
        <div className="article">
          {item.body.map((paragraph, i) => (
            <p key={i} data-reveal>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: "clamp(88px, 12vw, 176px)" }}>
        <hr className="rule" />
        <Link href={`/insights/${next.slug}`} className="sectionHead" style={{ marginTop: 40, marginBottom: 0 }}>
          <div>
            <p className="eyebrow">Next insight</p>
            <h2 className="h2">{next.title}</h2>
          </div>
          <span className="textLink">
            Read <ArrowRight />
          </span>
        </Link>
      </section>
    </article>
  );
}
