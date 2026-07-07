# Guía de entrevista UX — InfoManager

Preguntas para hacerle a los **usuarios reales** de cada pantalla (no al programador). Con las
respuestas se llena el **archivo de contexto** (ver `context-template.md`), que después la skill
de mejora de UX consume — así no hace falta preguntarle al programador cosas de uso que no sabe.

## Cómo usarla

1. Por cada **tipo de vista**, entrevistá a **1–3 usuarios** que la usen de verdad (cajero,
   administrativo, vendedor, dueño…).
2. Empezá por las **preguntas comunes**, seguí con las **del tipo** correspondiente.
3. Anotá en **las palabras del usuario** (no interpretes todavía). Si dicen "el botón verde",
   anotá "el botón verde".
4. Volcá lo relevante al formato de `context-template.md`.

> Regla de oro: buscamos **cómo trabajan de verdad**, no cómo "debería" ser. Los dolores y los
> atajos que usan sin mirar son oro.

Tipos de vista: **Menú/shell · ABM · Consultas · Facturación rápida (POS) · Comprobante**.
(**Auth** existe como tipo pero **no se entrevista** — tiene spec fija en `design-auth`.)

---

## Preguntas comunes (todas las vistas)

**Rol y frecuencia**
- ¿Quién sos y qué hacés con esta pantalla? ¿Cuántas veces al día la usás?
- ¿Sos de los que la usa todo el día o cada tanto?

**Dispositivo e interacción**
- ¿La usás en compu con teclado, en pantalla táctil, tablet? ¿Con lector, balanza, etc.?
- ¿Trabajás más con teclado o con mouse/dedo?
- ¿Qué teclas/atajos apretás **sin mirar** (de memoria)? ¿Cuáles serían un desastre si cambiaran?

**Tarea principal**
- ¿Cuál es la cosa que hacés **más veces** acá?
- Contame el **paso a paso** de esa tarea, como si me enseñaras (el "camino normal").
- ¿Cuántas veces por día/hora hacés eso?

**Dolores**
- ¿Qué es lo que más te **hace perder tiempo** o te molesta hoy?
- ¿Dónde te **equivocás** seguido o tenés que rehacer algo?
- Si pudieras pedir **una** cosa que te haga la vida más fácil acá, ¿cuál sería?

**Intocable**
- ¿Hay algo que **no** se puede cambiar porque ya lo tenés re-aprendido o porque sí o sí es así?
  (el orden de algo, un término, un paso obligatorio, un botón donde está)

**Presión**
- Cuando estás **apurado** (cola de gente, cierre de caja, fin de mes), ¿qué necesitás ver o
  hacer sí o sí, rápido?

**Qué sería "mejor"**
- Si esta pantalla quedara "genial" para vos, ¿qué tendría que pasar?

---

## Menú / shell (navegación + pestañas)

- ¿Cómo llegás a lo que buscás: por **favoritos**, **búsqueda**, o de **memoria**?
- ¿Cuántas vistas tenés **abiertas a la vez**? ¿Te perdés entre las pestañas?
- ¿Marcás favoritos? ¿Los usás de verdad?
- ¿Cambiás de **empresa / base / sucursal** seguido? ¿Cómo?
- ¿El menú te queda a mano o tenés que buscar mucho para llegar a lo de siempre?

## ABM (altas/bajas/modificaciones)

- ¿Buscás uno y lo editás, o **cargás muchos seguidos** (alta tras alta)?
- ¿Qué campos llenás **siempre** y cuáles **casi nunca**?
- El **modo consulta vs edición**, ¿te resulta claro o te confundís de modo?
- ¿Usás los **filtros por columna** y el orden? ¿Cuáles?
- ¿Copiás registros parecidos ("alta rápida" / copiar)? ¿Con qué frecuencia?
- ¿Qué te frena para grabar (validaciones, campos obligatorios que no sabías)?

## Consultas (listados / reportes)

- ¿Qué **filtros** usás siempre? ¿Guardás **listados** armados?
- ¿Compartís esos listados con otros o son tuyos?
- ¿**Exportás a Excel / imprimís**? ¿Para qué lo usás después?
- ¿Mirás los resultados en pantalla o exportás y trabajás afuera?
- ¿Te importa el **límite** de filas / que avise cuando hay muchas?

## Facturación rápida (POS)

- Para cargar productos, ¿**escaneás**, buscás por **nombre**, o usás **favoritos**? ¿En qué proporción?
- ¿Usás **balanza** o **cámara**? ¿Cómo es ese momento?
- ¿Hacés **multi-pago** (efectivo + tarjeta), das **vuelto**, aplicás **descuentos por línea**?
  ¿Seguido?
- ¿Qué te **frena en hora pico**? ¿Cuántos ítems por venta, más o menos?
- ¿Qué **atajos** son sagrados? (Escanear, Enter para cobrar, ESC, balanza P/+/R…)
- Si se cae internet, ¿seguís vendiendo (offline)? ¿Cómo te das cuenta?

## Comprobante / Facturación completa

- ¿Qué **tipo de comprobante** hacés más? ¿De dónde salen los ítems (a mano, de un **pedido/presupuesto**)?
- El flujo **fiscal (CAE / ARCA)**, ¿te traba? ¿Qué pasa cuando falla?
- ¿Cargás **muchos ítems**? ¿Qué columnas mirás sí o sí?
- ¿Qué **validaciones** te frenan antes de emitir?
- ¿Trabajás con varias secciones (percepciones, vencimientos, pagos) o casi siempre solo ítems?

## Auth (login / register) — SIN entrevista

**Auth no se entrevista.** Es la única vista con **spec fija** (no depende del uso): se implementa
igual siempre. Definición completa en **`design-auth`** (base `shadcn login-02` + panel azul con
la textura de líneas + panel oscuro con el formulario).

---

## Matriz: qué temas preguntar por tipo

Los temas comunes van en **todas**. Estos son los **específicos** por tipo.

| Tema | Menú | ABM | Consultas | POS | Comprob. | Auth |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| Navegación / pestañas abiertas | ✓ | | | | | |
| Favoritos / búsqueda de menú | ✓ | | | | | |
| Cambio de empresa / base / sucursal | ✓ | | | | | ✓ |
| Alta masiva vs edición única | | ✓ | | | | |
| Campos usados / omitidos | | ✓ | | | ✓ | |
| Modo consulta vs edición | | ✓ | | | ✓ | |
| Filtros / orden / columnas | | ✓ | ✓ | | | |
| Copiar / alta rápida | | ✓ | | | | |
| Listados guardados / compartir | | | ✓ | | | |
| Exportar / imprimir | | | ✓ | | ✓ | |
| Escaneo / balanza / cámara / hardware | | | | ✓ | | |
| Multi-pago / vuelto / descuentos | | | | ✓ | | |
| Atajos sagrados (Enter/ESC/P/+/R) | | ✓ | | ✓ | ✓ | |
| Flujo fiscal (CAE / ARCA) | | | | ✓ | ✓ | |
| Origen de ítems (pedido / presupuesto) | | | | | ✓ | |
| Presión / hora pico | | | | ✓ | ✓ | |
| Login: frecuencia / biometría / recordar | | | | | | ✓ |
| Offline / errores de conexión | | | | ✓ | | ✓ |
| Alta de usuarios: self vs admin | | | | | | ✓ |

> La columna **Auth** se deja solo por completitud: en la práctica **no se entrevista** (spec fija
> en `design-auth`).
