import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Pengembalian Dana",
  description: "Kebijakan pengembalian dana PT KITA HARAPAN ABADI.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Kebijakan Pengembalian Dana</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Kami berupaya memberikan layanan terbaik. Ketentuan berikut berlaku untuk permintaan 
            pengembalian dana (&quot;refund&quot;):
          </p>

          <ol className="space-y-4 text-gray-700">
            <li>
              <strong className="text-gray-900">Kelayakan</strong> — Refund dapat diajukan jika 
              (a) layanan belum diproses sama sekali, atau (b) terjadi kegagalan yang disebabkan oleh kami.
            </li>
            
            <li>
              <strong className="text-gray-900">Batas Waktu</strong> — Ajukan refund maksimal 7 hari 
              kalender sejak tanggal pembayaran dengan melampirkan bukti dan alasan.
            </li>
            
            <li>
              <strong className="text-gray-900">Non-Refundable</strong> — Biaya pihak ketiga yang sudah 
              digunakan, biaya administrasi pembayaran, serta bagian layanan yang sudah diberikan tidak 
              dapat dikembalikan.
            </li>
            
            <li>
              <strong className="text-gray-900">Proses</strong> — Setelah disetujui, refund diproses 
              ke metode pembayaran asal dalam 7–14 hari kerja.
            </li>
            
            <li>
              <strong className="text-gray-900">Kontak Refund</strong> — Email:{" "}
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

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Catatan:</strong> Untuk permintaan refund, harap hubungi kami melalui email atau 
              WhatsApp dengan menyertakan nomor pesanan dan alasan permintaan Anda.
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
