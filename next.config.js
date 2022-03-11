module.exports = {
  reactStrictMode: true,
  // https://github.com/vercel/next.js/issues/3168#issuecomment-340166440
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false
    return config
  }
}
