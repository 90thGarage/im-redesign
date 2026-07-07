# Refinamiento visual — qué hace que el restyle SE NOTE (sin mover nada)

El restyle 1:1 se siente igual al original. Lo que hace que algo se vea "rediseñado" no es mover
cosas, es aplicar un **sistema visual** tight. Estas reglas son obligatorias en cada restyle.

> **Todas las medidas de esta página salen de `design.md`** (fuente de verdad). Este archivo suma
> guía de refinamiento (foco, alineación, ritmo) sobre esa base; ante cualquier conflicto de
> valores entre este archivo y `design.md`, **gana `design.md`**.

## 1. Tipografía (el lever más fuerte)
Diferenciar claramente label / valor / título (hoy está todo plano y parejo). Tokens de
`design.md`: **12/14/16/20/24px** (mono en 12/14):
- **Título de sección:** 16px (`title-16`), peso 500, Inter/Suisse, + ícono 16px + divisor sutil debajo.
- **Label de campo:** 12px mono (`label-12-mono`), MAYÚSCULAS, `tracking-wide`, `text-muted-foreground`.
- **Valor / input:** 14px, peso 400–500, `text-foreground`.
- **Números/importes:** Geist Mono `tabular-nums`. Totales 24px (`heading-24`), peso 500.
- Solo **2 pesos** (400 y 500). Mono para labels/números/comandos; Suisse para contenido/títulos.
  (No poner TODO en mono: aplana la jerarquía.)

## 2. Espaciado (ritmo base 4px)
- Padding de card **16px**. Gap entre campos **12px**. Gap entre grupos **16–24px**. Gap en toolbar **8px**.
- Alto de fila de tabla **36–48px** (`design.md`), parejo. Nada de espacios disparejos.

## 3. Radius — **4px en TODO**
Botones, inputs, cards, tabs, badges, dialogs. Sin pills, sin radios grandes.
**Ojo:** `rounded-md/lg/sm` leen la **escala** `--radius-md/...`, no `--radius`. Asegurá que la
escala resuelva a ~4px (ver `colors-tokens.md` §3b), no a la legacy (8-16px). Verificá el valor
**computado real** en el navegador.

## 4. Color disciplinado
- **Un acento** (primary/azul) para lo interactivo y la selección. Neutros para el resto.
- Color **solo por semántica**: Grabar/Confirmar = `success` (verde); Eliminar / destructivo =
  `destructive` (rojo). **Todos los demás botones = neutro** (outline/secondary).
- Máximo **una acción dominante** visible por zona. Nada de 4 botones vivos compitiendo.
- **La acción dominante lleva el color** (`bg-primary` azul o `bg-strong` negro), **nunca** un
  botón claro/lavado. En POS, la acción de **Cobrar/Efectivo/Emitir** es la dominante → azul o
  negro sólido. Un botón blanco para la acción principal es un error de jerarquía.
- **Los íconos/acciones secundarias no pueden tener más saturación que la dominante.** Error
  típico: la cámara o un `+` en azul fuerte mientras la acción de cobro queda neutra/clara →
  invertís la jerarquía. Lo secundario va neutro (`ghost`/`outline`, ícono `text-muted-foreground`).
- **Vale en claro Y oscuro:** el azul/negro de la acción dominante debe seguir leyéndose como el
  elemento más fuerte de la pantalla en ambos temas.

## 5. Botones (unificados)
- **Alturas fijas** (`design.md`): small 36px, default 40px, large 48px. Padding horizontal 12–18px.
  No `w-full` salvo en barras de acción.
- Variantes por rol: primaria (azul sólido) · `success` (Grabar) · `destructive` (Eliminar) ·
  `outline`/`secondary` (resto) · `ghost` (cancelar/volver).
- **Íconos solo en principales/destructivas** (Nuevo, Grabar, Eliminar, Cobrar): lucide **16px**,
  leading. Secundarias: **solo texto**. Mismo gap entre botones (8px), alineados.

## 6. Bordes y elevación
- **Siempre por token:** `border-border` para bordes, `divider` para separadores, `--input` para
  inputs. **Prohibido** color de borde arbitrario (`border-gray-700`, `border-slate-600`,
  `border-white/20` ad-hoc, hex). Un solo color de borde por tema → los paneles se ven consistentes.
- Bordes **hairline** 1px `border-border` (no bordes gruesos ni claros/brillantes).
- **En oscuro el borde es sutil** (`--border` translúcido), no una línea blanca marcada; el
  divisor todavía más tenue. En claro, `#D3D3D3` (border) / `#E6E6E6` (divider). Mismo peso (1px)
  en cards, inputs, tabla y rail — sin mezclar grosores ni tonos.
- Cards: hairline + **sombra muy sutil** (`shadow-sm`) para separar del fondo. En oscuro la
  separación la da el `--card` por encima del `--background` (no una sombra fuerte). Sin exagerar.
- Tabla: header `bg-muted`, filas separadas por hairline `border-border`, hover sutil.
- **Radius del borde = 4px** en cards/paneles/rail (no pills ni 12–16px); verificá el valor
  computado real (ver `colors-tokens.md` §3b).

## 7. Inputs (uniformes)
- Alto fijo (`design.md`): **40px** estándar, **36px** compacto (`input-compact`). Radius 4px,
  borde hairline, **focus ring 2px** con el acento. Label arriba (estilo label). Valor
  `text-foreground` (legible en claro y oscuro).

## 8. Estados / microinteracciones
- Hover sutil (bg/borde), focus ring claro, fila/tab activa marcada con el acento. Transiciones
  cortas (~150ms). Sin animaciones llamativas.

> Regla mental: si el "antes/después" no se nota, faltó jerarquía tipográfica, ritmo de espaciado
> o disciplina de color — no es que haya que mover cosas.
