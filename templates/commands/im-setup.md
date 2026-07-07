---
description: Prepara el proyecto existente para el restyle (shadcn + tokens del design system), sin romper nada
argument-hint: (sin argumentos)
---

Dejá el proyecto listo para usar `/im-restyle`, **adaptándote a lo que ya existe** (es un proyecto
en marcha, NO greenfield). Hacé los pasos vos, verificá y reportá. Idempotente.

## Proyecto EXISTENTE (no clobberear)
- **Mergear, no reemplazar** `src/index.css` / `globals.css`: agregá las variables y el `@theme`
  que falten; no pises tokens del usuario sin avisar.
- **Detectá lo que ya hay** (shadcn `components.json`, Tailwind, alias `@/*`, deps) y reusalo;
  instalá/creá solo lo que falte.
- **Nunca sobrescribas archivos del usuario sin confirmar.** Mostrá un resumen antes de aplicar.

## Pasos
1. **Detectar stack** (React + Vite/Next, Tailwind, package manager).
2. **Dependencias** que falten: `clsx tailwind-merge` (+ las que pidan los componentes shadcn que se usen).
3. **shadcn/ui**: `shadcn init` si no está (sin pisar config). **Proyecto JS:** dejá
   **`"tsx": false`** en `components.json` para que genere componentes **`.jsx`** (el repo es
   JavaScript; con `tsx: true` te mete TypeScript). Agregá las primitivas base:
   `button input label table tabs dialog alert-dialog sheet select checkbox textarea badge card command popover scroll-area separator skeleton tooltip dropdown-menu collapsible accordion calendar sonner`.
   Esta es la unión del **inventario por tipo** de `ui-design-system/reference/shadcn.md`; al
   reembellecer cada vista, confirmá que estén las de su fila (es bloqueante). Para **auth**,
   además: `npx shadcn@latest add login-02`.
4. **Tokens**: mergear en el CSS las variables + `@theme` de `ui-design-system/reference/colors-tokens.md`.
   **Tema base = OSCURO** (la app del cliente es dark-first): los valores oscuros van en `:root`
   (base) y los claros como override (`.light`). Incluí la **escala de radius** (`--radius-sm/md/lg/xl`)
   y, si el proyecto tiene una escala legacy en `:root`, agregá el override **al final del CSS** (§3b).
4b. **Neutralizar fondo legacy** (§3c): si `html`/`:root`/`body` tienen un fondo oscuro fijo
   (`--body-bg`, gradiente, `background-image`) o el tema claro legacy está keyeado en otra clase
   (ej. `body.light-theme`) distinta del toggle `.dark`, agregá al final del CSS
   `html, body { background: var(--background); background-image: none; }` + `:root{color-scheme:light}`
   `.dark{color-scheme:dark}`. Evita que el oscuro se asome en overscroll en modo claro.
5. **Fuentes libres**: cargar Inter + Geist Mono + Space Grotesk desde Google Fonts (el
   `<link>` está en `colors-tokens.md`). Reemplazan a las pagas (Suisse/Neue Montreal) sin licencia.
   Verificar que carguen de verdad, no fallback.
6. **Verificar** typecheck/build.

Al final: reportá qué se instaló/agregó y confirmá que no se tocó nada del usuario. Próximo paso: `/im-restyle <vista>`.
