import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "../../components/PageIntro";
import Media from "../../components/Media";
import { insights } from "../../data/firm";

export const metadata: Metadata = {
  title: "Insights",
  description: "Design thinking, planning, visualization and construction knowledge from Ashraya Architects."
};

const formatDate = (value: string) =>
  new Date(`${value}-01`).toLocaleDateString("en-GB", { month: "long", year: "numeric" });

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Notes on design, planning and delivery."
        lede="Short essays from the studio on how we think about context, efficiency, visualization, documentation and place."
      />
      <section className="wrap insightList" style={{ paddingBottom: "clamp(88px, 12vw, 176px)" }}>
        {insights.map((item) => (
          <Link href={`/insights/${item.slug}`} key={item.slug} data-reveal>
            <Media src={item.cover} alt="" sizes="(max-width: 860px) 100vw, 33vw" reveal={false} />
            <div>
              <h2 className="h2">{item.title}</h2>
              <p>{item.excerpt}</p>
            </div>
            <div className="meta">
              <span>{item.category}</span>
              <span>{formatDate(item.date)}</span>
              <span>{item.readingTime} read</span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
