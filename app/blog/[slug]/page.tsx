import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getAllPostSlugs,
  formatDate,
  getAllPosts,
} from "@/lib/posts";
import type { Metadata } from "next";

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "文章未找到" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function PostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // 获取上一篇和下一篇
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* 返回按钮 */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 mb-8 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        返回博客
      </Link>

      {/* 文章头部 */}
      <header className="mb-8">
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span className="px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-medium">
            {post.category}
          </span>
          <time>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.author}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-brand-500 pl-4">
            {post.excerpt}
          </p>
        )}
      </header>

      {/* 封面图 */}
      {post.cover && (
        <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* 文章内容 */}
      <div
        className="prose-content text-gray-800 dark:text-gray-200"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* 标签 */}
      {post.tags.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <a
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm hover:bg-brand-100 dark:hover:bg-brand-950/50 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* 上一篇 / 下一篇 */}
      {(prevPost || nextPost) && (
        <nav className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
            >
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                ← 上一篇
              </div>
              <div className="font-medium group-hover:text-brand-600 dark:group-hover:text-brand-400 line-clamp-1">
                {prevPost.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-700 transition-colors text-right"
            >
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                下一篇 →
              </div>
              <div className="font-medium group-hover:text-brand-600 dark:group-hover:text-brand-400 line-clamp-1">
                {nextPost.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}
    </article>
  );
}
