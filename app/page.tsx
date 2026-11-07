
function PrevoraLogo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="PREVORA homepage"
    >
      <svg
        className="brand-symbol"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M15 52V12H34C45 12 51 18 51 28C51 38 44 43 33 43H15"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 47C20 59 42 58 54 43C61 34 59 20 52 12"
          stroke="#D9B879"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="52" cy="12" r="3" fill="#D9B879" />
      </svg>

      <span className="brand-word">
        PREVORA<span className="brand-period">.</span>
      </span>
    </a>
  );
}

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and digital platforms designed to turn visitors into customers.",
    tags: ["Business Websites", "Web Applications", "E-commerce"],
    symbol: "↗",
  },
  {
    number: "02",
    title: "UI/UX & Creative Design",
    description:
      "Intuitive digital experiences and thoughtful visual design that make your brand memorable.",
    tags: ["UI/UX Design", "Brand Identity", "Creative Direction"],
    symbol: "✳",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that help businesses build visibility and connect with audiences.",
    tags: ["Social Media", "SEO", "Digital Campaigns"],
    symbol: "◎",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals and challenges.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "We shape a clear direction and define the right solution.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We design, develop and refine your digital experience.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deliver your project and help you take the next step.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="site-header">
        <div className="nav-container">
          <PrevoraLogo />

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#process">Our Process</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Let's Talk <span>↗</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span></span>
              <span></span>
            </summary>

            <nav aria-label="Mobile navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#work">Our Work</a>
              <a href="#process">Our Process</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-section" id="home">
        <div className="hero-grid"></div>

        <div className="hero-container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              INDEPENDENT DIGITAL AGENCY
            </div>

            <h1>
              We create
              <br />
              <span className="heading-light">what moves</span>
              <br />
              <span className="heading-gold">business forward.</span>
            </h1>

            <p className="hero-description">
              PREVORA brings strategy, design and technology
              together to help ambitious businesses build
              meaningful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="button button-gold">
                Start a project <span>↗</span>
              </a>

              <a href="#work" className="text-link">
                Explore our work <span>→</span>
              </a>
            </div>

            <div className="hero-bottom-note">
              <span>STRATEGY</span>
              <i></i>
              <span>CREATIVITY</span>
              <i></i>
              <span>TECHNOLOGY</span>
            </div>
          </div>

          <div className="hero-art" aria-label="PREVORA brand artwork">
            <div className="art-glow"></div>
            <div className="art-ring art-ring-one"></div>
            <div className="art-ring art-ring-two"></div>
            <div className="art-ring art-ring-three"></div>

            <div className="art-center">
              <svg viewBox="0 0 150 150" fill="none">
                <path
                  d="M39 120V28H78C101 28 114 41 114 64C114 86 99 98 77 98H39"
                  stroke="#E4C68F"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 104C49 135 96 135 122 101C139 78 133 45 111 25"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="111" cy="25" r="5" fill="#E4C68F" />
              </svg>
              <span>BEYOND ORDINARY</span>
            </div>

            <div className="art-label art-label-top">
              <span className="label-dot"></span>
              <div>
                <strong>Ideas with purpose</strong>
                <small>Strategy & direction</small>
              </div>
            </div>

            <div className="art-label art-label-bottom">
              <span className="label-icon">✳</span>
              <div>
                <strong>Built for tomorrow</strong>
                <small>Design meets technology</small>
              </div>
            </div>

            <span className="art-coordinate">P / 001 — LAHORE</span>
          </div>
        </div>

        <div className="hero-side-text">BUILD. GROW. SUCCEED.</div>
      </section>

      {/* Brand statement */}
      <section className="brand-statement">
        <div className="container statement-inner">
          <span>OUR APPROACH</span>
          <p>
            Good design gets attention.
            <strong> Great digital experiences create impact.</strong>
          </p>
          <span className="statement-mark">✳</span>
        </div>
      </section>

      {/* About */}
      <section className="about-section section-padding" id="about">
        <div className="container about-layout">
          <div className="about-left">
            <span className="section-kicker">01 — WHO WE ARE</span>
            <h2>
              Thoughtful ideas.
              <br />
              <span>Powerful execution.</span>
            </h2>
          </div>

          <div className="about-right">
            <p className="about-lead">
              We are PREVORA — a digital agency focused on
              helping businesses move forward with clarity,
              creativity and technology.
            </p>

            <p>
              From a first idea to a complete digital presence,
              we approach every project with attention to detail,
              purposeful design and a commitment to delivering
              work that serves real business goals.
            </p>

            <a href="#contact" className="underlined-link">
              Get to know us <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section section-padding" id="services">
        <div className="container">
          <div className="section-topline">
            <span className="section-kicker">02 — WHAT WE DO</span>
            <span className="section-side-note">
              DIGITAL SOLUTIONS WITH PURPOSE
            </span>
          </div>

          <div className="services-heading">
            <h2>
              Bringing your vision
              <br />
              <span>into the digital world.</span>
            </h2>
            <p>
              A considered mix of creative thinking,
              technical expertise and digital strategy.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number} / 03</span>
                  <span className="service-symbol">
                    {service.symbol}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a href="#contact" className="service-link">
                  Discuss this service <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="work-section section-padding" id="work">
        <div className="container">
          <div className="section-topline">
            <span className="section-kicker">03 — SELECTED WORK</span>
            <span className="section-side-note">
              CONCEPTS & DIGITAL EXPERIENCES
            </span>
          </div>

          <div className="work-heading">
            <h2>
              Made with intention.
              <br />
              <span>Designed to make a difference.</span>
            </h2>
            <p>
              A glimpse of the digital experiences and
              creative directions PREVORA can bring to life.
            </p>
          </div>

          <div className="work-grid">
            <article className="work-card work-large">
              <div className="work-visual visual-one">
                <div className="mock-browser">
                  <div className="browser-top">
                    <span></span><span></span><span></span>
                    <small>YOUR BRAND / DIGITAL EXPERIENCE</small>
                  </div>
                  <div className="mock-content">
                    <span>DESIGN FOR EVERYDAY LIVING</span>
                    <strong>Make your<br />space matter.</strong>
                    <div className="mock-line"></div>
                  </div>
                </div>
              </div>
              <div className="work-caption">
                <div>
                  <span>CONCEPT PROJECT / 01</span>
                  <h3>Modern Business Website</h3>
                </div>
                <span className="work-arrow">↗</span>
              </div>
            </article>

            <article className="work-card">
              <div className="work-visual visual-two">
                <div className="dashboard-mock">
                  <div className="dashboard-sidebar">
                    <span>◈</span>
                    <i></i><i></i><i></i><i></i>
                  </div>
                  <div className="dashboard-main">
                    <span>OVERVIEW</span>
                    <strong>Good morning.</strong>
                    <div className="dashboard-boxes">
                      <i></i><i></i><i></i>
                    </div>
                    <div className="dashboard-chart">
                      <span></span><span></span><span></span>
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-caption">
                <div>
                  <span>CONCEPT PROJECT / 02</span>
                  <h3>Business Dashboard</h3>
                </div>
                <span className="work-arrow">↗</span>
              </div>
            </article>

            <article className="work-card">
              <div className="work-visual visual-three">
                <div className="brand-mock">
                  <span>YOUR BRAND</span>
                  <strong>Distinctive<br />by design.</strong>
                  <i>IDENTITY / STRATEGY / DIRECTION</i>
                </div>
              </div>
              <div className="work-caption">
                <div>
                  <span>CONCEPT PROJECT / 03</span>
                  <h3>Brand Identity Direction</h3>
                </div>
                <span className="work-arrow">↗</span>
              </div>
            </article>
          </div>

          <p className="concept-note">
            The examples above are illustrative concept designs,
            not representations of completed client projects.
          </p>
        </div>
      </section>

      {/* Why Prevora */}
      <section className="difference-section section-padding">
        <div className="container difference-layout">
          <div>
            <span className="section-kicker">04 — THE PREVORA DIFFERENCE</span>
            <h2>
              More than a service.
              <br />
              <span>A creative partnership.</span>
            </h2>
          </div>

          <div className="difference-points">
            <div>
              <span>01</span>
              <section>
                <h3>Business-first thinking</h3>
                <p>
                  Every decision begins with your business
                  objectives and your audience.
                </p>
              </section>
            </div>
            <div>
              <span>02</span>
              <section>
                <h3>Purposeful creativity</h3>
                <p>
                  Design that communicates clearly and
                  creates a consistent brand experience.
                </p>
              </section>
            </div>
            <div>
              <span>03</span>
              <section>
                <h3>Modern technology</h3>
                <p>
                  Practical, responsive and scalable digital
                  solutions built with care.
                </p>
              </section>
            </div>
            <div>
              <span>04</span>
              <section>
                <h3>Collaborative process</h3>
                <p>
                  Clear communication and thoughtful
                  collaboration from start to finish.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section section-padding" id="process">
        <div className="container">
          <span className="section-kicker">05 — HOW WE WORK</span>
          <div className="process-heading">
            <h2>
              A clear process.
              <br />
              <span>A better outcome.</span>
            </h2>
            <p>
              Great work is built on clear thinking,
              collaboration and attention to detail.
            </p>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <article key={step.number} className="process-card">
                <span>{step.number}</span>
                <div className="process-line"></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="contact-orb"></div>

        <div className="container contact-content">
          <span className="section-kicker">06 — LET'S CONNECT</span>
          <h2>
            Have a vision?
            <br />
            <span>Let's make it happen.</span>
          </h2>
          <p>
            Tell us about your business, your goals and
            what you'd like to create. Let's start a conversation.
          </p>

          <a
            href="https://wa.me/923077071096?text=Hello%20PREVORA%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="button button-gold"
          >
            Start a conversation <span>↗</span>
          </a>

          <div className="contact-information">
            <div>
              <span>LOCATION</span>
              <strong>Lahore, Pakistan</strong>
            </div>
            <div>
              <span>CALL / WHATSAPP</span>
              <a href="tel:+923077071096">+92 307 7071096</a>
            </div>
            <div>
              <span>EMAIL</span>
              <strong>Contact us via WhatsApp</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <PrevoraLogo light />
            <p>
              Building meaningful digital experiences
              through strategy, creativity and technology.
            </p>
          </div>

          <div className="footer-column">
            <span>EXPLORE</span>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#process">Our Process</a>
          </div>

          <div className="footer-column">
            <span>GET IN TOUCH</span>
            <a href="tel:+923077071096">+92 307 7071096</a>
            <a
              href="https://wa.me/923077071096"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>
            <p>Lahore, Pakistan</p>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 PREVORA. All rights reserved.</span>
          <span>BUILD. GROW. SUCCEED.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
