# Componentes (shadcn/ui con tokens InfoManager)

Sistema claro y operacional: radius 4px, labels en **Geist Mono**, densidad compacta. Primitivas
shadcn estiladas con tokens; componer solo por legibilidad. `cn()` de `@/lib/utils`.

## Botones

> Reglas finas (tamaños fijos, color disciplinado solo por semántica, íconos solo en
> principales/destructivas, radius 4px) en `refinement.md`. Resumen abajo.
 (label mono, 40px, radius 4px)
```jsx
<Button className="font-mono">Cobrar y emitir</Button>            // primaria AZUL. 1 por pantalla
<Button className="font-mono bg-strong text-strong-foreground hover:bg-strong/90">Confirmar pago</Button>
<Button variant="outline" className="font-mono">Cambiar</Button> // secundaria
<Button variant="ghost" className="font-mono">Cancelar</Button>
<Button variant="destructive" className="font-mono">Eliminar</Button>
```
Alturas 40/36/48px. Una accion dominante por pantalla; el resto outline/ghost. Tip: setear
`font-mono` en la variante base del Button del repo.

## Atajos de teclado (kbd)
```jsx
function Kbd({ children }) {
  return <kbd className="ml-1.5 rounded-[var(--radius)] border border-border bg-muted px-1.5 py-0.5 font-mono text-[12px] text-muted-foreground">{children}</kbd>;
}
```

## Tablas (shadcn `<Table>`, densas, NO flex de divs)
Celdas con padding propio: separan solas. Filas 36-48px, headers mono, numeros a la derecha.
Muchas columnas -> misma `<Table>` con `overflow-x-auto` (scrollea, no se encima). Patron: grilla
densa de lineas de venta (POS/comprobante) — una fila por item, columnas codigo/descripcion/
cantidad/precio/subtotal, edicion inline de cantidad, totales alineados a la derecha.

## Paneles
`bg-card border border-border rounded-[var(--radius)]`, padding operacional 8-16px. Sin sombras
decorativas ni glassmorphism.

## Patrones POS
- **Accion primaria** "Cobrar y emitir" (azul) en el bottom bar, junto al TOTAL, visible sin scroll.
- **Total dominante:** `<span className="font-mono text-3xl tabular-nums">$ 44.665,18</span>`.
- **Descuento visible:** `dto>0` -> `<Badge>`; si 0, `0%` tenue.
- **Cobro (drawer/Sheet) con vuelto:** metodos (Efectivo/Tarjeta/Transferencia-QR) seleccionables;
  "Recibido" -> "Vuelto" en vivo; primaria "Confirmar pago y emitir". Patron: `<Sheet>` lateral que
  compone metodo de pago + input "Recibido" + "Vuelto" calculado + boton primario, sin tapar la
  grilla de items de fondo.
- **Targets tactiles:** botones/filas comodos; stepper de cantidad con `Input` + `+/-`.

## Composicion permitida
Componentes locales (`SaleLinesTable`, `CheckoutDrawer`, `TotalBar`) que combinan primitivas
shadcn + tokens.

## Contraste de texto (general) — IMPORTANTE
Todo el texto de **contenido** (labels, valores, headers de tabla, filas, totales) usa
`text-foreground`. `text-muted-foreground` solo para hints verdaderamente secundarios, y aun
así debe cumplir AA. **Nunca** uses grises sueltos (`text-gray-300/400`, `text-slate-400`) ni
`opacity` para texto de contenido. Verificá legibilidad en **claro Y oscuro** (el error típico:
texto lavado en modo claro). Las filas/headers de las grillas deben leerse con fuerza.

## Inputs y contraste (legibilidad de valores) — IMPORTANTE
El error típico tras el restyle: los valores de los inputs (sobre todo en consulta/disabled)
quedan gris clarito y no se leen (parecen placeholder). Reglas:

- **El VALOR del input va siempre con `text-foreground`** (alto contraste). El color muted
  (`text-muted-foreground`) es SOLO para el placeholder y los labels, nunca para el valor.
- **Modo consulta / solo lectura / disabled:** NO usar `disabled:opacity-50` (atenúa el dato y
  lo vuelve ilegible). Para campos no editables, mostrar el valor con **contraste pleno**:
  `bg-muted text-foreground cursor-default` + borde tenue. El usuario tiene que poder **leer**
  el dato aunque no pueda editarlo.
- Placeholder con `text-muted-foreground`; valor real con `text-foreground`.
- Lo mismo aplica a `Select`/`Combobox` (el valor seleccionado con `text-foreground`).
- **Verificar contraste en claro Y oscuro** (AA).
