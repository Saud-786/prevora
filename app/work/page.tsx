
"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import "./work.css";

const categories = [
  "All Work",
  "Branding",
  "Social Media",
  "Advertising",
  "AI Video",
  "SEO",
  "Web Development",
];


const projects = [
  // WEB DEVELOPMENT
  {
    number: "01",
    category: "AI WEB APPLICATION",
    service: "Web Development",
    title: "FastResume.ai",
    description: "An AI-powered resume-building platform designed to help users create professional resumes through a streamlined digital experience.",
    type: "AI Product",
    technologies: ["React", "Node.js", "AI Integration"],
    visual: "resume-visual",
    symbol: "CV.",
    caption: "CAREER TECHNOLOGY",
  },
  {
    number: "02",
    category: "ADMIN DASHBOARD",
    service: "Web Development",
    title: "AttendanceBot",
    description: "An attendance management solution with role-based access, organized records and an administrative dashboard.",
    type: "Management System",
    technologies: ["React", "Firebase", "Redux"],
    visual: "attendance-visual",
    symbol: "AB.",
    caption: "SMART MANAGEMENT",
  },
  {
    number: "03",
    category: "FOOD & E-COMMERCE",
    service: "Web Development",
    title: "Food Ordering Experience",
    description: "A food ordering application concept focused on browsing products, managing a cart and creating a smooth customer journey.",
    type: "Web Application",
    technologies: ["React", "JavaScript", "CSS"],
    visual: "food-visual",
    symbol: "FOOD.",
    caption: "DIGITAL COMMERCE",
  },
  {
    number: "04",
    category: "E-COMMERCE WEBSITE",
    service: "Web Development",
    title: "VELORA Fashion Store",
    description: "A modern online fashion store concept featuring curated collections, product discovery and a seamless shopping experience.",
    type: "E-Commerce Concept",
    technologies: ["Next.js", "React", "JavaScript"],
    visual: "velora-visual",
    symbol: "V.",
    caption: "MODERN FASHION",
  },

  // BRANDING
  {
    number: "05",
    category: "BRAND IDENTITY",
    service: "Branding",
    title: "AURELIA Skincare",
    description: "A premium skincare brand identity concept featuring elegant typography, a refined colour palette and packaging direction.",
    type: "Brand Identity Concept",
    technologies: ["Illustrator", "Photoshop", "Brand Strategy"],
    visual: "branding-visual",
    symbol: "A.",
    caption: "BEAUTY & IDENTITY",
  },
  {
    number: "06",
    category: "LOGO & VISUAL IDENTITY",
    service: "Branding",
    title: "NORTHLINE Coffee",
    description: "A modern coffee brand concept with a distinctive logo, visual language and coordinated brand applications.",
    type: "Logo Design Concept",
    technologies: ["Illustrator", "Typography", "Art Direction"],
    visual: "branding-visual",
    symbol: "N.",
    caption: "COFFEE CULTURE",
  },

  // SOCIAL MEDIA
  {
    number: "07",
    category: "SOCIAL MEDIA CAMPAIGN",
    service: "Social Media",
    title: "UrbanBite Social",
    description: "A restaurant social media concept featuring promotional posts, food highlights and a consistent Instagram content style.",
    type: "Social Media Concept",
    technologies: ["Photoshop", "Canva", "Content Planning"],
    visual: "social-visual",
    symbol: "UB.",
    caption: "FOOD & SOCIAL",
  },
  {
    number: "08",
    category: "CONTENT DESIGN",
    service: "Social Media",
    title: "GlowTheory Beauty",
    description: "A beauty brand content concept with coordinated social posts, product highlights and an elegant visual direction.",
    type: "Content Design Concept",
    technologies: ["Canva", "Photoshop", "Content Strategy"],
    visual: "social-visual",
    symbol: "GT.",
    caption: "BEAUTY CONTENT",
  },

  // ADVERTISING
  {
    number: "09",
    category: "META ADS CREATIVE",
    service: "Advertising",
    title: "FitCore Campaign",
    description: "A fitness advertising concept featuring promotional creatives, campaign messaging and audience-focused ad ideas.",
    type: "Advertising Concept",
    technologies: ["Meta Ads", "Photoshop", "Ad Strategy"],
    visual: "advertising-visual",
    symbol: "FC.",
    caption: "FITNESS CAMPAIGN",
  },
  {
    number: "10",
    category: "GOOGLE ADS STRATEGY",
    service: "Advertising",
    title: "LearnBridge Campaign",
    description: "A digital advertising concept for an education business, focused on search intent, keyword themes and lead generation.",
    type: "Campaign Strategy Concept",
    technologies: ["Google Ads", "Keyword Research", "Analytics"],
    visual: "advertising-visual",
    symbol: "LB.",
    caption: "EDUCATION GROWTH",
  },

  // AI VIDEO
  {
    number: "11",
    category: "AI PROMOTIONAL VIDEO",
    service: "AI Video",
    title: "Nova Realty",
    description: "A real estate promotional video concept using AI-assisted visuals, cinematic scenes and marketing-focused storytelling.",
    type: "Video Concept",
    technologies: ["AI Video Tools", "Video Editing", "Storyboarding"],
    visual: "video-visual",
    symbol: "NR.",
    caption: "REAL ESTATE FILM",
  },
  {
    number: "12",
    category: "AI SOCIAL REEL",
    service: "AI Video",
    title: "Aura Beauty",
    description: "A short-form beauty advertisement concept combining AI-assisted scenes, product storytelling and social-first visuals.",
    type: "AI Reel Concept",
    technologies: ["AI Video Tools", "Video Editing", "Creative Direction"],
    visual: "video-visual",
    symbol: "AB.",
    caption: "BEAUTY IN MOTION",
  },

  // SEO
  {
    number: "13",
    category: "LOCAL SEO",
    service: "SEO",
    title: "Urban Dental",
    description: "A local SEO concept covering location-based keyword research, Google Business Profile optimisation and local search visibility.",
    type: "SEO Strategy Concept",
    technologies: ["Keyword Research", "Local SEO", "Google Business Profile"],
    visual: "seo-visual",
    symbol: "UD.",
    caption: "LOCAL VISIBILITY",
  },
  {
    number: "14",
    category: "SEO STRATEGY",
    service: "SEO",
    title: "GreenNest Living",
    description: "An organic search growth concept featuring keyword planning, content structure and on-page SEO recommendations.",
    type: "SEO Concept",
    technologies: ["SEO Research", "On-Page SEO", "Content Planning"],
    visual: "seo-visual",
    symbol: "GN.",
    caption: "ORGANIC GROWTH",
  },
];


