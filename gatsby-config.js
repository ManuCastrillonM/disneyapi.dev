module.exports = {
  siteMetadata: {
    title: `Disney API`,
    description: `The Disney API is a rest API based on the Disney characters`,
    author: `@manucastrillonm`,
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
        path: `${__dirname}/src/images`,
      },
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `disney API`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/mickey-silhouette.svg`, // This path is relative to the root of the site.
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    }, {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `DM Sans`,
            variants: [`400`, `700`]
          }
        ],
      },
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-93858303-4",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        defer: false
      },
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Disney API`,
        short_name: `Disney API`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#d03e35`,
        display: `standalone`,
        icon: `src/images/mickey-silhouette.svg`
      },
    },
  ],
  pathPrefix: "/",
}
