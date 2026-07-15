---
name: design-menu
description: >
  Estándar visual del tipo MENÚ (shell de la app): sidebar de navegación + barra de pestañas
  (MDI). Usar cuando restyle-view o redesign-view infiere que la vista es el menú/shell. Define la estructura,
  los componentes shadcn y qué preservar. En redesign (redesign-view) se permite una mejora de
  UX: persistencia de pestañas.
---

# Diseño para Menú (shell + navegación)

**Propósito:** el marco de toda la app: navegación + pestañas de vistas abiertas (MDI).

## Estructura
- **Sidebar:** encabezado (logo, usuario/base/rol, selector de empresa), tabs **Menú / Favoritos**
  + buscador, árbol colapsable (grupos con ícono y chevron, ítems con **favorito/estrella**, ítem
  activo resaltado, subniveles), pie (zoom, **modo oscuro**, cerrar sesión, versión). Hamburguesa.
- **Barra de pestañas (MDI):** cada vista abierta = pestaña (ícono + nombre + ✕), activa marcada,
  **overflow** cuando hay muchas.

## Componentes shadcn
Composición de sidebar, `Tabs`/barra custom para pestañas, `Collapsible`/`Accordion` (árbol),
`ScrollArea`, `Tooltip`, `Input` (buscador), `Switch` (modo oscuro), `Button` (íconos).

## Preservar (no se toca)
Favoritos (estrella), switch Menú/Favoritos, cambio de empresa/base, zoom, modo oscuro, colapsar
sidebar, y toda la gestión de pestañas (abrir, cambiar, cerrar, activa, sincronía con el menú).

## Única mejora de UX permitida (solo en redesign)
Solo si la vista se trabaja con `redesign-view` (`/im-redesign`): pestañas respaldadas por
**ruta/URL + persistencia (localStorage)** → sobreviven al recargar y quedan deep-linkables.
En un restyle (`/im-restyle`) NO se agrega. Sin command palette por ahora.

## Layout de referencia
```
┌─────────────────────┐   ┌──────────────────────────────────────────┐
│ Logo + usuario/base │   │ [▢ Vista A ✕][▢ Vista B ✕][ … overflow ] │ ← barra MDI
│ Selector empresa    │   ├──────────────────────────────────────────┤
├─────────────────────┤   │                                          │
│ [Menú] [Favoritos]🔍│   │            contenido de la vista          │
├─────────────────────┤   │                  activa                  │
│ ▼ Artículos         │   │                                          │
│ ▼ Clientes      ☆   │   │                                          │
│   · ABM         ★   │   │                                          │
│   · Consulta        │   │                                          │
│ ▼ Ventas            │   │                                          │
├─────────────────────┤   │                                          │
│ Zoom · 🌙 · Salir   │   │                                          │
│ v1.x.x              │   │                                          │
└─────────────────────┘   └──────────────────────────────────────────┘
```
Ítem activo resaltado (acento `blue-muted-surface` o borde primary izq.); un borde por nivel.

## Mínimos shadcn (ver `ui-design-system/reference/shadcn.md`)
`button input tabs collapsible accordion scroll-area separator badge dropdown-menu tooltip command sonner`
