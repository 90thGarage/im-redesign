# InfoManager Restyle

> Por **90th Garage**

Embellecé tus vistas **React de InfoManager** a una UI estándar y moderna (shadcn/ui + design
system), **sin cambiar cómo funcionan**. La vista queda idéntica en uso —misma API, misma lógica,
mismos atajos— solo se ve mejor.

## Qué hace

Le indicás una vista existente y el kit la reescribe a la UI estándar de InfoManager: tipografía,
espaciado, colores, tablas, formularios y modales consistentes, en **modo claro y oscuro**. Es un
**re-skin de la presentación**, no un rediseño: nada de mover campos, renombrar conceptos ni tocar
el comportamiento.

## Requisitos

- Proyecto **React** (Vite o Next).
- Tu agente de IA: **Claude Code**, **Cursor**, **Codex** o **Antigravity**.
- shadcn/ui y los tokens del design system los instala y configura el propio kit si faltan.

## Instalación

Desde la carpeta de tu proyecto:

```bash
npx github:90thGarage/im-redesign
```

El asistente detecta tu stack, te pregunta para qué agente y copia todo. Sin preguntas:

```bash
npx github:90thGarage/im-redesign install --agent claude --yes
#   --agent  claude | cursor | codex | antigravity
```

> **Codex:** los slash commands quedan disponibles de forma global. Reiniciá Codex y aparecen como
> `/im-go`, `/im-setup`, `/im-restyle`, `/im-review-ui`.

Después de instalar, reiniciá o abrí un chat nuevo en tu agente para que tome el kit.

## Cómo usar

El comando principal hace todo solo:

```
/im-go <ruta-de-la-vista>
```

Detecta el tipo de vista, prepara el proyecto si hace falta, la reembellece, la revisa y corrige
en loop. Si preferís ir paso a paso:

| Comando | Qué hace |
|---|---|
| `/im-go <vista>` | **Todo en uno** (recomendado). |
| `/im-setup` | Prepara el proyecto: shadcn + tokens + fuentes. Sin romper nada. |
| `/im-restyle <vista>` | Reembellece una vista preservando API, lógica y comportamiento. |
| `/im-review-ui <vista>` | Verifica que quedó estándar **y** que no se rompió nada. |

## Cómo funciona

1. **Lee toda la vista** e infiere de cuál de los **6 tipos** es: Menú, ABM, Consultas,
   Facturación rápida, Comprobante o **Auth** (login/register).
2. **Aplica el estándar visual** de ese tipo + el design system de InfoManager (tokens, shadcn,
   tipografía).
3. **Reescribe solo la presentación** a shadcn + tokens, dejando todo conectado igual.
4. **Revisa el resultado** (claro y oscuro, desktop y mobile) y deja un reporte en
   `docs/im-restyle/<vista>.md`.

## Qué se preserva

La vista queda **drop-in**: misma API pública (export, props, ruta), misma lógica, estado,
endpoints, validaciones, refs y atajos de teclado. Mismos textos y orden de campos. Solo cambia
cómo se ve.

---

© 2026 90th Garage — InfoManager Restyle. Uso bajo licencia.
