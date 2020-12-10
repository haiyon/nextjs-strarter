const withPlugins = require('next-compose-plugins');
const path = require('path');
const pkg = require('./package.json');

const nextConfig = {
  poweredByHeader: false,
  env: {
    SENTRY_DSN: '',
    SENTRY_TOKEN: '',
    SENTRY_RELEASE: `Release ${pkg.version}`
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};

module.exports = withPlugins([], nextConfig);
