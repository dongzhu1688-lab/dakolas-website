# DAKOLAS B2B Website

Production-ready B2B website for **DAKOLAS**, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- Modern blue-and-white B2B electronics supplier design
- Responsive pages for Home, Products, product categories, Factory, Quality Control, About, Contact, Blog, Product Lines, and Country supply pages
- Expanded product database with dedicated pages for iPhone screen series, iPhone battery series, Samsung screen series, Samsung battery series, iPad parts, and MacBook parts
- 200+ indexable static pages, including full iPhone compatible model coverage from 6 Series to 16 Series
- Model-level iPhone screen pages for Premium OLED, Soft OLED, Hard OLED, and INCELL
- Model-level iPhone battery pages for Premium Battery and Standard Battery
- Product line landing pages for `/product-lines/premium-oled/`, `/product-lines/soft-oled/`, `/product-lines/hard-oled/`, `/product-lines/incell/`, `/product-lines/premium-battery/`, and `/product-lines/standard-battery/`
- Blog system with 20 long-form SEO sourcing articles
- Manufacturer SEO pages and country pages for the UK, Australia, Germany, France, and Italy
- Product detail pages include gallery sections for main image, feature image, structure image, QC image, packaging image, and application image
- SEO landing pages:
  - `/iphone-screen-supplier/`
  - `/iphone-screen-wholesale/`
  - `/iphone-battery-supplier/`
  - `/mobile-phone-parts-supplier/`
  - `/oled-screen-supplier/`
  - `/repair-parts-wholesale/`
  - `/iphone-screen-manufacturer/`
  - `/iphone-battery-manufacturer/`
  - `/oled-screen-manufacturer/`
  - `/mobile-phone-parts-manufacturer/`
- Per-page metadata
- `robots.txt` and `sitemap.xml`
- Organization JSON-LD structured data
- Product JSON-LD structured data on product and product-line pages
- Formspree-ready inquiry forms for quote, sample, and sales requests
- Google Analytics 4 support through environment configuration
- Floating WhatsApp quote button
- Static export compatible with Vercel
- Optimized WebP hero and logo assets for faster loading
- Reusable components: Header, Footer, Hero, ProductCard, CategoryCard, FeatureCard, CTASection, InquiryForm

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Build

```bash
pnpm build
```

The project uses `output: "export"` in `next.config.ts`, so static output is generated for static hosting.

## Lead Generation Setup

Create environment variables in Vercel or your local `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
```

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` connects all inquiry forms to Formspree.
- `NEXT_PUBLIC_GA_ID` enables Google Analytics 4 tracking.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` enables the floating WhatsApp quote button with your real number.

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
5. Build command: `pnpm build`.
6. Deploy.

The project is ready for Vercel production deployment. It uses static generation, optimized local assets, explicit image dimensions, and responsive layouts for strong Core Web Vitals.

## Brand Notes

- The site uses compatible-part language where appropriate.
- It does not use Apple or Samsung logos.
- It does not claim Apple authorization.
- Warranty language is consistently 12 months.

## Logo

The official DAKOLAS logo is stored at `public/images/dakolas-logo.png` and is used in the header, footer, and Organization JSON-LD.
