/** @type {import('next').NextConfig} */
const path = require('path');
exports.webpack = (config) => {
  config.resolve.alias['static'] = path.join(__dirname, 'static');
};

const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
    FAUNADB_KEY: process.env.FAUNADB_KEY
  }
}

module.exports = nextConfig
