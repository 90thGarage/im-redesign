---
name: typescript
description: >
  TypeScript strict patterns and best practices.
  Trigger: When writing TypeScript code - types, interfaces, generics.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Const Types Pattern (REQUIRED)
```typescript
const STATUS = { ACTIVE: "active", INACTIVE: "inactive" } as const;
type Status = (typeof STATUS)[keyof typeof STATUS];
// NEVER: type Status = "active" | "inactive";
```

## Flat Interfaces (REQUIRED)
```typescript
interface UserAddress { street: string; city: string; }
interface User { id: string; name: string; address: UserAddress; }  // referencia, no inline
```

## Never Use `any`
```typescript
function parse(input: unknown): User { if (isUser(input)) return input; throw new Error("Invalid"); }
function first<T>(arr: T[]): T | undefined { return arr[0]; }
```

## Type Guards
```typescript
function isUser(value: unknown): value is User {
  return typeof value === "object" && value !== null && "id" in value && "name" in value;
}
```

## Import Types
```typescript
import type { User } from "./types";
import { createUser, type Config } from "./utils";
```

## Keywords
typescript, ts, types, interfaces, generics, strict mode, utility types
