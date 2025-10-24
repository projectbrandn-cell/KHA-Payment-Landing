import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: "PT KITA HARAPAN ABADI — Informasi Pariwisata & Koordinasi Event (MICE)",
    template: "%s | PT KITA HARAPAN ABADI"
  },
  description: "Katalog layanan informasi pariwisata & koordinasi event (MICE). Pemesanan online, harga Rupiah, pembayaran aman tanpa redirect. Hubungi 082121239287.",
  keywords: [
    "informasi pariwisata",
    "koordinasi event",
    "MICE",
    "event organizer",
    "paket wisata",
    "travel assist",
    "pembayaran online",
    "xendit",
    "Jakarta",
    "PT KITA HARAPAN ABADI"
  ],
  authors: [{ name: "PT KITA HARAPAN ABADI" }],
  creator: "PT KITA HARAPAN ABADI",
  publisher: "PT KITA HARAPAN ABADI",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "PT KITA HARAPAN ABADI — Informasi Pariwisata & Koordinasi Event (MICE)",
    description: "Katalog layanan informasi pariwisata & koordinasi event (MICE). Pemesanan online, harga Rupiah, pembayaran aman tanpa redirect. Hubungi 082121239287.",
    siteName: "PT KITA HARAPAN ABADI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT KITA HARAPAN ABADI — Informasi Pariwisata & Koordinasi Event (MICE)",
    description: "Katalog layanan informasi pariwisata & koordinasi event (MICE). Pemesanan online, harga Rupiah, pembayaran aman.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
