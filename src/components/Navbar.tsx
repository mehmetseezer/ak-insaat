"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Ana Sayfa", href: "/main" },
  { label: "Projelerimiz", href: "/main/projects" },
  { label: "Hakkımızda", href: "/main/about" },
  { label: "İletişim", href: "/main/contact" },
];

export default function Navbar({ onBackToSplash }: { onBackToSplash: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <button className={styles.logo} onClick={onBackToSplash} aria-label="Ana sayfaya dön">
          <img
            src="/images/ak-insaat-logo.png"
            alt="Ak İnşaat Logo"
            className={styles.logoImg}
          />
        </button>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Ana menü">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className={styles.actions}>
          <Link href="/main/contact" className={styles.ctaBtn}>Teklif Al</Link>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        {navLinks.map((l) => (
          <Link key={l.label} href={l.href} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/main/contact" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>Teklif Al</Link>
        <button className={styles.drawerBack} onClick={onBackToSplash}>
          ← Yeşil Grup'a Dön
        </button>
      </div>
    </header>
  );
}
