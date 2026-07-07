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

## 2. Tareas frecuentes (ordenadas por frecuencia)
1. **Buscar/consultar** un comprobante (por cliente/número/fecha) y verlo.
2. **Emitir** un comprobante: cabecera → ítems → totales → CAE/ARCA.
3. Revisar **secciones** (percepciones, vencimientos, pagos) cuando aplica.

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

## 7. Oportunidades de UX (hipótesis del equipo — propuesto, validar)
- **[propuesto]** Estado **ARCA/CAE** claro (badge + mensaje accionable cuando falla).
- **[propuesto]** Tabla de ítems más legible (columnas clave, numéricos alineados, sin scroll de página).
- **[propuesto]** Validaciones antes de emitir, con el motivo cerca del campo.
- **[propuesto]** Estado del comprobante (borrador/emitido) visible con badge.

## 8. Definición de "mejor"
- Emitir con menos trabas y entender al toque cualquier error fiscal; leer los ítems sin pelear.
