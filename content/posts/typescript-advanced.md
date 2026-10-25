---
title: "TypeScript 高级类型体操：从入门到放弃再到真香"
date: "2024-11-05"
excerpt: "深入理解 TypeScript 的类型系统，掌握条件类型、映射类型、模板字面量类型等高级特性，写出更安全、更优雅的代码。"
tags: ["TypeScript", "JavaScript", "前端开发"]
category: "前端开发"
cover: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop"
author: "谙弆悕"
---

## 条件类型

条件类型让我们可以根据类型关系选择不同的类型：

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">; // true
type B = IsString<42>;      // false
```

## 映射类型

通过映射类型可以基于已有类型创建新类型：

```typescript
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Partial<T> = {
  [K in keyof T]?: T[K];
};
```

## 模板字面量类型

TypeScript 4.1 引入的强大特性：

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;

type ClickEvent = EventName<"click">; // "onClick"
```

## 推断类型

使用 `infer` 关键字进行类型推断：

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Result = ReturnType<() => number>; // number
```

## 实用工具类型

| 工具类型 | 作用 |
|---------|------|
| `Partial<T>` | 所有属性变为可选 |
| `Required<T>` | 所有属性变为必选 |
| `Pick<T, K>` | 选取部分属性 |
| `Omit<T, K>` | 排除部分属性 |
| `Record<K, V>` | 构造键值对类型 |

## 总结

TypeScript 的类型系统虽然复杂，但掌握后能让你的代码更加健壮。多练多用，慢慢体会其中的乐趣。
