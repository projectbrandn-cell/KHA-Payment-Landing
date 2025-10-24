import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi PT KITA HARAPAN ABADI.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Kebijakan Privasi</h1>
        
        <div className="prose prose-gray max-w-none">
          <ol className="space-y-4 text-gray-700">
            <li>
              <strong className="text-gray-900">Data yang Dikumpulkan</strong> — Nama, email, nomor 
              telepon, detail pesanan, serta data teknis (log, device info) yang wajar untuk operasional situs.
            </li>
            
            <li>
              <strong className="text-gray-900">Tujuan</strong> — Memproses pesanan, komunikasi layanan, 
              peningkatan kualitas layanan, dan kepatuhan hukum.
            </li>
            
            <li>
              <strong className="text-gray-900">Berbagi Data</strong> — Kami dapat membagikan data yang 
              diperlukan kepada penyedia pembayaran berizin dan mitra operasional terkait.
            </li>
            
            <li>
              <strong className="text-gray-900">Keamanan</strong> — Kami menerapkan langkah yang wajar 
              untuk menjaga keamanan data.
            </li>
            
            <li>
              <strong className="text-gray-900">Retensi</strong> — Data disimpan sesuai kebutuhan 
              operasional dan ketentuan peraturan perundang-undangan.
            </li>
            
            <li>
              <strong className="text-gray-900">Hak Pengguna</strong> — Anda dapat meminta akses, 
              perbaikan, atau penghapusan data sesuai hukum yang berlaku.
            </li>
            
            <li>
              <strong className="text-gray-900">Kontak Privasi</strong> —{" "}
              <a href="mailto:kitaharapanabadi@gmail.com" className="text-blue-600 hover:underline">
                kitaharapanabadi@gmail.com
              </a>{" "}
              ·{" "}
              <a href="https://wa.me/6282121239287" className="text-blue-600 hover:underline">
                082121239287
              </a>
              .
            </li>
          </ol>

          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Komitmen Kami:</strong> PT KITA HARAPAN ABADI berkomitmen untuk melindungi 
              privasi Anda dan menangani data pribadi Anda dengan bertanggung jawab sesuai dengan 
              peraturan perundang-undangan yang berlaku.
            </p>
          </div>
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
  );
}
