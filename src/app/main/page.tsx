"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import styles from "./page.module.css";

const featuredProjects = [
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
];

const values = [
  { icon: "🏗️", title: "Kalite Odaklı", desc: "Her projede en yüksek yapı kalitesi standartlarını uyguluyoruz." },
  { icon: "📐", title: "Modern Tasarım", desc: "Çağdaş mimari anlayışla yaşam alanlarını yeniden tanımlıyoruz." },
  { icon: "🤝", title: "Güvenilirlik", desc: "30 yılı aşkın deneyimimizle söz verdiğimizi teslim ediyoruz." },
  { icon: "🌱", title: "Sürdürülebilirlik", desc: "Çevre dostu yapı malzemeleri ve enerji tasarruflu sistemler." },
];

export default function MainPage() {
  const router = useRouter();

  const handleBackToSplash = () => {
    router.push("/");
  };

  return (
    <div className={styles.page}>
      <Navbar onBackToSplash={handleBackToSplash} />

      {/* ── HERO CAROUSEL ── */}
      <HeroCarousel />

      {/* ── FEATURED PROJECTS ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>ÖNE ÇIKAN PROJELER</span>
            <h2 className={styles.sectionTitle}>Seçkin Yapılarımız</h2>
            <p className={styles.sectionDesc}>
              Ak İnşaat güvencesiyle tamamlanan ve yapımı devam eden projelerimizden bazıları.
            </p>
          </div>
          
          <div className={styles.projectsGrid}>
            {featuredProjects.map((p) => (
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

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/main/projects" className={styles.aboutCta} style={{ fontSize: "1rem", paddingBottom: "4px" }}>
              Tüm Projelerimizi İnceleyin →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES / BRIEF ABOUT ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <span className={styles.sectionTag}>DEĞERLERİMİZ</span>
              <h2 className={styles.sectionTitle}>Neden<br />Ak İnşaat?</h2>
              <p className={styles.aboutText}>
                30 yılı aşkın tecrübemiz ve güven odaklı çalışma prensiplerimizle, konut sakinlerimize sadece bir ev değil, modern ve huzurlu bir yaşam alanı sunuyoruz.
              </p>
              <Link href="/main/about" className={styles.aboutCta}>Firmamız Hakkında Detaylı Bilgi →</Link>
            </div>
            <div className={styles.aboutRight}>
              {values.map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <span className={styles.valueIcon} style={{ fontSize: "1.6rem" }}>{v.icon}</span>
                  <div>
                    <h4 className={styles.valueTitle}>{v.title}</h4>
                    <p className={styles.valueDesc}>{v.desc}</p>
                  </div>
                </div>
              ))}
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
