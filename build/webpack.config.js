const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  mode: 'development',
  //   入口
  entry: './src/index.js',
  // 出口
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: './'
  },
  // 模块
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('./../dist/index.html'),
      template: 'index.html',
      inject: true,
      hash: true,
      title: '册数',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ],
  //   本地运行
  devServer: {}
};
