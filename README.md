# DeployStacker — Premium Web Agency Website

A fully static, production-ready frontend website for **DeployStacker** — a premium web development and AI automation agency.

Built to match the luxury aesthetic of the Nexto theme with full custom branding.

---

## 🗂 Project Structure

```
agency/
├── index.html          ← Home page
├── about.html          ← About Us
├── services.html       ← Services
├── portfolio.html      ← Portfolio
├── team.html           ← Our Team
├── pricing.html        ← Pricing Plans
├── testimonials.html   ← Client Reviews
├── blog.html           ← Blog
├── faq.html            ← FAQs
├── contact.html        ← Contact Us
├── server.py           ← Local dev server
└── assets/
    ├── css/
    │   ├── variables.css   ← CSS custom properties
    │   └── main.css        ← Full stylesheet
    ├── js/
    │   ├── components.js   ← Navbar + Footer injection
    │   ├── placeholders.js ← Image placeholder generator
    │   └── main.js         ← All interactions & animations
    ├── images/
    │   ├── logo.svg
    │   ├── logo-white.svg
    │   └── favicon.svg
    ├── fonts/          ← Cal Sans font files (add here)
    └── videos/         ← hero-bg.mp4 (add here)
```

---

## 🚀 Running Locally

### Option 1 — Python (built-in)
```bash
python3 server.py
# Open http://localhost:8080
```

### Option 2 — Node.js (npx)
```bash
npx serve .
```

### Option 3 — VS Code Live Server
Install the **Live Server** extension and click "Go Live".

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#F5F3EF` (warm beige) |
| Primary | `#161616` (near black) |
| Accent | `#EF4823` (vibrant orange-red) |
| Font | Cal Sans / Inter |

---

## 📄 Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Services | `services.html` |
| Portfolio | `portfolio.html` |
| Team | `team.html` |
| Pricing | `pricing.html` |
| Testimonials | `testimonials.html` |
| Blog | `blog.html` |
| FAQs | `faq.html` |
| Contact | `contact.html` |

---

## 🖼 Adding Real Images

Drop your images into `assets/images/` with these filenames:

- `about-main.jpg` — Team/office photo
- `team-1.jpg` through `team-4.jpg` — Team member photos
- `portfolio-1.jpg` through `portfolio-6.jpg` — Project screenshots
- `blog-1.jpg` through `blog-3.jpg` — Blog cover images
- `service-web.jpg`, `service-ai.jpg`, `service-ecommerce.jpg`

---

## 🎬 Adding Hero Video

Place your video at: `assets/videos/hero-bg.mp4`

---

## 🔤 Adding Cal Sans Font

Place these files in `assets/fonts/`:
- `CalSans-Regular.woff2`
- `CalSans-Regular.woff`
- `CalSans-Regular.ttf`

---

## ✅ Features

- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll animations (IntersectionObserver)
- ✅ Animated counter numbers
- ✅ FAQ accordion
- ✅ Portfolio filter
- ✅ Auto-scrolling testimonials marquee
- ✅ Ticker/marquee banner
- ✅ Sticky navbar with scroll effect
- ✅ Mobile hamburger menu
- ✅ Contact form with validation
- ✅ Scroll-to-top button
- ✅ Preloader animation
- ✅ Glassmorphism effects
- ✅ CSS custom properties (easy theming)
- ✅ Zero external dependencies (except Font Awesome CDN)
- ✅ SVG gradient image placeholders (until real images added)

---

## 🌐 Deployment

This is a pure static site. Deploy to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop the folder
- **GitHub Pages**: Push to `gh-pages` branch
- **Any static host**: Upload all files

---

© 2026 DeployStacker · [deploystacker.in](https://deploystacker.in)
