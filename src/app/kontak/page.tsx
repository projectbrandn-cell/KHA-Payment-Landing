import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Hubungi PT KITA HARAPAN ABADI untuk informasi lebih lanjut tentang layanan kami.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Hubungi Kami</h1>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="font-semibold text-gray-900 mb-2">Nama Perusahaan</h2>
              <p className="text-gray-700">PT KITA HARAPAN ABADI</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="font-semibold text-gray-900 mb-2">NIB</h2>
              <p className="text-gray-700">0409250103157</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="font-semibold text-gray-900 mb-2">Alamat</h2>
              <p className="text-gray-700">
                The Executive Centre – One Pacific Place Level 11<br />
                Jl. Jend. Sudirman Kav. 52–53, SCBD<br />
                Senayan, Kebayoran Baru<br />
                Kota Adm. Jakarta Selatan, DKI Jakarta 12190
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="font-semibold text-gray-900 mb-2">Email</h2>
              <p className="text-gray-700">
                <a href="mailto:kitaharapanabadi@gmail.com" className="text-blue-600 hover:underline">
                  kitaharapanabadi@gmail.com
                </a>
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="font-semibold text-gray-900 mb-2">Telepon / WhatsApp</h2>
              <p className="text-gray-700">
                <a href="https://wa.me/6282121239287" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  082121239287
                </a>
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="font-semibold text-gray-900 mb-2">Jam Operasional</h2>
              <p className="text-gray-700">Senin – Jumat, 09.00 – 18.00 WIB</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Butuh Bantuan?</h3>
            <p className="text-gray-700 mb-4">
              Tim kami siap membantu Anda dengan pertanyaan seputar layanan pariwisata dan koordinasi event.
            </p>
            <a
              href="https://wa.me/6282121239287"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Chat via WhatsApp
            </a>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
