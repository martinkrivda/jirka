module.exports = {
  webpack: (config, options, webpack) => {
    config.node.__dirname = false;

    return config;
  },
};
