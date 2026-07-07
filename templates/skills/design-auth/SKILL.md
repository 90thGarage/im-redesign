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
│    de líneas diagonales)      │      ¿Olvidaste tu clave?  │
└───────────────────────────────┴───────────────────────────┘
      panel de marca (~57%)            panel oscuro (~43%)
```

### Panel izquierdo (marca, ~57%)
- **Fondo:** azul de marca `bg-primary` (`#0057FF`) con la **textura de líneas** encima
  (`ui-design-system/reference/textures.md` → `assets/textures/intersect-pattern.svg`).
- **Logo** InfoManager **negativo/blanco**, arriba a la izquierda (`assets/logos/infomanager-negative*.svg`).
- **Headline** grande, blanco, dos líneas: *"Tu negocio, siempre bajo control."*
- **Botón `← VOLVER`**: `variant="outline"` sobre azul (borde/texto blancos, fondo transparente).

### Panel derecho (formulario, ~43%)
- **Fondo:** oscuro y plano (con tema base oscuro, `bg-background`; apuntar a un `#1A1A1A`–`#0b1220`).
  No usar `bg-strong` (ese token invierte según tema).
- **Título** "Iniciá sesión" centrado.
- **Google:** botón **blanco** full-width con ícono de Google → "Ingresá con tu cuenta Google".
- **Divisor** con "o" (`Separator` + label centrado).
- **Inputs** full-width `USUARIO O CORREO` y `CLAVE` — labels en **Geist Mono, MAYÚSCULAS**, muted.
- **Botón `INGRESAR`**: `bg-primary` azul, full-width, label mono.
- **`Checkbox`** "Mantener sesión iniciada".
- **Link** "¿Olvidaste tu contraseña?" (mono, chico, centrado).

## Componentes shadcn
`login-02` (scaffold) + `Button`, `Input`, `Label`, `Checkbox`, `Separator`, `Card`.

## Preservar (no se toca)
Login con **Google** y con **usuario/clave**, "mantener sesión", "olvidaste tu contraseña",
biometría si existe (Capacitor), y multi-empresa/base al ingresar. Los endpoints y el flujo de
auth quedan igual — esto es solo la capa visual.

## Register
Si hay pantalla de registro, reusar el mismo layout de dos paneles (marca + formulario) cambiando
los campos del formulario. Quién crea usuarios (self vs admin) depende del producto — no inventar.
