---
name: design-consultas
description: >
  Estándar visual del tipo CONSULTAS (reporte solo lectura con listados guardados). Usar cuando
  restyle-view o redesign-view infiere que la vista es una consulta/listado. Define estructura, componentes
  shadcn y qué preservar.
---

# Diseño para Consultas

**Propósito:** consulta/reporte **solo lectura** con listados guardados.

## Layout de referencia
```
┌───────────┬──────────────────────────────────────────────────┐
│ Listados  │ ▌Título · subtítulo   Ocultar·Imprimir·Exportar·▶ │ ← toolbar oscura
│ guardados │──────────────────────────────────────────────────│   (Ejecutar = verde)
│ + ───────│ Resultados (N)   ⚠ tope alcanzado   Límite [500▾] │
│ ★ Listado │──────────────────────────────────────────────────│
│   Listado │ col1 │ col2 🔽│ col3 🔽│ col4 →│ … (muchas)        │ ← tabla read-only
│   Listado │ ──────────────────────────────────────────────── │   (filtro x col, zebra,
│  (públ/   │ fila…                                             │    header sticky)
│   priv)   │ fila…                                             │
│           │──────────────────────────────────────────────────│
│           │ Filas por página [50▾]              ‹ 1 2 3 ›     │ ← pie
└───────────┴──────────────────────────────────────────────────┘
```

## Estructura
- **Toolbar (oscura):** título + subtítulo del listado; acciones **Ocultar listados · Imprimir ·
  Exportar · Ejecutar** (verde, primaria).
  **Superficie fija (mismo criterio que `design-auth`):** la toolbar es siempre oscura, sin
  importar el tema de la app — usá los valores de superficie oscura fijos (`--background: #0b1220`
  / `--card: #1a2335` del tema oscuro de `colors-tokens.md`) como color literal, NO `bg-strong`
  (ese token invierte según tema y en `.light` deja de ser oscuro). El texto de la toolbar usa
  valores fijos claro-sobre-oscuro (blanco/`#e6edf3`), no `text-foreground`, para seguir siendo
  legible en modo claro.
- **Panel "Listados guardados":** lista con **+**; cada ítem con nombre, alcance (Pública/privada)
  y acciones (editar, renombrar, copiar, visibilidad, eliminar). Activo resaltado. Ocultable.
- **Resultados:** "Resultados (N)" + aviso "tope alcanzado" + selector **Límite**. Tabla
  **read-only** con **filtro por columna**, filas zebra, muchas columnas.
- **Pie:** filas por página + paginado.

## Componentes shadcn
`Button` + `Select` (toolbar/límite), lista/`Card` con icon-`Button`s (listados), `Table`
(resultados: header sticky, filtros, zebra), `Select` + paginación (pie).

## Preservar (no se toca)
CRUD de listados guardados (público/privado), Ejecutar, Exportar, Imprimir, Límite + aviso de
tope, filtros por columna, orden, filas por página, paginado, ocultar listados/config, filas
read-only.

## Mínimos shadcn (ver `ui-design-system/reference/shadcn.md`)
`button input select table card separator badge scroll-area skeleton popover calendar command sonner`
- Muchas columnas: compactar densidad/numéricos antes de aceptar overflow; si va, dentro de la
  tabla con header sticky (`reference/layout-tables.md`). Empty: "Sin resultados" + ajustar filtros.
