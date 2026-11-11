
import Link from "next/link";
import PageHero from "@/components/PageHero";
import "./services.css";

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Build a professional digital presence with modern websites that communicate your brand, engage visitors and support your business goals.",
    features: [
      "Business Websites",
      "Landing Pages",
      "Responsive Design",
      "Web Applications",
    ],
  },
  {
    number: "02",
    title: "Branding & Graphic Design",
    description:
      "Create a memorable brand identity with a consistent visual style that helps your business communicate professionally.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Brand Guidelines",
      "Marketing Materials",
    ],
  },
  {
    number: "03",
    title: "Social Media Management",
    description:
      "Build a consistent social media presence through planned content, engaging visuals and organised account management.",
    features: [
      "Instagram Management",
      "Facebook Management",
      "Content Calendars",
      "Social Media Creatives",
    ],
  },
  {
    number: "04",
    title: "Digital Advertising",
    description:
      "Connect your business with relevant audiences through carefully planned paid advertising campaigns across digital platforms.",
    features: [
      "Meta Ads Campaigns",
      "Google Ads Campaigns",
      "Audience Targeting",
      "Campaign Monitoring",
    ],
  },
  {
    number: "05",
    title: "SEO & Online Visibility",
    description:
      "Strengthen your online visibility through search optimisation, relevant keywords and improvements to your website's search presence.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
    ],
  },
  {
    number: "06",
    title: "AI Video & Content Production",
    description:
      "Turn business ideas into engaging promotional content using AI-assisted visuals, creative storytelling and video editing.",
    features: [
      "AI Promotional Videos",
      "Social Media Reels",
      "Product Advertisements",
      "Video Editing",
    ],
  },
  {
    number: "07",
    title: "E-commerce Solutions",
    description:
      "Create convenient online shopping experiences that help customers discover products, place orders and complete purchases.",
    features: [
      "Online Store Development",
      "Product Management",
      "Shopping Cart Integration",
      "Payment Integration",
    ],
  },
  {
    number: "08",
    title: "WhatsApp Business Setup",
    description:
      "Make customer communication easier with a professionally organised WhatsApp Business presence and useful business tools.",
    features: [
      "Business Profile Setup",
      "Product Catalogues",
      "Automated Replies",
      "Customer Communication",
    ],
  },
  {
    number: "09",
    title: "Reputation & Business Growth",
    description:
      "Support your business reputation and customer relationships through organised review management and performance insights.",
    features: [
      "Review Management",
      "Google Business Profile",
      "Customer Engagement",
      "Performance Reporting",
    ],
  },
  
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <PageHero
        eyebrow="WHAT WE DO"
        title="Everything your business needs to grow digitally."
        description="From brand identity and creative content to technology and digital marketing, we bring the essential pieces of your online presence together."
      />

      {/* SERVICES INTRO */}
      <section className="services-intro section">
        <div className="container services-intro-grid">
          <div>
            <span className="eyebrow">OUR EXPERTISE</span>
            <h2>
              One digital partner for your brand, marketing and technology.
            </h2>
          </div>

          <div>
            <p>
              Building a successful digital presence takes more than a
              website. Your branding, content, marketing and customer
              experience should work together. We help businesses bring
              these elements together through practical digital solutions.
            </p>

            <Link href="/contact" className="services-text-link">
              Discuss your project <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="services-list section">
        <div className="container">
          <div className="services-heading">
            <div>
              <span className="eyebrow">OUR SERVICES</span>
              <h2>Solutions for every stage of your digital journey.</h2>
            </div>

            <p>
              Creative thinking, practical technology and connected
              digital strategies to help your business move forward.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-arrow">↗</span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-features">
                  {service.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>

                <Link href="/contact" className="service-link">
                  Explore this service <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="services-approach section">
        <div className="container services-approach-inner">
          <div>
            <span className="eyebrow">ONE PARTNER. CLEAR DIRECTION.</span>
            <h2>
              More than individual services. A connected digital
              experience.
            </h2>
          </div>

          <p>
            Your brand identity, website, content and marketing should
            support one another. We look at the bigger picture and help
            create a consistent experience across your digital channels,
            from the first impression to customer communication.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta section">
        <div className="container">
          <div className="services-cta-inner">
            <span className="eyebrow">LET'S WORK TOGETHER</span>

            <h2>Have a vision? Let's bring it to life.</h2>

            <p>
              Tell us about your business, your goals and the challenges
              you want to solve. Let's explore the right digital
              solutions for your next step.
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
