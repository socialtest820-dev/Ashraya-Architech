"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";

// Original orbital project stage — design unchanged, content swapped to the
// real Ashraya launch projects.
export default function ProjectRail() {
  const featuredProjects = projects.filter((project) => project.cover).slice(0, 7);
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 24 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = featuredProjects.length;
  const spread = windowWidth < 640 ? 45 : windowWidth < 1024 ? 85 : 125;
  const zOffset = windowWidth < 640 ? 35 : 72;
  const rOffset = windowWidth < 640 ? -7 : -11;

  return (
    <section
      className="portfolioStage"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="stageCopy">
        <p className="eyebrow">Selected work</p>
        <h2>Projects built on clear thinking, from concept to site.</h2>
        <p>
          Every commission is treated as a complete design journey — research, concept,
          visualization, documentation and execution support.
        </p>
        <Link href="/projects" className="textLink">
          View all projects
          <ArrowUpRight size={17} />
        </Link>
      </div>
      <motion.div className="projectOrbital" style={{ rotateX, rotateY }}>
        {featuredProjects.map((project, index) => {
          // Calculate circular/modular offset for perfect symmetry
          let offset = index - active;
          const half = Math.floor(total / 2);
          if (offset > half) {
            offset -= total;
          } else if (offset < -half) {
            offset += total;
          }

          return (
            <motion.div
              key={project.title}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transformStyle: "preserve-3d"
              }}
              animate={{
                x: offset * spread,
                y: 0,
                z: -Math.abs(offset) * zOffset,
                rotateY: offset * rOffset,
                scale: index === active ? 1 : 0.82,
                opacity: Math.abs(offset) > 2 ? 0.28 : 1
              }}
              transition={{ type: "spring", stiffness: 90, damping: 22 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(event, info) => {
                const threshold = 50;
                if (info.offset.x < -threshold) {
                  setActive((prev) => (prev + 1) % total);
                } else if (info.offset.x > threshold) {
                  setActive((prev) => (prev - 1 + total) % total);
                }
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="projectPlane"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  transform: "translate(-50%, -50%)"
                }}
                onClick={(e) => {
                  if (index !== active) {
                    e.preventDefault();
                    setActive(index);
                  }
                }}
              >
                <span
                  className="projectImage"
                  style={{ backgroundImage: `url("${project.cover}")` }}
                  aria-hidden="true"
                />
                <span className="projectMeta">
                  <strong>{project.title}</strong>
                  <small>
                    {project.type} / {project.location} / {project.images.length} images
                  </small>
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
