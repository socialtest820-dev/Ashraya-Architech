"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import LogoMark from "./LogoMark";

const revealSelector = [
  ".portfolioStage",
  ".projectPreview",
  ".studioSection",
  ".contactSection",
  ".projectArchiveCard",
  ".galleryFrame",
  ".storyImage",
  ".storyCopy",
  ".storyCover",
  ".galleryHero > *",
  ".studioBlock"
].join(",");

const imageCursorSelector = [
  ".projectPlane",
  ".galleryFrame",
  ".storyImage",
  ".storyCover",
  ".archiveStack span",
  ".nextProjectBand span"
].join(",");

export default function MotionArchitecture() {
  const pathname = usePathname();
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.body.classList.add("motionReady");

    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    if (reducedMotion) {
      return () => {
        window.removeEventListener("scroll", updateScroll);
        window.removeEventListener("resize", updateScroll);
      };
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    targets.forEach((target, index) => {
      target.style.setProperty("--reveal-index", String(index % 8));
    });

    const reveal = (target: HTMLElement) => {
      target.classList.add("isRevealed");
      observer.unobserve(target);
    };

    const isInViewport = (target: HTMLElement) => {
      const rect = target.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.94 && rect.bottom > window.innerHeight * 0.06;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            reveal(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );

    targets.forEach((target) => {
      if (isInViewport(target)) {
        reveal(target);
      } else {
        observer.observe(target);
      }
    });

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reducedMotion || !finePointer) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      document.documentElement.style.setProperty("--pointer-x", `${targetX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${targetY}px`);

      const target = event.target instanceof Element ? event.target : null;
      const isImageSurface = !!target?.closest(imageCursorSelector);
      cursor.classList.toggle("isActive", isImageSurface);
      document.body.classList.toggle("imageCursorActive", isImageSurface);

      const reactiveSurface = target?.closest<HTMLElement>(".galleryFrame, .storyImage, .projectPlane, .storyCover");
      if (reactiveSurface) {
        const rect = reactiveSurface.getBoundingClientRect();
        const localX = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        const localY = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
        reactiveSurface.style.setProperty("--local-x", `${(localX * 100).toFixed(2)}%`);
        reactiveSurface.style.setProperty("--local-y", `${(localY * 100).toFixed(2)}%`);
        reactiveSurface.style.setProperty("--tilt-x", `${((localX - 0.5) * 9).toFixed(2)}deg`);
        reactiveSurface.style.setProperty("--tilt-y", `${((0.5 - localY) * 9).toFixed(2)}deg`);
      }
    };

    const leave = () => {
      cursor.classList.remove("isActive");
      document.body.classList.remove("imageCursorActive");
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="siteLoader" key={pathname} aria-hidden="true">
        <div className="siteLoaderLogo">
          <LogoMark compact />
        </div>
      </div>
      <div className="blueprintCursor" ref={cursorRef} aria-hidden="true">
        <span />
        <i />
      </div>
      <div className="scrollGauge" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    </>
  );
}
