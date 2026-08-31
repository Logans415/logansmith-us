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
- `profile.jpg`, `hero.jpg`, `ls-logo.png`, `favicon.png`, `apple-touch-icon.png` — image assets
- `CNAME`, `.nojekyll` — custom domain + serve-as-is
- `404.html` — custom not-found page (noindex; not in sitemap)
- `SECURITY.md` — vulnerability disclosure policy (repo-facing twin of `.well-known/security.txt`)
- `site.webmanifest` — web app manifest (icons/theme)
- `robots.txt`, `sitemap.xml` — crawler policy + page list for search engines
- `llms.txt` — curated site overview for AI agents ([llmstxt.org](https://llmstxt.org/))
- `feed.xml` — RSS feed of blog posts
- `humans.txt` — the human behind the site ([humanstxt.org](https://humanstxt.org/))
- `.well-known/security.txt` — vulnerability-disclosure contact ([RFC 9116](https://www.rfc-editor.org/info/rfc9116/))

## Publishing a post (owner-only)
This is a personal site — all content is authored by me; there is no submission or contribution process. My publishing checklist:
1. Copy `post-welcome.html` to `post-<slug>.html`, edit the content.
2. Add a matching `<a class="post-item">` entry to `blog.html` (and optionally the teaser in `index.html`).
3. Add an `<item>` to `feed.xml` and update that page's `<lastmod>` in `sitemap.xml`.

## Security / privacy notes
- All images are **EXIF/GPS-stripped** and re-encoded before commit (the repo is public).
- No personal phone, home address, or precise location is published — contact is `Contact@logansmith.us` + links.
- No third-party scripts, fonts, or trackers.
- `.well-known/security.txt` has a required `Expires` field — review contacts and bump it annually (**next: before 2027-08-29**). Tracked in the workspace backlog (`code/projects/todo-ideas.md`).

## Hosting / DNS
GitHub Pages, custom domain `logansmith.us`. DNS managed at the registrar; apex `A` records point to GitHub Pages IPs, `www` is a `CNAME` to `logans415.github.io`. Email (Mailgun/Proton) is independent of hosting — see `../migration-plan.md` and the migration blog post.
