
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "High-performance, responsive websites designed to establish credibility and turn visitors into customers.",
    tags: ["Next.js", "React", "TypeScript"],
    icon: "↗",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Strategic campaigns that help businesses reach the right audience and build a stronger online presence.",
    tags: ["Meta Ads", "Google Ads", "SEO"],
    icon: "◈",
  },
  {
    number: "03",
    title: "Social Media Management",
    description:
      "Consistent, engaging social media experiences that strengthen your brand and connect with your audience.",
    tags: ["Instagram", "Facebook", "Content"],
    icon: "◎",
  },
  {
    number: "04",
    title: "Brand Identity & Design",
    description:
      "Distinctive visual identities and creative assets that make your business memorable.",
    tags: ["Branding", "Graphic Design", "Creative"],
    icon: "✳",
  },
  {
    number: "05",
    title: "AI Video & Content",
    description:
      "Modern promotional content and short-form videos to communicate your brand with impact.",
    tags: ["AI Content", "Reels", "Video"],
    icon: "▷",
  },
  {
    number: "06",
    title: "Business Growth Solutions",
    description:
      "Practical digital solutions that improve customer engagement, visibility and business performance.",
    tags: ["WhatsApp", "Analytics", "Strategy"],
    icon: "↗",
  },
];

const projects = [
  {
    category: "Website Concept",
    title: "FixPro Maintenance",
    description:
      "A proposed digital experience for a professional maintenance business.",
    visual: "project-fixpro",
    label: "01",
  },
  {
    category: "Agency Website",
    title: "PREVORA Digital",
    description:
      "Our own digital presence, built around clarity, creativity and growth.",
    visual: "project-prevora",
    label: "02",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              INDEPENDENT DIGITAL AGENCY
            </div>

            <h1>
              We build digital
              <br />
              experiences that
              <br />
              <span>move businesses.</span>
            </h1>

            <p className="hero-description">
              From powerful websites to meaningful digital marketing,
              we help businesses build their presence, connect with
              customers and move forward with confidence.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="button-primary">
                Start a Project <span>↗</span>
              </Link>

              <Link href="/work" className="button-secondary">
                Explore Our Work <span>→</span>
              </Link>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              BUILT WITH PURPOSE. DESIGNED FOR GROWTH.
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-center">
              <span className="center-symbol">P.</span>
              <span className="center-caption">DIGITAL WITH PURPOSE</span>
            </div>

            <div className="floating-card card-top">
              <span className="floating-icon">✳</span>
              <div>
                <strong>Creative Thinking</strong>
                <small>Ideas into experiences</small>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span className="floating-icon">↗</span>
              <div>
                <strong>Digital Growth</strong>
                <small>Built for what's next</small>
              </div>
            </div>

            <span className="visual-coordinate">
              31° 32' N — 74° 21' E
            </span>
          </div>
        </div>

        <div className="hero-bottom container">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>01 / 04</span>
        </div>
      </section>

      <section className="intro-section section-padding">
        <div className="container intro-grid">
          <div>
            <span className="section-label">01 — WHO WE ARE</span>
            <h2>
              More than digital.
              <br />
              <span>Made for impact.</span>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              Your business deserves more than an online presence.
              It deserves a digital experience that communicates
              value, earns trust and creates opportunities.
            </p>

            <Link href="/about" className="text-link">
              Discover PREVORA <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section section-padding">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">02 — WHAT WE DO</span>
              <h2>
                Solutions that <span>move you forward.</span>
              </h2>
            </div>

            <Link href="/services" className="text-link">
              All Services <span>↗</span>
            </Link>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span>{service.number}</span>
                  <span className="service-icon">{service.icon}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-padding">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">03 — SELECTED WORK</span>
              <h2>
                Ideas brought <span>to life.</span>
              </h2>
            </div>

            <Link href="/work" className="text-link">
              View Portfolio <span>↗</span>
            </Link>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.label}>
                <div className={`project-visual ${project.visual}`}>
                  <span className="project-number">{project.label}</span>

                  <span className="project-mark">
                    {project.label === "01" ? "FIX." : "PREVORA."}
                  </span>

                  <span className="project-visual-caption">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                <div className="project-info">
                  <div>
                    <span className="project-category">
                      {project.category}
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>

                  <span className="project-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>

          <p className="portfolio-disclaimer">
            Concept work and agency showcase. Project descriptions
            reflect proposed or demonstration work where applicable.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <span className="section-label">04 — YOUR NEXT MOVE</span>

          <h2>
            Have a vision?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p>
            Tell us about your business, your goals and where
            you want to go. Let's make something meaningful.
          </p>

          <Link href="/contact" className="button-primary">
            Let's Discuss Your Project <span>↗</span>
          </Link>
        </div>
      </section>

      
    </main>
  );
}
