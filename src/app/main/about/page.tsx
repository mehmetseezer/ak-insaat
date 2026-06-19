"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import pageStyles from "../page.module.css";
import styles from "./about.module.css";

const stats = [
  { num: "1994", label: "Kuruluş Yılı", desc: "30 yılı aşkın köklü ve kesintisiz tecrübe." },
  { num: "500+", label: "Mutlu Aile", desc: "Güvenle teslim edilen sıcak yuvalar." },
  { num: "320+", label: "Tamamlanan Proje", desc: "Zamanında ve eksiksiz taahhüt." },
  { num: "%100", label: "Deprem Güvenliği", desc: "Yapı denetim ve zemin uyumluluğu." },
];

const milestones = [
  {
    year: "1994",
    title: "Kuruluş & İlk Adımlar",
    desc: "Ak İnşaat, İstanbul merkezli butik ve estetik konut projeleri geliştirmek amacıyla 1994 yılında kuruldu. Dürüst ticaret ve kaliteli mühendislik vizyonu ilk günden itibaren temel ilkelerimiz oldu.",
  },
  {
    year: "2008",
    title: "İleri Yapı Teknolojileri & Deprem Güvenliği",
    desc: "Türkiye'nin deprem kuşağında yer alması bilinciyle, deprem modelleme yazılımlarını ve en güncel zemin analiz tekniklerini bünyemize kattık. Tüm projelerimizde C30+ beton kalitesi ve yüksek dayanımlı demir kullanımını standart hale getirdik.",
  },
  {
    year: "2016",
    title: "Sürdürülebilir Yapılar & Yeşil Enerji",
    desc: "Yeşil Grup çatısı altındaki ekolojik dönüşümün bir parçası olarak projelerimizde çevre dostu yalıtım malzemeleri, enerji tasarruflu aydınlatma sistemleri ve yağmur suyu geri kazanım mekanizmaları entegre etmeye başladık.",
  },
  {
    year: "2026",
    title: "Yeşil Grup Sinerjisi & Modern Yarınlar",
    desc: "Yeşil Grup bünyesindeki ortak sinerjiyle gücümüzü pekiştirerek, 6-7 katlı modern, güvenli ve mimari estetiği yüksek kentsel yaşam alanları geliştirmeye hız kesmeden devam ediyoruz.",
  },
];

