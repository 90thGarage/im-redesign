---
name: tailwind-4
description: >
  Tailwind CSS 4 patterns and best practices.
  Trigger: When styling with Tailwind - cn(), theme variables, no var() in className.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.1"
---

## The cn() Utility
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
```
- Usar cn() para clases condicionales: `cn("base", isActive && "active")`. Estaticas: className directo.

## Reglas
- NUNCA hex/valores arbitrarios de color en className (`bg-[#...]`, `text-[var(--x)]`).
- Valores arbitrarios solo para tamanos puntuales (`w-[327px]`), nunca color.

> Nota IM5: el color sale de los TOKENS SEMANTICOS del design system (`bg-card`, `text-muted-foreground`,
> `bg-primary`...), NO de los colores crudos de la paleta default de Tailwind (`bg-slate-800`).
> Manda `ui-design-system` (design.md). En este proyecto los componentes son shadcn/ui.

## Keywords
tailwind, css, styling, cn, utility classes, responsive
