
import Link from "next/link";
import PageHero from "@/components/PageHero";
import "./about.css";

const capabilities = [
  {
    number: "01",
    title: "Brand & Creativity",
    description:
      "Visual identities, graphic design, creative campaigns and content that give businesses a recognizable presence.",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Social media, paid advertising, SEO and email marketing designed to help businesses reach the right audience.",
  },
  {
    number: "03",
    title: "Technology",
    description:
      "Professional websites, e-commerce platforms and digital solutions built around real business needs.",
  },
];

const principles = [
  {
    number: "01",
    title: "Purpose Before Design",
    description:
      "Every project starts with understanding its purpose, audience and business objectives before choosing the right solution.",
  },
  {
    number: "02",
    title: "Creativity With Direction",
    description:
      "We bring creative ideas together with a clear strategy to create work that communicates the right message.",
  },
  {
    number: "03",
    title: "Technology That Works",
    description:
      "We focus on practical, responsive and reliable digital solutions that make everyday business activities easier.",
  },
  {
    number: "04",
    title: "Growth Mindset",
    description:
      "We believe digital work should create value, improve customer experiences and support long-term business growth.",
  },
  {
    number: "05",
    title: "Quality in Every Detail",
    description:
      "We pay attention to the details, maintain high standards and aim to deliver consistent quality in everything we create.",
  },
  {
    number: "06",
    title: "Partnership & Trust",
    description:
      "We value honest communication, collaboration and lasting relationships built on understanding and mutual trust.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <PageHero
        eyebrow="GET TO KNOW PREVORA"
        title="A creative digital partner for ambitious businesses."
        description="We bring branding, marketing, creative content and technology together to help businesses build their presence and move forward with confidence."
      />

      {/* INTRODUCTION */}
      <section className="about-intro section">
        <div className="container about-intro-grid">
          <div className="about-intro-heading">
            <span className="eyebrow">WHO WE ARE</span>
            <h2>
              More than a digital service. A partner in your business journey.
            </h2>
          </div>

          <div className="about-intro-content">
            <p>
              Every business has something valuable to offer. But reaching
              the right audience and building a strong online presence
              requires more than just a website.
            </p>

            <p>
              PREVORA brings different digital disciplines together, from
              brand identity and creative content to online marketing and
              technology. Our aim is to help businesses communicate their
              value and connect with their customers.
            </p>

            <p>
              We approach every project with a focus on clear communication,
              thoughtful execution and solutions that serve a real purpose.
            </p>

            <Link href="/services" className="about-text-link">
              Explore our services <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-capabilities section">
        <div className="container">
          <div className="about-section-heading">
            <span className="eyebrow">OUR EXPERTISE</span>
            <h2>Different capabilities. One digital direction.</h2>
            <p>
              We connect creativity, marketing and technology to support
              different stages of a business's digital journey.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.number}>
                <span className="capability-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="about-purpose section">
        <div className="container">
          <div className="about-purpose-grid">
            <article className="purpose-card">
              <span className="eyebrow">01 / OUR MISSION</span>
              <h3>Making digital possibilities practical.</h3>
              <p>
                To make professional digital solutions more accessible to
                businesses through creative thinking, useful technology
                and purposeful marketing.
              </p>
            </article>

            <article className="purpose-card purpose-card-highlight">
              <span className="eyebrow">02 / OUR VISION</span>
              <h3>Helping businesses move forward.</h3>
              <p>
                To become a trusted digital partner for businesses seeking
                stronger brands, better customer experiences and meaningful
                online growth.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="about-principles section">
        <div className="container">
          <div className="about-section-heading">
            <span className="eyebrow">WHAT GUIDES US</span>
            <h2>Our principles shape every project.</h2>
            <p>
              The way we think, plan and approach our work matters just as
              much as the final result.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((item) => (
              <article className="principle-card" key={item.number}>
                <span className="principle-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section">
        <div className="container">
          <div className="about-cta-inner">
            <span className="eyebrow">LET'S WORK TOGETHER</span>
            <h2>Your next idea deserves the right digital direction.</h2>
            <p>
              Whether you need a stronger brand, better marketing or a
              complete digital solution, let's discuss what your business
              needs.
            </p>

            <Link href="/contact" className="btn btn-primary">
              Start a Conversation <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
