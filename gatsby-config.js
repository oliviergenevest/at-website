const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}
 
const { spaceId, accessToken } = process.env;
const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')


module.exports = {
  siteMetadata: {
    siteUrl: `https://alantod.com`,
    title: `Alan Tod`,
    description: `Forest is art`,
    author: `Alan Tod`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

     {
      resolve: `gatsby-source-contentful`,
      options: {
          spaceId,
          accessToken
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
         /* {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1800,
            },
          },*/
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1800,
             
              backgroundColor:'transparent',
              showCaptions: true,
              linkImagesToOriginal: true,
         
            },
          },
        ],

      },
    },
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          /*
           * Defines custom html string for each node type like heading, embedded entries etc..
           */
          renderNode: {
            // Example
            [BLOCKS.EMBEDDED_ASSET]: node => {
              return `<figure><img class='img-fluid' src="${
                node.data.target.fields.file['en-US'].url
              }"/>  <figcaption>${
                node.data.target.fields.description['en-US']
              }</figcaption></figure>`
            },
          },
         },
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alan Tod - Forest is art`,
        short_name: `Alan Tod`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#00B050`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
     {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-2773228-20",
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
     'gatsby-plugin-offline',
     'gatsby-plugin-netlify',
  ],
}
