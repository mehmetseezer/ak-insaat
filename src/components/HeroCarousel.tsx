"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./HeroCarousel.module.css";

const slides = [
  {
    id: 0,
    img: "/images/hero_1.png",
    tag: "KONUT PROJELERİ",
    title: "Hayalinizin\nEvini İnşa\nEdiyoruz",
    desc: "Modern mimari anlayışı ve üstün işçilikle, yaşam standartlarınızı yeniden tanımlayan konut projeleri.",
    cta: "Projelerimizi İncele",
    href: "/main/projects",
  },
  {
    id: 1,
    img: "/images/hero_2.png",
    tag: "TİCARİ YAPILAR",
    title: "Güçlü\nYapılar,\nGüvenli Gelecek",
    desc: "Ticari ve karma kullanımlı projelerimizde uluslararası standartlarda mühendislik ve kalite.",
    cta: "Daha Fazla Bilgi",
    href: "/main/about",
  },
  {
    id: 2,
    img: "/images/hero_3.png",
    tag: "YAŞAM ALANLARI",
    title: "Konfor ve\nEstetiği\nBuluşturuyoruz",
    desc: "Her detayda mükemmelliği hedefleyen iç mekan tasarımı ve premium yaşam alanları.",
    cta: "İletişime Geç",
    href: "/main/contact",
  },
];

const AUTOPLAY_MS = 5500;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      goNext();
    } else if (distance < -minSwipeDistance) {
      goPrev();
    }
  };


  const goTo = useCallback(
    (index: number, direction: "next" | "prev" = "next") => {
      if (animating || index === current) return;
      setDir(direction);
      setPrev(current);
      setCurrent(index);
      setAnimating(true);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 750);
    },
    [animating, current]
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  /* Auto-play */
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(goNext, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [current, paused, goNext]);

  const slide = slides[current];

  return (
    <section
      id="hero"
      className={styles.hero}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Slide backgrounds ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`${styles.bg} ${
            i === current
              ? dir === "next"
                ? styles.bgEnterNext
                : styles.bgEnterPrev
              : i === prev
              ? dir === "next"
                ? styles.bgExitNext
                : styles.bgExitPrev
              : styles.bgHidden
          }`}
          style={{ backgroundImage: `url('${s.img}')` }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Overlay gradient */}
      <div className={styles.overlay} />

      {/* ── Slide content ── */}
      <div className={styles.contentWrap}>
        <div
          key={current}
          className={`${styles.content} ${
            dir === "next" ? styles.contentEnterNext : styles.contentEnterPrev
          }`}
        >
          {/* Tag */}
          <div className={styles.tag}>{slide.tag}</div>

          {/* Title — newlines → line breaks */}
          <h1 className={styles.title}>
            {slide.title.split("\n").map((line, i) => (
              <span key={i} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.desc}>{slide.desc}</p>

          <div className={styles.actions}>
            <a href={slide.href} className={styles.primary}>
              {slide.cta}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className={styles.secondary}>İletişim</a>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className={styles.statsBar}>
        {[
          { value: "1994", label: "Kuruluş Yılı" },
          { value: "320+", label: "Tamamlanan Proje" },
          { value: "8.500+", label: "Mutlu Aile" },
          { value: "12", label: "İl'de Hizmet" },
        ].map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Controls ── */}
      {/* Arrow buttons */}
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={goPrev}
        aria-label="Önceki slayt"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={goNext}
        aria-label="Sonraki slayt"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators + progress */}
      <div className={styles.dotsRow}>
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            aria-label={`Slayt ${i + 1}`}
          >
            <span
              className={styles.dotProgress}
              style={
                i === current && !paused
                  ? { animationDuration: `${AUTOPLAY_MS}ms` }
                  : {}
              }
            />
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className={styles.counter} aria-live="polite">
        <span className={styles.counterCurrent}>
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className={styles.counterSep} />
        <span className={styles.counterTotal}>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
