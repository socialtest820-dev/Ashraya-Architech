import Link from "next/link";
import LogoMark from "./LogoMark";
import { firm } from "../data/firm";

const groups = [
  {
    title: "Work",
    links: [
      { href: "/projects", label: "All Projects" },
      { href: "/projects?filter=featured", label: "Featured" },
      { href: "/gallery", label: "Gallery" }
    ]
  },
  {
    title: "Expertise",
    links: [
      { href: "/expertise#architecture", label: "Architecture" },
      { href: "/expertise#interior-design", label: "Interior Design" },
      { href: "/expertise#urban-design", label: "Urban Design" },
      { href: "/expertise#master-planning", label: "Master Planning" },
      { href: "/expertise#tendering-documentation", label: "Tendering & Documentation" },
      { href: "/expertise#visualization", label: "Visualization" }
    ]
  },
  {
    title: "Studio",
    links: [
      { href: "/studio", label: "About" },
      { href: "/studio#process", label: "Process" },
      { href: "/studio#people", label: "People" },
      { href: "/studio#values", label: "Values" }
    ]
  },
  {
    title: "Connect",
    links: [
      { href: "/contact#start-a-project", label: "Start a Project" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Vendors / Collaborations" },
      { href: "/insights", label: "Insights" }
    ]
  }
];

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerTop">
        <div className="footerBrand">
          <LogoMark compact />
          <div>
            <strong>{firm.name}</strong>
            <span>{firm.tagline}</span>
          </div>
        </div>
        <div className="footerGrid">
          {groups.map((group) => (
            <div key={group.title} className="footerGroup">
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footerBase">
        <span>
          © {new Date().getFullYear()} {firm.name} — Surat, Gujarat, India
        </span>
        <a href={`mailto:${firm.email}`}>{firm.email}</a>
        <span>{firm.headOffice}</span>
      </div>
    </footer>
  );
}
