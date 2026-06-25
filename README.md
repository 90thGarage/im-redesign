# infomanager-restyle — edición fusionada (merged)

> Por **90th Garage**. Software propietario — venta única (ver `LICENSE`).

Instalador (wizard) de las **skills + comandos de restyle** para **embellecer vistas React ya
migradas** de InfoManager a la UI estándar (shadcn/ui + tokens), **preservando API, lógica,
endpoints y comportamiento**. Detecta el stack, pregunta para qué agente y copia el kit.

**Qué suma esta edición** (lo mejor de los 3 kits, sobre la base de `infomanager-restyle`):
- **Contrato shadcn bloqueante** (`ui-design-system/reference/shadcn.md`): mapeo legacy→shadcn,
  **matriz de componentes mínimos por tipo de vista**, comandos `add` y **gobernanza de
  excepciones** (cuándo SÍ/NO se puede saltear shadcn).
- **Tablas responsive sin scroll horizontal + viewport fit** (`reference/layout-tables.md`).
- **Diagramas ASCII de layout** en cada `design-*` para que el agente "vea" la estructura.
- **Inventario opcional del legacy por navegador** (snapshot, sin guardar credenciales) en `/im-restyle`.
- **Verificación visual desktop + mobile** y cierre shadcn en `/im-review-ui`.
- Se conserva lo propio: `refinement.md`, tokens claro/oscuro, fix de colisión de radius (§3b),
  sustitución de fuentes pagas por libres, reglas de contraste de inputs, y el loop de `/im-go`.

## Instalar (npx desde GitHub)

Desde la carpeta de tu proyecto, en modo interactivo (wizard):

```bash
npx github:90thGarage/im-redesign
```

> Repo público: `90thGarage/im-redesign`.

Después, en tu agente: `/im-go <vista>` hace todo (setup si hace falta → restyle → review → arregla). Avanzado: `/im-setup` → `/im-restyle` → `/im-review-ui`.

## Flags (no interactivo)
```bash
npx github:90thGarage/im-redesign install --yes --agent claude   # instala sin preguntar
npx github:90thGarage/im-redesign install --agent antigravity    # claude | antigravity | cursor | codex
npx github:90thGarage/im-redesign install --skip-base            # sin las skills base (react/tailwind/ts)
npx github:90thGarage/im-redesign install --dir ./mi-proyecto
```

> Nota: con `npx github:...` el subcomando `install` es explícito. La forma sin subcomando abre el wizard.

## Qué instala

El instalador copia, dentro de la carpeta del agente que elijas (`.claude/`, `.cursor/`,
`.agents/` o `.codex/`):

- **Skills** (`<agente>/skills/`):
  - `restyle-view` — el **núcleo**: toma una vista y la reembellece preservando todo.
  - `ui-design-system` — el sistema de diseño (tokens, shadcn, tipografía) con sus **referencias**
    en `reference/` (`design.md`, `colors-tokens.md`, `refinement.md`, `shadcn.md`,
    `layout-tables.md`, `components.md`, `modals-dropdowns.md`).
  - Los **5 estándares por tipo** de vista: `design-menu`, `design-abm`, `design-consultas`,
    `design-facturacion-rapida`, `design-comprobante`.
  - Opcional (base del stack): `react-19`, `tailwind-4`, `typescript`.
- **Comandos** (`<agente>/commands/`): `im-go`, `im-setup`, `im-restyle`, `im-review-ui`.

## Cómo funcionan las skills

Las **skills** son carpetas con un `SKILL.md` que tu agente (Claude Code, Cursor, etc.) **lee
automáticamente** cuando la tarea aplica: cada `SKILL.md` describe cuándo usarse, qué preservar y
a qué referencias acudir. No las invocás a mano — las activan los **comandos** (`/im-*`), que
orquestan las skills en el orden correcto.

El flujo de un restyle es así:

1. **Inferencia de tipo.** `restyle-view` lee **todo** el código de la vista (componente + hooks/
   estilos) y deduce de cuál de los **5 tipos** es (Menú / ABM / Consultas / Facturación rápida /
   Comprobante). Si duda, pregunta.
2. **Carga del estándar.** Lee la skill `design-<tipo>` correspondiente (estructura, diagrama de
   layout, qué preservar, mínimos de shadcn) + `ui-design-system` (tokens y reglas visuales).
3. **Setup bloqueante.** Verifica shadcn + tokens del design system; si falta algo, lo instala
   antes de tocar la vista (contrato en `reference/shadcn.md`).
4. **Reescritura solo de presentación.** Cambia JSX/estilos a shadcn + tokens + refinamiento,
   manteniendo cada handler/binding/ref conectado igual. Queda **drop-in**: misma API
   (export/props/ruta), misma lógica, mismos endpoints, mismo teclado — solo se ve mejor.
5. **Review en loop.** Evalúa contra el design system y la preservación, escribe un reporte en
   `docs/im-restyle/<vista>.md`, aplica los fixes seguros y repite hasta que pasa.

### Los comandos

| Comando | Qué hace |
|---|---|
| `/im-go <vista>` | **Todo en uno** (recomendado): setup si hace falta → restyle → review → arregla en loop. |
| `/im-setup` | Prepara el proyecto (shadcn + tokens + fuentes), sin romper nada. Idempotente. |
| `/im-restyle <vista>` | Reembellece una vista preservando API, lógica y comportamiento. |
| `/im-review-ui <vista>` | Verifica que el restyle quedó estándar **y** no rompió nada; reporta hallazgos. |

Uso típico: instalás, abrís/reiniciás tu agente y corrés `/im-go <ruta-de-la-vista>`. Para el
resto (que se ve mejor pero se usa igual) no tenés que tocar nada más.

## Probarlo localmente (sin publicar)
```bash
cd redesign-ui-kit-merged && npm install
node bin/cli.js --dir /ruta/a/tu/proyecto
# o empaquetado:
npm pack    # -> redesign-ui-kit-merged-<version>.tgz
cd /ruta/a/tu/proyecto && npx /ruta/al/redesign-ui-kit-merged-<version>.tgz
```

## Entregar al comprador
Dos opciones: (a) `npx github:90thGarage/im-redesign` (repo en GitHub), o (b) pasarle el
`.tgz` y que corra `npx ./redesign-ui-kit-merged-<version>.tgz` (o `npm i -g ./...tgz` y después
`redesign-ui-kit-merged`). Sin infra ni mantenimiento. Protección: control de entrega + `LICENSE`.

---
© 2026 90th Garage — InfoManager Restyle. Uso bajo licencia (venta única).
