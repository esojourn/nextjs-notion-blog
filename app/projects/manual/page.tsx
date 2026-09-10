import { genPageMetadata } from 'app/seo'

// 教程页已迁移至 /manual，这里保留旧地址是因为站外第三方链接仍指向 /projects/manual。
// 内容直接复用新路径的页面组件，canonical 指向 /manual，避免两个地址被当成重复内容。
export { default } from '../../manual/page'

export const metadata = genPageMetadata({
  title: '操作说明',
  alternates: { canonical: '/manual' },
})
