Here's your updated **README.md** with the mobile sidebar fix included and the full file paths you listed:

---

```markdown
# Vista Updated Website

A Next.js–based portfolio and media showcase site with CSS-Module styling and video embeds.

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

.firebase
.github
.next
node\_modules
out
public
public/android-chrome-192x192.png
public/android-chrome-512x512.png
public/apple-touch-icon.png
public/favicon-16x16.png
public/favicon-32x32.png
public/favicon.ico
public/file.svg
public/globe.svg
public/next.svg
public/site.webmanifest
public/vercel.svg
public/window\.svg
src
src/app
src/app/archive
src/app/contact
src/app/faq-terms
src/app/made-by-vista
src/app/sms-newsletter
src/app/sms-newsletter/page.tsx
src/app/store
src/app/ComingSoon.module.css
src/app/globals.css
src/app/layout.tsx
src/app/page.module.css
src/app/page.tsx
src/components
src/components/Navbar.module.css
src/components/Navbar.tsx
src/components/Sidebar.module.css
src/components/Sidebar.tsx
src/middleware.ts
.firebaserc
.gitignore
eslint.config.mjs
favicon.ico
firebase.json
next-env.d.ts
next.config.js
next.config.ts
package-lock.json
package.json
postcss.config.mjs
README.md
tsconfig.json

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

   *Visit `http://localhost:3000/`*

3. **Static build & Firebase deploy**

   ```bash
   npm run build      # outputs to /out via output: 'export'
   npx firebase deploy
   ```

---

## ⚙️ Firebase Hosting Setup

* Initialized with `firebase init`

* **Public directory:** `out`

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
8. **Sidebar hidden on mobile** via media query in `Sidebar.module.css`

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

Tailwind handles global resets and layout primitives; all custom styles scoped via CSS Modules.

---

## 🔄 Deployment Workflow

After pushing to `main`:

1. GitHub Action checks out code
2. Installs dependencies
3. Runs `npm run build`
4. Deploys `/out` to Firebase Hosting

No manual deploy needed 🎉

---

## 📌 Next Steps

* Hook up Firestore for contact-form submissions & SMS capture
* Add real store checkout (Stripe or Vercel Commerce)
* Deploy photo mosaics & gallery albums
* Custom domain via Firebase Console

---

**Built by internetkid2001**
