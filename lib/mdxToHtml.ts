import { bundleMDX } from 'mdx-bundler'
import remarkGfm from 'remark-gfm'
import rehypePrismPlus from 'rehype-prism-plus'

export default async function mdxToHtml(source: string) {
  const { code } = await bundleMDX({
    source,
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm]
      options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrismPlus]
      return options
    }
  })
  return code
}
