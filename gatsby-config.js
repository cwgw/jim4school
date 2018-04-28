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
        auth: {
          wpcom_app_clientSecret: "T7mhiHktAHGYh5P94iQEXMUVaA8l3nxU9relUb1MOlmBtueX7NfyPS6gNAmiPy82",
          wpcom_app_clientId: "57759",
          wpcom_user: "wright.char@gmail.com",
          wpcom_pass: "EqvWTW@M9DGrW3>>a7HUogk4R",
        },
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
