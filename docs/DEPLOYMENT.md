# Hub2Biz Production Deployment Guide

This guide documents how to build, deploy, and host the Hub2Biz static application on a VPS managed with CyberPanel and OpenLiteSpeed web server, ensuring client-side routes (e.g., `/about`, `/services`, `/contact`, `/privacy`) resolve seamlessly without 404 errors.

---

## 1. Architecture Overview

- **Framework:** React 19 SPA built with Vite and Tailwind CSS.
- **Output:** Clean static HTML, CSS, and JS bundle in the `dist/` folder.
- **Routing:** HTML5 History API (`pushState` / `popstate`).
- **Production Domain:** `hub2biz.com`

---

## 2. Production Build

To build the optimized static production bundle:

```bash
# Install dependencies from lockfile
npm ci

# Run TypeScript typecheck
npm run lint

# Build production assets into dist/
npm run build
```

This generates `dist/index.html` and bundled assets in `dist/assets/`.

---

## 3. OpenLiteSpeed Rewrite Rule (.htaccess)

Because this website uses client-side routing, direct navigation or page refreshes on nested paths (e.g. `https://hub2biz.com/services`, `https://hub2biz.com/contact`) must fall back to `/index.html`.

In CyberPanel:
1. Navigate to **Websites** &rarr; **List Websites**.
2. Click **Manage** next to `hub2biz.com`.
3. Open **Rewrite Rules** (or edit `/home/hub2biz.com/public_html/.htaccess`).
4. Paste the following configuration:

```apache
# OpenLiteSpeed / CyberPanel SPA Fallback Rule for Hub2Biz
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

5. Save the Rewrite Rules and restart OpenLiteSpeed (or run `systemctl restart lsws` via SSH).

---

## 4. CyberPanel VPS Deployment Steps

1. **Upload Assets:** Upload all contents of the local `dist/` directory into `/home/hub2biz.com/public_html/`.
2. **File Permissions:** Ensure correct ownership and permissions:
   ```bash
   chown -R hub2biz:hub2biz /home/hub2biz.com/public_html/
   find /home/hub2biz.com/public_html/ -type d -exec chmod 755 {} \;
   find /home/hub2biz.com/public_html/ -type f -exec chmod 644 {} \;
   ```
3. **SSL Certificate:**
   - In CyberPanel, go to **SSL** &rarr; **Manage SSL**.
   - Select `hub2biz.com` and issue a free Let's Encrypt SSL certificate.
   - Force HTTPS via rewrite rules or the CyberPanel SSL settings.

---

## 5. Contact Form SMTP Endpoint Integration

In production, wire the consultation form to an authenticated SMTP endpoint:

1. Create a server-side endpoint (e.g. Node.js Express service, PHP script `/api/contact.php`, or serverless function).
2. Configure outbound credentials using Postmark, Amazon SES, or CyberPanel's local Postfix mail service.
3. Verify required payload fields:
   - `fullName` (string, min 2 chars)
   - `workEmail` (valid business email format)
   - `companyName` (string, min 2 chars)
   - `serviceInterest` (one of: `cold-calling`, `lead-research`, `lead-qualification`, `appointment-setting`, `full-funnel`, `general`)
   - `message` (string, min 10 chars)
   - `privacyAccepted` (boolean, true)
4. Update `handleSubmit` in `src/pages/ContactPage.tsx` to `POST` the JSON payload to the production endpoint and display server response status.
