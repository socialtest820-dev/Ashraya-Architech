"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { firm, contactRoutes, projectTypes, projectStages, serviceOptions } from "../data/firm";

// Composes the enquiry into an email to the studio (no backend yet).
export default function ContactForm() {
  const [route, setRoute] = useState("project");
  const [submitted, setSubmitted] = useState(false);
  const isProject = route === "project";
  const routeLabel = contactRoutes.find((item) => item.id === route)?.label ?? "Enquiry";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const services = serviceOptions.filter((service) => data.get(`service-${service}`));

    const lines = [
      `Enquiry type: ${routeLabel}`,
      `Name: ${get("name")}`,
      get("organisation") && `Organisation: ${get("organisation")}`,
      `Email: ${get("email")}`,
      get("phone") && `Phone: ${get("phone")}`,
      get("location") && `Project location: ${get("location")}`,
      get("projectType") && `Project type: ${get("projectType")}`,
      get("stage") && `Current stage: ${get("stage")}`,
      get("area") && `Approx. area: ${get("area")}`,
      get("timeline") && `Target timeline: ${get("timeline")}`,
      services.length > 0 && `Required services: ${services.join(", ")}`,
      "",
      `Message: ${get("brief")}`
    ].filter((line) => typeof line === "string");

    const subject = encodeURIComponent(`${routeLabel} — ${get("name") || "Website enquiry"}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${firm.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div>
      <div className="routeTabs" role="group" aria-label="Enquiry type">
        {contactRoutes.map((item) => (
          <button
            key={item.id}
            type="button"
            className={route === item.id ? "isActive" : ""}
            aria-pressed={route === item.id}
            onClick={() => setRoute(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="small">{contactRoutes.find((item) => item.id === route)?.hint}</p>

      <form className="form" onSubmit={handleSubmit} style={{ marginTop: 24 }}>
        <div className="field">
          <label htmlFor="f-name">Name *</label>
          <input id="f-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="f-org">Organisation</label>
          <input id="f-org" name="organisation" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email *</label>
          <input id="f-email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
        </div>

        {isProject && (
          <>
            <div className="field">
              <label htmlFor="f-location">Project location</label>
              <input id="f-location" name="location" />
            </div>
            <div className="field">
              <label htmlFor="f-type">Project type</label>
              <select id="f-type" name="projectType" defaultValue="">
                <option value="">Select</option>
                {projectTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-stage">Current stage</label>
              <select id="f-stage" name="stage" defaultValue="">
                <option value="">Select</option>
                {projectStages.map((stage) => (
                  <option key={stage}>{stage}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-area">Approx. area</label>
              <input id="f-area" name="area" />
            </div>
            <div className="field full">
              <label htmlFor="f-timeline">Target timeline</label>
              <input id="f-timeline" name="timeline" />
            </div>
            <fieldset className="fieldset">
              <legend>Required services</legend>
              <div className="checkGrid">
                {serviceOptions.map((service) => (
                  <label className="check" key={service}>
                    <input type="checkbox" name={`service-${service}`} value={service} />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </>
        )}

        <div className="field full">
          <label htmlFor="f-brief">{isProject ? "Project brief *" : "Message *"}</label>
          <textarea id="f-brief" name="brief" required />
        </div>

        <div className="formFoot">
          <button type="submit" className="button">
            Send enquiry <ArrowUpRight size={16} />
          </button>
          <p className="small" role="status">
            {submitted
              ? "Your email app should now open with the enquiry ready to send."
              : `Opens your email app addressed to ${firm.email}.`}
          </p>
        </div>
      </form>
    </div>
  );
}
