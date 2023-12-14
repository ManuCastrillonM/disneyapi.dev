require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Disney API`,
    description: `Disney API is a rest and GraphQL API based on the Disney characters`,
    author: `@manucastrillonm`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '385750457',
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
        background_color: `#FFF`,
        theme_color: `#E73636`,
        display: `standalone`,
        icon: `src/images/mickey-silhouette.svg`
      }
    }
  ],
  pathPrefix: '/'
}
