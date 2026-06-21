# logansmith.us

Personal website for Logan Smith, hosted on **GitHub Pages** (replacing Wix as of June 2026).

## Structure
- `index.html` — single-page site (Home, About, My Work, Contact)
- `blog.html` — blog placeholder
- `style.css` — styles
- `CNAME` — custom domain (`logansmith.us`)
- `.nojekyll` — serve files as-is (no Jekyll processing)

## Hosting
GitHub Pages, source = `main` branch, root. Custom domain `logansmith.us`.

DNS is managed at Squarespace; the apex `A` records point to GitHub Pages IPs and `www` is a CNAME to `logans415.github.io`. Email (Mailgun/Proton) is independent of hosting and must not be changed.

## Notes
Content was reproduced from the previous Wix site for a fast cutover. Some details (location, education status) are out of date and slated for a future content refresh. See `../migration-plan.md` for the full migration runbook.