export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredProjects =
    activeCategory === "All Work"
      ? projects
      : projects.filter(
          (project) => project.service === activeCategory
        );

  return (
    <main className="work-page">
      <PageHero
        eyebrow="OUR PORTFOLIO"
        title="Ideas shaped into digital experiences."
        description="Explore our selected work across technology, creativity and digital solutions."
      />

      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-intro">
            <div>
              <span className="eyebrow">SELECTED PROJECTS</span>
              <h2>
                Different challenges.
                <br />
                <span>Thoughtful solutions.</span>
              </h2>
            </div>

            <p>
              Explore how different ideas can become meaningful
              digital experiences through creative thinking,
              technology and strategy.
            </p>
          </div>

          <div className="portfolio-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`portfolio-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="portfolio-grid">
              {filteredProjects.map((project) => (
                <article className="portfolio-card" key={project.number}>
                  <div className={`portfolio-visual ${project.visual}`}>
                    <span className="portfolio-number">
                      PROJECT / {project.number}
                    </span>

                    <div className="portfolio-art">
                      <span className="portfolio-symbol">
                        {project.symbol}
                      </span>
                      <span className="portfolio-caption">
                        {project.caption}
                      </span>
                    </div>

                    <span className="portfolio-type">
                      {project.type}
                    </span>
                  </div>

                  <div className="portfolio-details">
                    <div className="portfolio-meta">
                      <span>{project.category}</span>
                      <span>{project.number}</span>
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="portfolio-technologies">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="portfolio-empty">
              <h3>Something creative is coming.</h3>
              <p>
                We are preparing projects for this category.
                Check back soon.
              </p>
            </div>
          )}

          <p className="portfolio-note">
            Portfolio includes previous development work and
            proposed concept projects. Project descriptions
            identify their respective scope.
          </p>
        </div>
      </section>

      <section className="work-cta">
        <div className="container work-cta-content">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>

          <h2>
            Your next idea
            <br />
            <span>starts here.</span>
          </h2>

          <p>
            Let's discuss your goals and explore how we can bring
            your next digital project to life.
          </p>

          <Link href="/contact" className="button-primary">
            Start a Conversation <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
