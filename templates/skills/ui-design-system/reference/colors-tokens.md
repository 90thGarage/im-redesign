# Tokens del design system InfoManager (como tema shadcn)

> Fuente: `reference/design.md` (Figma de InfoManager). Sistema **claro, operacional,
> compacto**: azul `#0057FF` + negro `#1A1A1A` + neutros, **radius 4px**, Inter (texto) +
> **Geist Mono** (botones/labels/headers/numeros).

## ⚠️ Tema por defecto = CLARO (es el contrato)

El `design.md` define un sistema **claro**: fondo `#F5F5F5`, **superficies blancas**, azul
`#0057FF` como acento de marca / selección / **acción dominante única**, y negro `#1A1A1A` para
acciones serias. Ese es el look objetivo del restyle. **No** apliques un dark theme genérico
(navy plano) como default — eso es "no usar el `design.md`".

- El **modo oscuro es opcional** y solo se implementa para **espejar un toggle que ya existe** en
  el app. Aun así debe derivar del claro y cumplir, en CLARO **y** OSCURO:
  - **Superficies diferenciadas:** `--card`/`--popover` se leen claramente **por encima** del
    `--background` (no todo el mismo tono). Si en oscuro las cards se confunden con el fondo, subí
    el `--card` y/o reforzá `--border`.
  - **Acción dominante en color:** la única acción primaria de la pantalla (p. ej. **Cobrar /
    Efectivo**) va en **azul** (`bg-primary`) o **negro** (`bg-strong`), nunca como botón claro
    lavado. Los íconos/acciones secundarias (cámara, balanza) **no** deben tener más saturación
    que la acción dominante.
  - **Color solo por semántica:** Grabar/Confirmar = `success`; Eliminar = `destructive`; el resto
    neutro. Una sola acción dominante por zona.

Todo va en `src/index.css`, debajo de `@import "tailwindcss";`.

