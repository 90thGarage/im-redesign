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
- **Skills:** `restyle-view` (núcleo) + los 5 estándares `design-menu`, `design-abm`,
  `design-consultas`, `design-facturacion-rapida`, `design-comprobante` + `ui-design-system`
  (shadcn + tokens). Opcional: base `react-19` / `tailwind-4` / `typescript`.
- **Comandos:** `im-go` (todo en uno), `im-setup`, `im-restyle`, `im-review-ui`.

## Cómo funciona
Le indicás una vista existente, `/restyle` lee **todo** su código, **infiere** de cuál de los 5
tipos es, y reescribe **solo la presentación** a shadcn + tokens. Queda **drop-in**: misma API
(export/props/ruta), misma lógica, mismos endpoints, mismo teclado — solo se ve mejor.

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
# im-redesign
