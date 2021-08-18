/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
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
        name: `about`,
        path: `${__dirname}/src/mdfiles/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/src/mdfiles/home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/mdfiles/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/mdfiles/services`,
      },
    },
  ],
  siteMetadata: {
    title: "Brand",
    tagline: "The brand tagline",
    aboutTitle: "About Brand",
    aboutSubtitle: "Subtitle or slogan goes here dynamically",
    aboutDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero reprehenderit nostrum     tempora? Quia, voluptas. Lorem ipsum dolor, sit amet consectetur   adipisicing elit. Libero reprehenderit nostrum omnis odit beatae mollitia sint pariatur eum fugit reiciendis vitae harum, aut, expedita   adipisci, odio dolor tempora? Quia, voluptas.Lorem ipsum dolor, sit  amet consectetur adipisicing elit. Libero reprehenderit nostrum omnis   odit beatae mollitia sint pariatur eum fugit reiciendis vitae harum, aut, expedita adipisci, odio dolor tempora? Quia, voluptas.Lorem ipsum  dolor, sit amet consectetur adipisicing elit. Libero reprehenderit nostrum omnis odit beatae mollitia sint pariatur eum fugit reiciendis   vitae harum, aut, expedita adipisci, odio dolor tempora? Quia, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
}
