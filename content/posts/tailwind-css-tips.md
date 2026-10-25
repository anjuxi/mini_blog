---
title: "Tailwind CSS 实用技巧：写出更优雅的样式"
date: "2024-11-10"
excerpt: "分享一些 Tailwind CSS 的实用技巧，包括响应式设计、暗色模式、自定义配置和组件抽象，让你的样式代码更整洁高效。"
tags: ["CSS", "Tailwind CSS", "前端开发"]
category: "前端开发"
cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop"
author: "谙弆悕"
---

## 响应式设计的正确姿势

Tailwind 的响应式前缀非常直观，从小到大依次是 `sm`、`md`、`lg`、`xl`：

```html
<div class="text-sm md:text-base lg:text-lg">响应式文字</div>
```

> 记住：Tailwind 采用移动优先策略，默认样式适用于最小屏幕。

## 暗色模式

在 `tailwind.config.ts` 中启用 class 模式：

```typescript
export default {
  darkMode: "class",
};
```

然后直接使用 `dark:` 前缀：

```html
<div class="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
  自动适配主题
</div>
```

## 自定义颜色

在配置中扩展品牌色：

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        500: "#0c8af0",
        600: "#006ccd",
      },
    },
  },
}
```

## 组件抽象

对于重复使用的样式，可以提取为组件或使用 `@apply`：

```css
.btn {
  @apply px-4 py-2 rounded-lg font-medium transition-colors;
}
```

## 写在最后

Tailwind CSS 的核心理念是实用优先，掌握好这些技巧能让你的开发效率大幅提升。
