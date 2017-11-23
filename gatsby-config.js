module.exports = {
  siteMetadata: {
    title: `Travis Nesland`,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
  ],
}
