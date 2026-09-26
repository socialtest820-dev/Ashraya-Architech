"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import LogoMark from "./LogoMark";
import { nav } from "./nav";
import { firm, expertise } from "../data/firm";

export default function SiteFooter() {
  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="siteFooter">


      <div className="footerGrid">
        <div className="footerBrand">
          <LogoMark size={44} />
          <p>{firm.positioning}</p>
          <p className="coords">21.19° N, 72.77° E — Pal, Surat</p>
        </div>
        <div>
          <h4>Studio</h4>
          <p>{firm.headOffice}</p>
          <p style={{ marginTop: 14 }}>
            <a href={`mailto:${firm.email}`}>{firm.email}</a>
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Expertise</h4>
          <ul>
            {expertise.slice(0, 6).map((item) => (
              <li key={item.slug}>
                <Link href={`/expertise#${item.slug}`}>{item.name.split(" & ")[0]}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <span>
          © {new Date().getFullYear()} {firm.name}. Surat, Gujarat.
        </span>
        <button type="button" className="toTop" onClick={toTop}>
          Top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
