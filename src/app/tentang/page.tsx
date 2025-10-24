import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Informasi tentang PT KITA HARAPAN ABADI - Layanan informasi pariwisata dan koordinasi event (MICE).",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Tentang Kami</h1>
          
          <div className="prose prose-gray max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Informasi Pariwisata & Koordinasi Event (MICE)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PT KITA HARAPAN ABADI adalah penyedia layanan informasi pariwisata dan koordinasi event 
                (MICE - Meetings, Incentives, Conferences, and Exhibitions) yang berkomitmen memberikan 
                solusi terpadu untuk kebutuhan perjalanan dan acara Anda.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Layanan Kami</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Informasi destinasi wisata dan rekomendasi perjalanan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Koordinasi event dan kegiatan MICE</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Kurasi vendor profesional (venue, catering, AV)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Konsultasi dan dukungan personal</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mengapa Memilih Kami?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Transparansi:</strong> Semua harga dalam Rupiah, tanpa biaya tersembunyi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Kemudahan:</strong> Pemesanan dan pembayaran di satu platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Keamanan:</strong> Pembayaran aman tanpa redirect ke situs lain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Profesional:</strong> Tim berpengalaman siap membantu Anda</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Identitas Usaha</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Nama Perusahaan:</strong> PT KITA HARAPAN ABADI</p>
                <p><strong>NIB:</strong> 0409250103157</p>
                <p><strong>Alamat:</strong> The Executive Centre – One Pacific Place Level 11, 
                Jl. Jend. Sudirman Kav. 52–53, SCBD, Senayan, Kebayoran Baru, 
                Kota Adm. Jakarta Selatan, DKI Jakarta 12190</p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:kitaharapanabadi@gmail.com" className="text-blue-600 hover:underline">
                    kitaharapanabadi@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Telepon/WA:</strong>{" "}
                  <a href="https://wa.me/6282121239287" className="text-blue-600 hover:underline">
                    082121239287
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center space-y-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mr-4"
            >
              Lihat Katalog Layanan
            </Link>
            <Link
              href="/kontak"
              className="inline-block border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
