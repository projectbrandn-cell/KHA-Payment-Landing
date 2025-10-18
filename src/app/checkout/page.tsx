"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function CheckoutForm() {
  const params = useSearchParams();
  const serviceName = params.get("name") || "";
  const serviceAmount = params.get("amount") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: serviceAmount,
    notes: serviceName,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm((f) => ({ ...f, amount: serviceAmount, notes: serviceName }));
  }, [serviceAmount, serviceName]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-stone-950">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-xl font-semibold text-center">Form Pembayaran</h1>

        <input
          name="name"
          placeholder="Nama"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        />
        <input
          name="phone"
          placeholder="Nomor HP"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
        />
        <input
          name="amount"
          placeholder="Nominal"
          type="number"
          value={form.amount}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md bg-gray-100"
          readOnly
        />
        <textarea
          name="notes"
          placeholder="Catatan"
          value={form.notes}
          onChange={handleChange}
          className="w-full border p-2 rounded-md bg-gray-100"
          readOnly
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {loading ? "Memproses..." : "Bayar Sekarang"}
        </button>
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
