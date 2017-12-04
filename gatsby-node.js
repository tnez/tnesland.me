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
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            tags
            title
          }
        }
      }
    }
  }`
  ).then(res => {
    if(res.errors) {
      console.log(res.errors)
      return Promise.reject(res.errors)
    }

    forEach(({ node }) => createPage({
      path: `/blog/post/${node.frontmatter.path}`,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    }), res.data.allMarkdownRemark.edges)
  })
}
