---
tipo: comprobante
vista:
fecha: 2026-07-07
entrevistados: 0 (EJEMPLO ilustrativo — falta validar con usuarios reales)
confianza: baja
---

> ⚠️ **Ejemplo de referencia, no validado.** Copialo a `ux-context/tipos/comprobante.md` y ajustá
> con entrevistas reales. (Ejemplo sobre Facturas / comprobante completo.)

## 1. Quién y contexto de uso
- Administrativos de facturación / ventas. Uso **frecuente** (emiten y consultan comprobantes).
- Desktop con teclado; cabecera con datos fiscales + secciones en pestañas + tabla de ítems.
- Mezcla teclado/mouse; datos fiscales sensibles.
- Entorno: sentado, terminal propia, interrupciones ocasionales (consultas de clientes/otros).
- Hardware presente: impresora fiscal.

## 2. Tareas frecuentes (ordenadas por frecuencia)
1. **Buscar/consultar** un comprobante (por cliente/número/fecha) y verlo.
   - frecuencia: varias veces por día
   - volumen: 1 comprobante por consulta
   - costo del último error: ninguna — hipótesis del equipo
2. **Emitir** un comprobante: cabecera → ítems → totales → CAE/ARCA.
   - frecuencia: decenas de veces por día
   - volumen: 5–20 ítems por comprobante
   - costo del último error: ninguna — hipótesis del equipo
   - flujo:
     disparador: viene de una consulta o pedido/presupuesto que hay que facturar
     viene de: consulta o pedido
     pasos: 1. abrir/cargar cabecera 2. traer ítems del pedido o cargarlos a mano 3. revisar totales 4. emitir (CAE/ARCA)
     desvíos: falla el CAE/ARCA → revisa certificado/conexión → reintenta emitir
     sigue en: entrega/impresión del comprobante, o vuelve al listado de comprobantes
3. Revisar **secciones** (percepciones, vencimientos, pagos) cuando aplica.
   - frecuencia: algunas veces por día
   - volumen: 1 comprobante por revisión
   - costo del último error: ninguna — hipótesis del equipo

## 3. Interacción actual (lo que NO se puede romper)
- **Campos fiscales** (Letra, Condición de venta, Moneda, **CAE**, Vto CAE) y su orden.
- **Pestañas** de cabecera y de secciones; **columnas fiscales** de ítems (IVA%, Tip.IVA, etc.).
- Cálculo de **totales** (Neto/Bonificación/Total); filtros de fecha + búsqueda del listado.

## 4. Dolores / errores frecuentes
- El **flujo fiscal (CAE/ARCA)** traba y no siempre se entiende **por qué** falló.
- Muchas columnas de ítems → scroll y difícil de leer.
- Validaciones que frenan la emisión sin decir claro qué falta.

## 5. Restricciones / intocable
- Campos fiscales, tipos de comprobante, **flujo de emisión** e integración **ARCA**.
- Columnas fiscales de ítems y el cálculo de totales.

## 6. Bajo presión
- Emitir sin trabas; si algo falla (ARCA/certificado), ver el motivo y qué hacer, rápido.

## 7. Oportunidades de UX
- **[propuesto]** cambio: estado **ARCA/CAE** claro (badge + mensaje accionable cuando falla)
  evidencia: ninguna — hipótesis del equipo
  prioridad: alta
  solidez: baja
- **[propuesto]** cambio: tabla de ítems más legible (columnas clave, numéricos alineados, sin scroll de página)
  evidencia: ninguna — hipótesis del equipo
  prioridad: media
  solidez: baja
- **[propuesto]** cambio: validaciones antes de emitir, con el motivo cerca del campo
  evidencia: ninguna — hipótesis del equipo
  prioridad: media
  solidez: baja
- **[propuesto]** cambio: estado del comprobante (borrador/emitido) visible con badge
  evidencia: ninguna — hipótesis del equipo
  prioridad: baja
  solidez: baja

## 8. Definición de "mejor"
- Pendiente de entrevista real: "emitir con menos trabas y entender al toque cualquier error
  fiscal; leer los ítems sin pelear" es una hipótesis del equipo, no una respuesta textual de un
  usuario todavía.
