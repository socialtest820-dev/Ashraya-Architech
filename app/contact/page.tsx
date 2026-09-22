"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import {
  firm,
  contactRoutes,
  projectTypes,
  projectStages,
  serviceOptions,
  faqs
} from "../../data/firm";

const faqCategories = Array.from(new Set(faqs.map((faq) => faq.category)));

export default function ContactPage() {
  const [route, setRoute] = useState("project");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const organisation = String(data.get("organisation") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const location = String(data.get("location") ?? "");
    const projectType = String(data.get("projectType") ?? "");
    const stage = String(data.get("stage") ?? "");
    const area = String(data.get("area") ?? "");
    const timeline = String(data.get("timeline") ?? "");
    const brief = String(data.get("brief") ?? "");
    const services = serviceOptions.filter((service) => data.get(`service-${service}`));

    const lines = [
      `Enquiry type: ${contactRoutes.find((r) => r.id === route)?.label ?? route}`,
      `Name: ${name}`,
      organisation && `Organisation: ${organisation}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      location && `Project location: ${location}`,
      projectType && `Project type: ${projectType}`,
      stage && `Current stage: ${stage}`,
      area && `Approx. area: ${area}`,
      timeline && `Target timeline: ${timeline}`,
      services.length > 0 && `Required services: ${services.join(", ")}`,
      "",
      `Brief: ${brief}`
    ].filter(Boolean);

    const subject = encodeURIComponent(
      `${contactRoutes.find((r) => r.id === route)?.label ?? "Enquiry"} — ${name || "Website enquiry"}`
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${firm.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="subPage">
      <SiteHeader />

      <section className="archiveHero">
        <div className="archiveHeroLead">
          <p className="eyebrow">Contact</p>
          <h1>Start a conversation.</h1>
          <p style={{ marginTop: "24px", maxWidth: "800px", fontSize: "clamp(16px, 1.5vw, 20px)" }}>
            New projects, general enquiries, careers, vendors, collaborations and media — route
            your message through the form below or write to us directly. We acknowledge enquiries
            within one business day.
          </p>
        </div>
      </section>

      <section className="studio-metrics-band" style={{ padding: "80px 5vw", justifyContent: "flex-start" }}>
        <div className="contact-details-grid">
          <div className="contact-detail">
            <MapPin size={24} style={{ color: "var(--maroon)", marginBottom: "16px" }} />
            <span className="expertise-label">Studio</span>
            <p>{firm.headOffice}</p>
          </div>
          <div className="contact-detail">
            <Mail size={24} style={{ color: "var(--maroon)", marginBottom: "16px" }} />
            <span className="expertise-label">Email</span>
            <a href={`mailto:${firm.email}`} style={{ textDecoration: "underline", color: "var(--ink)" }}>{firm.email}</a>
          </div>
          <div className="contact-detail">
            <span className="expertise-label" style={{ marginTop: "40px" }}>Reach</span>
            <p>{firm.reach}</p>
          </div>
        </div>
      </section>

      <div className="studio-blocks-wrapper">
        <section className="studio-block" id="start-a-project">
          <div className="studio-grid-layout">
            <div className="studio-left-col">
              <span className="studio-num">Enquiry</span>
              <h2>What are you reaching out about?</h2>
            </div>
            <div className="studio-right-col">
              <div className="expertise-sector-list" style={{ justifyContent: "flex-start", marginBottom: "32px", gap: "12px" }}>
                {contactRoutes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={route === item.id ? "expertise-sector-badge active" : "expertise-sector-badge"}
                    onClick={() => setRoute(item.id)}
                    style={{ cursor: "pointer", background: route === item.id ? "var(--ink)" : "transparent", color: route === item.id ? "#fff" : "var(--ink)" }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="routeHint" style={{ marginBottom: "48px", color: "var(--muted)", fontStyle: "italic" }}>
                {contactRoutes.find((item) => item.id === route)?.hint}
              </p>

              <form className="projectForm-modern" onSubmit={handleSubmit}>
                <div className="formRow-modern">
                  <label>
                    <span className="expertise-label">Full name *</span>
                    <input name="name" required placeholder="Your name" />
                  </label>
                  <label>
                    <span className="expertise-label">Company / organisation</span>
                    <input name="organisation" placeholder="Company or organisation" />
                  </label>
                </div>
                <div className="formRow-modern">
                  <label>
                    <span className="expertise-label">Email *</span>
                    <input name="email" type="email" required placeholder="name@company.com" />
                  </label>
                  <label>
                    <span className="expertise-label">Phone</span>
                    <input name="phone" type="tel" placeholder="+91" />
                  </label>
                </div>

                {route === "project" && (
                  <>
                    <div className="formRow-modern">
                      <label>
                        <span className="expertise-label">Project location</span>
                        <input name="location" placeholder="City, state" />
                      </label>
                      <label>
                        <span className="expertise-label">Project type / sector</span>
                        <select name="projectType" defaultValue="">
                          <option value="" disabled>Select sector</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div className="formRow-modern">
                      <label>
                        <span className="expertise-label">Current project stage</span>
                        <select name="stage" defaultValue="">
                          <option value="" disabled>Select stage</option>
                          {projectStages.map((stage) => (
                            <option key={stage} value={stage}>{stage}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        <span className="expertise-label">Approx. site / built-up area</span>
                        <input name="area" placeholder="e.g. 12,000 sq ft" />
                      </label>
                    </div>
                    
                    <label className="formWide-modern">
                      <span className="expertise-label">Required services</span>
                      <div className="expertise-sector-list" style={{ justifyContent: "flex-start", marginTop: "12px", gap: "12px" }}>
                        {serviceOptions.map((service) => (
                          <label className="expertise-sector-badge" key={service} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                            <input type="checkbox" name={`service-${service}`} value={service} />
                            {service}
                          </label>
                        ))}
                      </div>
                    </label>
                    
                    <label className="formWide-modern">
                      <span className="expertise-label">Target timeline</span>
                      <input name="timeline" placeholder="e.g. Design start in Q1, completion 2027" />
                    </label>
                  </>
                )}

                <label className="formWide-modern">
                  <span className="expertise-label">Project brief *</span>
                  <textarea
                    name="brief"
                    required
                    rows={5}
                    placeholder="Tell us about the site, programme, goals and anything else that matters."
                  />
                </label>

                <p className="formNote" style={{ marginTop: "24px", color: "var(--muted)", fontSize: "12px" }}>
                  Submitting opens your email client with the enquiry pre-filled and sends it to {firm.email}.
                </p>

                <button type="submit" className="ctaPrimary" style={{ marginTop: "24px", border: "none", cursor: "pointer" }}>
                  {submitted ? "Opening your email client…" : "Send enquiry"}
                  {!submitted && <ArrowUpRight size={17} style={{ marginLeft: "8px" }} />}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="studio-block" id="faq" style={{ borderBottom: "none" }}>
          <div className="studio-grid-layout">
            <div className="studio-left-col">
              <span className="studio-num">FAQ</span>
              <p className="eyebrow">Frequently asked</p>
              <h2>Questions we are asked most.</h2>
            </div>
            <div className="studio-right-col">
              <div className="roles-accordion">
                {faqCategories.map((category) => (
                  <div key={category} style={{ marginBottom: "48px" }}>
                    <span className="expertise-label" style={{ marginBottom: "24px" }}>{category}</span>
                    {faqs
                      .filter((faq) => faq.category === category)
                      .map((faq) => {
                        const isOpen = openFaq === faq.question;
                        return (
                          <details
                            className="role-card-modern"
                            key={faq.question}
                            open={isOpen}
                            onToggle={(event) => {
                              const details = event.currentTarget as HTMLDetailsElement;
                              if (details.open) setOpenFaq(faq.question);
                            }}
                          >
                            <summary className="role-summary-modern">
                              <strong>{faq.question}</strong>
                              <span className="role-icon-plus">+</span>
                            </summary>
                            <div className="role-body-modern">
                              <p className="role-summary-text">{faq.answer}</p>
                            </div>
                          </details>
                        );
                      })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
