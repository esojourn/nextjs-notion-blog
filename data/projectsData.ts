interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '操作说明',
    description: `Claude Code 使用教程。涵盖 Windows / macOS 的安装、配置与常见问题,
    按平台选择对应步骤,分步图文指引。`,
    imgSrc: '/static/images/cover5.png',
    href: '/projects/manual',
  },
  {
    title: 'GPT中转站',
    description: `稳定支持GPT-4-Plus，GPT-4 / vision / turbo，Claude-3-Opus 
    / Sonnet等模型。支持联网、文档图像识别、语音、DallE3出图。无需月租，按量付费，
    目前成本约为官网API的84%。无需魔法，可直连。15元起。`,
    imgSrc: '/static/images/cover4.png',
    href: '/blog/ChatGPT中转站',
  },
  {
    title: 'Midjourney中转站',
    description: `Midjourney包月，无需魔法，可直连。90元/月起`,
    imgSrc: '/static/images/cover2.png',
    href: '/blog/Midjourney',
  },
  {
    title: 'GPT免费站',
    description: `你没看错，我还活着！`,
    imgSrc: '/static/images/cover6.png',
    href: '/about',
  },
]

export default projectsData
