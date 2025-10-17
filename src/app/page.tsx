"use client";
import { useRouter } from "next/navigation";

const services = [
  {
    id: 1,
    name: "Paket Wisata Bali 3 Hari 2 Malam",
    description: "Nikmati liburan tak terlupakan di Bali bersama keluarga.",
    price: 2500000,
  },
  {
    id: 2,
    name: "Event Organizer Corporate Gathering",
    description: "Layanan profesional untuk acara perusahaan Anda.",
    price: 5000000,
  },
  {
    id: 3,
    name: "Tiket Seminar Leadership 2025",
    description:
      "Belajar dari pembicara inspiratif tentang kepemimpinan modern.",
    price: 750000,
  },
];

export default function LandingPage() {
  const router = useRouter();

  const handleCheckout = (item: {
    id: number;
    name: string;
    description: string;
    price: number;
  }) => {
    router.push(
      `/checkout?name=${encodeURIComponent(item.name)}&amount=${item.price}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="w-full py-6 bg-white shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">
            PT KITA HARAPAN ABADI
          </h1>
          <a
            href="/contact"
            className="text-sm text-gray-600 hover:text-blue-600"
          >
            Kontak
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 flex-grow">
        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            Pembayaran Layanan Event & Perjalanan
          </h2>
          <p className="text-gray-500 mt-2">
            Transaksi cepat & aman via Xendit (QRIS, VA, e-wallet)
          </p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-500 mt-2">{item.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-blue-700 font-semibold text-lg">
                  Rp {item.price.toLocaleString("id-ID")}
                </span>
                <button
                  onClick={() => handleCheckout(item)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full py-6 bg-white text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PT KITA HARAPAN ABADI · NIB 1234567890 ·
        All rights reserved.
      </footer>
    </div>
  );
}
