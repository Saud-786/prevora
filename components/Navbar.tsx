
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/work" },
  { name: "Our Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="navbar container">

        {/* PREVORA ORIGINAL LOGO */}
<Link href="/" className="brand-logo">
  <img
    src="/prevora-logo.png"
    alt="PREVORA - Build, Grow, Succeed"
    className="brand-image"
  />
</Link>

        {/* NAVIGATION LINKS */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                pathname === link.href ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <Link href="/contact" className="nav-cta">
          Let's Talk <span>↗</span>
        </Link>

      </nav>
    </header>
  );
}
