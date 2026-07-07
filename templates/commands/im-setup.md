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
2. **Dependencias** que falten: `clsx tailwind-merge` **+ el runtime de shadcn**:
   `lucide-react class-variance-authority radix-ui cmdk next-themes react-day-picker sonner`.
   **`shadcn add` 4.x NO instala estas deps solo** y el build de setup pasa en falso sin ellas
   (nada las importa hasta el primer restyle → tree-shaking las oculta); el primer import de un
   componente rompe. Nota: shadcn 4.x usa el paquete unificado `radix-ui`, no los
   `@radix-ui/react-*` sueltos.
3. **shadcn/ui**: **`shadcn init` 4.x es interactivo** — abre un "preset picker" e ignora `-y`,
   así que **cuelga en automatización**. Camino determinista: si no hay `components.json`,
   **escribilo a mano** (`"tsx": false`, `"style": "new-york"`, base `radix`, alias `@/*`), creá
   `src/lib/utils.js` con `cn()`, y usá `npx shadcn@latest add -y ...` (no-interactivo, respeta
   `tsx: false`, genera `.jsx`). **Proyecto JS:** dejá
   **`"tsx": false`** en `components.json` para que genere componentes **`.jsx`** (el repo es
   JavaScript; con `tsx: true` te mete TypeScript). El proyecto es JS/JSX: los componentes
   generados deben quedar en `.jsx`, nunca introducir sintaxis TypeScript. Agregá las primitivas base:
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
   (ej. `body.light-theme`) distinta del override `.light`, agregá al final del CSS
   `html, body { background: var(--background); background-image: none; }` + `:root{color-scheme:dark}`
   `.light{color-scheme:light}`. Evita que el claro se asome en overscroll en modo oscuro.
4c. **Resets legacy sin capa** (§3e): si hay un reset universal (`* { margin:0; padding:0 }`) o
   resets de elemento (`body`, `input`, `button`…) SIN `@layer` en el CSS, envolvelos en
   `@layer base`. Sin esto, el reset legacy le gana a las utilidades de Tailwind v4 (que están en
   `@layer utilities`) y anula todo padding/margin de los componentes shadcn — el restyle se ve
   sin espaciado aunque esté bien hecho.
5. **Fuentes libres**: cargar Inter + Geist Mono + Space Grotesk desde Google Fonts (el
   `<link>` está en `colors-tokens.md`). Reemplazan a las pagas (Suisse/Neue Montreal) sin licencia.
   Verificar que carguen de verdad, no fallback.
6. **Verificar** typecheck/build.

Al final: reportá qué se instaló/agregó y confirmá que no se tocó nada del usuario. Próximo paso: `/im-restyle <vista>`.
