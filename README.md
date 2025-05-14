# Vista Updated Website

A Next.js-based portfolio and media showcase site with a fixed sidebar, CSS-Module styling, and video embeds.

---

## 📦 Tech Stack

* **Framework:** Next.js 15 (App Router + TypeScript, `output: 'export'`)
* **Styling:** Tailwind CSS (global resets) + CSS Modules (components & pages)
* **Video Hosting:** YouTube embeds & CDN-hosted MP4s
* **Routing:** Next.js `<Link>` for internal, standard `<a>` for external
* **Icons & Fonts:** System-sans UI stack (SF Pro on macOS, Segoe UI on Windows)
* **Deployment:** Firebase Hosting + GitHub Actions (auto-deploy from `main`)

---

## 🔍 File Structure

```

.
├── next.config.js             # CSP headers + static export
├── package.json
├── firebase.json              # Firebase Hosting config
├── .firebaserc                # Firebase project alias
├── .github/
│   └── workflows/
│       └── firebase-hosting-merge.yml  # GitHub Actions deploy workflow
├── public/
│   └── favicon.ico
└── src/
├── app/
│   ├── globals.css        # Tailwind + resets
│   ├── layout.tsx         # root layout
│   ├── page.tsx           # hero landing page
│   ├── page.module.css
│   ├── store/
│   │   └── page.tsx       # external link
│   ├── archive/
│   │   └── page.tsx       # external link
│   ├── made-by-vista/
│   │   ├── page.tsx       # video grid
│   │   └── page.module.css
│   ├── contact/
│   │   └── page.tsx       # coming soon
│   ├── sms-newsletter/
│   │   └── page.tsx       # coming soon
│   └── faq-terms/
│       ├── page.tsx       # FAQ + Policy
│       └── page.module.css
└── components/
├── Sidebar.tsx        # fixed sidebar nav
└── Sidebar.module.css

````

---

## 🚀 Setup & Run (Local Dev)

1. **Clone & install**

   ```bash
   git clone https://github.com/internetkid2001/vistaupdated2025.git
   cd vistaupdated2025
   npm install
````

2. **Dev server**

   ```bash
   npm run dev
   ```

   * `http://localhost:3000/`

3. **Static build & Firebase deploy**

   ```bash
   npm run build      # outputs to /out via output: 'export'
   npx firebase deploy
   ```

---

## ⚙️ Firebase Hosting Setup

* Initialized with `firebase init`

* Public directory: `out`

* Static export using Next.js 15

* Custom headers via `next.config.js` (`Content-Security-Policy`)

* GitHub Action created with:

  ```bash
  firebase init hosting:github
  ```

* Auto-deploy on `main` pushes via `.github/workflows/firebase-hosting-merge.yml`

---

## ✅ What We Did

1. **Next.js App Router project initialized**
2. **Tailwind CSS** used for global resets, CSS Modules for scoped styles
3. **Firebase CLI installed + initialized**
4. Set `output: 'export'` in `next.config.js` for static HTML export
5. Created routes and pages for:

   * Landing
   * Video showcase
   * Store/archive stubs
   * Coming soon (Contact + Newsletter)
   * FAQ & Terms
6. **Firebase Hosting configured** to deploy `/out` folder
7. **GitHub Actions integrated** for automatic deploy on push to `main`

---

## 🎨 Fonts & Styling

```css
font-family:
  ui-sans-serif, system-ui,
  -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto,
  "Helvetica Neue", Arial,
  "Noto Sans", sans-serif;
```

Tailwind handles global resets, layout primitives. All visual styling scoped via `.module.css`.

---

## 🔄 Deployment Workflow

After pushing to `main`:

1. GitHub Action checks out your code
2. Installs dependencies
3. Runs `npm run build`
4. Deploys `/out` to Firebase Hosting

No manual deploy needed 🎉

---

## 📌 Next Steps

* Hook up Firebase Firestore for:

  * Contact form submissions
  * SMS/newsletter capture
* Add real store checkout (Stripe or Vercel Commerce)
* Deploy photo mosaics & gallery albums
* Custom domain via Firebase Console

---

**Built by internetkid2001**