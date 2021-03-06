const path = require('path')
const { forEach } = require('ramda')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const blogPostTemplate = path.resolve('src/templates/blog-post.js')

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }`
  ).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors)
    }

    forEach(({ node }) => createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    }), res.data.allMarkdownRemark.edges)
  })
}
