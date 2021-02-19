const { merge } = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.config');

const utils = require('./utils');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: utils.resolve('./../dist/index.html'),
      template: 'index.html',
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
});
