
import Link from "next/link";
import PageHero from "@/components/PageHero";
import "./process.css";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Understanding",
    description:
      "Every successful project begins with understanding. We learn about your business, goals, target audience, challenges and expectations.",
    deliverables: [
      "Business Requirements",
      "Target Audience",
      "Project Goals",
    ],
  },
  {
    number: "02",
    title: "Research & Strategy",
    description:
      "We explore your industry, understand your competitors and identify opportunities to create a solution that supports your business objectives.",
    deliverables: [
      "Market Research",
      "Competitor Analysis",
      "Project Strategy",
    ],
  },
  {
    number: "03",
    title: "Planning & Creative Direction",
    description:
      "We establish the project scope, organize priorities and define the creative direction before moving into production.",
    deliverables: [
      "Project Roadmap",
      "Creative Direction",
      "Project Timeline",
    ],
  },
  {
    number: "04",
    title: "Design & Development",
    description:
      "Our ideas take shape through thoughtful design, creative production, marketing preparation and technology implementation.",
    deliverables: [
      "Design & Branding",
      "Content Production",
      "Digital Development",
    ],
  },
  {
    number: "05",
    title: "Review & Refinement",
    description:
      "We review the work carefully, gather your feedback and make agreed improvements to ensure the final result meets the project requirements.",
    deliverables: [
      "Quality Checks",
      "Client Feedback",
      "Final Improvements",
    ],
  },
  {
    number: "06",
    title: "Launch & Ongoing Support",
    description:
      "We deliver or launch the completed project and provide agreed support to help maintain, improve and develop your digital presence.",
    deliverables: [
      "Project Delivery",
      "Launch Support",
      "Performance Review",
    ],
  },
];

const commitments = [
  {
    number: "01",
    title: "Clear Communication",
    description:
      "We keep you informed, encourage feedback and maintain clear communication throughout the project.",
  },
  {
    number: "02",
    title: "Purposeful Execution",
    description:
      "Every decision is guided by your project goals, audience needs and agreed requirements.",
  },
  {
    number: "03",
    title: "Attention to Quality",
    description:
      "We focus on consistency, details and quality at every stage of the process.",
  },
];

export default function ProcessPage() {
  return (
    <main className="process-page">
      <PageHero
        eyebrow="HOW WE WORK"
        title="A clear process. Thoughtful work. Meaningful results."
        description="From the first conversation to final delivery, our process brings strategy, creativity and technology together to move your business forward."
      />

      {/* PROCESS INTRO */}
      <section className="process-intro section">
        <div className="container process-intro-grid">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2>
              Great work happens when every step has a purpose.
            </h2>
          </div>

          <div className="process-intro-content">
            <p>
              We believe successful digital projects need more than good
              ideas. They need understanding, planning, collaboration and
              careful execution.
            </p>
            <p>
              Our six-step approach gives every project a clear direction
              while allowing flexibility based on your business needs and
              the services you choose.
            </p>

            <Link href="/services" className="process-text-link">
              Explore our services <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SIX PROCESS STEPS */}
      <section className="process-steps section">
        <div className="container">
          <div className="process-section-heading">
            <span className="eyebrow">THE JOURNEY</span>
            <h2>From idea to execution.</h2>
            <p>
              Six practical stages designed to keep your project organized,
              focused and moving in the right direction.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.number}>
                <div className="process-card-top">
                  <span className="process-number">{step.number}</span>
                  <span className="process-card-arrow">↗</span>
                </div>

                <h3>{step.title}</h3>
                <p className="process-description">
                  {step.description}
                </p>

                <div className="process-deliverables">
                  <span className="deliverables-label">
                    KEY ACTIVITIES
                  </span>

                  {step.deliverables.map((item) => (
                    <span className="deliverable-item" key={item}>
                      <span className="deliverable-dot" />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR COMMITMENTS */}
      <section className="process-commitments section">
        <div className="container">
          <div className="process-section-heading">
            <span className="eyebrow">WHAT YOU CAN EXPECT</span>
            <h2>Good collaboration makes better work.</h2>
            <p>
              Beyond the steps, these are the principles that shape how
              we work with every client.
            </p>
          </div>

          <div className="commitments-grid">
            {commitments.map((item) => (
              <article className="commitment-card" key={item.number}>
                <span className="commitment-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="process-cta section">
        <div className="container">
          <div className="process-cta-inner">
            <span className="eyebrow">READY TO GET STARTED?</span>
            <h2>Let's turn your next idea into a clear plan.</h2>
            <p>
              Tell us what you are working on. We will help you identify
              the right direction and next steps for your project.
            </p>

            <Link href="/contact" className="btn btn-primary">
              Discuss Your Project <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
