const Dotenv = require("dotenv-webpack");
const withFonts = require('next-fonts')
const withImages = require('next-images')

module.exports = withImages(
  withFonts({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = { fs: 'empty' }
      }
      config.plugins.push(new Dotenv({ silent: true }));

      return config
    },
    // Have to list all the environment variables used here to make it available
    // to the client code
    env: {
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      GOOGLE_MAPS_URL: process.env.GOOGLE_MAPS_URL,
      FACEBOOK_URL: process.env.FACEBOOK_URL,
      LINE_URL: process.env.LINE_URL
    },
  })
)
