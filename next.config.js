const withImages = require('next-images')

module.exports = {
    ...withImages(),
    future: {
        webpack5: true,
    },

}
module.exports = {
  reactStrictMode: true,
  
}

const withSvgr = require("next-svgr");
 
module.exports = withSvgr({
  // your config for other plugins or the general next.js here...
});
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};