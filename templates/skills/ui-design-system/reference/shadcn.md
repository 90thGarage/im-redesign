# shadcn/ui — estandarización obligatoria (contrato bloqueante)

> Lo mejor del kit KBE, adaptado a los **5 tipos** de InfoManager y al stack Vite + Tailwind 4.
> Esto es lo que evita que un restyle quede "lindo pero con `<button>` crudos". Completar
> **antes** de reescribir cualquier vista.

## Regla principal

Todo control interactivo con equivalente en shadcn/ui **debe** usar shadcn. El restyle estandariza
la capa de presentación; no reescribe UX ni lógica.

```
Control legacy  →  primitiva shadcn  →  tokens InfoManager (CSS vars del design system)
```

**Prohibido** en la vista reembellecida:

- `<button>`, `<input>`, `<select>`, `<textarea>` crudos para UI.
- Librerías de UI paralelas para lo que shadcn cubre (`react-select` → `<Select>` / `<Combobox>`).
- Tablas maquetadas con `<div>` + CSS cuando aplica `<Table>`.
- Cerrar la tarea sin instalar shadcn si el repo no lo tenía.

**Permitido** en CSS/custom:

- Layout: grid, flex, shell, viewport crítico, regiones scroll (ver `layout-tables.md`).
- Tokens globales en `index.css` / `@theme` (ver `colors-tokens.md`).
- Wrappers finos que **componen** primitivas shadcn (`ImButton`, `ImPanel`, `ImInput`).
- Estilos que no reimplementan un componente interactivo completo.

## Setup bloqueante (idempotente)

`/im-setup` y `/im-go` ejecutan esto. No editar la vista hasta completarlo.

1. **Verificar** existencia: `components.json`, `src/components/ui/`, Tailwind, alias `@/`.
2. **Instalar si falta** (Vite + Tailwind 4; ajustar al package manager del repo):
   ```bash
   npm install -D tailwindcss @tailwindcss/vite
   # OJO: `shadcn init` 4.x es interactivo (ignora -y, cuelga en automatización). NO usarlo:
   # escribir components.json a mano (tsx:false, style new-york, base radix, alias @/*)
   # + src/lib/utils.js con cn(), y usar `shadcn add -y` (no-interactivo, genera .jsx).
   npm i clsx tailwind-merge
   # Runtime de shadcn — `shadcn add` 4.x NO lo instala solo (el build pasa en falso sin él):
   npm i lucide-react class-variance-authority radix-ui cmdk next-themes react-day-picker sonner
   ```
   **Proyecto JS (no TS):** en `components.json` dejá **`"tsx": false`** para que shadcn genere
   componentes **`.jsx`**, no `.tsx`. El repo del cliente es JavaScript; si queda `tsx: true` te
   mete TypeScript donde no va. Verificá que los componentes caigan en `src/components/ui/*.jsx`.
3. **Tokens InfoManager** en el theme → ver `colors-tokens.md` (base oscura `:root` + override
   `.light` + escala de radius §3b + fuentes libres). Mergeá **conservando** las vars propias del usuario, pero los valores
   semánticos (`--primary`, `--ring`, `--background`, `--border`…) **reemplazan** a los que escribió
   `shadcn init`; si no, `bg-primary` sale en el indigo default (morado), no en `#0057FF` (§3d).
   Verificá el computado: `--primary` = `rgb(0,87,255)` en claro.
4. **Instalar todas** las primitivas del inventario del tipo de vista (tabla de abajo).
5. **Reemplazar** en la vista: `react-select`, botones/inputs HTML crudos, tablas div-based →
   imports desde `@/components/ui/*`.
6. **No** remover data hooks ni providers; solo cambia la capa visual.

## Mapeo legacy → shadcn (completo)

| Necesidad / control legacy | shadcn | Notas |
|---|---|---|
| Botones de acción | `Button` | variantes: default(azul), `bg-strong`(negro), outline, ghost, destructive |
| Inputs de texto | `Input` | con `Label` cuando hay label visible |
| Texto largo | `Textarea` | |
| Select simple (estático) | `Select` | reemplaza `<select>` nativo y `react-select` simple |
| Select con búsqueda / remoto | `Combobox` (`Popover` + `Command`) | cliente, artículo, vendedor, rubro |
| Checkbox / habilitado | `Checkbox` | |
| Toggle (modo oscuro, flags) | `Switch` | |
| Tabs (detalle / cabecera / secciones) | `Tabs` | |
| Tabla maestra / grilla / resultados | `Table` | `TableHeader/Body/Row/Cell`; densa, header mono |
| Paginación | composición `Button` / `Pagination` | |
| Menú contextual / acciones de fila | `DropdownMenu` | |
| Sidebar nav (árbol colapsable) | `Collapsible`/`Accordion` + `ScrollArea` + `Button` | tipo Menú |
| Modales / formularios / alta rápida | `Dialog` | |
| Confirmaciones bloqueantes | `AlertDialog` | eliminar, grabar incompleto, cobro |
| Panel lateral / sub-flujo | `Sheet` | cobro con vuelto, factura con datos |
| Tooltips en íconos | `Tooltip` | |
| Estado / tags (ARCA, COPIA, borrador) | `Badge` | compacto, mono, 4px |
| Alertas inline | `Alert` | certificado, errores fiscales |
| Loading de filas | `Skeleton` | no spinner de pantalla completa |
| Separadores de sección | `Separator` | |
| Fecha desde/hasta | `Popover` + `Calendar` | consultas/comprobante |
| Feedback breve | `sonner` (`toast`) | éxito/error |
| Scroll en listas/paneles | `ScrollArea` | |

