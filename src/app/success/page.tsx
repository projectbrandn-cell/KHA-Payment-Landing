import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pembayaran Berhasil",
  description: "Transaksi Anda telah berhasil diproses. Terima kasih atas pembayaran Anda.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="text-center max-w-md bg-white p-8 rounded-xl shadow-lg">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Pembayaran Berhasil!
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Terima kasih! Transaksi Anda telah berhasil diproses. 
          Bukti transaksi telah dikirim ke email Anda.
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Kembali ke Beranda
          </Link>
          <p className="text-sm text-gray-600">
            Butuh bantuan? Hubungi{" "}
            <a href="https://wa.me/6282121239287" className="text-blue-600 hover:underline">
              082121239287
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
