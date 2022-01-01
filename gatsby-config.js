require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "http://www.ndmarks.com",
    title: "ndmarks.com",
    author: {
      name: "Nick Marks",
      summary:
        "I am a Elec. Eng/Comp. Sci student living in Melbourne, Australia",
    },
    description: "A blog for essays and ideas.",
    social: {
      twitter: "nickmarks00",
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ndmarks.com`,
        short_name: `chumbers`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./src/images/icon.png`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/categories/*`, `/tags/*`, `/courses/*`],
        workboxConfig: {
          globPatterns: [`./src/images/icon.png`],
        },
      },
    }, //needs to stay listed after plugin-manifest
  ],
};
