import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

const { site, about, social } = siteConfig;

export const metadata: Metadata = {
  title: "关于",
  description: `关于${site.name}博客和作者的介绍。`,
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* 个人介绍 */}
      <section className="text-center mb-16">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-400 to-pink-500 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
          {site.shortName}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{about.greeting}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
          {about.bio}
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          {about.roles.map((role) => (
            <span
              key={role}
              className="px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 text-sm font-medium"
            >
              {role}
            </span>
          ))}
        </div>
      </section>

      {/* 关于这个博客 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">关于这个博客</h2>
        <div className="prose-content text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            {about.blogIntro.replace("{year}", String(site.blogSince))}
          </p>
          <ul>
            {about.blogTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <p>
            博客使用 Next.js + Tailwind CSS 构建，所有文章均以 Markdown
            格式编写。如果你对内容有任何想法，欢迎通过下方邮箱与我交流。
          </p>
        </div>
      </section>

      {/* 技能 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">技能栈</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {about.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-gray-50 dark:bg-slate-800/50"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-500 to-pink-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 时间线 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">我的历程</h2>
        <div className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
          {about.timeline.map((item) => (
            <div key={item.year} className="relative mb-8 last:mb-0">
              <div className="absolute -left-[21px] w-3 h-3 rounded-full bg-brand-500 ring-4 ring-brand-100 dark:ring-brand-950/50" />
              <div className="text-sm font-bold text-brand-600 dark:text-brand-400 mb-1">
                {item.year}
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 联系方式 */}
      <section className="text-center p-8 rounded-2xl bg-gradient-to-br from-brand-50 to-pink-50 dark:from-slate-800 dark:to-slate-800/50">
        <h2 className="text-2xl font-bold mb-3">想和我聊聊？</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          无论是技术交流、合作邀请，还是单纯打个招呼，都欢迎联系我。
        </p>
        <a
          href={`mailto:${social.email}`}
          className="inline-block px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium shadow-lg shadow-brand-600/25 transition-all"
        >
          联系我 →
        </a>
      </section>
    </div>
  );
}
