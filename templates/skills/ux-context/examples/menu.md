---
tipo: menu
vista:
fecha: 2026-07-07
entrevistados: 0 (EJEMPLO ilustrativo — falta validar con usuarios reales)
confianza: baja
---

> ⚠️ **Ejemplo de referencia, no validado.** Copialo a `ux-context/tipos/menu.md` y ajustá con
> entrevistas reales.

## 1. Quién y contexto de uso
- Todos los roles (cajero, administrativo, dueño): es el marco de toda la app.
- Desktop con teclado; en el local, a veces pantalla táctil.
- Se navega muchas veces por día; tienen **varias vistas abiertas** a la vez (pestañas/MDI).
- Usuarios expertos: van a lo de siempre de memoria.

## 2. Tareas frecuentes (ordenadas por frecuencia)
1. **Abrir la vista de siempre** (Factura IMPos, ABM Artículos, Consultas) — la buscan por memoria
   o por favorito.
2. **Saltar entre vistas abiertas** (pestañas) sin perder lo que estaban haciendo.
3. **Cambiar de empresa / sucursal** (quienes manejan más de una).

## 3. Interacción actual (lo que NO se puede romper)
- La **gestión de pestañas** (abrir, cambiar, cerrar, activa) y que sobrevivan al recargar.
- **Favoritos** (estrella) y el switch **Menú / Favoritos**.
- El árbol de módulos colapsable con su orden actual; los nombres de módulos.

## 4. Dolores / errores frecuentes
- Con muchas pestañas abiertas **se pierden** / no encuentran la que buscan.
- Llegar a un módulo poco usado cuesta (mucho scroll/click en el árbol).

## 5. Restricciones / intocable
- Orden de módulos, nombres de dominio, rutas y permisos por ítem.
- Cambio de empresa/base, zoom, modo oscuro, cerrar sesión (funciones del pie/sidebar).

## 6. Bajo presión (hora pico)
- Volver a la vista de venta al instante; no perder el contexto de lo abierto.

## 7. Oportunidades de UX (hipótesis del equipo — propuesto, validar)
- **[propuesto]** Búsqueda de módulos rápida (filtra el árbol) siempre a mano.
- **[propuesto]** Pestañas más legibles (overflow con menú, activa más marcada, cerrar visible).
- **[propuesto]** Deep-link + persistencia de pestañas (sobreviven recarga, compartibles).

## 8. Definición de "mejor"
- Llegar a cualquier vista en 1–2 pasos y no perderse entre pestañas.
