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

      <section className="studioHero">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Start a conversation.</h1>
          <p>
            New projects, general enquiries, careers, vendors, collaborations and media — route
            your message through the form below or write to us directly. We acknowledge enquiries
            within one business day.
          </p>
        </div>
      </section>

      <section className="contactDetailBand">
        <div>
          <MapPin size={17} />
          <div>
            <span className="filterLabel">Studio</span>
            <p>{firm.headOffice}</p>
          </div>
        </div>
        <div>
          <Mail size={17} />
          <div>
            <span className="filterLabel">Email</span>
            <a href={`mailto:${firm.email}`}>{firm.email}</a>
          </div>
        </div>
        <div>
          <span className="filterLabel">Reach</span>
          <p>{firm.reach}</p>
        </div>
      </section>

      <section className="formSection" id="start-a-project">
        <div className="formIntro">
          <p className="eyebrow">Enquiry</p>
          <h2>What are you reaching out about?</h2>
          <div className="filterChips filterChipsColumn">
            {contactRoutes.map((item) => (
              <button
                key={item.id}
                type="button"
                className={route === item.id ? "chip isActive" : "chip"}
                onClick={() => setRoute(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="routeHint">
            {contactRoutes.find((item) => item.id === route)?.hint}
          </p>
        </div>

        <form className="projectForm" onSubmit={handleSubmit}>
          <div className="formRow">
            <label>
              <span>Full name *</span>
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              <span>Company / organisation</span>
              <input name="organisation" placeholder="Company or organisation" />
            </label>
          </div>
          <div className="formRow">
            <label>
              <span>Email *</span>
              <input name="email" type="email" required placeholder="name@company.com" />
            </label>
            <label>
              <span>Phone</span>
              <input name="phone" type="tel" placeholder="+91" />
            </label>
          </div>

          {route === "project" && (
            <>
              <div className="formRow">
                <label>
                  <span>Project location</span>
                  <input name="location" placeholder="City, state" />
                </label>
                <label>
                  <span>Project type / sector</span>
                  <select name="projectType" defaultValue="">
                    <option value="" disabled>
                      Select sector
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="formRow">
                <label>
                  <span>Current project stage</span>
                  <select name="stage" defaultValue="">
                    <option value="" disabled>
                      Select stage
                    </option>
                    {projectStages.map((stage) => (
                      <option key={stage} value={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Approx. site / built-up area</span>
                  <input name="area" placeholder="e.g. 12,000 sq ft" />
                </label>
              </div>
              <label className="formWide">
                <span>Required services</span>
                <div className="filterChips">
                  {serviceOptions.map((service) => (
                    <label className="chip chipCheck" key={service}>
                      <input type="checkbox" name={`service-${service}`} value={service} />
                      {service}
                    </label>
                  ))}
                </div>
              </label>
              <label className="formWide">
                <span>Target timeline</span>
                <input name="timeline" placeholder="e.g. Design start in Q1, completion 2027" />
              </label>
            </>
          )}

          <label className="formWide">
            <span>Project brief *</span>
            <textarea
              name="brief"
              required
              rows={5}
              placeholder="Tell us about the site, programme, goals and anything else that matters."
            />
          </label>

          <p className="formNote">
            Submitting opens your email client with the enquiry pre-filled and sends it to{" "}
            {firm.email}.
          </p>

          <button type="submit" className="ctaPrimary formSubmit">
            {submitted ? "Opening your email client…" : "Send enquiry"}
            {!submitted && <ArrowUpRight size={17} />}
          </button>
        </form>
      </section>

      <section className="faqSection" id="faq">
        <div className="sectionNumber">FAQ</div>
        <div>
          <p className="eyebrow">Frequently asked</p>
          <h2>Questions we are asked most.</h2>
        </div>
        <div className="faqList">
          {faqCategories.map((category) => (
            <div key={category} className="faqCategory">
              <span className="filterLabel">{category}</span>
              {faqs
                .filter((faq) => faq.category === category)
                .map((faq) => {
                  const isOpen = openFaq === faq.question;
                  return (
                    <details
                      className="faqItem"
                      key={faq.question}
                      open={isOpen}
                      onToggle={(event) => {
                        const details = event.currentTarget as HTMLDetailsElement;
                        if (details.open) setOpenFaq(faq.question);
                      }}
                    >
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  );
                })}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
