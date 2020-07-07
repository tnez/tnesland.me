import React from 'react'

type FrontMatter = {
  title: string
}

function BlogPostLayout(fm: FrontMatter): React.FunctionComponent {
  const BlogPost = (props: { children?: React.ReactNode }) => {
    return (
      <div>
        <h1>{fm.title}</h1>
        {props.children}
      </div>
    )
  }
  return BlogPost
}

export default BlogPostLayout
