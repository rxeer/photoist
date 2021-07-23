require('dotenv').config({ path: './.env' });
const config = require('./config');

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_APP_KEY,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  authDomain: process.env.GATSBY_FIREBASE_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  measurementId: process.env.GATSBY_FIREBASE_MEASURE_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_SENDER_ID,
};

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-scroll-reveal',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'jsx',
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon,
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': 'src',
          '@pages': 'src/pages',
          '@assets': 'src/assets',
          '@components': 'src/components',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GATSBY_G_TAG, process.env.GATSBY_G_ANALYTICS],
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          ...firebaseConfig,
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
