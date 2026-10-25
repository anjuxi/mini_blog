---
title: "Git 工作流最佳实践：团队协作的艺术"
date: "2024-10-20"
excerpt: "介绍常见的 Git 工作流，包括 Git Flow、GitHub Flow 和 Trunk-Based Development，帮助团队选择适合的协作模式。"
tags: ["Git", "工程化", "团队协作"]
category: "工程化"
cover: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=450&fit=crop"
author: "谙弆悕"
---

## 为什么需要工作流？

没有规范的 Git 使用方式，团队协作会变得混乱：分支满天飞、合并冲突频发、代码难以追溯。一个好的工作流能让协作井井有条。

## 常见的三种工作流

### 1. Git Flow

最经典的工作流，包含五种分支：

- `main`：生产环境代码
- `develop`：开发集成分支
- `feature/*`：功能分支
- `release/*`：发布分支
- `hotfix/*`：紧急修复

```
main ──────●───────────●─────
            \         /
develop ─────●───●───●───────
              \ /     \
feature ───────●       ●─────
```

### 2. GitHub Flow

更简单的工作流，适合持续部署：

1. 从 `main` 创建分支
2. 开发并提交
3. 发起 Pull Request
4. 代码审查
5. 合并到 `main`
6. 部署

### 3. Trunk-Based Development

所有人直接在 `main`（trunk）上开发，通过功能开关控制未完成的功能。适合 CI/CD 成熟的团队。

## 提交信息规范

使用 Conventional Commits 规范：

```
feat: 新增用户登录功能
fix: 修复首页加载白屏问题
docs: 更新 README 说明
refactor: 重构用户模块
```

## 实用技巧

1. **频繁提交**：小步快跑，每次提交只做一件事
2. **写好 commit message**：让未来的自己能看懂
3. **善用 rebase**：保持提交历史整洁
4. **Code Review 不可少**：质量保障的最后一道防线

## 总结

没有最好的工作流，只有最适合的。根据团队规模和项目特点选择，并在实践中持续优化。
