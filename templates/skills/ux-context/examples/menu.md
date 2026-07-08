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
- Entorno: sentado, terminal propia (a veces compartida en locales chicos), interrupciones frecuentes.
- Hardware presente: ninguno específico del menú (lector/balanza son de otras vistas).

## 2. Tareas frecuentes (ordenadas por frecuencia)
1. **Abrir la vista de siempre** (Factura IMPos, ABM Artículos, Consultas) — la buscan por memoria
   o por favorito.
   - frecuencia: decenas de veces por día
   - volumen: 1 vista por apertura
   - costo del último error: ninguna — hipótesis del equipo
   - flujo:
     disparador: empieza el turno, o termina una tarea y necesita otra pantalla
     viene de: login, o pestaña anterior ya abierta
     pasos: 1. buscar en favoritos o árbol 2. click/Enter para abrir 3. queda como pestaña nueva
     desvíos: no encuentra el módulo de memoria → busca por nombre en el árbol → lo marca de favorito
     sigue en: la vista recién abierta (Factura IMPos, ABM, Consultas)
2. **Saltar entre vistas abiertas** (pestañas) sin perder lo que estaban haciendo.
   - frecuencia: varias veces por hora
   - volumen: 3–6 pestañas abiertas típico
   - costo del último error: ninguna — hipótesis del equipo
3. **Cambiar de empresa / sucursal** (quienes manejan más de una).
   - frecuencia: pocas veces por día
   - volumen: 1 cambio por vez
   - costo del último error: ninguna — hipótesis del equipo

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

## 7. Oportunidades de UX
- **[propuesto]** cambio: búsqueda de módulos rápida (filtra el árbol) siempre a mano
  evidencia: ninguna — hipótesis del equipo
  prioridad: media
  solidez: baja
- **[propuesto]** cambio: pestañas más legibles (overflow con menú, activa más marcada, cerrar visible)
  evidencia: ninguna — hipótesis del equipo
  prioridad: media
  solidez: baja
- **[propuesto]** cambio: deep-link + persistencia de pestañas (sobreviven recarga, compartibles)
  evidencia: ninguna — hipótesis del equipo
  prioridad: media
  solidez: baja

## 8. Definición de "mejor"
- Pendiente de entrevista real: "llegar a cualquier vista en 1–2 pasos y no perderse entre
  pestañas" es una hipótesis del equipo, no una respuesta textual de un usuario todavía.
