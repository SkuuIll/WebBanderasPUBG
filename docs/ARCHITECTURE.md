# Architecture

## Runtime
The app is a static PWA. `index.html` loads CSS, CDN dependencies, the two databases, and then `js/app.js`. There is no compilation, bundling, server API, or persistence beyond browser storage and downloaded files.

## Data Flow
1. `db.js` and `platforms_db.js` expose item arrays.
2. `app.js` initializes DOM refs and UI state on `window.load`.
3. Library filters/search render cards into `#availableList`.
4. Clicking a card pushes an item into `selectedSlots`.
5. Roster rendering updates `#selectedList`, counters, button states, and the active canvas preview.
6. Export uses canvas rendering to create PNG blobs and JSZip to produce the final ZIP.

## Major Subsystems
- **i18n:** `I18N` object in `app.js`, applied through `data-i18n` and `data-i18n-attr`.
- **Library/search:** filter buttons, global search dropdown, and mobile search modal.
- **Preview:** canvas rendering functions draw flags/logos, shapes, number badges, opacity, stroke, and shadow.
- **Roster:** selection, remove, duplicate, shuffle, sort, drag and drop, undo.
- **Persistence:** session restore, JSON save/load, URL share links.
- **Export:** CSV-only download and ZIP generation.
- **Competitive mode:** deterministic 100-flag roster from `COMPETITIVE_FLAG_ORDER`.
- **Installer:** `generateBat()` emits the ZIP installer; root `instalar.bat` is the visible template.

## Testing Strategy
The existing tests are static and fast. Keep them dependency-free unless the project intentionally adopts a test runner. Add browser smoke tests manually after visual changes.

## Refactor Guidance
If the project is later modularized, split `app.js` by behavior:
- state/settings helpers
- i18n
- rendering
- search
- persistence/share
- export
- modal/accessibility helpers

Do this only when there is time to preserve behavior with tests.
