"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoMark from "./LogoMark";
import { nav } from "./nav";
import { firm } from "../data/firm";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [preview, setPreview] = useState(0);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 160 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const headerClass = ["siteHeader", scrolled && "isScrolled", hidden && !open && "isHidden", open && "menuOpen"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <a href="#main" className="skipLink">
        Skip to content
      </a>
      <header className={headerClass}>
        <Link href="/" className="brand" aria-label={`${firm.name} — home`}>
          <LogoMark />
          <span>
            Ashraya
            <small>Architects</small>
          </span>
        </Link>
        <div className="headerNav">
          <nav className="headerLinks" aria-label="Primary">
            {nav.slice(0, 3).map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" aria-current={isActive("/contact") ? "page" : undefined}>
              Contact
            </Link>
          </nav>
          <button
            type="button"
            className="menuButton"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="menuIcon" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div id="site-menu" className={open ? "menuOverlay isOpen" : "menuOverlay"} aria-hidden={!open}>
        <ul className="menuList">
          {[{ href: "/", label: "Home", image: "/assets/projects/skyline-05.jpg" }, ...nav].map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                style={{ "--i": index } as React.CSSProperties}
                tabIndex={open ? 0 : -1}
                onMouseEnter={() => setPreview(index)}
                onFocus={() => setPreview(index)}
                onClick={() => setOpen(false)}
              >
                <small>{String(index + 1).padStart(2, "0")}</small>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menuAside">
          <div className="menuPreview" aria-hidden="true">
            {[{ image: "/assets/projects/skyline-05.jpg" }, ...nav].map((item, index) => (
              <Image
                key={item.image}
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 0vw, 33vw"
                className={index === preview ? "isActive" : ""}
                style={{ objectFit: "cover" }}
              />
            ))}
          </div>
          <div className="menuContact">
            <div>
              <strong>Studio</strong>
              {firm.headOffice}
            </div>
            <div>
              <strong>Write to us</strong>
              <a href={`mailto:${firm.email}`} tabIndex={open ? 0 : -1}>
                {firm.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
