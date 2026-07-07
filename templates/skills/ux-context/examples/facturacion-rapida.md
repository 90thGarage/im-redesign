---
tipo: facturacion-rapida
vista: factura-impos
fecha: 2026-07-07
entrevistados: 0 (EJEMPLO ilustrativo — falta validar con usuarios reales)
confianza: baja
---

> ⚠️ **Ejemplo de referencia, no validado.** Muestra cómo se ve un archivo lleno. Los datos son
> plausibles según el dominio POS, pero hay que confirmarlos entrevistando cajeros reales antes de
> que la skill los use.

## 1. Quién y contexto de uso
- Cajeros de mostrador, la usan **todo el día**; es la pantalla #1 del local.
- Desktop con **teclado + lector de código de barras**; a veces balanza y cámara.
- **Teclado dominante**: escanean y cobran casi sin tocar el mouse.
- Usuarios expertos: memoria muscular fuerte.

## 2. Tareas frecuentes (ordenadas por frecuencia)
1. **Venta rápida escaneada:** escanear ítem tras ítem → Enter para cobrar → efectivo → vuelto.
   La mayoría de las ventas son así, 3–8 ítems.
2. **Venta con búsqueda por nombre** cuando el producto no tiene código o no lee.
3. **Venta pesada (balanza)** para fiambres/verdulería: leer peso [P], acumular [+].
4. **Multi-pago** (efectivo + tarjeta) en ventas grandes; menos frecuente.

## 3. Interacción actual (lo que NO se puede romper)
- **Atajos sagrados:** Enter = cobrar, **ESC** = cancelar/salir, **P** = leer peso, **+** =
  acumular, **R** = reemplazar. El foco arranca en el buscador y vuelve ahí solo.
- El **total** siempre visible abajo a la derecha, grande.
- Términos: "C.U.V.", "% D. Man / % D. Pro", "uv" (unidad de venta) — los conocen, no renombrar.

## 4. Dolores / errores frecuentes
- En **hora pico** cualquier click de más cuesta; molesta tener que ir al mouse para el cobro.
- A veces cargan **cantidad equivocada** y corregir el stepper es lento.
- El estado **ARCA / Fac. Elec.** no siempre se ve claro si quedó ok.

## 5. Restricciones / intocable
- Flujo **fiscal ARCA / factura electrónica** y sus validaciones: intocable.
- **Multi-pago con vuelto**, descuentos por línea: lógica intacta.
- Integración de **balanza (serial/USB)** y **cámara**: no tocar el comportamiento ni los atajos.
- Términos del dominio y orden de columnas del carrito.

## 6. Bajo presión (hora pico)
- Ver sin buscar: **buscador**, **carrito**, **TOTAL** y el **cobro** — todo sin scroll.
- Cobrar con teclado, sin ir al mouse.

## 7. Oportunidades de UX (hipótesis del equipo — propuesto, validar)
- **[propuesto]** Cobro por teclado end-to-end: Enter abre cobro, monto, Enter confirma — sin mouse.
- **[propuesto]** Feedback más claro del estado ARCA/Fac. Elec. (badge de color + texto).
- **[propuesto]** Corrección de cantidad más rápida (escribir el número directo sobre el stepper).
- **[propuesto]** Confirmar visualmente el último ítem agregado (resalte breve) para evitar dobles.

## 8. Definición de "mejor"
- Menos toques de mouse por venta; cobro más rápido en hora pico; menos errores de cantidad y de
  "creí que estaba facturado y no".
