# 🏁 PUBG Flag Kit Generator

> Herramienta web profesional para generar packs de banderas numeradas para el **Killfeed de PUBG** en modo Observer.

🌐 **[Ver demo online →](https://skuuill.github.io/WebBanderasPUBG/)**

---

## ¿Qué es?

Cuando observás un torneo o partida de PUBG en **modo Observer**, el killfeed muestra los números de equipo por defecto (Team 1, Team 2, etc.). Con esta herramienta podés **reemplazar esos números por banderas de países**, lo que hace mucho más fácil identificar de qué país es cada equipo durante el stream.

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

El archivo `instalar.bat` que se incluye en el ZIP **automatiza toda la instalación**. Lo que hace internamente es:

```bat
@echo off
chcp 65001 > nul
echo =======================================
echo  FlagForge Studio - Instalando Banderas
echo =======================================
xcopy /s /e /y "Observer" "..\Observer\"
echo.
echo  Instalacion completada con exito!
pause
```

### Paso a paso:

1. **Establece codificación UTF-8** (`chcp 65001`) para que los nombres con acentos (ñ, á, é, etc.) se copien correctamente
2. **Copia la carpeta `Observer`** (con las imágenes y el CSV) al directorio padre. **Esto significa que tenés que descomprimir el ZIP dentro de la carpeta `Saved` de PUBG** para que funcione:
   ```
   C:\Users\TuUsuario\AppData\Local\TslGame\Saved\
   └── (descomprimí el ZIP acá)
       ├── instalar.bat    ← ejecutá esto
       └── Observer\
           ├── TeamInfo.csv
           └── TeamIcon\
               ├── 1-Argentina.png
               ├── 2-Brasil.png
               └── ...
   ```
3. Al ejecutar `instalar.bat`, copia `Observer/` a `../Observer/`, que queda en la ubicación correcta: `Saved\Observer\`

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
- 🏆 **Filtros especializados** — PUBG Esports Top 20, Banderas Icónicas, Populares
- 🔍 **Buscador con autocomplete** — dropdown con preview de banderas, búsqueda por nombre, ISO o continente
- 🎨 **Vista previa en tiempo real** con canvas dinámico
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
2. Seleccioná los países desde la librería de la izquierda
3. Ajustá el estilo (o usá un preset como "Gaming")
4. Hacé click en **Empaquetar ZIP**
5. Descomprimí el ZIP en `%LOCALAPPDATA%\TslGame\Saved\`
6. Ejecutá `instalar.bat`
7. Abrí PUBG en modo Observer → las banderas aparecen en el killfeed 🎉

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

## ¿Por qué FlagForge Studio?

### vs. Packs Pre-hechos (como pubg-flagfeed)
✅ **Personalización total** — Elegí exactamente qué banderas querés  
✅ **Vista previa en tiempo real** — Ves cómo queda antes de exportar  
✅ **Números configurables** — Posición, tamaño, color, fuente  
✅ **Plataformas sociales** — No solo banderas, también logos de Twitch, Discord, etc.  
✅ **Siempre actualizado** — Banderas desde FlagCDN, siempre la última versión  
✅ **Filtros especializados** — PUBG Esports Top 20, Banderas Icónicas  
✅ **Fuentes profesionales** — Gaming-style fonts para máxima legibilidad

## Licencia

MIT — libre uso y modificación.
