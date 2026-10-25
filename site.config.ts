/**
 * 网站全局配置文件
 * ============================================
 * 整个网站的风格、文案、链接等都在这里统一管理。
 * 修改此文件后，刷新页面即可看到效果（开发模式）。
 */

export interface SiteConfig {
  /** 站点基本信息 */
  site: {
    name: string;        // 网站名称
    shortName: string;   // Logo 上显示的单字，如 "谙"
    description: string; // 网站描述（用于 SEO）
    author: string;      // 作者名，如 "谙弆悕"
    keywords: string[];  // SEO 关键词
    blogSince: number;   // 博客创建年份，用于关于页展示
  };

  /**
   * 主题品牌色（Tailwind 的 brand 色阶）
   * 修改后会影响全站所有 brand-* 颜色。
   * 可在 https://tailwindcss.com/docs/customizing-colors 生成色阶。
   */
  colors: {
    brand: Record<string, string>;
  };

  /** 社交链接 */
  social: {
    github: string;   // GitHub 主页链接
    email: string;    // 联系邮箱
  };

  /** 顶部导航栏菜单项 */
  nav: { href: string; label: string }[];

  /** 首页 Hero 区域文案 */
  hero: {
    badge: string;       // 顶部小标签
    titleLine1: string;  // 主标题第一行
    titleLine2: string;  // 主标题第二行（渐变色）
    description: string; // 描述文字
  };

  /** 关于页内容 */
  about: {
    name: string;        // 作者名字
    greeting: string;    // 问候语，如 "你好，我是谙弆悕"
    bio: string;         // 个人简介
    roles: string[];     // 身份标签
    blogIntro: string;   // 博客介绍段落
    blogTopics: string[];// 博客内容方向列表
    skills: { name: string; level: number }[];           // 技能栈
    timeline: { year: string; title: string; desc: string }[]; // 成长时间线
  };

  /** 页脚 */
  footer: {
    tagline: string;     // 页脚标语
    copyright: string;   // 版权文字前缀，年份会自动拼接
    builtWith: string;   // 底部技术说明，如 "用 Next.js + Tailwind CSS 构建"
  };
}

export const siteConfig: SiteConfig = {
  // ============================================
  // 站点基本信息
  // ============================================
  site: {
    name: "谙弆悕的博客",
    shortName: "谙",
    description:
      "谙弆悕的博客是一个专注于技术、生活与思考的个人博客，记录编程之路上的点滴感悟。",
    author: "谙弆悕",
    keywords: ["博客", "技术", "编程", "前端", "生活", "思考"],
    blogSince: 2024,
  },

  // ============================================
  // 主题品牌色
  // ============================================
  colors: {
    brand: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519",
    },
  },

  // ============================================
  // 社交链接
  // ============================================
  social: {
    github: "https://github.com/anjuxi",
    email: "anjuxi.ME@outlook.com",
  },

  // ============================================
  // 导航菜单
  // ============================================
  nav: [
    { href: "/", label: "首页" },
    { href: "/blog", label: "博客" },
    { href: "/about", label: "关于" },
  ],

  // ============================================
  // 首页 Hero 区域
  // ============================================
  hero: {
    badge: "✨ 欢迎来访",
    titleLine1: "代码与文字之间",
    titleLine2: "记录生活的点滴",
    description:
      "这里是谙弆悕的个人博客，\n分享编程路上的所学所得，也记录日常的点滴感悟。",
  },

  // ============================================
  // 关于页
  // ============================================
  about: {
    name: "谙弆悕",
    greeting: "你好，我是谙弆悕",
    bio: "一名热爱技术的开发者，喜欢在代码与文字之间寻找平衡。这里是我的数字花园，记录编程路上的所学所得，也分享对生活的思考。",
    roles: ["全栈开发者", "技术写作者", "终身学习者"],
    blogIntro:
      "谙弆悕的博客 创建于 {year} 年，是一个专注于技术分享与个人思考的博客。在这里，我会分享：",
    blogTopics: [
      "前端开发的技术心得与最佳实践",
      "编程学习过程中的踩坑与解决方案",
      "对工具链、工程化的思考与总结",
      "偶尔也会写写生活感悟与读书笔记",
    ],
    skills: [
      { name: "前端开发", level: 90 },
      { name: "后端开发", level: 75 },
      { name: "UI/UX 设计", level: 60 },
      { name: "数据可视化", level: 70 },
    ],
    timeline: [
      { year: "2016", title: "开始接触编程", desc: "从 Java 入门，踏上技术之路。" },
      { year: "2018", title: "深入前端世界", desc: "学习 HTML、CSS、JavaScript，爱上创造。" },
      { year: "2020", title: "接触现代框架", desc: "React、Vue、Next.js 成为日常工具。" },
      { year: "2024", title: "开设个人博客", desc: "用文字记录技术与生活的点滴。" },
    ],
  },

  // ============================================
  // 页脚
  // ============================================
  footer: {
    tagline: "记录技术、生活与思考，\n在代码与文字之间寻找平衡。",
    copyright: "谙弆悕的博客",
    builtWith: "博客使用 Next.js + Tailwind CSS 构建",
  },
};
