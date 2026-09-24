"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

// Site-wide smooth scrolling, reveal-on-scroll, image parallax and scroll-scrubbed sections.
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduce ? undefined : new Lenis({ duration: 1.25, smoothWheel: true, anchors: { offset: -80 } });
    window.__lenis = lenis;

    // Scroll-linked styles are only recomputed when the scroll position or viewport changes.
    let frame = 0;
    let lastY = -1;
    let lastH = -1;
    const raf = (time: number) => {
      lenis?.raf(time);
      if (window.scrollY !== lastY || window.innerHeight !== lastH || targets.dirty) {
        lastY = window.scrollY;
        lastH = window.innerHeight;
        targets.dirty = false;
        update();
      }
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      window.__lenis = undefined;
    };
  }, []);

  useEffect(() => {
    const goToHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const target = hash ? document.getElementById(hash) : null;
      if (!target) return false;
      if (target instanceof HTMLDetailsElement) target.open = true;
      requestAnimationFrame(() => {
        if (window.__lenis) window.__lenis.scrollTo(target, { offset: -96, immediate: true, force: true });
        else target.scrollIntoView();
      });
      return true;
    };

    if (!goToHash()) {
      window.__lenis?.scrollTo(0, { immediate: true, force: true });
      if (!window.__lenis) window.scrollTo(0, 0);
    }
    window.addEventListener("hashchange", goToHash);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const watch = () => {
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => observer.observe(el));
      targets.parallax = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
      targets.scrub = Array.from(document.querySelectorAll<HTMLElement>("[data-scrub]"));
      targets.dirty = true;
    };
    watch();

    // Content rendered after navigation (filters, accordions) is picked up as it appears.
    const mutations = new MutationObserver(watch);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.removeEventListener("hashchange", goToHash);
    };
  }, [pathname]);

  return null;
}

const targets: { parallax: HTMLElement[]; scrub: HTMLElement[]; dirty: boolean } = {
  parallax: [],
  scrub: [],
  dirty: true
};

function update() {
  const vh = window.innerHeight;

  targets.parallax.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > vh) return;
    // Progress runs -0.5..0.5 across the viewport; the image layer overflows by 8% each side.
    const progress = (rect.top + rect.height / 2 - vh / 2) / (vh + rect.height);
    el.style.setProperty("--py", `${(-progress * rect.height * 0.12).toFixed(1)}px`);
  });

  targets.scrub.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const span = rect.height - vh;
    const p = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
    el.style.setProperty("--p", p.toFixed(4));
  });
}
