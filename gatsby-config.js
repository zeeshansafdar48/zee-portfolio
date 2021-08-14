require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Zeeshan Safdar`,
    description: `Web Developer with a focus on MERN Stack. I have more than 3 years experience working in software engineering.`,
    author: `Zeeshan Safdar <zeeshan7826@gmail.com>`,
    siteUrl: `https://herper.io`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          Atoms: './components/atoms',
          Molecules: './components/molecules',
          Organisms: './components/organisms',
          Templates: './components/templates',
          Assets: './assets',
          Context: './context',
          Data: './data',
          Helpers: './helpers',
          Hooks: './hooks',
          static: {
            root: './public', // <- will used as this alias' root dir
            alias: './static', // <- will become ./public/static
          },
        },
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://0029c0e1980d488eb702e79b1303a83e@o383121.ingest.sentry.io/5212982',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#78C8D7`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yvg3igdf1lco`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'Portfolio',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'portfolio',
        // Url to query from
        url: 'https://api-ap-northeast-1.graphcms.com/v2/cklgnu8lhschh01xq4dji6ji7/master',
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `gfc7wqc`,
          families: ['brandon-grotesque'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zeeshan Safdar Portfolio`,
        short_name: `https://zeeshan-safdar.netlify.app/`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e94e1b`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
