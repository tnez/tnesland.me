import React from 'react'
import Link from 'gatsby-link'
import { map } from 'ramda'


const backgroundImgSrc = post => {
  try {
    return post.frontmatter.heroImg.childImageSharp.resolutions.src
  } catch (e) {
    console.error(e)

    return 'http://fillmurray.com/200/300'
  }
}

const postPresenter = ({ node: post }) => (
  <div className="primary mv4">
    <Link
      key={post.id}
      to={post.frontmatter.path}
      className="no-underline"
    >
      <h3 className="primary mv2">{post.frontmatter.title}</h3>
      <span className="primary ma0">{post.frontmatter.date}</span>
    </Link>
    <div className="mv2">
      <span className="b">Tags: </span>
      <span className="accent">{post.frontmatter.tags.join(', ')}</span>
    </div>
  </div>
)

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className="mh3 mv6">
      <h2 className="primary">Recent Posts</h2>
      {map(postPresenter, posts)}
    </div>
  )
}

export const postQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`
