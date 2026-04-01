# Tristan McDonald Website Roadmap

Personal website for Tristan McDonald (Software Engineer & Designer) built with Astro, focusing on lightweight performance and transparent resource usage.

**Live site:** tristanmcdonald.co.uk
**Hosting:** GitHub Pages

---

## Phase 1: Content Migration & Structure

Migrate content from the existing site at `../tristan_mcdonald_website/` to the new Astro structure.

| Task | Description |
|------|-------------|
| 1.1 | Migrate intro/bio content from existing `index.html` to `IntroSection.astro` |
| 1.2 | Update `src/data/cv.json` with complete work history |
| 1.3 | Copy favicon to `public/` |
| 1.4 | Create `/experience` page for full CV |

---

## Phase 2: Blog Setup

Set up Astro Content Collections for markdown-based blog posts.

| Task | Description |
|------|-------------|
| 2.1 | Configure Astro Content Collections in `src/content/config.ts` |
| 2.2 | Create `src/content/blog/` directory for markdown posts |
| 2.3 | Create `src/pages/blog/index.astro` (listing page) |
| 2.4 | Create `src/pages/blog/[slug].astro` (individual post template) |
| 2.5 | Add `BlogCard.astro` component for post previews |

---

## Phase 3: Page Weight Indicator

Inspired by [solar.lowtechmagazine.com](https://solar.lowtechmagazine.com), display page size and sustainability metrics to visitors.

| Task | Description |
|------|-------------|
| 3.1 | Create `PageWeight.astro` component displaying page size in KB |
| 3.2 | Implement modal dialog that opens on click, showing detailed stats for that page |
| 3.3 | Build-time calculation of each page's total weight (HTML + assets) |
| 3.4 | Modal content to include: |
|     | - Page size breakdown (HTML, CSS, fonts, images) |
|     | - CO2 per page load estimate |
|     | - Comparison to average website (~2MB vs target <30KB) |
|     | - Link to sustainability/about page for full explanation |
| 3.5 | Create `/about-this-site` page with: |
|     | - Explanation of lightweight design philosophy |
|     | - Why page weight matters (energy, accessibility, speed) |
|     | - Technical details of the approach |

---

## Phase 4: Performance Optimisation

Ensure the site is as lean as possible.

| Task | Description |
|------|-------------|
| 4.1 | Configure Astro for static HTML output (no client JS where possible) |
| 4.2 | Optimise images if used (consider dithering for aesthetic/size) |
| 4.3 | Add `sitemap.xml` generation |
| 4.4 | Add `robots.txt` |

---

## Phase 5: Polish & Deploy

Final touches and deployment to GitHub Pages.

| Task | Description |
|------|-------------|
| 5.1 | Update navigation (Home, Experience, Blog, About This Site) |
| 5.2 | Add meta tags for SEO and social sharing |
| 5.3 | Test with Lighthouse (target 100/100 all categories) |
| 5.4 | Configure GitHub Pages deployment via GitHub Actions |
| 5.5 | Set up custom domain `tristanmcdonald.co.uk` |
| 5.6 | Add CNAME file to `public/` |

---

## Target Metrics

| Metric | Target |
|--------|--------|
| Page weight | <30KB per page (ideally <20KB) |
| Lighthouse scores | 100/100 across all categories |
| Time to First Byte | <100ms |
| Client JavaScript | None required for core functionality |
| CO2 per visit | <0.1g (vs ~0.5g average) |

---

## Resources & Inspiration

- [Solar-powered Low-tech Magazine](https://solar.lowtechmagazine.com) - Inspiration for page weight indicator
- [Website Carbon Calculator](https://www.websitecarbon.com/) - CO2 estimation methodology
- [Astro Documentation](https://docs.astro.build/)
