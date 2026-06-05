import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yeşil Grup Holding",
  description:
    "Yeşil Grup bünyesindeki Ak İnşaat ve Yeşil Sağlık şirketleri hakkında bilgi alın. Modern inşaat çözümleri ve sağlık hizmetleri tek çatı altında.",
  keywords: ["Yeşil Grup", "Ak İnşaat", "Yeşil Sağlık", "inşaat", "gayrimenkul", "sağlık"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
