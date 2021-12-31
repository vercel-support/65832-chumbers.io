require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ndmarks.com",
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
  ],
};
