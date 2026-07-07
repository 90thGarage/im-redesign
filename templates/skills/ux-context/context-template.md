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
│   ├── comprobante.md
│   └── auth.md
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

## 2. Tareas frecuentes (ordenadas por frecuencia)
1. <tarea más común> — camino feliz paso a paso:
2. <segunda>:
3. <ocasional>:

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

## 7. Oportunidades de UX (hipótesis del equipo — NO del usuario)
- Cambios de flujo/interacción que mejorarían el uso, sin romper lo intocable:
- (Esto lo completa el equipo interpretando lo de arriba; marcar cada uno como "propuesto".)

## 8. Definición de "mejor"
- Cómo sabemos que quedó mejor para este usuario (más rápido, menos errores, menos clicks…):
```

---

## Notas de llenado

- **Secciones 1–6:** salen **directo de la entrevista** (palabras del usuario).
- **Sección 7:** la completa **el equipo**, interpretando; es lo que habilita a la skill a
  **cambiar UX** (no solo restyle). Sin esto, la skill se queda en mejora visual.
- **Sección 5 es la barrera de seguridad:** lo que esté acá, la skill **no lo toca** aunque
  parezca mejorable. Igual que en el restyle, la lógica/fiscal/hardware es sagrada.
- **`confianza`:** si es `baja`, la skill debería proponer con más cautela / dejar como "necesita
  decisión" en el reporte, en vez de aplicar cambios fuertes de UX.
- Mantené cada archivo **corto y concreto**. Vale más 8 líneas ciertas que 3 párrafos vagos.
