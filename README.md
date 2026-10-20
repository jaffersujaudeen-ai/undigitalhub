# UN Digital Hub — website source

Plain HTML/CSS/JS. No build step, no dependencies, no framework.

## Files

- `index.html` — all pages/views (home, service pages, order wizard, orders, payments) as one single-page app with hash-based routing (`#/service/...`, `#/order`, `#/orders`, `#/pay`)
- `style.css` — all styling, including dark-mode support
- `script.js` — routing, the order wizard, service content, and the payment card
- `assets/logo-black.png`, `assets/logo-white.png` — the UN Digital Hub monogram (light/dark variants)

## Running it locally

Just open `index.html` in a browser — no server needed for browsing.

## A few things that rely on the Claude artifact runtime

Order submission, "My orders," and payment-reference tracking call `claude.use('db')` / `claude.use('user')` in `script.js` — those only resolve inside a published Claude artifact. Outside that environment (plain GitHub Pages or Vercel hosting), those calls will fail gracefully (the wizard shows "submitted, not saved" / "sign in to view your orders" rather than breaking), but nothing will actually persist. To get real order storage on your own domain, those sections need to be pointed at your own backend (e.g. Supabase) instead.

## Deploying

1. Push this folder to a GitHub repository.
2. Import the repo into Vercel (Add New → Project). It's a static site — Vercel needs no build command.
3. Deploy. Vercel redeploys automatically on every push to the repo.

## Editing

Everything is plain text — open in VS Code and search for the copy you want to change. Service content and pricing live in `script.js` (`SERVICES`, `SERVICE_DETAILS`, `GROUP_CONTENT`); page sections live in `index.html`.
