const { merge } = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.config');

const utils = require('./utils');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  // 指定构建环境
  mode: 'development',
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: utils.resolve('./../dist/index.html'), // html模板生成路径
      template: 'index.html',
      inject: true
    })
  ],
  // 开发环境本地启动服务配置
  devServer: {
    historyApiFallback: true, //  当找不到路径的 时候，默认加载index.html 文件
    hot: true,
    contentBase: false, //告诉服务器  从哪里提取内容  只有在你想要提供 静态文件的时候才需要
    compress: true, //  一切服务 都启用 gzip压缩
    port: '8081',
    publicPath: '/', //  访问资源加前缀
    proxy: {
      //   接口请求代理
    }
  }
});
