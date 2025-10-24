"use client";
import { useRouter } from "next/navigation";
import Script from "next/script";

const services = [
  {
    id: 1,
    sku: "PKT-JKT-3H2M",
    name: "Paket Informasi Wisata Jakarta 3H2M",
    description: "Itinerary detail (transport, kuliner, destinasi), rekomendasi tiket/aktivitas, call-assist 30 menit.",
    price: 1250000,
  },
  {
    id: 2,
    sku: "EVT-MICE-BASIC",
    name: "Koordinasi Event (Basic)",
    description: "Kurasi vendor awal (venue/catering/AV), template rundown, 1x sesi koordinasi 60 menit.",
    price: 1850000,
  },
  {
    id: 3,
    sku: "TRAVEL-ASSIST-PREMIUM",
    name: "Travel Assist Premium",
    description: "Rencana perjalanan personal, rekomendasi akomodasi/aktivitas, dukungan chat 7 hari.",
    price: 2750000,
  },
];

export default function LandingPage() {
  const router = useRouter();

  const handleCheckout = (item: {
    id: number;
    sku: string;
    name: string;
    description: string;
    price: number;
  }) => {
    router.push(
      `/checkout?sku=${encodeURIComponent(item.sku)}&name=${encodeURIComponent(item.name)}&amount=${item.price}`
    );
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PT KITA HARAPAN ABADI",
    "description": "Layanan pembayaran online untuk event organizer, paket wisata, dan seminar",
    "url": process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    "offers": services.map((service) => ({
      "@type": "Offer",
      "name": service.name,
      "description": service.description,
      "price": service.price,
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="w-full py-6 bg-white shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">
            PT KITA HARAPAN ABADI
          </h1>
          <nav className="flex gap-4 text-sm">
            <a href="/kontak" className="text-gray-600 hover:text-blue-600">
              Kontak
            </a>
            <a href="/tentang" className="text-gray-600 hover:text-blue-600">
              Tentang
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 flex-grow">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Informasi Pariwisata & Koordinasi Event (MICE)
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami membantu perencanaan perjalanan dan kegiatan MICE melalui informasi destinasi, 
            rekomendasi vendor, dan koordinasi dasar yang transparan. Semua harga dalam Rupiah, 
            pemesanan dan pembayaran dilakukan di halaman ini tanpa diarahkan ke situs lain.
          </p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="text-xs text-gray-400 mb-2">SKU: {item.sku}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-blue-700 font-bold text-xl">
                  Rp {item.price.toLocaleString("id-ID")}
                </span>
                <button
                  onClick={() => handleCheckout(item)}
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Pesan
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full py-8 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="font-bold text-gray-800 mb-2">PT KITA HARAPAN ABADI</h3>
            <p className="text-sm text-gray-600">NIB: 0409250103157</p>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">
              The Executive Centre – One Pacific Place Level 11, Jl. Jend. Sudirman Kav. 52–53, SCBD, 
              Senayan, Kebayoran Baru, Jakarta Selatan 12190
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Email: <a href="mailto:kitaharapanabadi@gmail.com" className="text-blue-600 hover:underline">kitaharapanabadi@gmail.com</a> · 
              WA: <a href="https://wa.me/6282121239287" className="text-blue-600 hover:underline">082121239287</a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
            <a href="/kebijakan/terms" className="hover:text-blue-600">Syarat & Ketentuan</a>
            <span>·</span>
            <a href="/kebijakan/pengembalian" className="hover:text-blue-600">Kebijakan Pengembalian Dana</a>
            <span>·</span>
            <a href="/kebijakan/privasi" className="hover:text-blue-600">Kebijakan Privasi</a>
            <span>·</span>
            <a href="/kontak" className="hover:text-blue-600">Kontak</a>
          </div>
          <div className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} PT KITA HARAPAN ABADI · All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
