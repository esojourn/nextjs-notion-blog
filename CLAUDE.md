# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Chinese-language blog (Az-AI.icu) built on the [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) v2.3.0 template. Uses Next.js 15 App Router, Tailwind CSS 3, Contentlayer2 for MDX content processing, and pliny for analytics/comments/search/newsletter integrations.

## Commands

- `yarn dev` — Start dev server (uses `cross-env INIT_CWD=$PWD next dev`)
- `yarn build` — Production build + RSS postbuild script
- `yarn serve` — Start production server (`next start`)
- `yarn lint` — ESLint with auto-fix across pages/app/components/lib/layouts/scripts
- `yarn analyze` — Bundle analysis build

## Architecture

### Content Pipeline
- Blog posts live in `data/blog/` as `.mdx` files with Hugo-style frontmatter (title, date required; tags, draft, summary, authors, layout optional)
- Author profiles in `data/authors/` as `.mdx` (default.mdx required)
- `contentlayer.config.ts` defines Blog and Authors document types, MDX remark/rehype plugin chain, and generates `app/tag-data.json` + `public/search.json` on build
- Contentlayer2 generates typed content objects at `.contentlayer/generated`

### Key Data Files
- `data/siteMetadata.js` — Central site config (title, analytics, comments, search, newsletter providers). Pliny typed config.
- `data/headerNavLinks.ts` — Navigation links
- `data/projectsData.ts` — Projects page data

### Routing (App Router)
- `app/page.tsx` — Home, renders sorted blog posts via `Main.tsx`
- `app/blog/[...slug]/page.tsx` — Individual blog post (supports nested routes)
- `app/blog/page/[page]/page.tsx` — Paginated blog listing
- `app/tags/[tag]/page.tsx` — Posts filtered by tag
- `app/about/page.tsx` — About page (renders `data/authors/default.mdx`)
- `app/api/newsletter/route.ts` — Newsletter API endpoint

### Layouts
Three post layouts: `PostLayout` (default, 2-column with meta), `PostSimple`, `PostBanner`. Two listing layouts: `ListLayout` (with search bar), `ListLayoutWithTags` (with tag sidebar).

### Component Conventions
- `components/MDXComponents.tsx` — Custom MDX component mappings (Image, Link, TOCInline, Pre, TableWrapper, BlogNewsletterForm)
- SVGs imported as React components via `@svgr/webpack`
- Dark mode via `next-themes` with class strategy (`darkMode: 'class'` in Tailwind)

### Path Aliases (tsconfig.json)
- `@/components/*`, `@/data/*`, `@/layouts/*`, `@/css/*`
- `contentlayer/generated` → `.contentlayer/generated`

## Code Quality
- Pre-commit hook runs `lint-staged`: ESLint fix on JS/TS files, Prettier on JS/TS/JSON/CSS/MD/MDX
- ESLint: TypeScript parser, jsx-a11y, Prettier integration
- Primary color: `pink` (configured in `tailwind.config.js`)
- Package manager: Yarn 3.6.1 (with `.yarnrc.yml`)
