import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan layanan PT KITA HARAPAN ABADI.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Syarat & Ketentuan</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Selamat datang di PT KITA HARAPAN ABADI (&quot;Kami&quot;). Dengan menggunakan situs ini, 
            Anda (&quot;Pengguna&quot;) menyatakan setuju terhadap ketentuan berikut:
          </p>

          <ol className="space-y-4 text-gray-700">
            <li>
              <strong className="text-gray-900">Layanan</strong> — Kami menyediakan layanan informasi 
              pariwisata dan koordinasi event sebagaimana tercantum di katalog.
            </li>
            
            <li>
              <strong className="text-gray-900">Ketersediaan</strong> — Layanan bergantung pada 
              ketersediaan mitra/penyedia. Penyesuaian dapat terjadi dengan pemberitahuan.
            </li>
            
            <li>
              <strong className="text-gray-900">Harga & Mata Uang</strong> — Seluruh harga dinyatakan 
              dalam Rupiah (IDR) dan dapat berubah sebelum pembayaran dilakukan.
            </li>
            
            <li>
              <strong className="text-gray-900">Pemesanan</strong> — Pengguna wajib mengisi data yang 
              benar dan dapat dihubungi. Pesanan diproses setelah pembayaran diterima/terverifikasi.
            </li>
            
            <li>
              <strong className="text-gray-900">Pembayaran</strong> — Pembayaran diproses di halaman 
              situs ini melalui penyedia pembayaran berizin, tanpa diarahkan ke situs lain.
            </li>
            
            <li>
              <strong className="text-gray-900">Perubahan & Penjadwalan Ulang</strong> — Permintaan 
              perubahan bergantung ketersediaan dan dapat dikenakan biaya tambahan.
            </li>
            
            <li>
              <strong className="text-gray-900">Pengembalian Dana</strong> — Mengacu pada Kebijakan 
              Pengembalian Dana yang berlaku.
            </li>
            
            <li>
              <strong className="text-gray-900">Penggunaan yang Dilarang</strong> — Dilarang melakukan 
              penipuan, pelanggaran hukum, atau penyalahgunaan layanan/situs.
            </li>
            
            <li>
              <strong className="text-gray-900">Batasan Tanggung Jawab</strong> — Sepanjang diizinkan 
              hukum, tanggung jawab kami terbatas pada nilai transaksi yang Anda bayarkan kepada kami 
              untuk layanan terkait.
            </li>
            
            <li>
              <strong className="text-gray-900">Hak Kekayaan Intelektual</strong> — Konten pada situs 
              dilindungi hukum. Dilarang menyalin tanpa izin.
            </li>
            
            <li>
              <strong className="text-gray-900">Perubahan Ketentuan</strong> — Kami dapat memperbarui 
              ketentuan ini sewaktu-waktu. Versi terbaru berlaku saat dipublikasikan.
            </li>
            
            <li>
              <strong className="text-gray-900">Kontak</strong> — Email:{" "}
              <a href="mailto:kitaharapanabadi@gmail.com" className="text-blue-600 hover:underline">
                kitaharapanabadi@gmail.com
              </a>{" "}
              · WA:{" "}
              <a href="https://wa.me/6282121239287" className="text-blue-600 hover:underline">
                082121239287
              </a>
              .
            </li>
          </ol>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Identitas Usaha:</strong> PT KITA HARAPAN ABADI · NIB 0409250103157 · 
              Alamat: The Executive Centre – One Pacific Place Level 11, Jl. Jend. Sudirman Kav. 52–53, 
              SCBD, Senayan, Kebayoran Baru, Kota Adm. Jakarta Selatan, DKI Jakarta 12190.
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
