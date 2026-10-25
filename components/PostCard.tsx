import Link from "next/link";
import { PostMeta, formatDate } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group bg-white dark:bg-slate-800/50 rounded-2xl border border-gray-200 dark:border-gray-700/50 overflow-hidden hover:shadow-xl hover:border-brand-300 dark:hover:border-brand-700/50 transition-all duration-300 hover:-translate-y-1">
      {/* 封面图 */}
      {post.cover && (
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
          <div className="aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>
      )}

      <div className="p-6">
        {/* 分类与日期 */}
        <div className="flex items-center gap-3 mb-3 text-xs text-gray-500 dark:text-gray-400">
          <span className="px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-medium">
            {post.category}
          </span>
          <time>{formatDate(post.date)}</time>
        </div>

        {/* 标题 */}
        <h2 className="text-xl font-bold mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        {/* 摘要 */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        {/* 底部：标签与阅读链接 */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline whitespace-nowrap"
          >
            阅读 →
          </Link>
        </div>
      </div>
    </article>
  );
}
