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

## 2. Tareas frecuentes (ordenadas por frecuencia)
1. **Correr un listado guardado** y mirar/filtrar resultados.
2. **Exportar a Excel / imprimir** para seguir el trabajo afuera.
3. **Filtrar por fecha/columna** para encontrar algo puntual.

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

## 7. Oportunidades de UX (hipótesis del equipo — propuesto, validar)
- **[propuesto]** Tabla que **entra sin scroll horizontal** (densidad, numéricos, columnas clave).
- **[propuesto]** Header de filtros más claro; aviso de "tope alcanzado" bien visible.
- **[propuesto]** Acceso rápido a los listados guardados usados siempre.
- **[propuesto]** Empty state útil ("sin resultados → ajustá filtros").

## 8. Definición de "mejor"
- Leer la tabla sin pelear con el scroll; llegar al dato y exportar en menos pasos.
