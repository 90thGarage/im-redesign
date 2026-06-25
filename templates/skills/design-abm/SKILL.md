---
name: design-abm
description: >
  Estándar visual del tipo ABM (alta/baja/modificación): toolbar + grilla maestra + detalle
  (con o sin pestañas). Usar cuando restyle-view infiere que la vista es un ABM. Define
  estructura, componentes shadcn y qué preservar.
---

# Diseño para ABM

**Propósito:** ABM de una entidad (Artículos, Clientes…). Maestro-detalle.

## Layout de referencia
```
┌──────────────────────────────────────────────────────────┐
│ ABM [Entidad]  [Buscar…] ⟳  Alta·Nuevo·Editar·Grabar·🗑  │ ← toolbar (estados por modo)
├──────────────────────────────────────────────────────────┤
│ Cód │ Nombre        │ Rubro    │ Precio →│ Estado          │ ← grilla maestra
│ ──────────────────────────────────────────────────────── │   (orden + filtro x col,
│ ▍001  Artículo A      General      1.250   Activo          │    fila sel. resaltada,
│   002  Artículo B      General        980   Inhab. (gris)   │    paginado al pie)
├──────────────────────────────────────────────────────────┤
│ [Datos grales][Cuentas][Precios][Depósitos]               │ ← detalle con tabs
│ ┌ Sección ── *obligatorio ┐  ┌ Sección ┐                  │   (secciones/cards,
│ │ label  [input]          │  │ [select]│                  │    inputs/selects/checkbox)
│ └─────────────────────────┘  └─────────┘                  │
└──────────────────────────────────────────────────────────┘
```

## Estructura
- **Toolbar:** título, buscador, refrescar, acciones **Alta Rápida · Nuevo · Editar · Copiar ·
  Grabar · Eliminar · Cancelar** (habilitadas/deshabilitadas según modo consulta/edición/alta).
- **Grilla maestra:** columnas con orden y **filtro por columna**, fila seleccionada resaltada,
  filas **inhabilitadas** en gris con etiqueta, numéricos a la derecha, **paginado** al pie.
- **Detalle:** **con pestañas** (Datos Generales, Cuentas Contables, Precios, Depósitos…) o
  **sin pestañas** (una sola sección). Contenido en **secciones/cards** con título+ícono, inputs,
  selects, checkboxes, imagen, marcadores de obligatorio (\*).

## Componentes shadcn
`Button` (toolbar), `Table` (grilla: header sticky, sortable, selección, paginado), `Tabs`
(detalle), `Card` (secciones), `Input`/`Select`/`Checkbox`/`Textarea`.

## Preservar (no se toca)
Selección maestro-detalle, lógica de habilitado/deshabilitado por modo, **consulta vs edición**
(campos bloqueados sin editar), pestañas del detalle, orden/filtros/paginado, estilo de fila
inhabilitada, Copiar ("COPIA"), Alta Rápida, marcadores de obligatorio.

## Variantes
Tabbed y single-section.

## Mínimos shadcn (ver `ui-design-system/reference/shadcn.md`)
`button input label select table tabs checkbox textarea card separator badge dialog alert-dialog dropdown-menu scroll-area skeleton tooltip popover command sonner`
- Grabar = `Button` primario; Eliminar = `destructive`; Cancelar = `ghost`; resto outline.
- Tabla: no scroll horizontal por defecto (`reference/layout-tables.md`).
