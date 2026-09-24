# Pangasinan Heritage Digital Showcase

Next.js 14 (App Router) static site using Atomic Design.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to /out
npm start        # serve /out locally
```

- `components/atoms | molecules | organisms` – Atomic Design library
- `data/sites.js` – content, decoupled from UI
- `/design-system` – live component documentation page
- `next.config.mjs` – `output: 'export'` for static/JAMstack hosting
