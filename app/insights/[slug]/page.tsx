import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { insights } from "../../../data/firm";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const insight = insights.find((item) => item.slug === params.slug);

  return {
    title: insight ? `${insight.title} | Ashraya Architects` : "Insight | Ashraya Architects",
    description: insight?.excerpt ?? "Insight article from Ashraya Architects."
  };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = insights.find((item) => item.slug === params.slug);

  if (!insight) {
    notFound();
  }

  const related = insights.filter((item) => item.slug !== insight.slug).slice(0, 3);

  return (
    <main className="subPage">
      <SiteHeader />

      <section className="insightHero">
        <Link href="/insights" className="backLink">
          Back to insights
        </Link>
        <p className="eyebrow">
          {insight.category} / {insight.date} / {insight.readingTime} read
        </p>
        <h1>{insight.title}</h1>
        <p className="insightExcerpt">{insight.excerpt}</p>
        <div
          className="insightHeroCover"
          style={{ backgroundImage: `url("${insight.cover}")` }}
          aria-hidden="true"
        />
      </section>

      <section className="insightBody">
        {insight.body.map((paragraph, index) => (
          <p key={index} style={{ "--i": index } as CSSProperties}>
            {paragraph}
          </p>
        ))}
      </section>

      <section className="nextProjectBand">
        {related.map((item) => (
          <Link href={`/insights/${item.slug}`} key={item.slug}>
            <span style={{ backgroundImage: `url("${item.cover}")` }} aria-hidden="true" />
            <strong>{item.title}</strong>
            <small>{item.category}</small>
          </Link>
        ))}
      </section>

      <section className="contactSection studioContact">
        <p className="eyebrow">Discuss a project</p>
        <h2>Have a project where this thinking could help? Start a conversation.</h2>
        <Link href="/contact#start-a-project" className="ctaPrimary contactCta">
          Start a Project
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
