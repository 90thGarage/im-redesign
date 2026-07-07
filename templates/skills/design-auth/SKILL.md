---
name: design-auth
description: >
  Estándar visual del tipo AUTH (login / register) de InfoManager. Usar cuando la vista es la
  pantalla de login/registro. A diferencia de los otros tipos, NO se restylea preservando 1:1:
  se implementa desde el bloque shadcn login-02 con layout fijo (panel azul de marca con textura
  de líneas + panel oscuro con el formulario). Spec fija, no requiere contexto de entrevista.
---

# Diseño para Auth (login / register)

**Auth es distinto a los otros tipos:** no es un restyle que preserva todo, es una **spec fija** que
se implementa igual siempre. Objetivo: la pantalla de login de InfoManager (panel azul con textura +
panel oscuro con el formulario). **Preservar el flujo de autenticación** (Google, usuario/clave,
mantener sesión, olvidé contraseña, biometría, multi-empresa) — la lógica y los endpoints no se tocan.

## Base: shadcn `login-02`

```bash
npx shadcn@latest add login-02
```

`login-02` trae el layout **de dos columnas** (formulario + panel). Se personaliza a lo de abajo.

## Layout objetivo

```
┌───────────────────────────────┬───────────────────────────┐
│  infomanager (logo, blanco)   │        Iniciá sesión       │
│                               │                            │
│  Tu negocio,                  │  [G  Ingresá con Google ]  │
│  siempre bajo control.        │  ───────── o ──────────    │
│                               │  [ USUARIO O CORREO      ]  │
│  [ ← VOLVER ]                 │  [ CLAVE                 ]  │
│                               │  [       INGRESAR        ]  │
│   (fondo azul + textura        │  ☐ MANTENER SESIÓN INICIADA│
│    de líneas diagonales)      │ ¿OLVIDASTE TU CONTRASEÑA?  │
└───────────────────────────────┴───────────────────────────┘
      panel de marca (~57%)            panel oscuro (~43%)
```

### El mockup es una plantilla de SLOTS, no una lista cerrada
Los elementos de arriba son **slots**: incluí **solo los que la vista original tiene**, en su orden
original. No agregues elementos que la app no tiene (si no hay login con Google, no va el botón;
si no hay "mantener sesión", no va el checkbox; si no hay navegación previa, no va `VOLVER`).
Campos reales de la vista que el mockup no contempla (ej. **EMPRESA / BASE DE DATOS** del login
multi-empresa) van como inputs estándar dentro de la misma columna del formulario, en su posición
original. La spec fija es el **layout y el estilo**, no el inventario de campos.

### Distribución interna (valores concretos, no opcionales)
- **Panel izquierdo:** `relative`, padding `p-10` a `p-12`. Logo **arriba a la izquierda** (no
  centrado). Headline y botón `VOLVER` en el tercio inferior izquierdo, alineados a la izquierda.
  Nada tocando los bordes del panel.
- **Panel derecho:** `flex items-center justify-center`, padding `p-8` mínimo. El formulario es
  **una columna centrada** (vertical y horizontal): `w-full max-w-[380px]`, `flex flex-col gap-4`
  (`gap-6` entre bloques: título / formulario / links). Labels, inputs, botones y footer viven
  DENTRO de esa columna — nunca pegados al borde del panel.
- **Footer** (Ayuda, "by Infomanager", etc., si la vista los tiene): dentro de la misma columna o
  con el mismo padding del panel, nunca en x=0.

### Spec fija: colores NO salen de tokens de tema
Los dos paneles usan **color fijo, siempre igual, sin importar el tema** de la app (claro/oscuro):
esta pantalla es la **única excepción documentada** a la regla "prohibido color literal" de
`ui-design-system`. Motivo: es la puerta de entrada de marca, tiene que verse **idéntica** en
ambos temas — no puede depender de qué tema quedó activo la última vez.
- **NO usar `bg-primary`** para el panel izquierdo: `--primary` resuelve `#4f86ff` en el tema base
  (oscuro) y `#0057FF` solo en `.light` — usar ese token daría un azul distinto según el tema.
  Usar el **azul de marca fijo `#0057FF`** literal (o una constante/clase dedicada, no el token).