## 1. Variables (en `src/index.css`)
```css
:root {
  --background: #F5F5F5;           --foreground: #1A1A1A;
  --card: #FFFFFF;                 --card-foreground: #1A1A1A;
  --popover: #FFFFFF;             --popover-foreground: #1A1A1A;
  --primary: #0057FF;             --primary-foreground: #FFFFFF;
  --secondary: #F5F5F5;           --secondary-foreground: #353535;
  --muted: #F5F5F5;               --muted-foreground: #4b5563;  /* mas oscuro = legible en claro (AA) */
  --accent: #D9E6FF;              --accent-foreground: #0041BF;
  --destructive: #DC2626;         --destructive-foreground: #FFFFFF;
  --border: #D3D3D3;              --input: #999999;  --ring: #0057FF;
  --radius: 0.25rem;              /* 4px en TODO; no pills */

  --primary-hover: #0041BF;
  --strong: #1A1A1A;              --strong-foreground: #FFFFFF;
  --text-strong: #1f2937;         --text-faint: #6b7280;  --divider: #E6E6E6;
  --success: #1A7F37;             --success-foreground: #FFFFFF;
  --warning: #B45309;             --warning-foreground: #FFFFFF;

  /* SIDEBAR (lo usa el componente shadcn `sidebar` → tipo Menú). Sin esto el sidebar
     no sigue el tema. Superficie como card, activo en azul de marca. */
  --sidebar: #FFFFFF;                       --sidebar-foreground: #1A1A1A;
  --sidebar-primary: #0057FF;               --sidebar-primary-foreground: #FFFFFF;
  --sidebar-accent: #D9E6FF;                --sidebar-accent-foreground: #0041BF;
  --sidebar-border: #D3D3D3;                --sidebar-ring: #0057FF;

  --font-sans: "Inter", system-ui, -apple-system, Arial, sans-serif;
  --font-mono: "Geist Mono", Menlo, Consolas, monospace;
  --font-display: "Space Grotesk", "Inter", system-ui, sans-serif;
}

/* MODO OSCURO — OPCIONAL (espeja un toggle existente; el contrato es el claro de arriba).
   Derivado para que TODAS las superficies cambien Y se DIFERENCIEN entre sí: card/popover quedan
   un escalón por encima del background, con bordes visibles, para no caer en un navy plano de un
   solo tono. Apuntar el selector (.dark) a la clase/atributo que active el toggle del app
   (puede ser .dark, .dark-theme o [data-theme="dark"]). */
.dark {
  --background: #0b1220;            --foreground: #e6edf3;
  --card: #1a2335;                  --card-foreground: #e6edf3;   /* notoriamente > background */
  --popover: #1a2335;             --popover-foreground: #e6edf3;
  --primary: #4f86ff;             --primary-foreground: #0b1220;  /* azul más vivo = acción dominante */
  --secondary: #232f45;           --secondary-foreground: #e6edf3;
  --muted: #232f45;               --muted-foreground: #aab4c4;
  --accent: #1e3a8a;              --accent-foreground: #dbeafe;
  --destructive: #ef4444;         --destructive-foreground: #ffffff;
  --border: rgba(255,255,255,.14); --input: rgba(255,255,255,.20); --ring: #4f86ff;
  --primary-hover: #6f9bff;
  --strong: #e6edf3;              --strong-foreground: #0b1220;
  /* success/warning: tonos que mantienen el texto blanco legible en botones/badges */
  --success: #16a34a;             --success-foreground: #ffffff;
  --warning: #b45309;             --warning-foreground: #ffffff;
  --text-strong: #cbd5e1; --text-faint: #94a3b8; --divider: rgba(255,255,255,.10);

  /* SIDEBAR en oscuro — superficie un escalón por encima del fondo, borde sutil */
  --sidebar: #131c2e;                       --sidebar-foreground: #e6edf3;
  --sidebar-primary: #4f86ff;               --sidebar-primary-foreground: #0b1220;
  --sidebar-accent: #1e3a8a;                --sidebar-accent-foreground: #dbeafe;
  --sidebar-border: rgba(255,255,255,.12);  --sidebar-ring: #4f86ff;
}
```

## 2. Mapeo a Tailwind 4 (`@theme` en `src/index.css`)
```css
@theme {
  --color-background: var(--background);   --color-foreground: var(--foreground);
  --color-card: var(--card);               --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);         --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);         --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);     --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);             --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);           --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive); --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border); --color-input: var(--input); --color-ring: var(--ring);
  --radius: var(--radius);
  /* ESCALA de radius — lo que leen rounded-sm/md/lg/xl. Sin esto, caen a la escala legacy
     del index.css (8-16px) y todo queda muy redondeado. */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 4px;
  --radius-xl: 6px;
  --color-strong: var(--strong); --color-strong-foreground: var(--strong-foreground);
  --color-success: var(--success); --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning); --color-warning-foreground: var(--warning-foreground);
  --color-divider: var(--divider);          /* habilita border-divider / bg-divider */
  /* SIDEBAR (componente shadcn) */
  --color-sidebar: var(--sidebar);                          --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);          --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);            --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);            --color-sidebar-ring: var(--sidebar-ring);
  --font-sans: var(--font-sans); --font-mono: var(--font-mono);
}
body { background: var(--background); color: var(--foreground); font-family: var(--font-sans); }
```
Da las clases shadcn (`bg-background`, `bg-card`, `text-muted-foreground`, `border-border`,
`bg-primary`...) + extra (`bg-strong`, `bg-success`, `font-mono`).

## 3. Spacing y radius
- Base 4px: 8px tight, 12-16px entre grupos, 24-32px secciones. **Radius 4px en TODO**, no pills.

