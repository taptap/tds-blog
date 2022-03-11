const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  // https://github.com/vercel/next.js/issues/3168#issuecomment-340166440
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false
    return config
  },
}

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

], nextConfig);
