/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Chumbers.com",
    description: "A personal essays and blogs site",
    author: "@nickmarks",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        downloadLocalImages: false,
        buildMarkdownNodes: true,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Playfair Display",
              variants: ["400", "700"],
            },
            {
              family: "Poppins",
              variants: ["300", "400", "500"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-page-progress`,
      options: {
        height: 3,
        prependToBody: false,
        color: `#4ef6c7`,
        footerHeight: 500,
        headerHeight: 0,
      },
    },
  ],
}
