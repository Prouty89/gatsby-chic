module.exports = {
  siteMetadata: {
    title: `Chicoine Interiors`,
    description: `Linsay Chicoine 2020`,
    author: `@gatsbyjs`,
  },
  plugins: [
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /\.inline\.svg$/
          },
        },
      },
    `gatsby-plugin-react-helmet`, `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


// {
      //   resolve: `gatsby-plugin-material-ui`,
      //   options: {
      //     stylesProvider: {
      //       injectFirst: true,
      //     },
      //   },
      // },

      // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `tl66voqgnk19`,
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },  