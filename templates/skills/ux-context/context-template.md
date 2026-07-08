# Formato del archivo de contexto UX

Este es el **formato** con el que se vuelca lo que sale de las entrevistas. La skill de mejora de
UX **lee estos archivos** para saber cómo se usa la vista, sin preguntarle al programador.

## Dónde van los archivos (dos capas)

```
ux-context/
├── tipos/                     ← OBLIGATORIO: uno por tipo (uso general de ese tipo)
│   ├── menu.md
│   ├── abm.md
│   ├── consultas.md
│   ├── facturacion-rapida.md
│   └── comprobante.md         (Auth no lleva contexto (no se entrevista) — spec fija en design-auth)
└── vistas/                    ← OPCIONAL: uno por vista concreta (particularidades / overrides)
    ├── factura-impos.md
    ├── abm-articulos.md
    └── clientes.md
```

- La skill **siempre** lee `tipos/<tipo>.md`.
- Si existe `vistas/<vista>.md`, lo lee **además** y sus datos **pisan/agregan** sobre los del tipo.
- Regla práctica: llená primero el del **tipo** (sirve para todas las vistas de ese tipo). Creá el
  de la **vista** solo cuando esa pantalla se usa distinto o tiene algo propio.

---

## Plantilla (copiá esto en cada archivo)

```markdown
---
tipo: abm                      # menu | abm | consultas | facturacion-rapida | comprobante | auth
vista:                         # vacío en tipos/*, o el nombre de la vista en vistas/*
fecha: 2026-07-07
entrevistados: 2 (1 cajero, 1 administrativo)
confianza: media               # alta | media | baja (qué tan seguros estamos de esto)
---

## 1. Quién y contexto de uso
- Roles que la usan y frecuencia (todo el día / cada tanto):
- Dispositivo (desktop+teclado / touch / tablet / lector / balanza):
- ¿Teclado o mouse/touch dominante?:
- Nivel: usuario experto (memoria muscular) / ocasional:
- Entorno: de pie / sentado, terminal compartida / propia, interrupciones (frecuentes / raras):
- Hardware presente (lector, balanza, impresora, cámara):

## 2. Tareas frecuentes (ordenadas por frecuencia)
1. <tarea más común> — camino feliz paso a paso:
   - frecuencia: <veces/día o /semana>
   - volumen: <ítems por operación / filas típicas>
   - costo del último error: <tiempo/plata/cliente esperando, del incidente concreto que contaron>
   - flujo:
     disparador: <qué evento lo inicia>
     viene de: <pantalla/canal anterior>
     pasos: <1. … 2. … 3. … (numerados, camino normal)>
     desvíos: <cuándo se sale del camino y a dónde (ej. "cliente no cargado → ABM Clientes → vuelve")>
     sigue en: <pantalla/acción siguiente>
2. <segunda>:
   - frecuencia:
   - volumen:
   - costo del último error:
   - flujo:
     disparador:
     viene de:
     pasos:
     desvíos:
     sigue en:
3. <ocasional>:
   - frecuencia:
   - volumen:
   - costo del último error:
   - flujo:
     disparador:
     viene de:
     pasos:
     desvíos:
     sigue en:

## 3. Interacción actual (lo que NO se puede romper)
- Atajos sagrados (teclas que usan sin mirar):
- Secuencias con memoria muscular (orden de pasos, foco entre campos):
- Términos del dominio que conocen y no hay que renombrar:

## 4. Dolores / errores frecuentes (lo que hay que mejorar)
- Qué los hace perder tiempo:
- Dónde se equivocan / rehacen:
- Lo que más pidieron cambiar:

## 5. Restricciones / intocable
- Reglas de negocio, pasos legales/fiscales (CAE/ARCA), permisos:
- Hardware (balanza, lector, cámara, impresora fiscal):
- Cosas que "sí o sí van así" según el usuario:

## 6. Bajo presión (hora pico / cierre)
- Qué necesitan ver o hacer rápido, sí o sí:

## 7. Oportunidades de UX
- **[propuesto]** cambio: <un cambio de flujo/interacción, en una línea, sin romper lo intocable>
  evidencia: <cita textual del entrevistado, o comportamiento observado, o "ninguna — hipótesis del equipo">
  prioridad: alta | media | baja
  solidez: alta (lo dijeron varios entrevistados) | media (lo dijo uno) | baja (hipótesis del equipo)
- (Repetir el bloque por cada oportunidad. Si `evidencia` es "ninguna — hipótesis del equipo",
  `solidez` tiene que ser `baja` — no hay excepción. No confundir con la `confianza` del
  frontmatter, que califica el documento entero.)

## 8. Definición de "mejor"
- Se llena **con la pregunta de la entrevista** ("¿qué te haría decir que esta pantalla quedó
  mejor?"), en las palabras del usuario. El equipo puede agregar proxies medibles (más rápido,
  menos errores, menos clicks) **después**, sin reemplazar la respuesta original:
```

---

## Notas de llenado

- **Secciones 1–6:** salen **directo de la entrevista** (palabras del usuario). Los sub-campos
  numéricos de la sección 2 (`frecuencia`, `volumen`, `costo del último error`) también: no se
  estiman, se preguntan.
- Los campos `flujo` (sección 2) salen directo de las tres preguntas de **Flujo** de la entrevista;
  `viene de` y `sigue en` son los que permiten armar el recorrido del cliente entre pantallas,
  componiendo los archivos por vista.
- **Sección 7:** la completa **el equipo**, interpretando; es lo que habilita a la skill a
  **cambiar UX** (no solo restyle). Sin esto, la skill se queda en mejora visual. Cada entrada
  lleva su propia `evidencia` y `solidez` — el tag `[propuesto]` queda por costumbre visual,
  pero el dato que importa ahora es `solidez`.
- **Sección 8:** sale de la pregunta de cierre de la entrevista, no la redacta el equipo.
- **Sección 5 es la barrera de seguridad:** lo que esté acá, la skill **no lo toca** aunque
  parezca mejorable. Igual que en el restyle, la lógica/fiscal/hardware es sagrada.
- **`confianza` (frontmatter) y `solidez` (sección 7):** si son `baja`, la skill debería proponer
  con más cautela / dejar como "necesita decisión" en el reporte, en vez de aplicar cambios
  fuertes de UX.
- Mantené cada archivo **corto y concreto**. Vale más 8 líneas ciertas que 3 párrafos vagos.
