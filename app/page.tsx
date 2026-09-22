import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Ashraya Architects | Architecture & Design Practice",
  description:
    "Ashraya Architects is a multidisciplinary architecture and design practice working across architecture, interiors, commercial projects, urban design and visualization."
};

export default function Home() {
  return (
    <main>
      <SiteHeader />

      {/* Hero Section */}
      <section className="hero-minimalist">
        <div className="hero-calm-bg"></div>
        <div className="hero-center-content">
          <img src="/loggo.svg" alt="Ashraya Architects Logo" className="hero-center-logo" />
          <h1>Design with Clarity. Deliver with Purpose.</h1>
          <p>
            A multidisciplinary architecture and design practice shaping architecture, interiors, 
            commercial developments and urban-scale ideas through rigorous thinking and execution-oriented delivery.
          </p>
        </div>
      </section>

      {/* Intro / Practice Section */}
      <section className="split-section">
        <div className="split-image">
          <img 
            src="/views/swarna bhumi/Scene 31_1.png" 
            alt="Swarnbhumi Project Overview" 
          />
        </div>
        <div className="split-content">
          <span className="eyebrow">The Practice</span>
          <h2>One Vision. Multiple Disciplines. Meaningful Impact.</h2>
          <p>
            Ashraya Architects is a multidisciplinary architecture and design practice working from concept to built reality. 
            We combine design thinking, planning, visualization, documentation and coordination to create purposeful solutions 
            across architecture, interiors, commercial and corporate projects, urban design and related design services.
          </p>
          <p>
            <strong>Founded 2021 | 2 Co-founders | Team 10–15 | 10–12 completed projects | 10 ongoing projects</strong>
          </p>
          <div style={{ marginTop: '30px' }}>
             <Link href="/projects" className="cta-button">Explore Our Work</Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="split-section">
        <div className="split-content" style={{ order: 2 }}>
          <span className="eyebrow">Expertise</span>
          <h2>Integrated capability from first study to final detail.</h2>
          
          <ul className="clean-list">
            <li>
              <span className="list-index">01</span>
              <span className="list-title">Architecture</span>
            </li>
            <li>
              <span className="list-index">02</span>
              <span className="list-title">Interior Design</span>
            </li>
            <li>
              <span className="list-index">03</span>
              <span className="list-title">Urban Design & Master Planning</span>
            </li>
            <li>
              <span className="list-index">04</span>
              <span className="list-title">Design Consultancy & Feasibility</span>
            </li>
            <li>
              <span className="list-index">05</span>
              <span className="list-title">Tendering & Construction Documentation</span>
            </li>
            <li>
              <span className="list-index">06</span>
              <span className="list-title">3D Development & Visualization</span>
            </li>
          </ul>
        </div>
        <div className="split-image" style={{ order: 1 }}>
          <img 
            src="/views/the empire/ChatGPT Image Sep 15, 2026, 05_49_58 PM (1).png" 
            alt="The Empire Commercial Development" 
          />
        </div>
      </section>

      {/* Legacy / Why Ashraya Section */}
      <section className="split-section">
        <div className="split-image">
          <img 
            src="/views/vimal/VB-06_View-01.jpg" 
            alt="Vimal Bungalow Project" 
          />
        </div>
        <div className="split-content">
          <span className="eyebrow">Why Ashraya</span>
          <h2>What clients can rely on, stated plainly.</h2>
          
          <div className="diff-grid">
            <div className="diff-item">
              <h3>Multidisciplinary Thinking</h3>
              <p>Designing across scales, integrating architecture, interiors, and master planning seamlessly.</p>
            </div>
            <div className="diff-item">
              <h3>Concept to Documentation</h3>
              <p>Maintaining design continuity and clarity from initial sketches to execution blueprints.</p>
            </div>
            <div className="diff-item">
              <h3>Execution-Oriented</h3>
              <p>Making design decisions grounded in constructability, performance, and commercial reality.</p>
            </div>
            <div className="diff-item">
              <h3>Business-Aware</h3>
              <p>Providing strategic design for corporate and real-estate clients seeking measurable outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Teaser */}
      <section className="container" style={{ padding: '8vw 5vw', textAlign: 'center' }}>
          <span className="eyebrow">Responsibility</span>
          <h2 style={{ maxWidth: '900px', margin: '0 auto 24px auto' }}>
            We begin with the real project problem—not a predetermined style.
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            Responsible design is integrated through passive thinking, resource awareness, material choices, 
            indoor environmental quality and efficient planning—not treated as a separate visual layer.
          </p>
      </section>

      {/* Contact Section */}
      <section className="contact-block">
        <span className="eyebrow">Begin a project</span>
        <h2>Have a project, collaboration or idea to discuss? Start a conversation with Ashraya Architects.</h2>
        <Link href="/contact" className="cta-button">Start a Project</Link>
      </section>

      <SiteFooter />
    </main>
  );
}
