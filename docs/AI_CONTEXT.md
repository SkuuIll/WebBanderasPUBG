# AI Context

FlagForge Studio is a static web app for generating PUBG Observer `TeamIcon` packs. It has no backend and no build system. The app loads from `index.html`, uses CDN scripts for JSZip and Lucide, loads flags/logos from external CDNs, and does all export work in the browser.

## Current Shape
- `js/app.js` is the main monolith. It owns DOM refs, i18n strings, state, rendering, modals, search, canvas drawing, share links, save/load, and ZIP export.
- `css/style.css` is the main visual system. It contains tokens, layout, panels, responsive drawer behavior, modals, controls, and mobile overrides.
- `js/db.js`, `js/platforms_db.js`, and `js/symbols_db.js` define global arrays consumed by `app.js`.
- `tests/run-tests.mjs` is intentionally dependency-free and uses static parsing.

## State Model
Important globals in `app.js`:
- `selectedSlots` - current roster items.
- `currentMode` - `flags`, `platforms`, or `symbols`.
- `currentDB` - active database.
- `currentPreviewIdx` - selected preview index.
- `currentPosition`, `currentShape`, `currentFlagStyle` - visual rendering options.
- Form controls hold many settings directly in DOM inputs.

## Export Flow
`generatePack()` builds a ZIP with:
- `Observer/TeamIcon/*.png` rendered from canvas.
- Optional `Observer/TeamInfo.csv`.
- Optional root `instalar.bat`.
- Optional root `preview.html`.

CSV rows must be escaped. Preview HTML must escape item names and URLs. Object URLs created for downloads should be revoked after click.

Symbols export through the same ZIP path as flags/platforms. `drawSymbolToCanvas()` renders the symbol PNG locally with canvas so generated packs do not depend on Lucide or external CDNs.

## External Dependencies
The CSP in `index.html` must cover:
- `flagcdn.com` for flags.
- `cdn.simpleicons.org`, `kapowaz.github.io`, `www.vectorlogo.zone` for platform logos/fallbacks.
- `fonts.googleapis.com` and `fonts.gstatic.com`.
- `cdnjs.cloudflare.com` for JSZip.
- `unpkg.com` for Lucide.

## Known Risks
- `app.js` and `style.css` are large; prefer scoped edits.
- i18n is parsed statically by tests, so keep object key formatting simple.
- Some UI is generated with `innerHTML`; user-controlled text should be escaped before inserting.
- The browser can block `file://`; use a local server for smoke tests.

## Recent Features
- Flag styles now include realistic, rectangular, rounded, circular, icon, compact, and square variants.
- Flag image loading uses ordered fallbacks between FlagCDN and Square Flags SVGs.
- Competitive quick mode uses `COMPETITIVE_FLAG_ORDER` in `app.js` and is documented in `docs/COMPETITIVE_MODE.md`.
- `instalar.bat` exists as a root template and is also generated inside exported ZIP files.
- Symbols mode uses `symbolsDB` for PUBG feed markers: eliminated, leader, winner, danger, featured, target, defense, combat, revive, and zone. Keep tags unique and fields complete (`tag`, `name`, `category`, `color`, `icon`).
- GitHub Pages deploy prepares a clean `_site` artifact instead of publishing tests/docs from the repo root.
