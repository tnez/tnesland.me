module.exports = {
  siteMetadata: {
    title: 'Travis Nesland',
    description: 'Travis Nesland: A software developer from Charleston, SC',
    keywords: [
      'developer',
      'software',
      'web',
      'app',
      'nodejs',
      'react',
      'react-native',
      'ruby',
      'python',
    ],
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-images',
          'gatsby-remark-prismjs',
        ],
      },
    },
  ],
}
