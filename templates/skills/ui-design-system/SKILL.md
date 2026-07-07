---
name: ui-design-system
description: >
  Sistema de diseno InfoManager (React + Tailwind + shadcn/ui). Aplicar SIEMPRE que se
  escriba o edite JSX/CSS con cualquier color, boton, grilla, tabla, input, tab, panel o
  modal. Sistema CLARO y OPERACIONAL (azul/negro/neutros, radius 4px, Geist Mono para
  comandos). Fuente de verdad: reference/design.md (del Figma). No usar para teclado (eso es
  ux-patterns), solo lo visual.
---

# UI Design System — InfoManager (shadcn/ui)

## Cuando aplico
Cada vez que toques un color, boton, grilla, tabla, input, panel o modal.

## Fuente de verdad
`reference/design.md` (derivado del Figma de InfoManager). Es el contrato; los tokens listos
para pegar estan en `reference/colors-tokens.md`. Si dudas de un valor, mira design.md.

## Caracter: operacional, no dashboard
Las pantallas son **herramientas**: profesional, directo, **compacto**, escaneable. Prioridad:
lectura rapida, jerarquia clara, estado visible, completar workflows de alta frecuencia de
forma segura. Preservar fuerzas legacy utiles (grillas densas, totales visibles, areas de
teclado, clusters de accion compactos).
Evitar: cards grandes/marketing, **radios grandes** (todo 4px, no pills), CTAs gigantes,
busqueda de item desprendida del listado, accion primaria escondida bajo scroll, decoracion.

## Base: shadcn/ui (orden de prioridad)
1. Convenciones del repo + design system. 2. Primitivas shadcn estiladas con los tokens.
3. Composicion (solo por legibilidad). No inventar primitivas nuevas.

## Reglas duras
- **Color:** prohibido literal/arbitrario y colores crudos de Tailwind para superficie/texto.
  Solo tokens semanticos (`bg-background bg-card text-muted-foreground border-border bg-primary
  bg-strong text-success ...`). Paleta = azul `#0057FF` + negro `#1A1A1A` + neutros; no inventar
  colores sin razon de producto (confirmar contra design.md).
- **Radius 4px** en todo. No pills.
- **Tipografia:** Inter (texto), **Geist Mono** (botones, labels, headers de tabla,
  numeros, comandos), Space Grotesk (logo). Verificar que carguen de verdad.
- **Densidad operacional:** padding compacto; nada de cards grandes.
- **shadcn obligatorio:** todo control interactivo con equivalente usa shadcn (no HTML/CSS crudo,
  no `react-select`). Setup e inventario por tipo en `reference/shadcn.md` (es bloqueante).
- **Tablas:** caben en su contenedor; scroll horizontal solo como último recurso (`reference/layout-tables.md`).

## Mapeo de intenciones a shadcn
- **Accion primaria (1 por pantalla):** `<Button>` azul con label mono; version **negra**
  (`bg-strong text-strong-foreground`) para controles serios.
- **Secundaria:** `<Button variant="outline">`. **Cancelar:** `ghost`. **Destructiva:** `destructive`.
- **Tablas:** `<Table>` densas (36-48px, headers mono, numeros a la derecha).
- **Selects:** `<Select>` (estatico) / `<Combobox>` (busqueda/remoto). No `<select>` nativo.
- **Modales:** `<Dialog>`/`<AlertDialog>`. **Drawer:** `<Sheet>` (ej. Factura con datos, cobro).
- **Toasts:** `sonner`. **Tabs:** `<Tabs>`. **Badge:** `<Badge>` (compacto, mono, 4px).

## Referencias
- `reference/design.md` — el design system (Figma). Fuente de verdad.
- `reference/colors-tokens.md` — tokens listos para pegar (tema shadcn; claro + oscuro + fuentes libres).
- `reference/refinement.md` — **refinamiento visual** (tipografía, espaciado, radius 4px,
  color disciplinado, botones, íconos). Lo que hace que el restyle se note.
- `reference/shadcn.md` — **contrato bloqueante** de shadcn: mapeo legacy→shadcn, **matriz de
  componentes mínimos por tipo de vista**, comandos `add` y gobernanza de excepciones.
- `reference/layout-tables.md` — **tablas responsive sin scroll horizontal**, viewport fit y
  viewport crítico operacional.
- `reference/components.md` — mapeo a primitivas shadcn + patrones POS.
- `reference/modals-dropdowns.md` — Select/Combobox y Dialog/AlertDialog/Sheet.
- `reference/textures.md` — **regla de texturas SVG** (usar siempre `intersect-pattern.svg`).
- `assets/logos/` — logos InfoManager (SVG).
- `assets/textures/intersect-pattern.svg` — patrón de líneas (fondos con textura, ej. login).
