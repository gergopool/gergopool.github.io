# gergelypapp.eu

Static CV site for Gergely Papp. Plain files, no build step: GitHub Pages serves them as-is (`CNAME` sets the custom domain).

- `index.html`: all content
- `css/site.css`, `js/site.js`: the only stylesheet and script (no dependencies besides Google Fonts)
- `assets/`: CV PDF, `gergely_papp_grand_canyon.jpg` (social preview, red box printed in) and `gergely_papp_grand_canyon_wide.jpg` + `_wide_1920.jpg` (3584×1536 panorama for the hero, served via srcset; the red box is drawn as SVG on top of it)
- `images/company/`: employer logos

The hero photo and the detection box share one SVG coordinate system (the panorama's 3584×1536 pixels; person box x 2365–2849, y 820–1494). A replacement photo needs the same size and framing, or new box coordinates in `index.html`.

Preview locally: `python3 -m http.server 8000`, then open http://127.0.0.1:8000/.
