/** @type {import('next').NextConfig} */
const path = require('path');
exports.webpack = (config) => {
  config.resolve.alias['static'] = path.join(__dirname, 'static');
};

const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS
  }
}

module.exports = nextConfig
