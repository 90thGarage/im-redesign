---
tipo: consultas
vista:
fecha: 2026-07-07
entrevistados: 0 (EJEMPLO ilustrativo — falta validar con usuarios reales)
confianza: baja
---

> ⚠️ **Ejemplo de referencia, no validado.** Copialo a `ux-context/tipos/consultas.md` y ajustá con
> entrevistas reales. (Ejemplo sobre consultas de artículos / stock / cuentas.)

## 1. Quién y contexto de uso
- Administrativos, dueño, contable. Uso **diario** para mirar/exportar datos.
- Desktop; tabla densa con muchas columnas, filtros arriba.
- Más mouse (filtrar, exportar) que teclado.
- Entorno: sentado, terminal propia, interrupciones ocasionales.
- Hardware presente: ninguno específico.

## 2. Tareas frecuentes (ordenadas por frecuencia)
1. **Correr un listado guardado** y mirar/filtrar resultados.
   - frecuencia: varias veces por día
   - volumen: cientos de filas típico
   - costo del último error: ninguna — hipótesis del equipo
   - flujo:
     disparador: necesita revisar un dato (stock, cuenta, ventas) para responder algo puntual
     viene de: menú/pestaña ya abierta, o se lo pidió el dueño/contable
     pasos: 1. elegir listado guardado 2. ajustar filtros 3. ejecutar 4. revisar resultados
     desvíos: no encuentra lo que busca → ajusta filtros de nuevo → repite ejecución
     sigue en: exportar a Excel, o vuelve a la pantalla que originó la consulta
2. **Exportar a Excel / imprimir** para seguir el trabajo afuera.
   - frecuencia: algunas veces por día
   - volumen: cientos de filas típico
   - costo del último error: ninguna — hipótesis del equipo
3. **Filtrar por fecha/columna** para encontrar algo puntual.
   - frecuencia: varias veces por día
   - volumen: decenas de filas resultantes
   - costo del último error: ninguna — hipótesis del equipo

## 3. Interacción actual (lo que NO se puede romper)
- **CRUD de listados guardados** (público/privado) y su selección.
- **Ejecutar**, **Exportar**, **Imprimir**; **Límite** de filas + aviso de tope.
- Filtros por columna, orden, filas por página, paginado; filas **read-only**.

## 4. Dolores / errores frecuentes
- Con muchas columnas, **scroll horizontal** y se pierden cuál es cuál.
- Rearmar los mismos filtros cada vez (si no está guardado).
- No queda claro cuándo el resultado está **cortado por el límite**.

## 5. Restricciones / intocable
- Columnas disponibles, orden, filtros, exportaciones, acciones por fila.
- Que sea **solo lectura** (no se edita desde acá).

## 6. Bajo presión
- Encontrar el dato/registro y exportarlo rápido.

## 7. Oportunidades de UX
- **[propuesto]** cambio: tabla que **entra sin scroll horizontal** (densidad, numéricos, columnas clave)
  evidencia: ninguna — hipótesis del equipo
  prioridad: alta
  solidez: baja
- **[propuesto]** cambio: header de filtros más claro; aviso de "tope alcanzado" bien visible
  evidencia: ninguna — hipótesis del equipo
  prioridad: media
  solidez: baja
- **[propuesto]** cambio: acceso rápido a los listados guardados usados siempre
  evidencia: ninguna — hipótesis del equipo
  prioridad: media
  solidez: baja
- **[propuesto]** cambio: empty state útil ("sin resultados → ajustá filtros")
  evidencia: ninguna — hipótesis del equipo
  prioridad: baja
  solidez: baja

## 8. Definición de "mejor"
- Pendiente de entrevista real: "leer la tabla sin pelear con el scroll; llegar al dato y
  exportar en menos pasos" es una hipótesis del equipo, no una respuesta textual de un usuario
  todavía.
