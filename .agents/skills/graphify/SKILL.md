---
name: graphify
description: Mapeo de estructura y grafos de dependencias entre módulos, archivos y componentes del proyecto para evitar efectos colaterales al refactorizar.
---

# Graphify Code Mapper

## Visión General
Herramienta de análisis estructural de dependencias del proyecto FlagForge Studio.

## Mapa Global de Dependencias
- `index.html` -> Carga `css/style.css`, `js/db.js`, `js/platforms_db.js`, `js/symbols_db.js`, `js/app.js`
- `js/app.js` -> Consume:
  - `db.js` (`db`, `COMPETITIVE_FLAG_ORDER`)
  - `platforms_db.js` (`platformsDB`, `PLATFORM_LOGO_MAP`)
  - `symbols_db.js` (`symbolsDB`)
- `tests/run-tests.mjs` -> Valida i18n keys, HTML IDs, assets, manifest, CSP, bats y helpers.
- `instalar.bat` -> Plantilla para el instalador del paquete Observer exportado.

## Regla de Impacto
Antes de renombrar IDs, claves i18n o funciones exportadas, verificar en `tests/run-tests.mjs` y `index.html` para asegurar coherencia total.
