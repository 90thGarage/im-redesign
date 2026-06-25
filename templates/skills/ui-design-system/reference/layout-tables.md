# Layout, viewport y tablas responsive

> Lo mejor del kit genérico (anti scroll horizontal + viewport fit), adaptado al carácter
> **operacional** de InfoManager. Complementa `refinement.md` (ritmo/espaciado) y `design.md`
> (viewport crítico). Es presentación pura: no mueve campos ni cambia el flujo.

## 1. Tablas sin scroll horizontal (regla por defecto)

El scroll horizontal es el **último recurso**, no la solución. Una tabla reembellecida debe caber
en el ancho de su panel/contenedor. Probá estas técnicas **antes** de permitir overflow:

- `table-layout: fixed` + anchos por `minmax(0, 1fr)` o porcentajes explícitos por columna.
- Encoger controles de fila a variantes compactas (`h-8`, `size="sm"`).
- Alinear y compactar columnas numéricas / de importe (`text-right tabular-nums font-mono`).
- Truncar texto largo con `truncate` + `title`/`Tooltip` para acceder al valor completo.
- Wrap controlado de labels multi-palabra cuando no rompe el escaneo.
- Combinar metadatos relacionados en una misma celda si el significado se mantiene.
- `Badge` o códigos cortos para valores tipo estado.
- En contenedores angostos, apilar la fila en layout card/stack preservando **cada** campo y acción.
- Mantener las acciones destructivas de fila visibles y compactas, no empujadas fuera del contenedor.

**Solo** se permite scroll horizontal si toda alternativa ocultaría información requerida, cambiaría
el orden de tareas o quitaría acciones. Si pasa, **reportarlo** en el `.md` de la vista con la ruta
y el nombre de la tabla como limitación conocida.

> InfoManager: las grillas densas con muchas columnas (consultas, ítems de comprobante) son
> válidas. Antes de aceptar overflow, compactá densidad y numéricos; si aun así no entra por la
> cantidad de columnas fiscales, el overflow va **dentro** de la tabla (no de la página), con el
> header sticky.

## 2. Viewport fit (app shell de ancho completo)

Corregí wrappers legacy que impiden usar la pantalla. Es polish de layout, no un rediseño.

**Permitido:**

- Reemplazar canvas legacy de ancho fijo / centrado por un app shell a viewport completo.
- `min-h-screen`, `w-full`, grid/flex responsive, regiones de contenido scrolleables.
- Dejar que las pantallas operativas densas usen todo el ancho y alto disponibles.
- Mantener navegación, tabs, acciones, campos, labels y orden de tareas **sin cambios**.

**No permitido:**

- Estirar controles individuales de forma que dañe el escaneo.
- Inventar navegación nueva o quitar chrome existente.
- Recortar contenido requerido para fingir pantalla completa.
- Convertir una pantalla densa en layout tipo marketing.

### Prohibido el scroll horizontal de PÁGINA (error frecuente)

Síntoma: el rail/panel lateral queda **cortado** contra el borde y aparece un scrollbar horizontal
del navegador (p. ej. en POS se ve "620 - CON…", "LOCAL MA…", "Cam…" tajados a la derecha). Causa:
el shell suma anchos **fijos** (columnas + rail) que exceden `100vw`, en vez de un grid responsive.

**Patrón correcto (3 columnas + rail, tipo Factura POS):**

- Contenedor raíz: `h-screen w-full overflow-hidden flex` (o `grid`). Nunca un ancho fijo mayor al viewport.
- **Columna central = flexible y encogible:** `flex-1 min-w-0` (el `min-w-0` es clave: sin él, una
  tabla ancha empuja el layout y genera el scroll horizontal). La tabla scrollea **dentro** de esta
  columna (`overflow-x-auto`), no la página.
- **Rail lateral = ancho acotado y fijo, sin crecer:** `w-[300px] shrink-0` (o `lg:w-80`), su propio
  `overflow-y-auto`. En pantallas angostas, el rail **se apila debajo** o colapsa, no fuerza overflow.
- Regla mental: `min-w-0` en los hijos flex + `overflow-hidden` en el shell + scroll movido a las
  regiones internas (grilla, rail). Si hay scrollbar horizontal de página, **algo tiene ancho fijo
  de más** — buscalo (anchos en px del rail, `w-max`, tablas sin contenedor).

## 3. Viewport crítico (operacional — POS, caja, captura)

En facturación rápida, comprobante, caja y captura rápida, **sin scroll** deben verse:

1. Input principal (código/barras/búsqueda de ítems), **directamente sobre** la grilla que alimenta.
2. Lista o grilla de trabajo (aunque esté vacía).
3. Total o estado.
4. Validación bloqueante (si aplica), con su razón visible.
5. Acción de completar (Cobrar / Grabar / Emitir).

La región scrolleable es la **grilla**, no la página. Barras de acción / rails laterales quedan
fijos/sticky. Las acciones secundarias se agrupan o colapsan por debajo del camino crítico.

### Prohibido el scroll VERTICAL de página por `100vh` + navbar (error frecuente)

Síntoma: tenés que **scrollear hacia abajo** aunque "todo entra", porque la vista usa
`h-screen` / `min-h-screen` / `100vh` **y además** hay un navbar/tab-bar arriba → la altura total
es `navbar + 100vh`, que **supera** el viewport y genera scroll vertical.

**Regla:** una vista que vive **debajo** de un navbar **no** puede usar `h-screen`/`min-h-screen`/
`100vh`. Tiene que ocupar la **altura restante**, no la total.

**Patrón correcto (layout raíz):**

```tsx
// Raíz de la app: una sola columna a pantalla completa, sin scroll de página
<div className="h-screen flex flex-col overflow-hidden">
  <header className="shrink-0">…navbar / tab-bar…</header>
  <main className="flex-1 min-h-0 overflow-hidden">
    {/* la vista llena el espacio del padre, NO usa 100vh */}
    <FacturaPos className="h-full" />
  </main>
</div>
```

- El **único** `h-screen`/`overflow-hidden` va en el contenedor raíz. El navbar es `shrink-0`; el
  área de contenido es `flex-1 min-h-0` (el `min-h-0` permite que los hijos scrolleen internamente).
- La vista interna usa `h-full` (hereda del padre), **nunca** `100vh`/`h-screen`.
- Alternativa si no controlás el raíz: `h-[calc(100vh-<alto-navbar>)]` (p. ej. `h-[calc(100vh-3rem)]`),
  pero el patrón flex de arriba es preferible porque no depende de medir el navbar.
- El scroll (si hace falta) vive **dentro** de la grilla o el rail, no en la página.

## 4. Verificación de layout (antes de cerrar)

- **Sin scrollbar vertical de página:** la suma navbar + vista entra en el viewport. La vista usa
  `h-full` / altura restante, no `100vh`/`h-screen` (ver gotcha arriba).
- **Sin scrollbar horizontal de página:** el rail/panel lateral no queda cortado; columna central
  con `min-w-0`, rail acotado (`shrink-0`), shell `overflow-hidden` (ver gotcha §2).
- El shell ocupa el viewport disponible; no queda una réplica chica centrada con espacio muerto
  (salvo que el original requiera a propósito una superficie modal/dialog acotada).
- Las tablas caben en su componente/contenedor sin scroll horizontal de página o panel.
- Desktop **y** mobile usables (ver `/im-review-ui`).
- Sin overlap, clipping ni texto cortado.
