import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { insights } from "../../data/firm";

export const metadata: Metadata = {
  title: "Insights | Ashraya Architects",
  description:
    "Design thinking, construction knowledge, workplace, real estate, materials, sustainability, technology and project stories from Ashraya Architects."
};

export default function InsightsPage() {
  return (
    <main className="subPage">
      <SiteHeader />

      <section className="galleryHero">
        <p className="eyebrow">Insights</p>
        <h1>Design thinking, construction knowledge and project stories.</h1>
        <div className="galleryStats">
          {Array.from(new Set(insights.map((insight) => insight.category))).map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </section>

      <section className="insightIndex">
        {insights.map((insight, index) => (
          <Link href={`/insights/${insight.slug}`} className="insightRow" key={insight.slug}>
            <span className="insightRowIndex">{String(index + 1).padStart(2, "0")}</span>
            <span
              className="insightRowCover"
              style={{ backgroundImage: `url("${insight.cover}")` }}
              aria-hidden="true"
            />
            <span className="insightRowBody">
              <small>
                {insight.category} / {insight.date} / {insight.readingTime}
              </small>
              <strong>{insight.title}</strong>
              <p>{insight.excerpt}</p>
            </span>
          </Link>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
