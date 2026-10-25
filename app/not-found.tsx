import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-8xl font-bold bg-gradient-to-r from-brand-500 to-pink-600 bg-clip-text text-transparent mb-4">
        404
      </div>
      <h1 className="text-2xl font-bold mb-2">页面走丢了</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        你访问的页面不存在或已被移动。
        <br />
        不如回到首页，看看有什么新内容吧。
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium transition-colors"
        >
          返回首页
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          浏览博客
        </Link>
      </div>
    </div>
  );
}