export default function AboutPage() {
  const router = useRouter();

  const handleBackToSplash = () => {
    router.push("/");
  };

  return (
    <div className={pageStyles.page}>
      <Navbar onBackToSplash={handleBackToSplash} />

      {/* Spacer for fixed header */}
      <div style={{ height: "calc(var(--header-height) + 8px)" }} />

      {/* ── HEADER BANNER ── */}
      <div className={styles.aboutHeader} style={{ backgroundImage: "url('/images/hero_2.png')" }}>
        <div className={styles.aboutHeaderOverlay} />
        <div className={styles.aboutHeaderContent}>
          <h1 className={styles.aboutHeaderTitle}>Hakkımızda</h1>
          <p className={styles.aboutHeaderSubtitle}>
            30 yılı aşkın tecrübemiz ve sarsılmaz güven ilkelerimizle, yarının modern yaşam alanlarını bugün inşa ediyoruz.
          </p>
        </div>
      </div>

      {/* ── CORE STORY ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.grid}>
            
            {/* Left Column - Detailed Story */}
            <div className={styles.storyContent}>
              <span className={styles.tag}>KURUMSAL PROFiLiMiZ</span>
              <h2 className={styles.title}>Estetik, Konfor ve Deprem Güvenliği Bir Arada</h2>
              <p className={styles.storyText}>
                Temelleri 1994 yılında İstanbul'da atılan Ak İnşaat, geride bıraktığı 30 yılı aşkın sürede Türkiye'nin gayrimenkul ve yapı sektöründe dürüstlük, kalite ve yenilikçilik simgelerinden biri olmuştur. Bugüne kadar hayata geçirdiğimiz her yapıyı sadece beton ve çelikten ibaret görmedik; içinde hayat bulacak aileler için güvenli, huzurlu birer gelecek olarak tasarladık.
              </p>
              <p className={styles.storyText}>
                Ak İnşaat olarak önceliğimiz, deprem gerçeğine tam uyumlu, zemin etütleri titizlikle yapılmış ve en yüksek mühendislik standartlarında inşa edilmiş butik apartman projeleri sunmaktır. Şehrin dokusunu bozmayan, 6-7 katlı yatay mimari prensiplerine sadık kalan konutlarımızla hem estetik hem de güvenli bir kentsel dönüşüm vizyonu ortaya koyuyoruz.
              </p>
              <Link href="/main/contact" className={styles.storyCta}>
                Bizimle İletişime Geçin →
              </Link>
            </div>

            {/* Right Column - Stats Grid */}
            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                  <p className={styles.statDesc}>{s.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── TIMELINE HISTORY ── */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionInner}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className={styles.tag}>TARiHÇEMiZ</span>
            <h2 className={styles.title} style={{ marginTop: "0.5rem" }}>Kilometre Taşlarımız</h2>
            <p className={pageStyles.sectionDesc} style={{ margin: "0.6rem auto 0" }}>
              Kurulduğumuz ilk günden bugüne, kalite ve güven çıtasını her zaman daha yukarı taşıdık.
            </p>
          </div>

          <div className={styles.timelineContainer}>
            {milestones.map((m) => (
              <div key={m.year} className={styles.timelineItem}>
                <div className={styles.timelineLine} />
                <div className={styles.timelineDot} />
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineTitle}>{m.title}</div>
                <p className={styles.timelineDesc}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICE SHOWCASE ── */}
      <section className={pageStyles.section}>
        <div className={pageStyles.sectionInner}>
          <div className={pageStyles.officeGrid}>
            <div className={pageStyles.officeImageWrapper}>
              <img
                src="/images/ak-insaat-ofis-1.png"
                alt="Ak İnşaat Genel Merkez Ofisi"
                className={pageStyles.officeImage}
              />
            </div>
            <div className={pageStyles.officeInfo}>
              <h3 className={pageStyles.officeTitle}>Modern Merkez Ofisimiz</h3>
              <p className={pageStyles.officeText}>
                İstanbul Kartal'da (Atalar Mahallesi, Üsküdar Caddesi) yer alan modern merkez ofisimiz, Ak İnşaat'ın vizyonunu, mimari anlayışını ve detaylara verdiği önemi yansıtmaktadır. Dinamik, şeffaf ve ortak çalışmayı destekleyen bir ortam olarak kurgulanan ofisimiz; mimarlarımız, inşaat mühendislerimiz ve teknik ekiplerimizin projeleri en ince ayrıntısına kadar planlamasına ev sahipliği yapmaktadır.
              </p>
              <p className={pageStyles.officeText}>
                Ziyaretçilerimizi ağırladığımız toplantı ve sunum odalarımızda, projelerimizin 3 boyutlu modellemelerini, kat planlarını, malzeme numunelerini ve peyzaj detaylarını müşterilerimizle birlikte detaylıca inceliyor, hayallerinizdeki yaşam alanlarını tasarlamak için tüm süreci şeffaf bir şekilde paylaşıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={pageStyles.footer}>
        <div className={pageStyles.footerInner}>
          <div className={pageStyles.footerBrand}>
            <img
              src="/images/ak-insaat-logo.png"
              alt="Ak İnşaat Logo"
              className={pageStyles.footerLogo}
            />
          </div>
          <p className={pageStyles.footerText}>
            © {new Date().getFullYear()} Ak İnşaat — Yeşil Grup Şirketi. Tüm hakları saklıdır.
          </p>
          <button className={pageStyles.footerBack} onClick={handleBackToSplash}>
            ← Yeşil Grup'a Dön
          </button>
        </div>
      </footer>
    </div>
  );
}
