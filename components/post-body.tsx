import React from 'react'
import markdownStyles from './markdown-styles.module.css'
import { getMDXComponent } from 'mdx-bundler/client'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  const Component = React.useMemo(() => getMDXComponent(content), [content])
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        <Component />
      </div>
    </div>
  )
}

export default PostBody
