"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function CheckoutForm() {
  const params = useSearchParams();
  const sku = params.get("sku") || "";
  const serviceName = params.get("name") || "";
  const serviceAmount = params.get("amount") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    sku: sku,
    amount: serviceAmount,
    notes: serviceName,
  });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm((f) => ({ ...f, sku, amount: serviceAmount, notes: serviceName }));
  }, [sku, serviceAmount, serviceName]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreed) {
      alert("Mohon setujui Syarat & Ketentuan sebelum melanjutkan");
      return;
    }
    
    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          amount: parseInt(form.amount, 10),
        }),
      });
      const data = await res.json();
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        alert("Gagal membuat checkout");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">Checkout</h1>

        {/* Order Summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
          <h2 className="font-semibold text-gray-800">Ringkasan Pesanan</h2>
          <div className="text-sm text-gray-600">
            <div><span className="font-medium">Item:</span> {form.notes}</div>
            <div><span className="font-medium">SKU:</span> {form.sku}</div>
            <div className="text-lg font-bold text-blue-700 mt-2">
              Harga: Rp {parseInt(form.amount || "0").toLocaleString("id-ID")}
            </div>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-gray-700">
          <p className="leading-relaxed">
            Pembayaran diproses aman di halaman ini dan tidak diarahkan ke website lain. 
            Semua harga dalam Rupiah (IDR).
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              placeholder="Masukkan nama lengkap"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              placeholder="nama@email.com"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              No. HP/WA <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              placeholder="08xxxxxxxxxx"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
            Saya telah membaca dan menyetujui{" "}
            <a href="/kebijakan/terms" target="_blank" className="text-blue-600 hover:underline">
              Syarat & Ketentuan
            </a>
            ,{" "}
            <a href="/kebijakan/pengembalian" target="_blank" className="text-blue-600 hover:underline">
              Kebijakan Pengembalian Dana
            </a>
            , dan{" "}
            <a href="/kebijakan/privasi" target="_blank" className="text-blue-600 hover:underline">
              Kebijakan Privasi
            </a>
            .
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !agreed}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-lg transition-colors"
        >
          {loading ? "Memproses..." : "Bayar Sekarang"}
        </button>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-600">
          Butuh bantuan? Hubungi kami di{" "}
          <a href="https://wa.me/6282121239287" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            WhatsApp 082121239287
          </a>
        </p>
      </form>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <p className="text-center">Memuat...</p>
        </div>
      </div>
    }>
      <CheckoutForm />
    </Suspense>
  );
}
