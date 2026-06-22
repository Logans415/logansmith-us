# logansmith.us

Personal website + security blog for Logan Smith. Static, dependency-free, hosted on **GitHub Pages**.

## Stack
Plain HTML/CSS/JS — no framework, no build step, **no external CDNs** (system fonts only, so nothing phones home). Deploys as-is from `main` / root.

## Structure
- `index.html` — single-page: hero, about, skills, experience, work, blog teaser, contact
- `blog.html` — blog index
- `post-*.html` — individual posts
- `style.css` — dark security/tech theme (teal accent, mono labels)
- `script.js` — typing effect, mobile nav, scroll-reveal (respects `prefers-reduced-motion`)
- `profile.jpg`, `hero.jpg`, `ls-logo.png`, `favicon.png` — image assets
- `CNAME`, `.nojekyll` — custom domain + serve-as-is

## Adding a blog post
1. Copy `post-welcome.html` to `post-<slug>.html`, edit the content.
2. Add a matching `<a class="post-item">` entry to `blog.html` (and optionally the teaser in `index.html`).

## Security / privacy notes
- All images are **EXIF/GPS-stripped** and re-encoded before commit (the repo is public).
- No personal phone, home address, or precise location is published — contact is `Contact@logansmith.us` + links.
- No third-party scripts, fonts, or trackers.

## Hosting / DNS
GitHub Pages, custom domain `logansmith.us`. DNS managed at the registrar; apex `A` records point to GitHub Pages IPs, `www` is a `CNAME` to `logans415.github.io`. Email (Mailgun/Proton) is independent of hosting — see `../migration-plan.md` and the migration blog post.