## 4. Tipografia (regla, no decorativa)
- Inter (texto), Geist Mono (botones/labels/headers/numeros/comandos), Space Grotesk (logo).
- Verificar que **carguen de verdad** (import/`@font-face`/config). Si faltan, documentarlo y usar
  fallbacks. No declarar cumplimiento si cae a defaults del browser.

## 3b. Radius — colisión con escala legacy (IMPORTANTE)
`rounded-md/lg/sm` NO usan `--radius`: usan la escala `--radius-sm/md/lg/xl`. Muchos proyectos
legacy definen su propia escala en `:root` (ej. `--radius-md: 12px; --radius-lg: 16px`), que GANA
si va después en el CSS → todo se redondea a 8-16px aunque `--radius` sea 4px.

**Fix:** además del `@theme` de arriba, agregar este `:root` **al final del CSS** (después de
cualquier escala legacy, así gana el cascade):
```css
:root {
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 4px;
  --radius-xl: 6px;
}
```
Verificar el `border-radius` **computado real** en el navegador (debe dar ~4px, no 8-16px).

## 3c. Fondo legacy en `html`/`body` (IMPORTANTE — se asoma el oscuro en modo claro)

Misma familia de bug que §3b, pero con el **fondo de página**. Síntoma: en **modo claro**, al
hacer overscroll/rubber-band (o con contenido más corto que el viewport) **se asoma un fondo
oscuro** detrás del contenido. Causas típicas del CSS legacy:

- `html`/`:root` tienen un fondo oscuro fijo (p. ej. `--body-bg: #0b1020`, a veces con un
  `background-image`/gradiente) y `body` quedó transparente.
- El tema **claro** legacy estaba keyeado en una clase que tu toggle nuevo **no** activa (ej.
  `body.light-theme`), mientras el toggle nuevo usa `.dark` en `<html>`. Resultado: en claro no
  hay ninguna clase activa → pintan los valores **oscuros** del legacy. El `main` con
  `bg-background` lo tapa, pero el fondo de página sigue oscuro debajo y se asoma en los bordes.

**Fix (agregar al FINAL del CSS, después de cualquier regla legacy):**
```css
/* html y body siguen el token del tema (claro/oscuro), no el fondo legacy */
html, body {
  background: var(--background);
  background-image: none;        /* mata gradientes/imágenes de fondo legacy */
}
/* el área de overscroll/scrollbar/rubber-band coincide con el tema */
:root { color-scheme: light; }
.dark { color-scheme: dark; }
```
Si el fondo legacy se aplica con `!important` o con muy alta especificidad, igualá la
especificidad (o sumá `!important` solo a estas dos reglas) — pero primero intentá sin él.

**Y alineá el selector del toggle:** el bloque `.dark` debe activarse con la **misma** clase/
atributo que usa el toggle (`.dark` en `<html>`, `.dark-theme`, `[data-theme="dark"]`…). No
dejes el claro dependiendo de una clase legacy (`body.light-theme`) que ya nadie pone.

**Verificar:** en claro, hacé overscroll arriba/abajo y confirmá que el rebote es claro
(`#F5F5F5`), no oscuro; y que `html`/`body` computados toman `var(--background)` y
`background-image: none`.

## 3d. Color de marca no aplicado — colisión con los defaults de shadcn (IMPORTANTE)

Misma familia que §3b/§3c. Síntoma: la acción primaria sale en un **azul/indigo que tira a
morado**, no en el `#0057FF` de marca. Causa: las variables del kit **no reemplazaron** a las que
escribe `shadcn init`. Si el `:root{--primary: …}` del init (oklch/indigo) queda **después** en el
CSS, gana el cascade y `bg-primary` resuelve a ese color, no a `#0057FF`.

**Fix:**
- Al pegar los tokens, **reemplazá** los valores del init (mismo `:root`/`.dark`), no los agregues
  aparte. Si quedan ambos, el bloque InfoManager debe ir **al final** del archivo para ganar.
