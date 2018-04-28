require('dotenv').config({
  path: `.env.development`,
});

const auth = {
  wpcom_app_clientSecret: process.env.GATSBY_WPCOM_APP_CLIENTSECRET || process.env.WPCOM_APP_CLIENTSECRET,
  wpcom_app_clientId: process.env.GATSBY_WPCOM_APP_CLIENTID || process.env.WPCOM_APP_CLIENTID,
  wpcom_user: process.env.GATSBY_WPCOM_USER || process.env.WPCOM_USER,
  wpcom_pass: process.env.GATSBY_WPCOM_PASS || process.env.WPCOM_PASS,
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'jim4schoolcommittee.wordpress.com',
        protocal: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: auth,
      },
      verboseOutput: true,
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    `gatsby-plugin-resolve-src`,
    'gatsby-transformer-sharp',
    'gatsby-image',
  ],
};
