module.exports = {
  siteMetadata: {
    title: `CGST`,
    description: `A custom gatsby starter template.`,
    author: `@author`,
    siteUrl: `https://www.website.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: false,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `custom-gatsby-starter-template`,
        short_name: `cgst`,
        start_url: `/`,
        background_color: `hsl(0, 0%, 0%)`,
        theme_color: `hsl(189, 100%, 50%)`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
  ],
}
