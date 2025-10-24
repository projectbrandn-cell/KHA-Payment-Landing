import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pembayaran Gagal",
  description: "Terjadi kesalahan dalam proses pembayaran. Silakan coba lagi.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="text-center max-w-md bg-white p-8 rounded-xl shadow-lg">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-red-700 mb-4">
          Pembayaran Gagal
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Maaf, transaksi tidak berhasil. Silakan coba lagi atau hubungi kami untuk bantuan.
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Coba Lagi
          </Link>
          <a
            href="https://wa.me/6282121239287"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border-2 border-green-600 text-green-600 py-3 px-4 rounded-lg hover:bg-green-50 transition-colors font-medium"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
