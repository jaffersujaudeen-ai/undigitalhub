# UN Digital Hub

Premium bilingual (English/Tamil) website for UN Digital Hub, built with React, Vite, TypeScript and Express.

## Included

- Responsive luxury black and champagne-gold design
- Six service categories with the supplied indicative price ranges
- English/Tamil UI toggle
- Live project links: RVG Bakes, personal portfolio, LifeX showcase
- Founder section with image placeholder (replace with your photo)
- Dynamic WhatsApp enquiry form including service, requirement, budget, timeline and project details
- Optional Express API to store enquiries in PostgreSQL
- SEO metadata, social preview metadata, favicon, accessible focus states and reduced-motion support
- Editable privacy, terms, refund and revision policy drafts

## 1. Install and run locally

Install Node.js LTS, then in this folder:

```powershell
npm install
copy .env.example .env
npm run dev
```

Open `http://localhost:5173`. The frontend runs on port 5173 and API on port 4000.

If no `DATABASE_URL` is configured, the website and WhatsApp enquiry still work; server-side enquiry storage is skipped.

## 2. Enable database storage

1. Create a PostgreSQL database with a provider such as Neon or Supabase.
2. Copy its connection URL into `.env` as `DATABASE_URL=...`.
3. Set `DATABASE_SSL=true` for hosted database connections.
4. Restart `npm run dev`. The API creates its `enquiries` table automatically on startup.

The database stores submitted enquiry fields. Do not collect unnecessary sensitive personal information. Add a clear privacy notice before public launch.

## 3. WhatsApp

The business WhatsApp number is configured in `src/App.tsx` as `919487838963` (India country code + 9487838963). The form opens a prefilled WhatsApp message for the customer to review and send. It does not send messages automatically.

## 4. Founder photo and logo

- Place your portrait at `public/founder.jpg` and update the `FOUNDER_IMAGE` constant in `src/App.tsx` from `/founder-placeholder.svg` to `/founder.jpg`.
- Replace `public/favicon.svg` if you have an official logo mark.
- The header currently uses a custom text-based UN monogram so no missing image asset blocks the build.

## 5. Production deployment

### Frontend on Vercel
1. Push this project to a Git repository and import it into Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`

### Backend
The Express API is a separate long-running server. Deploy it to a Node host such as Render or Railway and set `DATABASE_URL`, `DATABASE_SSL`, `CLIENT_ORIGIN`, and `PORT`. Set `VITE_API_URL` as a Vite environment variable on Vercel to your deployed API URL (no trailing slash), for example `https://your-api.example.com`.

For a simple single-provider deployment, use a host that supports the Node server process. The supplied `vercel.json` handles SPA routing only; it does not convert the Express API into Vercel serverless functions.

## 6. Verify

```powershell
npm run build
```

Check:
- Service tabs and enquiry service selection
- English/Tamil toggle
- WhatsApp prefilled message
- Database storage when configured
- Mobile navigation and keyboard focus
- Privacy and policy links

## Policy pages

The policy text included in the website is a starting draft, not legal advice. Review it against your actual business practices and applicable Indian law before publishing.
