---
description: Verifica que un restyle quedó lindo Y preservó API, lógica y comportamiento; reporta hallazgos
argument-hint: <ruta-o-vista> (la vista reembellecida; idealmente con git diff disponible)
---

Revisá el restyle de **$ARGUMENTS**. El objetivo doble: que (a) se vea bien y estándar, y (b)
**no se haya roto nada**. Si hay `git diff`, miralo: el diff debería ser **solo de presentación**.

## Preservación (lo más importante — marcá CRÍTICO si falla)
- [ ] **Misma API pública**: mismo `export`, mismos `props`, misma ruta (drop-in).
- [ ] **Lógica/estado/handlers/efectos/endpoints/validaciones/refs** intactos (sin cambios de comportamiento).
- [ ] **Teclado y atajos** preservados.
- [ ] **Textos, labels y orden de campos** sin cambios.
- [ ] El diff NO toca lógica (solo JSX/estilos).

## Estándar visual (design system)
- [ ] Componentes **shadcn** + tokens; cero colores arbitrarios; radius 4px; respeta claro/oscuro.
- [ ] **Radius computado real ~4px** (no 8-16px). Ojo escala legacy `--radius-md/lg` en `:root`;
      la escala `rounded-*` debe resolver a 4px (ver colors-tokens §3b). Medir en el navegador.
- [ ] **Tema por defecto = CLARO del `design.md`** (fondo `#F5F5F5`, superficies blancas, azul
      `#0057FF`). No es un dark theme genérico (navy plano). El oscuro solo espeja un toggle existente.
- [ ] **Acción dominante en color:** Cobrar/Efectivo/Emitir va en **azul** (`bg-primary`) o **negro**
      (`bg-strong`), no como botón claro/lavado. Los íconos/acciones secundarias (cámara, `+`) **no**
      tienen más saturación que la dominante (jerarquía no invertida).
- [ ] **El azul de marca es el real (§3d):** `--primary` computa `#0057FF` (`rgb(0,87,255)`) en
      claro y `#4f86ff` en oscuro — NO un indigo/morado del default de shadcn (`#2563eb`/oklch).
      Ningún botón hardcodea color (`bg-blue-600`, `bg-[#...]`); usan `bg-primary`. `--ring`/`--accent`
      tampoco quedaron en el indigo default.
- [ ] **Superficies diferenciadas en oscuro:** las cards/paneles se leen por encima del fondo
      (no todo el mismo tono). Si el toggle solo cambia el fondo, está mal.
- [ ] **Sin fondo legacy asomándose (§3c):** en CLARO, overscroll/rubber-band arriba y abajo →
      el rebote es claro (`#F5F5F5`), no oscuro. `html`/`body` computan `var(--background)` y
      `background-image: none`; el toggle `.dark` está keyeado a la clase real (no quedó el claro
      dependiendo de `body.light-theme` legacy).
- [ ] **Bordes por token y consistentes:** todo borde usa `border-border` (`divider`/`--input`
      donde corresponda); cero `border-gray/slate-*`, `border-white/xx` ni hex sueltos. Hairline
      1px, mismo peso y tono en cards/inputs/tabla/rail. En oscuro sutil (no línea blanca marcada);
      radius 4px (no 12–16px).
- [ ] **Modo oscuro flipea TODO** (cards, tabla, inputs, panel, textos), no solo el fondo.
- [ ] **Todo el texto legible en CLARO y OSCURO**: contenido (labels, valores, headers, filas,
      totales) con `text-foreground`; muted solo para hints (AA). Nada lavado en modo claro.
- [ ] **Contraste de inputs**: el valor con `text-foreground` (alto contraste), incluso en
      consulta/disabled (sin `opacity-50` que lo vuelva ilegible). Placeholder/labels en muted.
- [ ] Coincide con el `design-<tipo>` correspondiente (estructura del tipo).

## shadcn (cierre — ver `ui-design-system/reference/shadcn.md`)
- [ ] Cero controles HTML/CSS crudos (`<button>`/`<input>`/`<select>`) ni `react-select` donde
      shadcn aplica. La vista importa de `@/components/ui/*` (o wrappers `im/`).
- [ ] Están instaladas y usadas las primitivas del **inventario mínimo del tipo**.
- [ ] Cualquier excepción a shadcn queda **documentada** con justificación válida (no "ya tenía CSS").

## Layout y tablas (ver `reference/layout-tables.md`)
- [ ] **Sin scroll VERTICAL de página:** la vista NO usa `h-screen`/`min-h-screen`/`100vh` si vive
      bajo un navbar (navbar + 100vh desborda). Usa `h-full`/altura restante; raíz `h-screen flex
      flex-col`, navbar `shrink-0`, main `flex-1 min-h-0`.
- [ ] **Sin scroll HORIZONTAL de página:** el rail/panel lateral no queda cortado contra el borde;
      columna central `min-w-0`, rail acotado (`shrink-0`), shell `overflow-hidden`.
- [ ] Tablas caben en su contenedor **sin scroll horizontal** de página/panel (si es inevitable
      por columnas fiscales, va dentro de la tabla con header sticky y se reporta).
- [ ] El shell usa el viewport disponible (no réplica chica centrada con espacio muerto).
- [ ] En operativas (POS/comprobante): viewport crítico visible sin scroll (captura·grilla·total·cobro).

## Verificación visual (desktop + mobile)
- [ ] Corriste el dev server y abriste la vista. Sin blank screen ni errores de consola.
- [ ] Revisado en **desktop y mobile** (screenshots o inspección del navegador): sin overlap,
      clipping, texto cortado, contraste roto ni foco invisible.

## Calidad
- [ ] typecheck/build OK. Sin warnings nuevos. Sin primitivas inventadas.

## Salida — reporte en carpeta dedicada
Escribí (o actualizá) el reporte en **`docs/im-restyle/<vista>.md`** (un archivo por vista/feature,
nombrado por la vista en kebab-case). Contiene: fecha, tipo inferido, **veredicto** (PASA / NO PASA),
tabla de hallazgos (severidad, archivo:línea, qué, fix sugerido), y **pendientes / necesita decisión**.
Así queda un registro acumulado y no se olvida nada. Creá la carpeta `docs/im-restyle/` si no existe.

Si el restyle cambió comportamiento, es **NO PASA** y hay que revertir ese cambio.
