---
title: "从零开始搭建个人博客：Next.js 实战指南"
date: "2024-11-15"
excerpt: "使用 Next.js 14 App Router 和 Tailwind CSS 从零搭建一个现代化的个人博客，包含 Markdown 解析、SEO 优化和主题切换等功能。"
tags: ["Next.js", "React", "Tailwind CSS", "博客"]
category: "前端开发"
cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=450&fit=crop"
author: "谙弆悕"
---

## 为什么选择 Next.js？

在众多前端框架中，Next.js 凭借其强大的服务端渲染能力、静态站点生成以及对 SEO 的友好支持，成为了搭建个人博客的绝佳选择。

## 项目初始化

首先，让我们创建一个新的 Next.js 项目：

```bash
npx create-next-app@latest my-blog
```

选择 TypeScript、Tailwind CSS、ESLint 和 App Router。

## 目录结构

一个典型的博客项目结构如下：

```
my-blog/
├── app/              # App Router 页面
├── components/       # 可复用组件
├── content/          # Markdown 文章
├── lib/              # 工具函数
└── public/           # 静态资源
```

## Markdown 文章解析

使用 `gray-matter` 解析 frontmatter，`remark` 渲染 HTML：

```typescript
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const { data, content } = matter(fileContents);
const processed = await remark().use(html).process(content);
```

## 主题切换

通过 `next-themes` 实现深色/浅色模式切换，只需几行代码：

```tsx
<ThemeProvider attribute="class" defaultTheme="system">
  {children}
</ThemeProvider>
```

## 总结

搭建个人博客是一个很好的学习项目，既能巩固前端知识，又能拥有一个属于自己的内容输出平台。希望这篇文章对你有所帮助！
