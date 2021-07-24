const path = require('path');
const sitemap = require('nextjs-sitemap-generator');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '../components',
  'react-native-vector-icons',
  'react-native-modal',
  'react-native-animatable',
  'react-native',
  'react-native-flash-message',
]);

module.exports = withPlugins([
  [
    withTM,
    {
      distDir: 'build',
      trailingSlash: true,
      sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      reactStrictMode: true,
      webpack: config => {
        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          // Transform all direct `react-native` imports to `react-native-web`
          'react-native$': 'react-native-web',
        };
        config.resolve.extensions = [
          '.web.js',
          '.web.ts',
          '.web.tsx',
          ...config.resolve.extensions,
        ];
        config.resolve.modules = [
          ...config.resolve.modules,
          path.resolve(__dirname, '../../node_modules'),
        ];
        config.module.rules = [
          {
            test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
            loader: 'file-loader',
            include: path.resolve(
              __dirname,
              '../../node_modules/react-native-vector-icons',
            ),
          },
          ...config.module.rules,
        ];

        return config;
      },
    },
  ],
]);

sitemap({
  baseUrl: 'https://getvehicool.com',
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'public/static/',
});

// var 2

// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.(png|jpe?g|gif)$/i,
//           use: [
//             {
//               loader: 'file-loader',
//             },
//           ],
//         },
//       ],
//     }
// };

// var 1

// const withImages = require('next-images')
// module.exports = withImages()


// module.exports = {
//   reactStrictMode: true,
  
// }

// const withSvgr = require("next-svgr");
 
// module.exports = withSvgr({
//   // your config for other plugins or the general next.js here...
// });
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"]
//     });

//     return config;
//   }
// };