- **NO usar `bg-background`/`bg-strong`** para el panel derecho (ambos invierten con el tema).
  Usar los **valores de superficie oscura fijos** (`--background: #0b1220` / `--card: #1a2335`
  del tema oscuro de `colors-tokens.md`) como color literal, no como token que resuelve por tema.

### Panel izquierdo (marca, ~57%)
- **Fondo:** azul de marca fijo **`#0057FF`** (siempre, no `bg-primary`) con la **textura de
  líneas** encima (`ui-design-system/reference/textures.md` → `assets/textures/intersect-pattern.svg`).
- **Logo** InfoManager **negativo/blanco**, arriba a la izquierda (`assets/logos/infomanager-negative*.svg`).
- **Headline** grande, blanco, dos líneas: *"Tu negocio, siempre bajo control."*
- **Botón `← VOLVER`**: `variant="outline"` sobre azul (borde/texto blancos, fondo transparente).

### Panel derecho (formulario, ~43%)
- **Fondo:** superficie oscura fija (`#0b1220`, con el `#1a2335` de `--card` si se diferencia una
  tarjeta interna), siempre igual sin importar el tema activo de la app.
- **Título** "Iniciá sesión" centrado, arriba de la columna del formulario.
- **Logo: NO va en este panel.** El logo vive solo en el panel de marca (izquierdo), con el asset
  del kit. Si la vista original renderiza su propio logo acá (ej. el ícono "im" legacy), se
  **elimina** de este panel — es presentación, no lógica; queda cubierto por el logo del panel
  izquierdo. No duplicar logos.
- **Google:** botón **blanco** full-width con ícono de Google → "Ingresá con tu cuenta Google".
- **Divisor** con "o" (`Separator` + label centrado).
- **Inputs** full-width `USUARIO O CORREO` y `CLAVE` — labels en **Geist Mono, MAYÚSCULAS**, muted.
- **Botón `INGRESAR`**: azul de marca fijo **`#0057FF`** (mismo criterio que el panel izquierdo,
  no `bg-primary`), full-width, label mono mayúsculas.
- **`Checkbox`** "MANTENER SESIÓN INICIADA" (mono, mayúsculas).
- **Link** "¿OLVIDASTE TU CONTRASEÑA?" (mono, mayúsculas, chico, centrado).

### Mayúsculas y mono: por CSS, nunca reescribiendo textos
Los labels y botones se ven en **Geist Mono MAYÚSCULAS** aplicando clases (`font-mono uppercase
tracking-wide`) sobre el **string original de la vista** — no reescribas los textos. "Ingresar"
queda `Ingresar` en el JSX y se ve `INGRESAR` por CSS. Así el estilo fijo no viola la regla de
restyle-view de preservar los textos.

## Componentes shadcn
`login-02` (scaffold) + `Button`, `Input`, `Label`, `Checkbox`, `Separator`, `Card`.

## Preservar (no se toca)
Login con **Google** y con **usuario/clave**, "mantener sesión", "olvidaste tu contraseña",
biometría si existe (Capacitor), y multi-empresa/base al ingresar. Los endpoints y el flujo de
auth quedan igual — esto es solo la capa visual.

## Register
Si hay pantalla de registro, reusar el mismo layout de dos paneles (marca + formulario) cambiando
los campos del formulario. Quién crea usuarios (self vs admin) depende del producto — no inventar.

## Notas de implementación
- **Login como pantalla raíz:** si no hay pantalla previa a la que volver, **omití el botón
  `← VOLVER`** del panel de marca — un botón sin destino es "inventar" (regla de slots).
- **Toggle de tema:** si la vista original lo trae, **preservá su lógica** (persiste la
  preferencia y aplica la clase al `body` para el resto de la app), aunque el login sea de color
  fijo y el toggle no lo recoloree visualmente. Es el comportamiento esperado, no un bug.
