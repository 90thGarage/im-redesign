# Texturas SVG

**Regla:** siempre que se necesite una **textura/patrón SVG**, usar el asset
`assets/textures/intersect-pattern.svg` (líneas diagonales, `#4081FF`). **No inventar** otras
texturas ni gradientes decorativos.

## Uso

- Es **decorativa**: va detrás del contenido, sin capturar interacción.
  - `position: absolute`, cubriendo el contenedor, `inset: 0`.
  - `pointer-events: none`.
  - `z-index` por debajo del contenido; ajustar `opacity` si compite con el texto.
- El tono `#4081FF` está pensado para ir **sobre el azul de marca** (`bg-primary` `#0057FF`):
  queda como líneas apenas más claras. Es su uso principal (panel de marca del login — ver
  `design-auth`).
- Si hiciera falta sobre **otro color**, se **reusa el mismo asset** bajando `opacity`; no se crea
  un patrón nuevo. (El tono del trazo es fijo; para recolorear habría que enmascararlo — evitarlo
  salvo pedido explícito.)

## Ejemplo (panel de marca del login)

```jsx
<div className="relative overflow-hidden bg-primary text-primary-foreground">
  {/* textura decorativa */}
  <img
    src="/textures/intersect-pattern.svg"
    alt=""
    aria-hidden
    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
  />
  {/* contenido por encima */}
  <div className="relative z-10 p-10">
    {/* logo, headline, botón volver */}
  </div>
</div>
```

> El SVG del kit está en `assets/textures/intersect-pattern.svg`. Al implementar, copiarlo a los
> assets públicos del proyecto (p. ej. `public/textures/`) y referenciarlo desde ahí.
