---
description: Reembellece una vista React existente a la UI estándar (shadcn + tokens) preservando API, lógica y comportamiento
argument-hint: <ruta-o-vista> (el archivo/carpeta de la vista a embellecer)
---

Reembellecé la vista **$ARGUMENTS** siguiendo la skill `restyle-view`. Es un **re-skin de la
presentación**, NO un rediseño: la vista tiene que quedar **idéntica en uso y funcionalidad**.

Proceso:
1. **Leé TODO el código** de la vista (componente + hooks/helpers/estilos que use). Mapeá:
   export/props, estado, handlers, efectos, llamadas a API/endpoints, refs y atajos de teclado.
   - *(Opcional, solo con acceso dado en la sesión — sin guardar credenciales):* abrí la vista
     legacy en el navegador, snapshot + screenshot para inventariar acciones/columnas/panel que el
     código no deja obvio. Nada destructivo.
2. **Inferí el tipo** (Menú / ABM / Consultas / Facturación rápida / Comprobante) y leé la skill
   `design-<tipo>` + `ui-design-system`. Si no estás seguro del tipo, **preguntá**.
3. **shadcn bloqueante:** confirmá que estén las primitivas del **inventario mínimo del tipo**
   (`ui-design-system/reference/shadcn.md`); instalá las que falten antes de reescribir.
4. **Reescribí solo el JSX/estilos** a shadcn + tokens, manteniendo cada handler/binding/ref
   conectado igual (mismos `name`/`id`/`onChange`/`onClick`/`value`). No cambies textos, labels
   ni el orden de los campos. Tablas sin scroll horizontal por defecto (`reference/layout-tables.md`).
   Cero controles HTML/CSS crudos ni `react-select` donde shadcn aplica.
5. **No toques:** API pública (export/props/ruta → drop-in), lógica, estado, endpoints,
   validaciones, teclado. No muevas/renombres archivos.
6. **Verificá** typecheck/build y que la API quede idéntica (podés usar `/im-review-ui`).

Única excepción de UX: si es el **Menú**, podés sumar persistencia de pestañas (ruta + localStorage).

Al terminar, reportá: tipo inferido, qué cambió (solo presentación) y confirmación de que API +
lógica + teclado quedan intactos. Si algo era ambiguo entre lógica y presentación, lo dejaste como estaba.
