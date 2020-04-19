require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: `my-gatsby-project-dashboard`,
    description: `Showing the statuses of my Netlify deploys & CircleCI tests.`,
    author: `@tripheo0412`,
    type: process.env.GATSBY_ACTIVE_ENV || 'staging',
    siteUrl: `https://www.tripheo2410-gatsby-dashboard.netlify.app/`,
    hostname: `tripheo2410-gatsby-dashboard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.tripheo2410-gatsby-dashboard.netlify.app/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `my-gatsby-project-dashboard`,
        short_name: `Status`,
        description: `Showing the statuses of my Netlify deploys & CircleCI tests.`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-netlify`,
      options: {
        apiKey: process.env.NETLIFY_ACCESS_KEY,
      },
    },
    {
      resolve: `gatsby-source-circleci`,
      options: {
        apiKey: process.env.CIRCLECI_KEY,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
