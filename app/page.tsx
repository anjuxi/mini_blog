import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/site.config";

const { hero } = siteConfig;

export default function HomePage() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.slice(0, 3);
  const latestPosts = allPosts.slice(3, 6);

  return (
    <div>
      {/* Hero 区域 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-200/30 dark:bg-brand-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6">
              {hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {hero.titleLine1}
              <br />
              <span className="bg-gradient-to-r from-brand-500 to-pink-600 bg-clip-text text-transparent">
                {hero.titleLine2}
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed whitespace-pre-line">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/blog"
                className="px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 transition-all duration-300"
              >
                浏览文章
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-lg bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300"
              >
                关于我
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 精选文章 */}
      {featuredPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">精选文章</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                最新发布的内容，值得一读
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm text-brand-600 dark:text-brand-400 hover:underline font-medium"
            >
              查看全部 →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* 更多文章 */}
      {latestPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">更多文章</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* 空状态 */}
      {allPosts.length === 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold mb-2">暂无文章</h2>
          <p className="text-gray-500 dark:text-gray-400">
            博客正在准备中，敬请期待！
          </p>
        </section>
      )}
    </div>
  );
}
