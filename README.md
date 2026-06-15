# DAKOLAS B2B Website

Production-ready B2B website for **DAKOLAS**, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- Modern blue-and-white B2B electronics supplier design
- Responsive pages for Home, Products, product categories, Factory, Quality Control, About, Contact, and Blog
- SEO landing pages:
  - `/iphone-screen-supplier/`
  - `/iphone-screen-wholesale/`
  - `/iphone-battery-supplier/`
  - `/mobile-phone-parts-supplier/`
  - `/oled-screen-supplier/`
  - `/repair-parts-wholesale/`
- Per-page metadata
- `robots.txt` and `sitemap.xml`
- Organization JSON-LD structured data
- Static export compatible with Vercel
- Optimized WebP hero and logo assets for faster loading
- Reusable components: Header, Footer, Hero, ProductCard, CategoryCard, FeatureCard, CTASection, InquiryForm

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The project uses `output: "export"` in `next.config.ts`, so static output is generated for static hosting.

## GitHub Deployment Steps

1. Create a new GitHub repository.
2. Push this project:

```bash
git init
git add .
git commit -m "Build DAKOLAS B2B website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Vercel Deployment Steps

1. Log in to Vercel.
2. Click **Add New Project**.
3. Import the GitHub repository.
4. Keep the framework preset as **Next.js**.
5. Build command: `npm run build`.
6. Deploy.

The project is ready for Vercel production deployment. It uses static generation, optimized local assets, explicit image dimensions, and responsive layouts for strong Core Web Vitals.

## Brand Notes

- The site uses compatible-part language where appropriate.
- It does not use Apple or Samsung logos.
- It does not claim Apple authorization.
- Warranty language is consistently 12 months.

## Logo

The official DAKOLAS logo is stored at `public/images/dakolas-logo.png` and is used in the header, footer, and Organization JSON-LD.
