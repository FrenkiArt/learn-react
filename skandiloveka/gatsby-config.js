const siteUrl = process.env.URL || `https://skandiloveka.gatsbyjs.io/`

module.exports = {
  siteMetadata: {
    title: `SkandiLoveKa`,
    description: `Вкусная еда с доставкой. Жизнь лучше, люди счастливее 🤍. Кафе семейного формата 🌿😊. Работаем каждый день с 10:00 до 22:00. Адрес: Шемордан, ул.М.Горького, дом 1 'Г'`,
    author: `@artywork`,
  },
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: () => siteUrl,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SkandiLoveKa`,
        short_name: `SkandiLoveKa`,
        start_url: `/`,
        background_color: `orange`,
        theme_color: `orange`,
        display: `standalone`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
