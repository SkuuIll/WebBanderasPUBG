---
name: engram
description: Sistema de memoria y contexto persistente para guardar decisiones de arquitectura, convenciones y preferencias clave durante el desarrollo.
---

# Engram Context & Persistent Memory

## Registro de Convenciones y Decisiones Clave

1. **Framework-Free & Static**: El proyecto es 100% vanilla JavaScript, HTML y CSS. Sin transpiladores, ni frameworks (React, Vue, etc.) ni APIs de pago.
2. **Internacionalización (i18n)**: Español como idioma principal. Todas las claves en `I18N.es` y `I18N.en` deben mantenerse perfectamente sincronizadas.
3. **Optimización de Exportación ZIP**: Utiliza JSZip en cliente para empaquetar PNGs canvas, `TeamInfo.csv`, `preview.html` e `instalar.bat`.
4. **Verificación Estricta**: Cada cambio debe ser validado con `npm test`.
