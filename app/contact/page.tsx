
import Link from "next/link";
import PageHero from "@/components/PageHero";
import "./contact.css";

const contactDetails = [
  {
    number: "01",
    title: "Email",
    value: "infoprevora.com@gmail.com",
    link: "mailto:infoprevora.com@gmail.com",
    action: "Send us an email",
  },
  {
    number: "02",
    title: "Pakistan",
    value: "+92 301 7641000",
    link: "https://wa.me/923017641000",
    action: "Chat on WhatsApp",
  },
  {
    number: "03",
    title: "Dubai",
    value: "+971 55 657 9183",
    link: "https://wa.me/971556579183",
    action: "Chat on WhatsApp",
  },
];

const offices = [
  {
    number: "01",
    city: "Lahore",
    country: "Pakistan",
    description: "Pakistan Office",
  },
  {
    number: "02",
    city: "Dubai",
    country: "United Arab Emirates",
    description: "UAE Office",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <PageHero
        eyebrow="LET'S CONNECT"
        title="Have an idea? Let's make it happen."
        description="Tell us about your business, your goals or the challenge you're trying to solve. We'd love to hear from you."
      />

      {/* CONTACT INTRO */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-layout">
            {/* LEFT SIDE */}
            <div className="contact-information">
              <span className="eyebrow">GET IN TOUCH</span>
              <h2>Let's start a conversation.</h2>
              <p className="contact-intro-text">
                Whether you need branding, digital marketing, a website
                or a complete digital solution, we're ready to understand
                your requirements and discuss the next steps.
              </p>

              <div className="contact-details">
                {contactDetails.map((item) => (
                  <article className="contact-detail" key={item.number}>
                    <span className="contact-detail-number">
                      {item.number}
                    </span>

                    <div>
                      <h3>{item.title}</h3>
                      <a
                        href={item.link}
                        target={
                          item.link.startsWith("https") ? "_blank" : undefined
                        }
                        rel={
                          item.link.startsWith("https")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {item.value}
                      </a>
                      <span className="contact-detail-action">
                        {item.action}
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="contact-offices">
                <span className="eyebrow">OUR LOCATIONS</span>

                <div className="contact-offices-grid">
                  {offices.map((office) => (
                    <div className="contact-office" key={office.number}>
                      <span>{office.number}</span>
                      <h3>{office.city}</h3>
                      <p>{office.country}</p>
                      <small>{office.description}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="contact-form-wrapper">
              <span className="eyebrow">SEND AN INQUIRY</span>
              <h2>Tell us about your project.</h2>
              <p className="contact-form-description">
                Share a few details and we'll have a better understanding
                of how we can help.
              </p>

              <form
                className="contact-form"
                action="mailto:infoprevora.com@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="Name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="Email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-company">
                    Company Name <span>(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    name="Company"
                    placeholder="Your business name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service">
                    What do you need help with?
                  </label>
                  <select
                    id="contact-service"
                    name="Service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Website Design & Development">
                      Website Design & Development
                    </option>
                    <option value="Branding & Graphic Design">
                      Branding & Graphic Design
                    </option>
                    <option value="Social Media Management">
                      Social Media Management
                    </option>
                    <option value="Digital Advertising">
                      Digital Advertising
                    </option>
                    <option value="SEO & Online Visibility">
                      SEO & Online Visibility
                    </option>
                    <option value="AI Video & Content Production">
                      AI Video & Content Production
                    </option>
                    <option value="E-commerce Solutions">
                      E-commerce Solutions
                    </option>
                    <option value="WhatsApp Business Setup">
                      WhatsApp Business Setup
                    </option>
                    <option value="Reputation & Business Growth">
                      Reputation & Business Growth
                    </option>
                    <option value="Email Marketing & Automation">
                      Email Marketing & Automation
                    </option>
                    <option value="Multiple Services">
                      Multiple Services
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">
                    Tell us about your project
                  </label>
                  <textarea
                    id="contact-message"
                    name="Message"
                    rows={5}
                    placeholder="Describe your project, goals or requirements..."
                    required
                  />
                </div>

                <button type="submit" className="contact-submit">
                  Send Your Inquiry <span>↗</span>
                </button>

                <p className="form-note">
                  Your inquiry will open your default email application.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-cta section">
        <div className="container">
          <div className="contact-cta-inner">
            <span className="eyebrow">BUILD SOMETHING BETTER</span>
            <h2>Every great project starts with a conversation.</h2>
            <p>
              Take the first step towards a stronger digital presence.
              Let's discuss your next idea.
            </p>

            <Link
              href="https://wa.me/923017641000"
              target="_blank"
              className="btn btn-primary"
            >
              Connect on WhatsApp <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
