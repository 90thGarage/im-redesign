# Skills de terceros

`react-19`, `tailwind-4` y `typescript` provienen de
[Gentleman-Skills](https://github.com/Gentleman-Programming/Gentleman-Skills) (@gentleman-programming,
Apache-2.0), sin modificar (salvo una nota IM5 al pie). Las demas skills son propias del proyecto.

## Precedencia cuando hay solape
Si una regla de terceros choca con una skill propia, **gana la del proyecto**:
- **Colores/estilo:** manda `ui-design-system` (tokens del `design.md`). Usá los tokens
  semanticos (`bg-card`, `text-muted-foreground`, `bg-primary`...), NO los colores crudos de
  Tailwind (`text-white`, `bg-slate-800`) de los ejemplos de `tailwind-4`. Componentes = shadcn/ui.
- **React 19 en Vite (este proyecto):** patrones de cliente de `react-19`; NO Server Components /
  server actions (eso asume Next.js).
