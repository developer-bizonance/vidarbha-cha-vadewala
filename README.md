# Vidarbha Cha Vadewala — Website

TypeScript Next.js (App Router) + Tailwind CSS site for Vidarbha Cha Vadewala,
a startup specializing only in vadas (dahi vada, sabudana vada, medu vada,
rassa vada and more).

## What's new in this version
- **Converted to TypeScript** — every component and page is now `.tsx`/`.ts`
  with typed props (`app/**/*.tsx`, `tsconfig.json`).
- **Vada-only menu & copy** — Home, Menu and About now focus exclusively on
  vada varieties (dahi vada, batata vada, sabudana vada, medu vada, rassa
  vada, corn-palak vada, cheese vada, vada pav) instead of a general street-food
  menu. Franchise/About copy was reframed for a startup rather than an
  established 12-year chain.
- **Highlighted menu item** — Dahi Vada is marked as the bestseller with a
  glowing gold-bordered card and a "★ Bestseller" badge, both on the Home page
  and the Menu page.
- **Navbar logo removed** — the navbar now shows the brand name in Marathi
  ("विदर्भाचा वडेवाला") as text only, no logo image. (`app/components/Navbar.tsx`)
- **Opening vada animation** — when someone opens the site, a short animation
  of a vada frying in a kadhai plays for ~2 seconds before revealing the page
  (`app/components/VadaIntro.tsx`). It only plays once per browser session
  (uses `sessionStorage`) so repeat page views aren't interrupted.
- **Home delivery messaging** — a red delivery strip above the navbar
  (`app/components/DeliveryBar.tsx`), plus mentions in the hero and a
  dedicated delivery/franchise CTA section on the Home page.

## Pages
- `/` — Home
- `/about` — About Us
- `/menu` — Menu (vada-only, spice ratings, highlighted bestseller)
- `/franchise` — Franchise info + enquiry form
- `/career` — Open roles + application form
- `/contact` — Contact info + form

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes / next steps for you
- **Fonts**: this build uses system font stacks (Devanagari-capable fonts for
  Marathi text, bold sans stacks for headings) so it runs with zero external
  network requests. For the exact brand look, swap in Google Fonts "Anton"
  (display) + "Manrope" (body) + "Noto Sans Devanagari" — instructions are in
  a comment at the top of `app/globals.css`.
- **Forms**: `EnquiryForm` (used on Franchise, Career, Contact) currently just
  shows a "Got it" confirmation in the UI — it isn't wired to a backend yet.
  Connect `handleSubmit` in `app/components/EnquiryForm.tsx` to an API route,
  email service (e.g. Resend), or CRM to actually receive submissions.
- **Delivery area / ordering**: the delivery strip and CTAs currently link to
  the Contact page. If you get an actual ordering flow or delivery-partner
  link (Zomato/Swiggy/your own checkout), swap those links in
  `app/components/DeliveryBar.tsx` and `app/page.tsx`.
- **Logo**: `public/logo.png` (your uploaded logo) is no longer referenced
  anywhere in the site — it's kept in `public/` in case you want to use it as
  a favicon or on social sharing cards later.
- **Content**: menu items, franchise numbers, roles, and stats are placeholder
  copy — search each page file for arrays like `MENU`, `WHY`, `ROLES`,
  `STATS`, `HIGHLIGHTS` and edit directly.

## Deploy
Works out of the box on Vercel: push to a GitHub repo and import it at
vercel.com/new, or run `npx vercel` from this folder.
