---
name: redesign-view
description: >
  Rediseña una vista React existente de InfoManager aplicando el layout de referencia del tipo
  (design-<tipo>) y mejorando la UX guiada por el contexto de uso real (ux-context), preservando
  lógica, endpoints y API pública. Usar cuando el usuario pide rediseñar/mejorar la UX de una
  vista (no solo embellecerla).
---

# Redesign View — InfoManager

Tomar una vista React que YA existe y devolver **la misma vista, misma lógica y misma API
(drop-in)**, pero **reestructurada al layout de referencia del tipo** y **mejorada en cómo se
usa**, con cada cambio de UX respaldado por evidencia de `ux-context`. A diferencia de
`restyle-view` (re-skin puro), acá **sí** se puede tocar flujo, orden de pasos y jerarquía.

## Cuando aplico
Cuando el usuario pide rediseñar o mejorar la UX de una vista existente, no solo embellecerla.

## Regla de oro (no negociable)
**Preservar idéntico — leer TODO el código primero:**
- API pública del componente: mismo `export`, mismos `props`, misma ruta → **drop-in**.
- Lógica, estado, hooks, efectos, handlers, data fetching, **endpoints**, validaciones fiscales
  (CAE/ARCA), permisos, hardware (balanza/lector/cámara), **refs**, términos del dominio.
- NO mover ni renombrar archivos, NO reestructurar carpetas, NO crear features.

**Cambiar presentación + estructura + UX, cada mejora con evidencia:**
- Markup/JSX y estilos → **shadcn/ui** + tokens del design system (`ui-design-system`).
- Layout → el de referencia de `design-<tipo>`.
- Flujo/interacciones/jerarquía → solo si `ux-context` da evidencia concreta de la oportunidad.

## Método (en orden)
1. **Leer toda la vista** (componente + hooks/helpers/estilos que use). Mapear: props/export,
   estado, handlers, efectos, llamadas a API, refs, atajos de teclado, y el árbol de JSX.
   - *(Opcional, solo si el usuario da acceso en la sesión — nunca guardar credenciales):*
     abrir la vista legacy equivalente en el navegador, hacer un **snapshot** (estructura,
     toolbar/acciones habilitadas, filtros, columnas, panel lateral, totales) y screenshot.
2. **Inferir el tipo** — misma heurística que `restyle-view` (ver esa skill, sección
   "Heurística de tipo"; incluye la entrada de **Auth**) — y leer `design-<tipo>`.
3. **Leer contexto UX (obligatorio):** `ux-context/tipos/<tipo>.md` del proyecto y
   `ux-context/vistas/<vista>.md` si existe (formato en la skill `ux-context`). Si no existe
   contexto del tipo: **avisar** y rediseñar solo con el layout de referencia de `design-<tipo>`,
   sin cambios de flujo especulativos.
4. **Setup shadcn (bloqueante):** confirmar `components.json` + las primitivas del **inventario
   mínimo del tipo** (`ui-design-system/reference/shadcn.md`). Si faltan, instalarlas antes de
   tocar el JSX.
5. **Aplicar el layout de referencia** de `design-<tipo>` + **mejoras de UX, cada una justificada
   por evidencia del contexto** (citar la oportunidad/evidencia de la sección 7 de
   `ux-context/context-template.md`).
6. **Verificar**: typecheck/build OK y misma API (props/export/ruta). (Ver `/im-review-ui`.)

## Qué SÍ puede cambiar
Flujo, orden de pasos, interacciones, jerarquía, foco de teclado, feedback, estructura del
layout. Incluye la persistencia de pestañas del **Menú** (ruta + localStorage).

## Qué NO se toca (barrera dura)
Lógica de negocio, estado/handlers/efectos en su semántica, endpoints, validaciones fiscales
(CAE/ARCA), permisos, hardware (balanza/lector/cámara), términos del dominio. La **sección 5
(Restricciones/intocable)** del contexto es barrera dura. Si la `confianza` del contexto es baja,
proponer con cautela o dejar como "necesita decisión". API pública intacta (export/props/ruta).

## Reglas duras
1. **Si dudás si algo es lógica o presentación, es lógica → no lo toques.**
2. Usar las primitivas shadcn de `ui-design-system`; no inventar componentes. **shadcn es
   obligatorio** para todo control con equivalente (ver `reference/shadcn.md`).
3. Tablas: caben en su contenedor sin scroll horizontal salvo último recurso, reportado.
4. **JS/JSX, no TypeScript:** el proyecto es JavaScript. La salida queda en `.jsx`, sin
   anotaciones de tipos ni sintaxis TS, y sin crear archivos `.tsx`.
5. Aplicar `ui-design-system/reference/refinement.md` (tipografía, espaciado, radius 4px, color
   disciplinado, botones fijos, íconos solo principales/destructivas).

## Salida
La misma vista, drop-in. Reportar: tipo inferido, layout aplicado, **cada cambio de UX con su
evidencia del contexto**, y confirmación de que lógica + endpoints + API quedan intactos.
