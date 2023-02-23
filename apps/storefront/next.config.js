const {withStoreConfig} = require('./store-config');
const store = require('./store.config.json');

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      'medusa-public-images.s3.eu-west-1.amazonaws.com',
      'localhost',
      'medusa-demo-store-images.ams3.digitaloceanspaces.com',
      'medusa-demo-store-images.ams3.cdn.digitaloceanspaces.com',
    ],
  },
});

console.log('next.config.js', JSON.stringify(module.exports, null, 2));