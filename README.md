# Mini Blog

A personal blog built with Next.js 14, TypeScript, and Tailwind CSS. It supports Markdown posts, dark mode, and category/tag filtering. Clone it and start writing.

## Features

- **Markdown posts** — Posts are stored as `.md` files and support GFM (tables, task lists, strikethrough, etc.)
- **Categories and tags** — Filter posts by category or tag
- **Dark/light theme** — Follows the system preference, with a manual toggle
- **Responsive layout** — Works on mobile, tablet, and desktop
- **SEO** — Generates meta tags and Open Graph data
- **Static generation** — Posts are pre-rendered to static HTML for fast loads and better SEO
- **Central config** — Site name, colors, navigation, social links, etc. are managed in `site.config.ts`
- **Filename handling** — Spaces, underscores, etc. in post filenames are converted to URL-safe slugs

## Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.15 | Framework (App Router) |
| React | 18.3 | UI library |
| TypeScript | 5.5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| gray-matter | 4.0 | Parse Markdown frontmatter |
| remark / remark-html / remark-gfm | 15 / 16 / 4 | Markdown to HTML |
| next-themes | 0.3 | Theme switching |

## Quick Start

### Requirements

- Node.js ≥ 18.17
- npm (or pnpm / yarn)

### Install and Run

```bash
# Clone the repo
git clone https://github.com/anjuxi/mini_blog.git
cd mini_blog

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/                    # Pages (App Router)
│   ├── about/page.tsx      # About page
│   ├── blog/
│   │   ├── page.tsx        # Blog list (category/tag filtering)
│   │   └── [slug]/page.tsx # Post detail page
│   ├── globals.css         # Global styles (including Markdown styles)
│   ├── layout.tsx          # Root layout (SEO, theme, nav, footer)
│   ├── not-found.tsx       # 404 page
│   └── page.tsx            # Home page
├── components/             # Shared components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── PostCard.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── content/posts/          # Markdown posts (put your posts here)
├── lib/posts.ts            # Post loading, slug generation, date formatting
├── site.config.ts          # Global config (site info, colors, copy, etc.)
├── tailwind.config.ts      # Tailwind config (brand colors)
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## Writing a Post

Create a `.md` file in `content/posts/`. The filename becomes the post's URL slug (spaces and underscores are converted to `-`).

Add frontmatter at the top of the file:

```markdown
---
title: "Post title"
date: "2024-12-30"
excerpt: "Short summary shown on cards and list pages"
tags: ["tag1", "tag2"]
category: "Category"
cover: "https://example.com/cover.jpg"   # optional cover image
author: "谙弆悕"                          # optional; defaults to the site author
---

## Heading

Post content in Markdown.
```

### Frontmatter Fields

| Field | Required | Description |
|------|----------|-------------|
| `title` | Yes | Post title |
| `date` | Yes | Publish date in `YYYY-MM-DD` format |
| `excerpt` | Recommended | Short summary |
| `tags` | Recommended | Array of tags |
| `category` | Recommended | Category; defaults to `未分类` |
| `cover` | Optional | Cover image URL |
| `author` | Optional | Author; defaults to `site.author` in `site.config.ts` |

## Configuration

All site info is managed in [site.config.ts](./site.config.ts). Changes apply after refreshing the page.

```typescript
export const siteConfig = {
  site: {        // Site name, description, author, keywords
    name: "谙弆悕的博客",
    shortName: "谙",
    author: "谙弆悕",
    // ...
  },
  colors: {      // Brand color scale (drives brand-* colors)
    brand: { 500: "#f43f5e", 600: "#e11d48", /* ... */ },
  },
  social: {      // GitHub, email
    github: "https://github.com/anjuxi",
    email: "anjuxi.ME@outlook.com",
  },
  nav: [],       // Navigation menu
  hero: {},      // Home hero copy
  about: {},     // About page content (bio, skills, timeline)
  footer: {},    // Footer copy
};
```

## Deployment

### Vercel (Recommended)

1. Push the code to GitHub
2. Import the repo on [Vercel](https://vercel.com)
3. Choose Next.js as the framework preset and click Deploy

### Other Platforms

This is a standard Next.js app, so it works on any platform that supports Node.js:

- **Netlify** — Build command `next build`, publish directory `.next`
- **Cloudflare Pages** — Build command `npm run build`, output directory `.next`
- **Docker** — Use the official `node:18` image, then run `npm ci && npm run build && npm start`

## License

MIT
