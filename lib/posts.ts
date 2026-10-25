import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import { siteConfig } from "@/site.config";

const postsDirectory = path.join(process.cwd(), "content", "posts");
const defaultAuthor = siteConfig.site.author;

/**
 * 将文件名转换为 URL 安全的 slug
 * 空格、下划线转为连字符，移除非中英文/数字/连字符的字符
 * 例如："新建 文本文档" → "新建-文本文档"
 */
function sanitizeSlug(name: string): string {
  return name
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w\u4e00-\u9fa5-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** 根据 slug 反查对应的文件名（slug 已被清理过，需要遍历匹配） */
function findFileNameBySlug(slug: string): string | null {
  if (!fs.existsSync(postsDirectory)) return null;
  const fileNames = fs.readdirSync(postsDirectory);
  const found = fileNames.find(
    (fileName) =>
      fileName.endsWith(".md") &&
      sanitizeSlug(fileName.replace(/\.md$/, "")) === slug
  );
  return found || null;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
  cover?: string;
  author: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

/** 获取所有文章的元数据（按日期降序） */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = sanitizeSlug(fileName.replace(/\.md$/, ""));
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        category: data.category || "未分类",
        cover: data.cover,
        author: data.author || defaultAuthor,
      };
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** 根据 slug 获取单篇文章 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fileName = findFileNameBySlug(slug);
  if (!fileName) {
    return null;
  }
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    category: data.category || "未分类",
    cover: data.cover,
    author: data.author || defaultAuthor,
    contentHtml: processedContent.toString(),
  };
}

/** 获取所有文章的 slug 列表（用于生成静态路径） */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => sanitizeSlug(fileName.replace(/\.md$/, "")));
}

/** 获取所有分类 */
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}

/** 获取所有标签 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

/** 格式化日期 */
export function formatDate(dateString: string): string {
  if (!dateString) return "未知日期";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "未知日期";
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
