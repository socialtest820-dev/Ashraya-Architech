import type { Metadata } from "next";
import PageIntro from "../../components/PageIntro";
import ContactForm from "../../components/ContactForm";
import { firm, faqs } from "../../data/firm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project or get in touch with Ashraya Architects, Surat, Gujarat."
};

const faqCategories = Array.from(new Set(faqs.map((faq) => faq.category)));

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start a conversation."
        lede="New projects, general enquiries, careers, vendors, collaborations and media — write to us directly or use the form below. We acknowledge enquiries within one business day."
      />

      <section className="wrap calm section tight">
        <div className="contactCols">
          <div data-reveal>
            <h4>Studio</h4>
            <p>{firm.headOffice}</p>
          </div>
          <div data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            <h4>Email</h4>
            <a href={`mailto:${firm.email}`}>{firm.email}</a>
          </div>
          <div data-reveal style={{ "--d": 2 } as React.CSSProperties}>
            <h4>Reach</h4>
            <p>{firm.reach}</p>
          </div>
        </div>
      </section>

      <section className="section wrap split" id="start-a-project">
        <div className="stickyCol">
          <p className="eyebrow" data-reveal>
            Enquiry
          </p>
          <h2 className="h2" data-reveal style={{ marginTop: 20 }}>
            What are you reaching out about?
          </h2>
        </div>
        <ContactForm />
      </section>

      <section className="section calm wrap split">
        <div className="stickyCol">
          <p className="eyebrow" data-reveal>
            FAQ
          </p>
          <h2 className="h2" data-reveal style={{ marginTop: 20 }}>
            Common questions.
          </h2>
        </div>
        <div>
          {faqCategories.map((category) => (
            <div key={category} style={{ marginBottom: 48 }}>
              <p className="small" style={{ marginBottom: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                {category}
              </p>
              <div className="accordion" style={{ borderColor: "var(--stone)" }}>
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <details key={faq.question} data-reveal style={{ borderColor: "var(--stone)" }}>
                      <summary style={{ gridTemplateColumns: "minmax(0, 1fr) 20px" }}>
                        <span className="title" style={{ fontSize: "clamp(18px, 1.5vw, 22px)" }}>
                          {faq.question}
                        </span>
                        <span className="plus" aria-hidden="true" />
                      </summary>
                      <p className="body" style={{ paddingBottom: 28, maxWidth: "62ch" }}>
                        {faq.answer}
                      </p>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
