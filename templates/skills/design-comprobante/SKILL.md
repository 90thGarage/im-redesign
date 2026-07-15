---
name: design-comprobante
description: >
  Estándar visual del tipo COMPROBANTE / FACTURACIÓN COMPLETA: cabecera del comprobante +
  secciones en pestañas (ítems, percepciones, vencimientos, pagos, vínculos) + totales. Usar
  cuando restyle-view o redesign-view infiere que la vista es un comprobante/factura completa. Define estructura,
  componentes shadcn y qué preservar.
---

# Diseño para Comprobante / Facturación completa

**Propósito:** comprobante completo (factura). Hoy existe el **visor/listado** ("Facturas"); la
pantalla de **carga** reusa este mismo layout cuando se implemente.

## Layout de referencia
```
┌──────────────────────────────────────────────────────────────┐
│ Facturas  [Buscar cliente/número…]   Desde [__] Hasta [__]   │ ← header + filtros
├──────────────────────────────────────────────────────────────┤
│ ▸ Comprobante 0001-00012345  ·  Cliente  ·  $…   (colapsable) │
│ ▾ Comprobante 0001-00012346                                  │
│   [Datos generales][Entrega y logística]                     │ ← cabecera (tabs)
│   Número  Fecha  Cliente  Letra  Cond.vta  Moneda  CAE  Vto  │
│   [Ítems (N)][Percepciones][Vencimientos][Pagos][Vínculos]   │ ← secciones (sub-tabs)
│   Cód│Descr│U.Med│Cant│Precio│IVA%│Tip│P.c/IVA│Importe →     │ ← tabla fiscal
│   ──────────────────────────────────────────────────────     │
│                                  Neto  Bonif.  TOTAL $…       │ ← totales (abajo der.)
└──────────────────────────────────────────────────────────────┘
```

## Estructura
- **Header:** título + búsqueda (cliente/número) + **rango de fechas** (Desde/Hasta) → filtros.
- **Listado colapsable** de comprobantes.
- **Cabecera** con pestañas (Datos generales / Entrega y logística): campos (Número, Fecha, Cliente,
  Vendedor, CC, Letra, Condición de venta, Moneda, OC, **CAE**, Vto CAE).
- **Sub-pestañas de secciones:** Ítems (contador) · Percepciones · Vencimientos · Pagos · Vínculos.
- **Tabla de ítems** con columnas fiscales (Cód. art., Descripción, U.Med., Cuenta, Unidad de venta,
  Cantidades, Precio, IVA%, Tip.IVA, Precio c/IVA, Fecha entrega, Importe).
- **Totales** (abajo der.): Neto, Bonificación, **Total**.

## Componentes shadcn
`Input` + date pickers (header), `Collapsible` (listado), `Tabs` (cabecera y secciones), `Table`
(ítems), bloque de totales.

## Preservar (no se toca)
Filtros de fecha + búsqueda, listado expandible, pestañas de cabecera y secciones, columnas
fiscales de ítems, cálculo de totales (Neto/Bonificación/Total), datos de CAE/fiscales.

## Cuando exista la carga (data-entry)
Sumar toolbar de edición (Nuevo/Grabar…) + campos editables + alta/baja de ítems, sobre el mismo
layout. No rediseñar.

## Mínimos shadcn (ver `ui-design-system/reference/shadcn.md`)
`button input label select table tabs checkbox textarea card separator badge alert dialog alert-dialog sheet collapsible tooltip popover calendar command sonner`
- Muchas columnas fiscales: compactar antes de overflow; si va, dentro de la tabla con header
  sticky (`reference/layout-tables.md`). Estado del comprobante (borrador/emitido) con `Badge`.
