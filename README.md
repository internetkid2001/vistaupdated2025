# Vista Updated Website

A Next.js-based portfolio and media showcase site with a fixed sidebar, CSS-Module styling, and video embeds.

---

## 📦 Tech Stack

* **Framework:** Next.js 14 (App Router + TypeScript)
* **Styling:** Tailwind CSS (global resets) + CSS Modules (components & pages)
* **Video Hosting:** YouTube embeds & CDN-hosted MP4s
* **Routing:** Next.js `<Link>` for internal, standard `<a>` for external
* **Icons & Fonts:** System-sans UI stack (SF Pro on macOS, Segoe UI on Windows)
* **Deployment:** Vercel / static export friendly

---

## 🔍 File Structure

```
.
├── next.config.js             # CSP headers (dev vs. prod)
├── package.json
├── public/
│   └── favicon.ico
└── src/
    ├── app/
    │   ├── globals.css        # global resets + Tailwind imports
    │   ├── layout.tsx         # root layout (flex sidebar + main)
    │   ├── page.tsx           # home page (video hero)
    │   ├── page.module.css    # home CSS‐module (16∶9 aspect + centering)
    │   ├── store/
    │   │   └── page.tsx       # external-link stub → vist4.net/store
    │   ├── archive/
    │   │   └── page.tsx       # external-link stub → Instagram
    │   ├── made-by-vista/
    │   │   ├── page.tsx       # video grid with hover titles
    │   │   └── page.module.css
    │   ├── contact/
    │   │   └── page.tsx       # coming soon via ComingSoon.module.css
    │   ├── sms-newsletter/
    │   │   └── page.tsx       # coming soon
    │   └── faq-terms/
    │       ├── page.tsx       # FAQ & Terms page
    │       └── page.module.css
    └── components/
        ├── Sidebar.tsx        # fixed sidebar + home-GIF + nav links
        └── Sidebar.module.css
```

---

## 🚀 Setup & Run

1. **Clone & install**

   ```bash
   git clone <repo-url>
   cd vistaupdated2025
   npm install
   ```

2. **Dev server**

   ```bash
   npm run dev
   ```

   * Home: `http://localhost:3000/`
   * Store: external `vist4.net/store`
   * Archive: Instagram
   * Made by Vista: grid of CDN & YouTube videos
   * FAQ & Terms: white-background policy page

3. **Build & export**

   ```bash
   npm run build
   npm run start     # or `npm run export` for static
   ```

---

## 🔧 What We Did

1. **Initialized Next.js** with TypeScript, App Router, ESLint, Tailwind CSS.
2. **Configured CSP** in `next.config.js` (loosened in dev, strict in prod) to allow HMR, inline scripts, video & iframe embeds.
3. **Switched to flex layout** in `layout.tsx`:

   * `<body class="h-screen flex overflow-hidden">`
   * `<Sidebar/>` + `<main class="flex-1 bg-white overflow-auto p-6">`
4. **Built `Sidebar`** as a CSS-Module:

   * Sticky GIF home-link on top
   * Internal (`<Link>`) vs. external (`<a>`) nav items
   * Wider 15 rem panel, custom fonts, hover & active styles
5. **Hero video page** (`page.tsx`):

   * 16∶9 aspect ratio with `aspect-ratio` CSS
   * Supports YouTube-nocookie or direct MP4
   * Autoplay muted loop, no controls
6. **Stub pages** for non-video routes:

   * Shared `ComingSoon.module.css` for consistent styling
   * Titles & messages center-aligned on white background
7. **Made by Vista page**:

   * Imported full video list
   * Grid of video previews (autoPlay muted loop)
   * Hover overlays, responsive tweaks
8. **FAQ & Terms**:

   * CSS-Module for max-width, left-aligned in main gutter
   * Semantic sections: FAQ Q\&A, Return Policy, Privacy Policy
   * White background to prevent black gutter

---

## 🎨 Fonts & Styling

* **Font-stack**:

  ```css
  font-family:
    ui-sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto,
    "Helvetica Neue", Arial,
    "Noto Sans", sans-serif;
  ```
* **Tailwind** used only for global resets; all component/page styles live in CSS Modules for clarity.

---

## 🤝 Next Steps

* Hook up **Firebase** for Contact & SMS Newsletter form handling.
* Fill out **Store** page with Vercel Commerce or Stripe checkout.
* Add **photo galleries**, scrollable mosaics, and additional interactive components.

---

*Built by internetkid2001 using Jarvis-style precision*
