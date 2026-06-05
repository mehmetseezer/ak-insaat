"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Splash.module.css";

export default function Splash() {
  const router = useRouter();
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  const [tapped, setTapped] = useState<"left" | "right" | null>(null);
  const [exiting, setExiting] = useState(false);

  /* Mobile: tap once to highlight, twice to confirm */
  const handleLeftInteract = () => {
    if (window.innerWidth <= 768) {
      if (tapped === "left") {
        triggerLeftExit();
      } else {
        setTapped("left");
      }
    } else {
      triggerLeftExit();
    }
  };

  const handleRightInteract = () => {
    if (window.innerWidth <= 768) {
      if (tapped === "right") {
        window.open("https://yesilsaglik.com", "_blank");
        setTapped(null);
      } else {
        setTapped("right");
      }
    } else {
      window.open("https://yesilsaglik.com", "_blank");
    }
  };

  const triggerLeftExit = () => {
    setExiting(true);
    setTimeout(() => router.push("/main"), 800);
  };

  const activeSide = hovered ?? tapped;

  return (
    <div className={`${styles.container} ${exiting ? styles.exitLeft : ""}`}>

      {/* ── TOP HEADER ── */}
      <header className={styles.header}>
        <img
          src="/images/yesilgrup.png"
          alt="Yeşil Grup Logo"
          className={styles.headerLogo}
        />
      </header>

      {/* ── LEFT PANEL – Ak İnşaat ── */}
      <div
        className={`${styles.panel} ${styles.panelLeft}
          ${activeSide === "right" ? styles.shrink : ""}
          ${activeSide === "left" ? styles.expand : ""}`}
        onClick={handleLeftInteract}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
        role="button"
        aria-label="Ak İnşaat'a git"
      >
        <div
          className={styles.bgImage}
          style={{ backgroundImage: "url('/images/ak_insaat.png')" }}
        />
        <div className={styles.overlay} />

        {/* Corner ornaments */}
        <span className={styles.cornerTL} aria-hidden />
        <span className={styles.cornerBR} aria-hidden />

        <div className={styles.content}>
          <div className={styles.tag}>İNŞAAT & GAYRİMENKUL</div>
          <h2 className={styles.panelTitle}>Ak İnşaat</h2>
          <p className={styles.panelDesc}>
            Modern mimari ve güvenilir yapı çözümleri ile geleceğinizi inşa ediyoruz.
          </p>
          <div className={styles.cta}>
            <span>{tapped === "left" ? "Devam Et →" : "Keşfet"}</span>
            {tapped !== "left" && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </div>
        </div>
      </div>


      {/* ── RIGHT PANEL – Yeşil Sağlık ── */}
      <div
        className={`${styles.panel} ${styles.panelRight}
          ${activeSide === "left" ? styles.shrink : ""}
          ${activeSide === "right" ? styles.expand : ""}`}
        onClick={handleRightInteract}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
        role="button"
        aria-label="Yeşil Sağlık'a git"
      >
        <div
          className={styles.bgImage}
          style={{ backgroundImage: "url('/images/yesil_saglik.png')" }}
        />
        <div className={`${styles.overlay} ${styles.overlayGreen}`} />

        <span className={`${styles.cornerTL} ${styles.cornerGreen}`} aria-hidden />
        <span className={`${styles.cornerBR} ${styles.cornerGreen}`} aria-hidden />

        <div className={styles.content}>
          <div className={`${styles.tag} ${styles.tagGreen}`}>SAĞLIK & YAŞAM</div>
          <h2 className={`${styles.panelTitle} ${styles.panelTitleGreen}`}>Yeşil Sağlık</h2>
          <p className={styles.panelDesc}>
            Yüksek teknolojiye sahip tıbbi cihaz ve medikal ekipman çözümleriyle sağlık sektörünün yanındayız.
          </p>
          <div className={`${styles.cta} ${styles.ctaGreen}`}>
            <span>{tapped === "right" ? "Siteye Git →" : "Ziyaret Et"}</span>
            {tapped !== "right" && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
