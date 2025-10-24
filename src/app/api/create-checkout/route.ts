import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, amount, notes, sku } = body;

    const response = await fetch("https://api.xendit.co/v2/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(`${process.env.XENDIT_API_KEY}:`).toString("base64"),
      },
      body: JSON.stringify({
        external_id: `order-${sku || 'ITEM'}-${Date.now()}`,
        payer_email: email,
        description: `${notes || "Pembayaran Layanan"} (SKU: ${sku || 'N/A'})`,
        amount: amount,
        customer: {
          given_names: name,
          mobile_number: phone,
          email: email,
        },
        success_redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        failure_redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/fail`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Xendit API error:", errorText);
      return NextResponse.json(
        { error: "Gagal membuat invoice di Xendit" },
        { status: 500 }
      );
    }

    const data = await response.json();

    return NextResponse.json({ checkoutUrl: data.invoice_url });
  } catch (error: unknown) {
    console.error("Server Error:", error);
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
