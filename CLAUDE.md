# Website Structure Guide

Static CV site for gergelypapp.eu, served by GitHub Pages with no build step (`CNAME` sets the domain).

## Files
- `index.html`: all content (hero, facts strip, experience, sidebar, projects, footer)
- `css/site.css`: the only stylesheet (theme tokens at the top, responsive rules at the bottom)
- `js/site.js`: nav toggle, contact popover, scroll reveals, project filter, phone reveal; the page works without it
- `assets/`: `gergely_papp_cv.pdf` (direct Canva export; do not recompress, it rewrites the fonts), hero panorama `gergely_papp_grand_canyon_wide*.jpg`, social preview `gergely_papp_grand_canyon.jpg`
- `images/company/`: employer logos

## Rules
- Never put the phone number in plain text anywhere in the repo; it is XOR-obfuscated in `js/site.js` and revealed on click.
- The hero bounding box is an SVG in the panorama's 3584×1536 coordinates (person box x 2365–2849, y 820–1494); a new photo needs new coordinates.
- Keep public file names plain and professional (e.g. `gergely_papp_cv.pdf`).
- Keep site wording in sync with the Canva CV.
