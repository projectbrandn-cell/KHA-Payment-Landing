export default function FailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-700 mb-4">
          Pembayaran Gagal
        </h1>
        <p>Terjadi kesalahan dalam proses pembayaran Anda.</p>
      </div>
    </div>
  );
}
