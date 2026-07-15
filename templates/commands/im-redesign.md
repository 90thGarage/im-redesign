---
description: Rediseña una vista React existente: aplica el layout estándar del tipo y mejora la UX guiada por contexto de uso real (ux-context), preservando lógica, endpoints y API
argument-hint: <ruta-o-vista> (el archivo/carpeta de la vista a rediseñar)
---

Rediseñá la vista **$ARGUMENTS** siguiendo la skill `redesign-view`. A diferencia de
`/im-restyle` (solo piel), acá **sí** se puede cambiar estructura y flujo — pero nunca
lógica/endpoints/validaciones.

Proceso:
1. **Leé TODO el código** de la vista (componente + hooks/helpers/estilos que use). Mapeá:
   export/props, estado, handlers, efectos, llamadas a API/endpoints, refs y atajos de teclado.
   - *(Opcional, solo con acceso dado en la sesión — sin guardar credenciales):* abrí la vista
     legacy en el navegador, snapshot + screenshot para inventariar acciones/columnas/panel que el
     código no deja obvio. Nada destructivo.
2. **Inferí el tipo** (Menú / ABM / Consultas / Facturación rápida / Comprobante / Auth) — misma
   heurística que `/im-restyle` — y leé `design-<tipo>` + `ui-design-system`.
3. **Leé el contexto UX (obligatorio):** `ux-context/tipos/<tipo>.md` y
   `ux-context/vistas/<vista>.md` si existe. Si no hay contexto del tipo, avisá y rediseñá solo con
   el layout de referencia, sin cambios de flujo especulativos.
4. **shadcn bloqueante:** confirmá que estén las primitivas del **inventario mínimo del tipo**
   (`ui-design-system/reference/shadcn.md`); instalá las que falten antes de reescribir.
5. **Aplicá el layout de referencia** de `design-<tipo>` + mejoras de UX, **cada una justificada
   por evidencia del contexto** (citá la oportunidad/evidencia de la sección 7). Reescribí a
   shadcn + tokens + refinamiento (`ui-design-system/reference/refinement.md`).
6. **No toqués:** API pública (export/props/ruta → drop-in), lógica, endpoints, validaciones
   fiscales (CAE/ARCA), permisos, hardware (balanza/lector/cámara), términos del dominio. No
   muevas/renombres archivos.
7. **Verificá** typecheck/build y que la API quede idéntica (podés usar `/im-review-ui`).

Al terminar, reportá: tipo inferido, layout aplicado, **cada cambio de UX con su evidencia del
contexto**, y confirmación de que lógica + endpoints + API quedan intactos.
