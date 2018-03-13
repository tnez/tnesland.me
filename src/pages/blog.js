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
  <Link
    className="link shadow-3 dib w-100 w-50-m w-30-l dim br3 bg-center cover ma3"
    key={post.id}
    style={{
      backgroundImage: `url("${backgroundImgSrc(post)}")`,
      height: '30em',
      position: 'relative'
    }}
    to={post.frontmatter.path}
  >
    <article className="bg-primary white pa2 o-80 absolute bottom-0">
      <h2 className="lh-title">{post.frontmatter.title}</h2>
      <p className="lh-copy">{post.excerpt}</p>
      <div className="accent">
        <span className="bold white">Tags: </span>
        {post.frontmatter.tags.join(', ')}
      </div>
    </article>
  </Link>
)

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className="ma4 mt5">
      {map(postPresenter, posts)}
    </div>
  )
}

export const postQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt (pruneLength: 120)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            heroImg {
              childImageSharp {
                resolutions(width: 400) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
