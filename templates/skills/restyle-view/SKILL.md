---
name: restyle-view
description: >
  Reembellece una vista React EXISTENTE de InfoManager (ya migrada pero fea) a la UI estándar
  con shadcn/ui + tokens del design system, PRESERVANDO 100% la API, la logica, la funcionalidad,
  los endpoints y el teclado. Aplicar cuando el usuario indica un archivo/vista y quiere que se
  vea mejor sin cambiar como se usa. Infiere de cual de los 5 tipos es (Menu, ABM, Consultas,
  Facturacion rapida, Comprobante). Es el nucleo del kit de restyle.
---

# Restyle View — InfoManager

Tomar una vista React que YA existe y devolver **la misma vista, idéntica en uso y
funcionalidad, pero con la UI estandarizada y más linda**. Es un **re-skin de la capa de
presentación**, NO una migración ni un rediseño de UX.

## Cuando aplico
Cuando el usuario indica un archivo/vista existente y pide embellecerla/estandarizarla.

## Regla de oro (no negociable)
**Preservar idéntico — leer TODO el código primero:**
- API publica del componente: mismo `export`, mismos `props`, misma ruta → **drop-in**.
- Lógica, estado, hooks, efectos, handlers, data fetching, **endpoints**, validaciones, `refs`.
- Flujo y **atajos de teclado**.
- NO mover ni renombrar archivos, NO reestructurar carpetas, NO crear features.

**Cambiar solo la presentación:**
- Markup/JSX y estilos → **shadcn/ui** + tokens del design system (`ui-design-system`).
- Cero colores arbitrarios. Respetar el toggle claro/oscuro existente.

**Única excepción de UX:** en el tipo **Menú**, persistencia de pestañas (ruta + localStorage).
En el resto: se ve mejor, se usa igual.

## Metodo (en orden)
1. **Leer toda la vista** (componente + hooks/helpers/estilos que use). Mapear: props/export,
   estado, handlers, efectos, llamadas a API, refs, atajos de teclado, y el árbol de JSX.
   - *(Opcional, solo si el usuario da acceso en la sesión — nunca guardar credenciales):*
     abrir la vista legacy equivalente en el navegador, hacer un **snapshot** (estructura,
     toolbar/acciones habilitadas, filtros, columnas, panel lateral, totales) y screenshot.
     Sirve para inventariar lo que el código no deja obvio. No ejecutar acciones destructivas.
2. **Inferir el tipo** (ver heurística) y leer la skill `design-<tipo>` correspondiente.
3. **Setup shadcn (bloqueante):** confirmar `components.json` + las primitivas del **inventario
   mínimo del tipo** (`ui-design-system/reference/shadcn.md`). Si faltan, instalarlas antes de tocar
   el JSX. Nunca cerrar con `<button>`/`<input>`/`<select>`/`react-select` crudos (gobernanza de
   excepciones en `shadcn.md`).
4. **Reescribir solo el JSX/estilos** a shadcn + tokens, manteniendo cada handler/binding/ref
   conectado exactamente igual. Mismos `name`/`id`/`onChange`/`onClick`/`value`. Tablas sin scroll
   horizontal por defecto (`reference/layout-tables.md`).
5. **Verificar**: misma API (props/export/ruta), misma lógica, typecheck/build OK. (Ver `/im-review-ui`.)

## Heurística de tipo
- **Menú:** sidebar de navegación + gestor de pestañas/router. → `design-menu`
- **ABM:** toolbar Nuevo/Editar/Grabar + grilla maestra + detalle editable. → `design-abm`
- **Consultas:** solo lectura, listados guardados, Ejecutar/Exportar. → `design-consultas`
- **Facturación rápida:** buscador de productos + carrito + total + cobro. → `design-facturacion-rapida`
- **Comprobante / Facturación completa:** cabecera + ítems + totales + CAE/fiscal. → `design-comprobante`
- **Auth:** pantalla de login/registro (usuario/clave, Google, "mantener sesión"). → `design-auth`
  ⚠️ Auth NO es un restyle 1:1: es **spec fija** (bloque `login-02` + paneles). Seguí `design-auth`
  tal cual en vez de preservar el markup viejo. La lógica de auth (endpoints, Google, biometría) sí se preserva.
- Si no estás seguro del tipo, **preguntá** antes de reescribir.

## Reglas duras
1. **Si dudás si algo es lógica o presentación, es lógica → no lo toques.**
2. **No cambies textos, labels ni el orden de los campos** (los usuarios viejos los conocen).
3. **Diff acotado a presentación.** Si un cambio toca lógica, no va.
4. Usar las primitivas shadcn de `ui-design-system`; no inventar componentes. **shadcn es
   obligatorio** para todo control con equivalente (ver `reference/shadcn.md`).
5. Tablas: caben en su contenedor; scroll horizontal solo como último recurso y reportado.

## Salida
La misma vista, drop-in, con UI shadcn estándar. Reportar: tipo inferido, qué se cambió (solo
presentación) y confirmación de que API + lógica + teclado quedan intactos.


## Refinamiento (obligatorio)
Aplicar `ui-design-system/reference/refinement.md`: tipografía, espaciado, radius 4px, color disciplinado, botones fijos, íconos solo principales/destructivas.
