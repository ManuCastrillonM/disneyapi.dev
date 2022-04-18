require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Disney API`,
    description: `Disney API is a rest and GraphQL API based on the Disney characters`,
    author: `@manucastrillonm`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `disney API`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/mickey-silhouette.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'DM Sans',
              variants: ['400', '700']
            },
            {
              family: 'Poppins',
              variants: ['600']
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-93858303-4',
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Disney API`,
        short_name: `Disney API`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ed254e`,
        display: `standalone`,
        icon: `src/images/mickey-silhouette.svg`
      }
    }
  ],
  pathPrefix: '/'
}
