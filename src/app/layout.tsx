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
    default: "PT KITA HARAPAN ABADI - Pembayaran Event & Perjalanan",
    template: "%s | PT KITA HARAPAN ABADI"
  },
  description: "Layanan pembayaran online untuk event organizer, paket wisata, dan seminar. Transaksi cepat & aman via Xendit (QRIS, Virtual Account, e-wallet).",
  keywords: ["pembayaran online", "event organizer", "paket wisata", "seminar", "xendit", "QRIS", "virtual account", "e-wallet", "pembayaran aman"],
  authors: [{ name: "PT KITA HARAPAN ABADI" }],
  creator: "PT KITA HARAPAN ABADI",
  publisher: "PT KITA HARAPAN ABADI",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "PT KITA HARAPAN ABADI - Pembayaran Event & Perjalanan",
    description: "Layanan pembayaran online untuk event organizer, paket wisata, dan seminar. Transaksi cepat & aman via Xendit.",
    siteName: "PT KITA HARAPAN ABADI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT KITA HARAPAN ABADI - Pembayaran Event & Perjalanan",
    description: "Layanan pembayaran online untuk event organizer, paket wisata, dan seminar.",
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
