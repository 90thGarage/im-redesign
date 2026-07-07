---
tipo: abm
vista:
fecha: 2026-07-07
entrevistados: 0 (EJEMPLO ilustrativo — falta validar con usuarios reales)
confianza: baja
---

> ⚠️ **Ejemplo de referencia, no validado.** Copialo a `ux-context/tipos/abm.md` y ajustá con
> entrevistas reales. (Ejemplo pensado sobre ABM Artículos / Clientes.)

## 1. Quién y contexto de uso
- Administrativos / encargados de local. Uso **frecuente** (cargan y mantienen datos).
- Desktop con teclado; tabla arriba (maestro) + detalle abajo con pestañas.
- Mezcla de teclado y mouse.

## 2. Tareas frecuentes (ordenadas por frecuencia)
1. **Buscar un registro y editar** un dato puntual (precio, stock, un campo) → Grabar.
2. **Alta de uno nuevo** (menos frecuente que editar), a veces con **Copiar** de uno parecido.
3. **Revisar/consultar** sin editar (modo consulta).

## 3. Interacción actual (lo que NO se puede romper)
- **Modo consulta vs edición** (campos bloqueados hasta Editar/Nuevo) y el estado de la toolbar.
- Selección **maestro-detalle**, las **pestañas** del detalle y su orden.
- **Orden/filtros por columna**, paginado, filas inhabilitadas en gris.
- **Copiar** ("COPIA") y **Alta Rápida**; marcadores de obligatorio (*).

## 4. Dolores / errores frecuentes
- Se **confunden de modo** (creen que están editando y no) → cambios que no se graban.
- Campos obligatorios que recién avisan al grabar → hay que volver a buscarlos.
- Muchos campos que casi nunca usan compiten con los 4–5 que sí.

## 5. Restricciones / intocable
- Orden de campos, pestañas y secciones; validaciones; flujo nuevo→editar→grabar.
- Nombres de campos del dominio; estilo de fila inhabilitada.

## 6. Bajo presión
- Editar y grabar rápido sin errores de modo; ver claro si quedó guardado.

## 7. Oportunidades de UX (hipótesis del equipo — propuesto, validar)
- **[propuesto]** Estado de **modo (consulta/edición) mucho más visible** (no equivocarse).
- **[propuesto]** Validación **inline** cerca del campo, antes de grabar.
- **[propuesto]** Jerarquía de campos: destacar los usados siempre, agrupar/colapsar los raros.
- **[propuesto]** Feedback claro de "Grabado" (toast) y de qué falta si no.

## 8. Definición de "mejor"
- Menos errores de "no se guardó"; editar/grabar más rápido; encontrar el campo correcto sin buscar.
