# PPP Infosolutions — Website

A React (Vite) site with 5 pages: Home, About Us, Products, Services, Contact Us.
Built to be opened and edited in Visual Studio Code, and deployed as a **static site** —
so you do NOT need Node.js/Windows hosting. Your ₹3k/year budget can go entirely to the
domain.

## 1. Open in VS Code

1. Unzip this folder.
2. Open it in VS Code (`File > Open Folder`).
3. Open a terminal in VS Code (`` Ctrl+` ``) and run:
   ```
   npm install
   npm run dev
   ```
4. Visit the local address it prints (usually http://localhost:5173) to preview the site
   live while you edit.

Pages live in `src/pages/`, shared header/footer in `src/components/`, colors/fonts in
`src/index.css`. Replace `src/assets/logo.png` if you get a higher-resolution logo file.
Update the placeholder email/phone in `src/components/Footer.jsx` and `src/pages/Contact.jsx`.

## 2. Connect the Contact form to your email (EmailJS — free, no backend)

The Contact page is already built to send form submissions to your inbox using EmailJS,
a free service made exactly for this ("send email from a static site without a server").

1. Create a free account at https://www.emailjs.com
2. **Email Services** → Add Service → connect your Gmail/Outlook inbox → copy the **Service ID**.
3. **Email Templates** → Create Template. Use variables `{{from_name}}`, `{{from_email}}`,
   `{{phone}}`, `{{subject}}`, `{{message}}` in the template body → copy the **Template ID**.
4. **Account → General** → copy your **Public Key**.
5. Open `src/pages/Contact.jsx` and paste the three values into:
   ```js
   const SERVICE_ID = 'YOUR_SERVICE_ID'
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
6. Save, and submit the form on your local preview to test — you should get an email.

Free EmailJS plan covers 200 emails/month, which is normally more than enough for a
contact form. No server, no monthly hosting cost for this feature.

## 3. Build the production files

```
npm run build
```

This creates a `dist/` folder containing the finished static site (plain HTML/CSS/JS) —
this is what actually gets uploaded to hosting.

## 4. Deploy (free static hosting + your own domain)

Since this is a static React build, the cheapest, most reliable route is:

**Option A — Vercel (recommended, free forever for this use case)**
1. Push this project to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, click "New Project", pick this repo.
3. Vercel auto-detects Vite — just click Deploy.
4. In your Vercel project → Settings → Domains → add your purchased domain and follow the
   DNS instructions (you'll add a couple of records at your domain registrar).

**Option B — Netlify** works the same way (drag-and-drop the `dist/` folder, or connect
GitHub) — https://netlify.com

Both are free for a single site on a custom domain, with automatic HTTPS. This means your
₹3k/year budget only needs to cover the **domain purchase/renewal** — no separate hosting
bill, and nothing Windows-specific to manage.

**Option C — Any cheap static hosting (e.g. Hostinger's basic web hosting)** also works:
just upload the contents of `dist/` via FTP/File Manager after running `npm run build`.
This works fine too, but Option A/B gets you the same result for free.

## 5. Updating the site later

Edit files in `src/`, run `npm run dev` to preview, then `npm run build` and redeploy
(with Vercel/Netlify connected to GitHub, this is automatic on every `git push`).
