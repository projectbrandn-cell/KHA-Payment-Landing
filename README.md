# PT KITA HARAPAN ABADI - Payment Landing Page

Payment platform for events, travel packages, and seminars with Xendit integration.

## Features

- 🎫 Service listing with pricing
- 💳 Secure payment via Xendit (QRIS, Virtual Account, e-Wallet)
- 🔔 Webhook integration for payment notifications
- 📱 Responsive design
- 🔒 Payment verification and security

## Getting Started

### Prerequisites

- Node.js 18+ and yarn/npm
- Xendit account ([Sign up here](https://dashboard.xendit.co/register))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/projectbrandn-cell/KHA-Payment-Landing.git
cd KHA-Payment-Landing
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your `.env` file:
```env
XENDIT_API_KEY="your_xendit_api_key"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
XENDIT_WEBHOOK_TOKEN="your_webhook_token"
```

5. Run the development server:
```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Xendit Webhook Setup

### 1. Get Your Webhook URL

Your webhook endpoint will be:
- **Local (for testing)**: Use [ngrok](https://ngrok.com/) to expose localhost
  ```bash
  ngrok http 3000
  # Your webhook URL: https://YOUR_NGROK_URL/api/webhooks/xendit
  ```
- **Production**: `https://yourdomain.com/api/webhooks/xendit`

### 2. Configure Xendit Dashboard

1. Login to [Xendit Dashboard](https://dashboard.xendit.co/)
2. Go to **Settings** > **Webhooks** > **Callbacks**
3. Click **+ Add Webhook**
4. Configure:
   - **Webhook URL**: `https://yourdomain.com/api/webhooks/xendit`
   - **Events to notify**:
     - ✅ Invoice paid
     - ✅ Invoice expired
     - ✅ Invoice payment received after expiry
5. Copy the **Verification Token** and add to `.env`:
   ```env
   XENDIT_WEBHOOK_TOKEN="your_verification_token"
   ```

### 3. Test Webhook Locally

Use ngrok for local testing:

```bash
# Terminal 1: Run your app
yarn dev

# Terminal 2: Expose with ngrok
ngrok http 3000

# Use the ngrok URL in Xendit Dashboard
# Example: https://abc123.ngrok.io/api/webhooks/xendit
```

### 4. Webhook Events Handled

The webhook handles these events:

| Status | Description | Action |
|--------|-------------|--------|
| `PAID` | Invoice successfully paid | ✅ Process order, send confirmation |
| `EXPIRED` | Invoice expired without payment | ⏰ Notify user, mark as expired |
| `SETTLED` | Payment received after expiry | 💰 Handle late payment |
| `PENDING` | Invoice created, awaiting payment | ⏳ Monitor status |

### 5. Verify Webhook is Working

Test the endpoint:
```bash
curl http://localhost:3000/api/webhooks/xendit
```

Expected response:
```json
{
  "status": "ok",
  "message": "Xendit webhook endpoint is active",
  "timestamp": "2025-10-18T..."
}
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `XENDIT_API_KEY` | Your Xendit API key | ✅ Yes |
| `NEXT_PUBLIC_BASE_URL` | Your application URL | ✅ Yes |
| `XENDIT_WEBHOOK_TOKEN` | Webhook verification token | ⚠️ Recommended |

## API Routes

- `POST /api/create-checkout` - Create payment invoice
- `POST /api/webhooks/xendit` - Handle Xendit callbacks
- `GET /api/webhooks/xendit` - Health check

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── create-checkout/
│   │   │   └── route.ts          # Create Xendit invoice
│   │   └── webhooks/
│   │       └── xendit/
│   │           └── route.ts      # Handle Xendit webhooks
│   ├── checkout/
│   │   └── page.tsx              # Payment form
│   ├── success/
│   │   └── page.tsx              # Success page
│   ├── fail/
│   │   └── page.tsx              # Failed payment page
│   ├── layout.tsx                # Root layout with SEO
│   ├── page.tsx                  # Landing page
│   ├── sitemap.ts                # Dynamic sitemap
│   └── manifest.ts               # PWA manifest
└── public/
    └── robots.txt                # SEO robots file
```

## Production Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import to [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Update Webhook URL

After deployment, update the webhook URL in Xendit Dashboard:
```
https://your-production-domain.com/api/webhooks/xendit
```

### Update Environment Variables

```env
NEXT_PUBLIC_BASE_URL="https://your-production-domain.com"
```

## Security Best Practices

- ✅ Always verify webhook signatures using `XENDIT_WEBHOOK_TOKEN`
- ✅ Never expose API keys in client-side code
- ✅ Use HTTPS in production
- ✅ Validate all webhook payloads
- ✅ Log webhook events for debugging
- ✅ Return 200 status to prevent Xendit retries

## Development

Build for production:
```bash
yarn build
```

Run production build:
```bash
yarn start
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payment**: Xendit API
- **Deployment**: Vercel (recommended)

## Support

For issues or questions:
- Xendit Docs: https://docs.xendit.co/
- Next.js Docs: https://nextjs.org/docs

## License

© 2025 PT KITA HARAPAN ABADI. All rights reserved.

