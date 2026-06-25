---
description: Todo-en-uno — setup si hace falta, restyle, review con reporte .md, y arregla en loop. El cliente corre solo esto.
argument-hint: <ruta-o-vista> (la vista a embellecer)
---

Hacé **todo el flujo de embellecido** para la vista **$ARGUMENTS** de una sola vez, sin que el
usuario corra pasos sueltos. Orquestá las skills `restyle-view`, `ui-design-system`, `design-*`
y las reglas de review. Mostrá progreso breve en cada fase.

## 0. Setup (solo si hace falta — idempotente)
Verificá y completá **solo lo que falte**, MERGEANDO sin pisar lo del usuario:
- shadcn (`components.json` + las primitivas del **inventario por tipo** de
  `ui-design-system/reference/shadcn.md`; instalar las de la fila del tipo de la vista — es bloqueante).
- Tokens del design system en el CSS: variables **claras + bloque `.dark`** + `@theme`
  (`ui-design-system/reference/colors-tokens.md`).
- **Fuentes libres** cargadas (Inter + Geist Mono + Space Grotesk, Google Fonts) — no fallback.
Si ya está todo, seguí.

## 1. Restyle
Aplicá `restyle-view`: leé **todo** el código de la vista, **inferí el tipo** (de los 5), y
reescribí **solo la presentación** a shadcn + tokens + **refinamiento** (`refinement.md`:
tipografía, espaciado, radius 4px, color disciplinado, botones fijos, íconos solo en
principales/destructivas). **Preservá** API (export/props/ruta → drop-in), lógica, estado,
endpoints, validaciones, refs y teclado. No muevas cosas de lugar.

## 2. Review + reporte (.md)
Aplicá `/im-review-ui`: evaluá contra el design system, la **preservación**, el **cierre shadcn**
(sin controles crudos; inventario del tipo completo) y **layout/tablas** (sin scroll horizontal;
viewport crítico en operativas). Verificá en **desktop y mobile**. Escribí
`docs/im-restyle/<vista>.md` (carpeta dedicada, **un archivo por vista/feature** nombrado por la
vista en kebab-case; creala si no existe) con: fecha, tipo inferido, veredicto, hallazgos por
severidad (Evidencia / Por qué / Cambio requerido / Check), contraste **claro y oscuro**, y lo que
quede pendiente. Es el registro acumulado para **no olvidarse nada**.

## 3. Arreglar y repetir (loop)
Aplicá los fixes del review que sean **seguros** (solo presentación, preservan API/lógica).
Re-corré el review. Repetí hasta **PASA** o hasta que solo queden ítems que necesitan decisión
del usuario (**máx. 3 vueltas**). Actualizá el `.md` en cada vuelta.

## 4. Cierre
Reportá en pocas líneas: tipo inferido, qué setup se hizo (o "ya estaba"), qué se cambió, qué se
arregló en el loop, y qué **queda pendiente / necesita decisión** (con link al `.md`). Confirmá
que **API + lógica + teclado quedan intactos**.

## Reglas
- **Nunca rompas comportamiento.** Si un fix tocaría lógica, NO lo apliques: dejalo como
  "necesita decisión" en el reporte.
- Diff acotado a presentación. Drop-in. Verificá typecheck/build al final.
