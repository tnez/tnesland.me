import React from 'react'
import Helmet from 'react-helmet'
import { map } from 'ramda'

import 'prismjs/themes/prism-solarizedlight.css'

const presentTag = name =>
  <div className="ba br2 pa2 dib mr2 ttl accent" key={name}>{name}</div>


export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <div>
      <Helmet
        title={`tnesland.me - ${post.frontmatter.title}`}
      />
      <article className="pa4">
        <h2 className="mt4 primary lh-title">{post.frontmatter.title}</h2>
        <div>
          {map(presentTag, post.frontmatter.tags)}
        </div>
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
        tags
        title
      }
    }
  }
`
