---
name: react-19
description: >
  React 19 patterns with React Compiler.
  Trigger: When writing React components - no useMemo/useCallback needed.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## No Manual Memoization (REQUIRED)

```typescript
// React Compiler handles optimization automatically
function Component({ items }) {
  const filtered = items.filter(x => x.active);
  const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
  const handleClick = (id) => { console.log(id); };
  return <List items={sorted} onClick={handleClick} />;
}
// NEVER: const filtered = useMemo(...); const handleClick = useCallback(...);
```

## Imports (REQUIRED)
```typescript
import { useState, useEffect, useRef } from "react";   // named imports
// NEVER: import React from "react";
```

## ref as Prop (No forwardRef)
```typescript
function Input({ ref, ...props }) { return <input ref={ref} {...props} />; }
```

## use() Hook
```typescript
import { use } from "react";
function Comments({ promise }) { const comments = use(promise); return comments.map(c => <div key={c.id}>{c.text}</div>); }
```

> Nota IM5 (Vite SPA): aplican los patrones de cliente. NO hay Server Components ni
> server actions ("use server" / useActionState con actions) — ignorar esa parte.

## Keywords
react, react 19, compiler, useMemo, useCallback, use hook
