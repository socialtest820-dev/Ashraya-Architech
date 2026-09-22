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

      <section className="archiveHero">
        <div className="archiveHeroLead">
          <p className="eyebrow">Insights</p>
          <h1>Design thinking, construction knowledge and project stories.</h1>
          <div className="expertise-sector-list" style={{ justifyContent: "flex-start", marginTop: "32px" }}>
            {Array.from(new Set(insights.map((insight) => insight.category))).map((category) => (
              <span key={category} className="expertise-sector-badge" style={{ fontSize: "11px", padding: "8px 16px" }}>
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="insights-grid-wrapper">
        <div className="insights-masonry">
          {insights.map((insight, index) => (
            <Link href={`/insights/${insight.slug}`} className="insight-card" key={insight.slug}>
              <div className="insight-card-image" style={{ backgroundImage: `url("${insight.cover}")` }} />
              <div className="insight-card-content">
                <span className="expertise-label" style={{ marginBottom: "12px" }}>
                  {String(index + 1).padStart(2, "0")} / {insight.category}
                </span>
                <h3 className="insight-card-title">{insight.title}</h3>
                <p className="insight-card-excerpt">{insight.excerpt}</p>
                <small className="insight-card-meta">
                  {insight.date} — {insight.readingTime} read
                </small>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
