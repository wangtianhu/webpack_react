const utils = require('./utils');
const path = require('path');
module.exports = {
  entry: {
    app: './src/index'
  },
  // 出口
  output: {
    path: utils.resolve('../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.(js|jxs)$/, // 这里用来匹配 js 和jxs 文件
        exclude: /node_modules/, // 屏蔽不需要处理的文件（可选）
        loader: 'babel-loader' //  loader的名称（必须）
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader' // 创建 <style></style>
          },
          {
            loader: 'css-loader' // 转化css
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, //  url-loader  包含 file-laoder  这里 不用 file-loader 小于10000B的  转成base64
          name: 'static/img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'], //解析扩展（当我们通过路导入文件，找不到改文件的时候，尝试加这些后缀继续寻找文件）
    alias: {
      '@': path.join(__dirname, '..', 'src') //项目 中使用 @ 代替 src 路径，导入文件方便
    }
  }
};
