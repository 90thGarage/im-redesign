---
description: Todo-en-uno — ejecuta /im-setup, /im-restyle y /im-review-ui en orden, y arregla en loop. El cliente corre solo esto.
argument-hint: <ruta-o-vista> (la vista a embellecer)
---

Hacé **todo el flujo de embellecido** para la vista **$ARGUMENTS** de una sola vez, sin que el
usuario corra pasos sueltos.

**IMPORTANTE — cómo orquestar:** este comando NO reimplementa los pasos. En cada fase **ejecutá el
comando `/im-*` correspondiente COMPLETO** y seguí **todos** sus pasos tal cual, no una versión
resumida. Corré los pasos en orden y mostrá progreso breve en cada fase. Si un comando falla o
queda incompleto, **paralo y reportá** — no sigas al siguiente con el setup a medias (es la causa
típica de que en repos nuevos el restyle quede roto).

## 1. Ejecutá `/im-setup`
Corré **`/im-setup`** completo (seguí todos sus pasos): detectar
stack, instalar shadcn + las primitivas del **inventario por tipo** (`reference/shadcn.md`),
mergear tokens (claro + `.dark` + `@theme`), neutralizar fondo legacy (§3c), cargar fuentes libres.
Es **idempotente**: si ya está todo, no rompe nada.

**Checkpoint (bloqueante):** antes de seguir, confirmá que el setup quedó OK —
`components.json` existe, las primitivas del tipo están instaladas, `--primary` computa `#0057FF`
(no el indigo default, §3d) y el build/typecheck pasa. **Si algo falló, no avances**: arreglá el
setup o reportá el error. Nunca pases a la fase 2 con shadcn/tokens a medio instalar.

## 2. Ejecutá `/im-restyle <vista>`
Corré **`/im-restyle $ARGUMENTS`** completo: leé todo el código,
inferí el tipo (de los 5), leé `design-<tipo>` + `ui-design-system`, y reescribí **solo la
presentación** a shadcn + tokens + refinamiento. **Preservá** API (export/props/ruta → drop-in),
lógica, estado, endpoints, validaciones, refs y teclado. No muevas cosas de lugar.

## 3. Ejecutá `/im-review-ui <vista>` + reporte (.md)
Corré **`/im-review-ui $ARGUMENTS`** completo: evaluá contra el
design system, la **preservación**, el **cierre shadcn**, **layout/tablas** (sin scroll horizontal/
vertical de página; viewport crítico en operativas) y **color** (primary real, no morado; bordes
por token). Verificá en **desktop y mobile**. Escribí/actualizá `docs/im-restyle/<vista>.md`
(carpeta dedicada, un archivo por vista en kebab-case; creala si no existe) con: fecha, tipo
inferido, veredicto, hallazgos por severidad y pendientes. Es el registro acumulado.

## 4. Arreglar y repetir (loop)
Aplicá los fixes del review que sean **seguros** (solo presentación, preservan API/lógica) y
re-ejecutá **`/im-review-ui`**. Repetí hasta **PASA** o hasta que solo queden ítems que necesitan
decisión del usuario (**máx. 3 vueltas**). Actualizá el `.md` en cada vuelta.

## 5. Cierre
Reportá en pocas líneas: tipo inferido, qué hizo `/im-setup` (o "ya estaba"), qué cambió
`/im-restyle`, qué se arregló en el loop, y qué **queda pendiente / necesita decisión** (con link
al `.md`). Confirmá que **API + lógica + teclado quedan intactos**.

## Reglas
- **Orden estricto:** `/im-setup` → `/im-restyle` → `/im-review-ui` → loop. No saltees ni resumas
  un comando; ejecutá cada uno entero.
- **Setup primero, siempre.** Si el setup no terminó OK, no se reestiliza nada.
- **Nunca rompas comportamiento.** Si un fix tocaría lógica, NO lo apliques: dejalo como
  "necesita decisión" en el reporte.
- Diff acotado a presentación. Drop-in. Verificá typecheck/build al final.
