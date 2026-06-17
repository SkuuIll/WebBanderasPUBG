# 🏁 PUBG Flag Kit Generator

> Herramienta web profesional para generar packs de banderas numeradas para el **Killfeed de PUBG** en modo Observer.

🌐 **[Ver demo online →](https://skuuill.github.io/WebBanderasPUBG/)**

---

## ¿Qué es?

Cuando observás un torneo o partida de PUBG en **modo Observer**, el killfeed muestra los números de equipo por defecto (Team 1, Team 2, etc.). Con esta herramienta podés **reemplazar esos números por banderas de países, logos de plataformas o símbolos competitivos**, lo que hace mucho más fácil identificar de qué país es cada equipo o marcar estados importantes durante el stream.

**FlagForge Studio** te permite seleccionar países, asignarles números de equipo, personalizar la apariencia y exportar un ZIP que, una vez instalado, muestra las banderas directamente en el killfeed de PUBG.

---

## ¿Cómo funciona el sistema de Observer de PUBG?

PUBG lee iconos de equipo personalizados desde una carpeta específica en tu PC:

```
%LOCALAPPDATA%\TslGame\Saved\Observer\TeamIcon\
```

Que normalmente se traduce a:
```
C:\Users\TuUsuario\AppData\Local\TslGame\Saved\Observer\TeamIcon\
```

Dentro de esta carpeta necesitás:
1. **Imágenes PNG** — una por cada equipo, nombradas con su número (ej: `1-Argentina.png`)
2. **TeamInfo.csv** — un archivo CSV que vincula cada número de equipo con su imagen, nombre y color

> **Importante:** Si usás varios PCs para observar, tenés que instalar el pack en **todos** los PCs de observer. Si no, se muestran los números por defecto.

---

## ¿Qué hace `instalar.bat`?

El archivo `instalar.bat` que se incluye en el ZIP **automatiza toda la instalación** desde cualquier carpeta donde descomprimas el pack.

### Paso a paso:

1. **Establece codificación UTF-8** (`chcp 65001`) para que los nombres con acentos se copien correctamente
2. **Define origen y destino**: origen `Observer` junto a `instalar.bat`, destino `%LOCALAPPDATA%\TslGame\Saved\Observer`
3. **Verifica precondiciones**: que existan `Observer`, `TeamIcon` y `TeamInfo.csv`
4. **Crea automáticamente carpetas faltantes** dentro de `%LOCALAPPDATA%\TslGame\Saved`
5. **Copia archivos con `robocopy`** si está disponible, o `xcopy` como respaldo
6. **Verifica la instalación final**: `TeamInfo.csv`, `TeamIcon` y PNGs generados
7. **Muestra mensajes claros** y deja la ventana abierta si ocurre un error

Ejemplo de estructura desde donde podes ejecutar el `.bat` (cualquier ubicacion):
```
C:\MiCarpeta\RosterBanderas\
├── instalar.bat
└── Observer\
    ├── TeamInfo.csv
    └── TeamIcon\
```

Destino final:
`%LOCALAPPDATA%\TslGame\Saved\Observer`

### Instalación Manual (alternativa)

Si preferís no usar el `.bat`, simplemente:
1. Descomprimí el ZIP
2. Copiá la carpeta `Observer` a `%LOCALAPPDATA%\TslGame\Saved\`
3. Listo — la próxima vez que abras PUBG en modo Observer, vas a ver las banderas

> **Tip rápido:** Podés abrir la carpeta destino rápidamente presionando `Win + R` y escribiendo:
> `%LOCALAPPDATA%\TslGame\Saved`

---

## Características

- 📚 **200+ países** con banderas reales via FlagCDN
- ⚔️ **Símbolos para feed** — eliminado, líder, ganador, peligro, destacado, objetivo, defensa, combate, revive y zona
- 🏆 **Filtros especializados** — PUBG Esports Top 20, Banderas Icónicas, Populares
- 🔍 **Buscador con autocomplete** — dropdown con preview de banderas, búsqueda por nombre, ISO o continente
- 🎨 **Vista previa en tiempo real** con canvas dinámico
- 🏁 **Modo rápido competitivo** — genera 100 banderas únicas priorizadas para scrims/torneos vistos por jugadores argentinos
- 🖼️ **Estilos de bandera ampliados** — rectangular, circular, redondeado, ícono, compacto y cuadrado con fallback automático
- 🎮 **Presets rápidos** — Gaming, Esports Pro, Sport, Clean, Retro con un click
- 🔤 **Fuentes gaming-style** — Bebas Neue, Anton, Teko, Bungee (inspiradas en Refrigerator Deluxe)
- ✏️ **Texto personalizado** — podés poner texto custom en vez del número
- 🔢 **Badges de número configurables** — posición, tamaño, fuente, color, opacidad, sombra, forma
- 🖼 **Modo Contain** — bandera completa sin recortes, con fondo personalizable o transparente
- 🗂️ **Roster drag & drop** — reordenar arrastrando
- 📊 **Vista grid/lista** — cambiá entre vistas en la librería
- 💾 **Guardar/Cargar selección** como JSON
- ↩ **Deshacer** (Ctrl+Z) con historial de 30 acciones
- 📋 **Copiar al portapapeles** con un click
- ⌨️ **Atajos de teclado** completos
- 📦 **Exportar ZIP** con imágenes PNG + `TeamInfo.csv` + `instalar.bat` + preview HTML
- 🌙 **Tema oscuro/claro** sin parpadeo (FOUC-free)
- 🎯 **Soporte hasta 105 equipos** — PUBG puede asignar números >100 en Solos

## Uso Rápido

1. Abrí `index.html` en tu navegador (o usá la [demo online](https://skuuill.github.io/WebBanderasPUBG/))
2. Elegí **Banderas**, **Plataformas** o **Símbolos**
3. Seleccioná los ítems desde la librería de la izquierda
4. Ajustá el estilo (o usá un preset como "Gaming")
5. Hacé click en **Empaquetar ZIP**
6. Descomprimí el ZIP en cualquier carpeta (manteniendo `instalar.bat` junto a `Observer`)
7. Ejecutá `instalar.bat` (instala en `%LOCALAPPDATA%\TslGame\Saved\Observer`)
8. Abrí PUBG en modo Observer y revisá el killfeed

## Atajos de Teclado

| Atajo | Acción |
|---|---|
| `←` / `→` | Navegar entre banderas |
| `Del` | Eliminar bandera activa |
| `Ctrl+Z` | Deshacer |
| `Ctrl+C` | Copiar preview al portapapeles |
| `Ctrl+S` | Guardar roster como JSON |
| `Ctrl+E` | Empaquetar ZIP |
| `F` | Enfocar búsqueda |
| `Esc` | Cerrar modal |

## Estructura del ZIP Exportado

```
RosterBanderas_FlagForge.zip
├── instalar.bat          ← Instalador automático
├── preview.html          ← Vista previa HTML del pack
└── Observer/
    ├── TeamInfo.csv      ← Mapeo equipo→bandera para PUBG
    └── TeamIcon/
        ├── 1-Argentina.png
        ├── 2-Brasil.png
        ├── 3-Chile.png
        └── ...
```

## Tecnologías

- HTML5 Canvas API
- Vanilla CSS (Dark/Light theme)
- Vanilla JavaScript (sin frameworks)
- [JSZip](https://stuk.github.io/jszip/) — generación de ZIP en el browser
- [Lucide Icons](https://lucide.dev/) — iconografía SVG
- [FlagCDN](https://flagcdn.com/) — imágenes de banderas
- [Google Fonts](https://fonts.google.com/) — Fuentes gaming-style (Bebas Neue, Anton, Teko, Bungee)

## Desarrollo y GitHub Pages

```bash
npm test
npm start
```

- `npm test` ejecuta validaciones estáticas de i18n, manifest, assets, CSP, modo competitivo, instalador y metadatos de GitHub Pages.
- `npm start` levanta la web local en `http://127.0.0.1:8765/`.
- El workflow `.github/workflows/pages.yml` corre tests y publica automáticamente GitHub Pages desde `main`.
- El deploy prepara un artifact `_site` con solo archivos públicos: `index.html`, `404.html`, `manifest.json`, `robots.txt`, `sitemap.xml`, `.nojekyll`, `css/`, `js/` e `icons/`.
- La web incluye `.nojekyll`, `robots.txt`, `sitemap.xml`, `404.html`, canonical URL y metadatos Open Graph/Twitter para compartir mejor el link.

### Activar GitHub Pages desde Actions

1. Subí estos archivos a la rama `main`.
2. En GitHub, entrá a **Settings → Pages**.
3. En **Build and deployment**, elegí **Source: GitHub Actions**.
4. Andá a **Actions → Test and Deploy GitHub Pages** y ejecutá **Run workflow** si querés publicar manualmente.
5. Cuando el job termine, la app queda en `https://skuuill.github.io/WebBanderasPUBG/`.

## ¿Por qué FlagForge Studio?

### vs. Packs Pre-hechos (como pubg-flagfeed)
✅ **Personalización total** — Elegí exactamente qué banderas, logos o símbolos querés  
✅ **Vista previa en tiempo real** — Ves cómo queda antes de exportar  
✅ **Números configurables** — Posición, tamaño, color, fuente  
✅ **Plataformas y símbolos** — No solo banderas, también logos de Twitch/Discord y marcas tácticas para el feed  
✅ **Siempre actualizado** — Banderas desde FlagCDN, siempre la última versión  
✅ **Filtros especializados** — PUBG Esports Top 20, Banderas Icónicas  
✅ **Fuentes profesionales** — Gaming-style fonts para máxima legibilidad

## Licencia

MIT — libre uso y modificación.
