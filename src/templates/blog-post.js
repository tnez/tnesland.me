import React from 'react'
import Helmet from 'react-helmet'

import 'prismjs/themes/prism-solarizedlight.css'

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <div>
      <Helmet
        title={`tnesland.me - ${post.frontmatter.title}`}
      />
      <article className="pa4">
        <h2 className="mt4 accent lh-title">{post.frontmatter.title}</h2>
        <div
          className="lh-copy"
          dangerouslySetInnerHTML={{ __html: post.html }}
        >
        </div>
      </article>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
