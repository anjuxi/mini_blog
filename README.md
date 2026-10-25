# 迷你博客

一个基于 Next.js 14 + TypeScript + Tailwind CSS 构建的个人博客，支持 Markdown 写作、深色模式、分类标签筛选，开箱即用。

## ✨ 功能特性

- **Markdown 写作** — 文章以 `.md` 文件存储，支持 GFM（表格、任务列表、删除线等）
- **分类与标签** — 支持按分类、标签筛选文章
- **深色 / 浅色主题** — 跟随系统，可手动切换
- **响应式设计** — 适配手机、平板、桌面
- **SEO 优化** — 自动生成 meta 标签与 Open Graph 信息
- **静态生成** — 文章预渲染为静态 HTML，加载快、利于 SEO
- **全局配置** — 站点名称、配色、导航、社交链接等统一在 `site.config.ts` 管理
- **文件名容错** — 文章文件名含空格、下划线等会自动转为 URL 安全的 slug

## 🛠 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 14.2.15 | 框架（App Router） |
| React | 18.3 | UI 库 |
| TypeScript | 5.5 | 类型安全 |
| Tailwind CSS | 3.4 | 样式 |
| gray-matter | 4.0 | 解析 Markdown frontmatter |
| remark / remark-html / remark-gfm | 15 / 16 / 4 | Markdown 转 HTML |
| next-themes | 0.3 | 主题切换 |

## 🚀 快速开始

### 环境要求

- Node.js ≥ 18.17
- npm（或 pnpm / yarn）

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/anjuxi/mini_blog.git
cd mini_blog

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
.
├── app/                    # 页面（App Router）
│   ├── about/page.tsx      # 关于页
│   ├── blog/
│   │   ├── page.tsx        # 博客列表页（支持分类/标签筛选）
│   │   └── [slug]/page.tsx # 文章详情页
│   ├── globals.css         # 全局样式（含 Markdown 渲染样式）
│   ├── layout.tsx          # 根布局（SEO、主题、导航、页脚）
│   ├── not-found.tsx       # 404 页面
│   └── page.tsx            # 首页
├── components/             # 复用组件
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── PostCard.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── content/posts/          # Markdown 文章目录（写文章就放这里）
├── lib/posts.ts            # 文章读取、slug 生成、日期格式化
├── site.config.ts          # ⭐ 全局配置文件（站点信息、配色、文案等）
├── tailwind.config.ts      # Tailwind 配置（品牌色）
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## ✍️ 如何写文章

在 `content/posts/` 目录下新建一个 `.md` 文件，文件名即为文章 URL 的 slug（空格、下划线会自动转为 `-`）。

文件顶部需包含 frontmatter 元信息：

```markdown
---
title: "文章标题"
date: "2024-12-30"
excerpt: "文章摘要，显示在卡片和列表页"
tags: ["标签1", "标签2"]
category: "分类"
cover: "https://example.com/cover.jpg"   # 可选，封面图
author: "谙弆悕"                          # 可选，默认取配置中的作者
---

## 正文标题

正文内容，支持 Markdown 语法。
```

### frontmatter 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | ✅ | 文章标题 |
| `date` | ✅ | 发布日期，格式 `YYYY-MM-DD` |
| `excerpt` | 推荐 | 文章摘要 |
| `tags` | 推荐 | 标签数组 |
| `category` | 推荐 | 分类，默认 `未分类` |
| `cover` | 可选 | 封面图 URL |
| `author` | 可选 | 作者，默认取 `site.config.ts` 中的 `site.author` |

## ⚙️ 全局配置

所有站点信息集中在 [site.config.ts](./site.config.ts) 中管理，修改后刷新即可生效。

```typescript
export const siteConfig = {
  site: {        // 网站名称、描述、作者、关键词
    name: "谙弆悕的博客",
    shortName: "谙",
    author: "谙弆悕",
    // ...
  },
  colors: {      // 品牌色阶（影响全站 brand-* 颜色）
    brand: { 500: "#f43f5e", 600: "#e11d48", /* ... */ },
  },
  social: {      // GitHub、邮箱
    github: "https://github.com/anjuxi",
    email: "anjuxi.ME@outlook.com",
  },
  nav: [],       // 导航菜单
  hero: {},      // 首页 Hero 文案
  about: {},     // 关于页内容（简介、技能、时间线）
  footer: {},    // 页脚文案
};
```

## 🌐 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入仓库
3. 框架预设选择 Next.js，点击 Deploy

### 其他平台

项目为标准的 Next.js 应用，支持任何支持 Node.js 的托管平台：

- **Netlify** — 构建命令 `next build`，发布目录 `.next`
- **Cloudflare Pages** — 构建命令 `npm run build`，输出目录 `.next`
- **Docker** — 使用官方 `node:18` 镜像，执行 `npm ci && npm run build && npm start`

## 📄 License

MIT
