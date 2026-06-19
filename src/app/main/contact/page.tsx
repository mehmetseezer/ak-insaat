"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import styles from "../page.module.css";

export default function ContactPage() {
  const router = useRouter();

  const handleBackToSplash = () => {
    router.push("/");
  };

  return (
    <div className={styles.page}>
      <Navbar onBackToSplash={handleBackToSplash} />

      {/* Spacer for fixed header */}
      <div style={{ height: "calc(var(--header-height) + 18px)" }} />

      {/* ── CONTACT ── */}
      <section className={styles.section} style={{ minHeight: "calc(100vh - 220px)" }}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>İLETİŞİM</span>
            <h2 className={styles.sectionTitle}>Bizimle İletişime Geçin</h2>
            <p className={styles.sectionDesc}>Proje teklifiniz ya da sorularınız için formu doldurun, ekibimiz size en kısa sürede ulaşsın.</p>
          </div>
          <div className={styles.contactGrid}>
            <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="name" className={styles.formLabel}>Adınız</label>
                  <input id="name" type="text" placeholder="Adınız Soyadınız" className={styles.formInput} />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="phone" className={styles.formLabel}>Telefon</label>
                  <input id="phone" type="tel" placeholder="+90 5xx xxx xx xx" className={styles.formInput} />
                </div>
              </div>
              <div className={styles.formField}>
                <label htmlFor="email" className={styles.formLabel}>E-posta</label>
                <input id="email" type="email" placeholder="ornek@mail.com" className={styles.formInput} />
              </div>
              <div className={styles.formField}>
                <label htmlFor="message" className={styles.formLabel}>Mesajınız</label>
                <textarea id="message" rows={4} placeholder="Projeniz hakkında kısa bilgi verin..." className={styles.formTextarea} />
              </div>
              <button type="submit" className={styles.formSubmit}>Mesaj Gönder</button>
            </form>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <strong>Merkez Ofis</strong>
                  <p>Atalar Mah. Üsküdar Cad. No:142/A<br />Kartal / İstanbul</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📞</span>
                <div>
                  <strong>Telefon</strong>
                  <p>
                    <a href="tel:+905413926564" style={{ color: "inherit", textDecoration: "none" }}>
                      +90 541 392 65 64
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>✉️</span>
                <div>
                  <strong>E-posta</strong>
                  <p>info@yesilgruptr.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🕐</span>
                <div>
                  <strong>Çalışma Saatleri</strong>
                  <p>Pzt – Cuma: 09:00 – 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── GOOGLE MAP ── */}
          <div className={styles.mapSection}>
            <h3 className={styles.mapTitle}>📍 Ofis Konumumuz</h3>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d927.7180129007561!2d29.19419!3d40.897767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac38f611b2753%3A0x15f3cecd5229d191!2zWWVzaWwgU2HEn2zEsWs!5e1!3m2!1str!2str!4v1780671494931!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ak İnşaat Merkez Ofis Konumu"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <img
              src="/images/ak-insaat-logo.png"
              alt="Ak İnşaat Logo"
              className={styles.footerLogo}
            />
          </div>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} Ak İnşaat — Yeşil Grup Şirketi. Tüm hakları saklıdır.
          </p>
          <button className={styles.footerBack} onClick={handleBackToSplash}>
            ← Yeşil Grup'a Dön
          </button>
        </div>
      </footer>
    </div>
  );
}
