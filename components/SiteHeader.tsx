import Link from "next/link";
import LogoMark from "./LogoMark";

const nav = [
  { href: "/projects", label: "Work" },
  { href: "/expertise", label: "Expertise" },
  { href: "/studio", label: "Studio" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  return (
    <header className="siteHeader">
      <Link href="/" className="brand" aria-label="Ashraya Architects home">
        <LogoMark compact />
        <span>Ashraya Architects</span>
      </Link>
      <nav aria-label="Primary navigation">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact#start-a-project" className="headerCta">
          Start a Project
        </Link>
      </nav>
    </header>
  );
}
