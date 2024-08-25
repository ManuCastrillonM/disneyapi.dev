import remarkGfm from 'remark-gfm';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const config = {
  siteMetadata: {
    title: `Disney API`,
    description: `Disney API is a rest and GraphQL API based on the Disney characters`,
    author: `@manucastrillonm`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        extensions: [`.mdx`, `.md`],
        name: `pages`,
        path: `./src/pages/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `disney API`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/mickey-silhouette.svg`
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
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://api.disneyapi.dev/character']
      }
    }
  ],
  pathPrefix: '/'
}

export default config;
