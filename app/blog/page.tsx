import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客",
  description: "浏览所有文章，涵盖技术、生活与思考。",
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string; tag?: string };
}) {
  const allPosts = getAllPosts();
  const categories = Array.from(new Set(allPosts.map((p) => p.category))).sort();
  const tags = Array.from(new Set(allPosts.flatMap((p) => p.tags))).sort();

  const filteredPosts = allPosts.filter((post) => {
    if (searchParams.category && post.category !== searchParams.category)
      return false;
    if (searchParams.tag && !post.tags.includes(searchParams.tag)) return false;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* 标题 */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">博客文章</h1>
        <p className="text-gray-500 dark:text-gray-400">
          共 {allPosts.length} 篇文章
          {searchParams.category && ` · 分类：${searchParams.category}`}
          {searchParams.tag && ` · 标签：${searchParams.tag}`}
        </p>
      </div>

      {/* 筛选器 */}
      <div className="space-y-4 mb-10 p-5 rounded-xl bg-gray-50 dark:bg-slate-800/30">
        {/* 分类 */}
        <div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-3">
            分类：
          </span>
          <div className="inline-flex flex-wrap gap-2 mt-2">
            <Link
              href="/blog"
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                !searchParams.category
                  ? "bg-brand-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              全部
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  searchParams.category === cat
                    ? "bg-brand-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* 标签 */}
        {tags.length > 0 && (
          <div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-3">
              标签：
            </span>
            <div className="inline-flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    searchParams.tag === tag
                      ? "bg-brand-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 文章列表 */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-xl font-bold mb-2">没有找到相关文章</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            试试切换其他分类或标签
          </p>
          <Link
            href="/blog"
            className="text-brand-600 dark:text-brand-400 hover:underline font-medium"
          >
            查看全部文章
          </Link>
        </div>
      )}
    </div>
  );
}
