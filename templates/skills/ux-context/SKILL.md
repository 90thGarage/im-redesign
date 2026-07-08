---
name: ux-context
description: >
  Contexto de uso real (de entrevistas a usuarios) para mejorar la UX de las vistas de InfoManager
  sin preguntarle al programador. Contiene la guía de preguntas, el formato del archivo de contexto
  y un ejemplo por tipo de vista. Usar cuando se va a mejorar la UX de una vista guiándose por cómo
  la usa el usuario real, o cuando se arma/lee un archivo de contexto en `ux-context/`.
---

# UX Context — InfoManager

Esta skill guarda el material para la etapa de **mejora de UX** (no solo restyle): la vista React ya
existe y se mejora **cómo se usa**, guiándose por **contexto de uso real** levantado en entrevistas.

## Qué hay acá

- **`interview-guide.md`** — preguntas para los **usuarios reales** + mecánica de la sesión + matriz
  de qué se pregunta por tipo. Las preguntas se anclan a **hechos concretos** (la última vez que
  pasó, mostrando la pantalla), no a opiniones u opciones hipotéticas.
- **`context-template.md`** — el **formato** del archivo de contexto (dos capas: por tipo + por
  vista); las oportunidades de UX (sección 7) van como registros con `evidencia` y `solidez`, y
  la definición de "mejor" (sección 8) sale de la pregunta de cierre, en palabras del usuario.
  Cada tarea de la sección 2 lleva además un bloque `flujo` (disparador, de dónde viene, pasos,
  desvíos, a dónde sigue) que permite reconstruir el recorrido del cliente entre pantallas
  componiendo varios archivos, no solo el uso dentro de una vista.
- **`examples/`** — un archivo de contexto **de ejemplo por tipo** (referencia, sin validar):
  `menu`, `abm`, `consultas`, `facturacion-rapida`, `comprobante`.

## Cómo se usa

1. Se **entrevista a mano** a los usuarios reales (con `interview-guide.md`). No lo hace la skill.
2. Se llena el **archivo de contexto** con el formato de `context-template.md`, en el **proyecto**:
   - `ux-context/tipos/<tipo>.md` (obligatorio — uso general del tipo).
   - `ux-context/vistas/<vista>.md` (opcional — particularidades de una vista).
3. Al mejorar una vista, **leer** el contexto del tipo (y de la vista si existe) **antes** de tocar
   nada, para saber tareas frecuentes, atajos sagrados, dolores y qué es intocable.

Los archivos de `examples/` son **plantillas de arranque**: copialos a `ux-context/tipos/<tipo>.md`
en el proyecto y ajustá con datos reales. Están marcados como no validados.

## Límites (contrato de la mejora de UX)

- **Sí** se puede cambiar: flujo, orden de pasos, interacciones, jerarquía, foco de teclado, feedback.
- **No** se toca: lógica de negocio, endpoints, validaciones fiscales (CAE/ARCA), permisos, hardware
  (balanza/lector/cámara), ni los términos del dominio que el usuario ya conoce.
- Lo que esté en la **sección 5 (Restricciones / intocable)** del contexto es barrera dura.
- Si la `confianza` del contexto es baja, proponer con cautela / dejar como "necesita decisión".

## Auth

**Auth no lleva contexto** (no se entrevista): es spec fija → ver la skill `design-auth`.
