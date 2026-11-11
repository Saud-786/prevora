
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand">
            PREVORA<span>.</span>
            <small>DIGITAL AGENCY</small>
          </Link>

          <p>Build. Grow. Succeed.</p>
        </div>

        <div className="footer-column">
          <strong>Explore</strong>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">Our Work</Link>
          <Link href="/process">Our Process</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <strong>Get in Touch</strong>

          <a href="mailto:infoprevora.com@gmail.com">
            infoprevora.com@gmail.com
          </a>

          <a href="https://wa.me/971556579183" target="_blank" rel="noreferrer">
            Dubai WhatsApp: +971 55 657 9183
          </a>

          <a href="https://wa.me/923017641000" target="_blank" rel="noreferrer">
            Pakistan WhatsApp: +92 301 7641000
          </a>

          <a href="tel:+923017641000">
            Pakistan Calls: +92 301 7641000
          </a>

          <div className="footer-locations">
            <strong>Our Offices</strong>
            <p>Lahore, Pakistan</p>
            <p>Dubai, United Arab Emirates</p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} PREVORA. All rights reserved.
        </span>
        <span>BUILD. GROW. SUCCEED.</span>
      </div>
    </footer>
  );
}
