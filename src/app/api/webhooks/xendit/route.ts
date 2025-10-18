import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    // Get raw body and parse JSON
    const rawBody = await request.text();
    const body = JSON.parse(rawBody);

    // Get Xendit callback token from headers
    const xenditToken = request.headers.get("x-callback-token");
    const webhookToken = process.env.XENDIT_WEBHOOK_TOKEN || "";

    // Simple token match (Xendit expects this, not HMAC)
    if (webhookToken && xenditToken !== webhookToken) {
      console.error("Invalid Xendit webhook token");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    // Handle different invoice statuses
    const {
      id,
      external_id,
      status,
      amount,
      paid_amount,
      payer_email,
      payment_method,
      payment_channel,
      paid_at,
      updated,
    } = body;

    console.log("Xendit Webhook Received:", {
      id,
      external_id,
      status,
      amount,
      payer_email,
    });

    switch (status) {
      case "PAID":
        // Handle successful payment
        console.log("✅ Invoice PAID:", {
          id,
          external_id,
          amount: paid_amount,
          payer_email,
          payment_method,
          payment_channel,
          paid_at,
        });

        // TODO: Update your database
        // - Mark order as paid
        // - Send confirmation email
        // - Process order fulfillment
        // Example:
        // await db.order.update({
        //   where: { externalId: external_id },
        //   data: {
        //     status: 'PAID',
        //     paidAmount: paid_amount,
        //     paidAt: new Date(paid_at),
        //     paymentMethod: payment_method,
        //     paymentChannel: payment_channel,
        //   }
        // });

        break;

      case "EXPIRED":
        // Handle expired invoice
        console.log("⏰ Invoice EXPIRED:", {
          id,
          external_id,
          amount,
          payer_email,
          updated,
        });

        // TODO: Update your database
        // - Mark invoice as expired
        // - Send expiry notification to user
        // - Offer to create new invoice
        // Example:
        // await db.order.update({
        //   where: { externalId: external_id },
        //   data: {
        //     status: 'EXPIRED',
        //     expiredAt: new Date(updated),
        //   }
        // });

        break;

      case "SETTLED":
        // Handle payment received after expiry
        console.log("💰 Invoice SETTLED (after expiry):", {
          id,
          external_id,
          amount: paid_amount,
          payer_email,
          paid_at,
        });

        // TODO: Handle late payment
        // - Mark order as settled
        // - Notify admin about late payment
        // - Decide whether to fulfill order
        // Example:
        // await db.order.update({
        //   where: { externalId: external_id },
        //   data: {
        //     status: 'SETTLED_AFTER_EXPIRY',
        //     paidAmount: paid_amount,
        //     paidAt: new Date(paid_at),
        //   }
        // });

        break;

      case "PENDING":
        // Invoice created but not paid yet
        console.log("⏳ Invoice PENDING:", {
          id,
          external_id,
          amount,
          payer_email,
        });
        break;

      default:
        console.log("📋 Invoice status:", status, body);
    }

    // Always return 200 to acknowledge receipt
    return NextResponse.json({
      success: true,
      message: "Webhook processed successfully",
    });
  } catch (error: unknown) {
    console.error("❌ Webhook Error:", error);
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : "Unknown error";

    // Still return 200 to prevent Xendit from retrying
    // Log the error for debugging
    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 200 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Xendit webhook endpoint is active",
    timestamp: new Date().toISOString(),
  });
}
