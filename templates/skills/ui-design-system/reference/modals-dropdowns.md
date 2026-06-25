# Selects, modales y drawers (shadcn)

> Comportamiento (foco, teclado, cuando abrir) = ux-patterns. Aca, las primitivas.

## Dropdowns / selects
Prohibido `<select>` nativo. Usar shadcn: `<Select>` (Radix) para listas estaticas; `<Combobox>`
(Popover + Command) para busqueda o datos remotos/paginados (cliente, articulo, vendedor).
```tsx
<Select value={iva} onValueChange={setIva}>
  <SelectTrigger className="w-full font-mono"><SelectValue placeholder="Condición IVA" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="RI">Responsable Inscripto</SelectItem>
    <SelectItem value="MT">Monotributo</SelectItem>
  </SelectContent>
</Select>
```
El menu es opaco por defecto (usa `--popover`).

## Modales y drawers
- **`<Dialog>`**: formularios / alta rapida.
- **`<AlertDialog>`**: confirmaciones/validaciones bloqueantes (eliminar, grabar incompleto, cobro).
  `AlertDialogAction` (primaria, foco) + `AlertDialogCancel`.
- **`<Sheet>`**: sub-flujos laterales (Factura con datos, cobro con vuelto). Fusionar modales
  legacy en el flujo si solo existian por limitacion vieja.
```tsx
<AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirmar cobro</AlertDialogTitle>
      <AlertDialogDescription>Total $ 44.665,18 · Vuelto $ 334,82</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancelar</AlertDialogCancel>
      <AlertDialogAction>Confirmar</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```
Nunca `alert()`/`confirm()` nativos.

## Toasts
`sonner`. `<Toaster />` montado una vez en el layout raiz.
```tsx
import { toast } from "sonner";
toast.success("Cliente guardado");
toast("Ítem eliminado", { action: { label: "Deshacer", onClick: undo } });
```
