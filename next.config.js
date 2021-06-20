const path = require('path');
const pkg = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  poweredByHeader: false,
  assetPrefix: isProd ? 'https://cdn.domain.com' : '',
  reactStrictMode: true,
  env: {
    SENTRY_DSN: '',
    SENTRY_TOKEN: '',
    SENTRY_RELEASE: `Release ${pkg.version}`
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')]
  },
  webpack: (config, options) => {
    if (!options.dev) {
      options.defaultLoaders.babel.options.cache = false;
    }

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]'
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: '@svgr/webpack', options: { svgoConfig: { plugins: { removeViewBox: false } } } },
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]'
          }
        }
      ]
    });
    return config;
  }
};

module.exports = nextConfig;
