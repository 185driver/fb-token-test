module.exports = {
  // Remove this publicPath property if not deploying to a subfolder.
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fb-token-test/'
    : '/',
  pwa: {
    workboxOptions: {
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      skipWaiting: true,
    },
  },
};
