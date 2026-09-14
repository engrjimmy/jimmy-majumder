# Jimmy Majumder — Personal Portfolio Site

A modern, single-page professional portfolio built with plain HTML/CSS/JS
(no build step required) — inspired by senior tech leader / researcher
personal sites. Content is based on the existing profile at
https://sites.google.com/view/jimmy-majumder/

## Structure
```
portfolio-site/
├── index.html      # All page content/sections
├── css/style.css   # Dark theme, gradients, responsive layout, animations
└── js/script.js    # Scroll reveal, typewriter, animated counters, mobile nav
```

## Preview locally
Open `index.html` directly in a browser, or serve it:
```bash
cd portfolio-site
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Customize
- **Photo**: replace the initials avatar in the hero (`.hero-avatar` in
  `index.html`) with an `<img>` tag pointing to your real photo for a more
  personal touch.
- **Colors**: edit the CSS variables at the top of `css/style.css`
  (`--accent`, `--accent-2`, `--accent-3`, `--gradient`).
- **Content**: all copy lives directly in `index.html` — update bio,
  timeline entries, stats, affiliations, and links as needed.
- **Links**: CV, project portfolio, and BARRC links currently point to your
  SlideShare/BARRC URLs — swap in updated URLs any time.

## Deploy (free options)
1. **GitHub Pages** — push this folder to a GitHub repo, enable Pages in
   repo settings (branch: `main`, folder: `/portfolio-site` or root), and
   you'll get a live URL like `https://<username>.github.io/<repo>/`.
2. **Netlify / Vercel** — drag-and-drop the `portfolio-site` folder into
   Netlify's deploy UI, or connect the GitHub repo for auto-deploys.
3. **Custom domain** — once deployed, point a domain (e.g.
   `jimmymajumder.com`) to it via your host's custom domain settings.

## Updating the Google Sites profile
Google Sites doesn't support custom HTML/CSS directly, but you can:
- Use the **Embed → By URL/Embed code** block in Google Sites to embed this
  site (once deployed) inside an iframe on your existing page, or
- Use this site's copy/structure as a content reference to manually refresh
  text, headings, and links on the Google Site, or
- Fully replace the Google Site by sharing the new deployed URL as your
  primary profile link everywhere (LinkedIn, email signature, CV, etc.).
