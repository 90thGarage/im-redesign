---
name: design-facturacion-rapida
description: >
  Estándar visual del tipo FACTURACIÓN RÁPIDA (POS de mostrador): 3 columnas (favoritos,
  carrito, acciones) + barra de total + modales de pago/balanza/cámara. Usar cuando restyle-view o redesign-view
  infiere que la vista es facturación rápida. Define estructura, componentes shadcn y qué preservar.
---

# Diseño para Facturación rápida (POS)

**Propósito:** venta rápida de mostrador. Híbrido teclado + táctil.

## Layout de referencia
```
┌──────────────────────────────────────────────────────┬──────────────┐
│ [Escanear código o escribir descripción…]  ★ 📷 ⚖ ⌨ │ ARCA ●       │ ← captura SOBRE
├────────────┬─────────────────────────────────────────┤ Cliente [▾]  │   la grilla
│ Favoritos  │ Cód│Ítems│uv│C.U.V│Cant ∓│%D│ P.U │Imp ✕ │ Vendedor[▾]  │
│ (grid,     │ ───────────────────────────────────────  │──────────────│
│  paginado, │ 001  Prod A   1  …    [2] -    980  1.960✕│ Op. caja     │
│  colaps.)  │ 002  Prod B   1  …    [1] -  1.250  1.250✕│ [Efectivo]🟩 │
│            │                                          │ [Tarjeta]    │
├────────────┴─────────────────────────────────────────┤ [Salir/ESC]  │
│ Ítems 2 · Cant 3   Subtotal  Descuento  TOTAL $3.210 │              │ ← barra dominante
└──────────────────────────────────────────────────────┴──────────────┘
```
**Viewport crítico (sin scroll):** captura · grilla · total · cliente/vendedor · cobro
(`ui-design-system/reference/layout-tables.md` §3). Scroll solo en la grilla.

## Estructura (3 columnas + barra inferior)
- **Arriba:** buscador "Escanear código o escribir descripción" + acciones rápidas (favoritos ★,
  cámara, balanza, teclado en pantalla).
- **Izquierda — Favoritos:** grilla paginada de productos (card nombre + precio), colapsable.
- **Centro — carrito:** tabla de líneas (Código, Ítems, Unid. venta + badge `uv`, C.U.V., Cantidad
  con **stepper**, % D. Man, % D. Pro, Precio U., Precio c/d, Importe, ✕ por línea).
- **Derecha — acciones:** estado **ARCA**, **Cliente** (selector + lista de precios), **Vendedor**,
  grupos (Operaciones caja, Efectivo sólido verde, Tarj. créd/déb), y **X [ESC] / Salir**.
- **Barra inferior:** Ítems/Cantidades + Subtotal, Descuento, **TOTAL A PAGAR** (barra dominante).

## Modales del flujo
- **Confirmar Pago:** Total + Restante, Medio de pago, Monto, **"+ Agregar otro medio"** (multi-pago);
  Efectivo → Paga con / **Vuelto**; Tarjeta → Tarjeta/Plan/Lote/Cupón/Aut. Cancelar / Confirmar y Facturar.
- **Captura de Peso (Balanza):** selección de balanza (USB/serial), aviso "en uso por…", artículo,
  Peso leído / Cantidad total, atajos (Leer [P], Acumular [+], Reemplazar [R], Finalizar [Enter], Cancelar [Esc]).
- **Escanear Código (cámara):** visor, Girar cámara, Cancelar.

## Componentes shadcn
`Input` + icon-`Button`s (buscador), `Card`/grid (favoritos), `Table`/filas custom (carrito) con
`Input`+stepper, `Select`/`Combobox` (cliente/vendedor), `Button`s (acciones), `Dialog`/`Sheet`
(pago/balanza/cámara), `Badge` (estados).

## Preservar (no se toca)
Escaneo/búsqueda, favoritos + paginado, steppers y ✕ por línea, descuentos por línea,
cliente/vendedor + lista de precios, ARCA, **multi-pago con vuelto**, integración de **balanza**
(serial/USB + atajos), **cámara** (girar lente), y todo el teclado (ESC/Enter/P/+/R).

## Mínimos shadcn (ver `ui-design-system/reference/shadcn.md`)
`button input select table card badge alert separator dialog alert-dialog sheet scroll-area tooltip popover command sonner`
- Excepción documentable: edición inline de la grilla y widgets de hardware (balanza/escáner) —
  si shadcn forzaría cambiar la UX, justificar en el `.md` (gobernanza de excepciones en shadcn.md).