Si una fila aplica a la vista, **instalala y usala**.

## Inventario mínimo por tipo de vista

Instalar **toda la fila** antes de codificar el tipo correspondiente.

| Primitiva | Menú | ABM | Consultas | Fact. rápida | Comprobante |
|---|:--:|:--:|:--:|:--:|:--:|
| `button` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `input` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `label` | | ✓ | ✓ | ✓ | ✓ |
| `select` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `table` | | ✓ | ✓ | ✓ | ✓ |
| `tabs` | ✓ | ✓ | | | ✓ |
| `checkbox` | | ✓ | | | ✓ |
| `textarea` | | ✓ | | | ✓ |
| `card` | | ✓ | ✓ | ✓ | ✓ |
| `separator` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `badge` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `alert` | | | | ✓ | ✓ |
| `dialog` | | ✓ | | ✓ | ✓ |
| `alert-dialog` | | ✓ | | ✓ | ✓ |
| `dropdown-menu` | ✓ | ✓ | | | |
| `collapsible` | ✓ | | | | ✓ |
| `accordion` | ✓ | | | | |
| `scroll-area` | ✓ | ✓ | ✓ | ✓ | |
| `sheet` | | | | ✓ | ✓ |
| `skeleton` | | ✓ | ✓ | | |
| `tooltip` | ✓ | ✓ | | ✓ | ✓ |
| `popover` | | ✓ | ✓ | ✓ | ✓ |
| `calendar` | | | ✓ | | ✓ |
| `command` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `sonner` | ✓ | ✓ | ✓ | ✓ | ✓ |

Comando típico (ejemplo ABM):

```bash
npx shadcn@latest add button input label select table tabs checkbox textarea card separator badge dialog alert-dialog dropdown-menu scroll-area skeleton tooltip popover command sonner
```

### Auth (tipo aparte — bloque `login-02`)

Auth no usa la matriz de arriba: parte de un **bloque** de shadcn y un set chico de primitivas
(ver `design-auth`).

```bash
npx shadcn@latest add login-02
npx shadcn@latest add button input label checkbox separator card
```

## Flujo por vista

1. **Inventariar** controles legacy en código (y por Browser si hay acceso — ver `restyle-view`).
2. **Marcar** cada control contra la fila del mapeo.
3. **Instalar** las primitivas faltantes.
4. **Reemplazar** el markup legacy por imports de `@/components/ui/*` (o wrappers `im/`).
5. **Verificar** que no queden controles crudos ni libs duplicadas en la vista tocada.
6. **Documentar** en el `.md` de la vista: primitivas usadas, mapeo, excepciones.

## Gobernanza de excepciones (única forma de saltear shadcn)

Solo se omite shadcn si se cumplen **las dos** condiciones:

1. No existe primitiva shadcn razonable **sin** cambiar el modelo de interacción legacy.
2. Queda documentado en `docs/im-restyle/<vista>.md` con: control, por qué shadcn no aplica,
   alternativa usada.

**Válidas:** grilla con edición inline celda-a-celda que `Table` no replica sin cambiar UX;
integración de hardware (escáner/balanza) con widget propio del repo.

**Inválidas** (no son excusa): "el repo ya tenía CSS", "react-select ya funcionaba",
"ahorra tiempo", "es solo una demo".

## Checklist de cierre shadcn

- [ ] `components.json` presente y build OK.
- [ ] Todos los controles mapeados tienen su primitiva instalada.
- [ ] La vista importa desde `@/components/ui/*` (o wrappers `im/`).
- [ ] Tokens InfoManager aplicados (claro **y** oscuro).
- [ ] Sin `react-select` / `<button>`/`<input>`/`<select>` crudos en la vista (salvo excepción documentada).
- [ ] El `.md` de la vista lista las primitivas usadas.
