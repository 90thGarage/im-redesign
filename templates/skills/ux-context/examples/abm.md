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
- Entorno: sentado, terminal propia, interrupciones ocasionales (consultas de otros).
- Hardware presente: ninguno específico.

## 2. Tareas frecuentes (ordenadas por frecuencia)
1. **Buscar un registro y editar** un dato puntual (precio, stock, un campo) → Grabar.
   - frecuencia: decenas de veces por día
   - volumen: 1 registro por edición
   - costo del último error: ninguna — hipótesis del equipo
   - flujo:
     disparador: cambió un precio/stock o se lo pidió otro sector
     viene de: menú/pestaña ya abierta, o llegó desde Consultas al ver el dato desactualizado
     pasos: 1. buscar el registro 2. entrar en modo edición 3. cambiar el campo 4. grabar
     desvíos: no lo encuentra por el filtro → prueba otro criterio de búsqueda → sigue igual
     sigue en: vuelve al listado/consulta que lo trajo, o sigue con el próximo registro a editar
2. **Alta de uno nuevo** (menos frecuente que editar), a veces con **Copiar** de uno parecido.
   - frecuencia: algunas veces por semana
   - volumen: 1 registro por alta
   - costo del último error: ninguna — hipótesis del equipo
3. **Revisar/consultar** sin editar (modo consulta).
   - frecuencia: varias veces por día
   - volumen: 1–10 registros por consulta
   - costo del último error: ninguna — hipótesis del equipo

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

## 7. Oportunidades de UX
- **[propuesto]** cambio: estado de **modo (consulta/edición) mucho más visible** (no equivocarse)
  evidencia: ninguna — hipótesis del equipo
  prioridad: alta
  solidez: baja
- **[propuesto]** cambio: validación **inline** cerca del campo, antes de grabar
  evidencia: ninguna — hipótesis del equipo
  prioridad: media
  solidez: baja
- **[propuesto]** cambio: jerarquía de campos, destacar los usados siempre y agrupar/colapsar los raros
  evidencia: ninguna — hipótesis del equipo
  prioridad: media
  solidez: baja
- **[propuesto]** cambio: feedback claro de "Grabado" (toast) y de qué falta si no
  evidencia: ninguna — hipótesis del equipo
  prioridad: media
  solidez: baja

## 8. Definición de "mejor"
- Pendiente de entrevista real: "menos errores de no se guardó; editar/grabar más rápido;
  encontrar el campo correcto sin buscar" es una hipótesis del equipo, no una respuesta textual
  de un usuario todavía.
