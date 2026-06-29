import './manual.css'
import manualContent from '@/data/manualContent.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: '操作说明' })

export default function ManualPage() {
  return (
    <div className="pt-6">
      <div className="space-y-2 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          操作说明
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Claude Code / Codex / Gemini CLI / Droid CLI 使用教程 · 按产品与操作系统选择对应步骤
        </p>
      </div>
      {/* 内容来自原 HTML 教程，已剥离其自带样式，统一使用本博客的视觉风格；
          产品 / 操作系统的选项切换基于纯 CSS（radio + :checked），无需客户端脚本 */}
      <div className="alz-manual" dangerouslySetInnerHTML={{ __html: manualContent.html }} />
    </div>
  )
}
