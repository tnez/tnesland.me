const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'src/components/layouts',
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
})({
  webpack(config) {
    config.node = { fs: 'empty' }
    return config
  },
})
