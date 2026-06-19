"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import styles from "../page.module.css";

const projects = [
  {
    id: 1,
    name: "Ak Panorama Evleri",
    location: "İstanbul, Başakşehir",
    status: "Tamamlandı",
    year: "2023",
    type: "Konut",
    img: "/images/ak_insaat.png",
  },
  {
    id: 2,
    name: "Yeşil Vadi Evleri",
    location: "Ankara, Çankaya",
    status: "Yapım Aşamasında",
    year: "2025",
    type: "Konut",
    img: "/images/ak_insaat.png",
  },
  {
    id: 3,
    name: "Ak Ticaret Merkezi",
    location: "İzmir, Bayraklı",
    status: "Tamamlandı",
    year: "2022",
    type: "Ticari",
    img: "/images/ak_insaat.png",
  },
  {
    id: 4,
    name: "Bostancı Park Evleri",
    location: "İstanbul, Kadıköy",
    status: "Planlama",
    year: "2026",
    type: "Karma",
    img: "/images/ak_insaat.png",
  },
  {
    id: 5,
    name: "Ak Ofis Binası",
    location: "Bursa, Nilüfer",
    status: "Tamamlandı",
    year: "2021",
    type: "Ticari",
    img: "/images/ak_insaat.png",
  },
  {
    id: 6,
    name: "Marina Evleri",
    location: "Muğla, Bodrum",
    status: "Yapım Aşamasında",
    year: "2025",
    type: "Konut",
    img: "/images/ak_insaat.png",
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  const handleBackToSplash = () => {
    router.push("/");
  };

  return (
    <div className={styles.page}>
      <Navbar onBackToSplash={handleBackToSplash} />

      {/* Spacer for fixed header */}
      <div style={{ height: "calc(var(--header-height) + 18px)" }} />

      {/* ── PROJECTS ── */}
      <section className={styles.section} style={{ minHeight: "calc(100vh - 220px)" }}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>PROJELERİMİZ</span>
            <h2 className={styles.sectionTitle}>Seçkin Yapılarımız</h2>
            <p className={styles.sectionDesc}>
              Nitelikli konut projelerinden modern apartmanlara ve ticari alanlara uzanan geniş portföyümüzden seçmeler.
            </p>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <div key={p.id} className={styles.projectCard}>
                <div className={styles.projectImg} style={{ backgroundImage: `url('${p.img}')` }} />
                <div className={styles.projectInfo}>
                  <span className={styles.projectType}>{p.type} · {p.year}</span>
                  <h3 className={styles.projectName}>{p.name}</h3>
                  <p className={styles.projectLocation}>📍 {p.location}</p>
                </div>
              </div>
            ))}
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