- Verificá que `--primary` resuelva a **`#0057FF`** (`rgb(0, 87, 255)`) en el navegador, en claro y
  oscuro (en `.dark` es `#4f86ff`). Si te da un indigo tipo `#2563eb`/oklch, quedó el default.
- Ningún componente debe **hardcodear** el color (`bg-[#2563eb]`, `bg-blue-600`, un `<Button>` con
  color propio): la acción primaria usa **`bg-primary`** (token), nunca una clase de color cruda.
- Lo mismo para `--ring` (focus), `--accent`/`--sidebar-primary` (derivados del azul de marca):
  confirmá que no quedaron en el indigo del default.

> Regla mental: si el primario "tira a morado", casi siempre es el **default de shadcn ganándole al
> token** — no es que `#0057FF` sea morado. Forzá el token, no cambies el color.

## 4b. Fuentes (libres — Google Fonts, sin licencia)

Sustituimos las pagas del Figma por equivalentes open-source casi idénticas:
**Suisse Int'l → Inter**, **Neue Montreal → Space Grotesk**, **Geist Mono = Geist Mono** (libre).
Cargar en `index.html` (o `@import` arriba del CSS):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Geist+Mono:wght@500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
```
Verificar que **carguen de verdad** (no fallback). Geist Mono quizá ya esté cargada de antes.

## 5. Setup shadcn (lo hace /setup)
```bash
npx shadcn@latest init
npx shadcn@latest add button table select dialog alert-dialog sheet tabs badge input sonner command popover
npm i clsx tailwind-merge
```
Pegar las variables de arriba en `src/index.css` (reemplazan las del init). `cn()` en `@/lib/utils`.

## 6. Logos
SVGs en `assets/logos/` (blue / negative / positive, con y sin subtitulo).

## 7. Si falta un token
Agregalo en `:root`, mapealo en `@theme`, usalo por clase. Color nuevo de marca: confirmar
contra `design.md`.


> **Modo oscuro (importante):** el toggle del app debe activar la clase/atributo del bloque
> `.dark`. Si solo cambia el fondo, es porque los componentes NO usan tokens semanticos o la
> clase del toggle no coincide con `.dark` — alinealas. Verificar que cards, tabla, inputs,
> panel y textos cambien, no solo `body`.

## 8. Completitud del tema (claro = oscuro, sin huecos)

Regla: **toda** variable definida en `:root` debe tener su override en `.dark` (salvo las que
son iguales en ambos temas a propósito: `--radius`, la escala `--radius-*` y las `--font-*`).
Si una variable existe en claro pero no en oscuro, ese componente se rompe al cambiar de tema.

Grupos que deben estar en **los dos** bloques (ya cubiertos arriba):
- Base: `background/foreground`, `card(-foreground)`, `popover(-foreground)`.
- Acciones: `primary(-foreground)`, `secondary(-foreground)`, `strong(-foreground)`,
  `destructive(-foreground)`, `success(-foreground)`, `warning(-foreground)`.
- Neutros/estructura: `muted(-foreground)`, `accent(-foreground)`, **`border`**, **`input`**,
  **`ring`**, `divider`, `primary-hover`, `text-strong`, `text-faint`.
- **Sidebar** (componente Menú): `sidebar`, `sidebar-foreground`, `sidebar-primary(-foreground)`,
  `sidebar-accent(-foreground)`, `sidebar-border`, `sidebar-ring`.

**Si agregás un componente shadcn que trae variables nuevas** (p. ej. gráficos →
`--chart-1..5`), definí esas variables en `:root` **y** `.dark` y mapealas en `@theme`
(`--color-chart-1: var(--chart-1)`…). No las dejes con los defaults del init.

**Verificación rápida (navegador, DevTools):** con el tema oscuro activo, inspeccioná el
`computed` de un panel y un input y confirmá que `background`, `--card`, `--border` y `--input`
tomaron los valores `.dark` (no los claros). Pasá por sidebar, tabla, inputs y botones.
