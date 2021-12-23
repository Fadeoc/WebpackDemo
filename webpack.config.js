const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口路径上文，非其他上文
  context: path.join(__dirname, './src'),
  // 字符串、数组、对象、函数
  // entry: './index.js',
  // entry: ['./depTest.js', './index.js'],
  entry: {
    landing: './index.js',
    login: './login.js',
    vendor: ['vue']
  },
  output: {
    // 打包输出位置
    path: path.join(__dirname, 'dist'),
    // 间接资源路径
    // '', './' '../' 相对 html 的相对路径
    // '/' '/*/' 相对 host 的路径（以斜杠开头）
    // 'http://cnd.com/assets' 绝对域名，CDN分发
    publicPath: '/dist',
    // [hash],  [chunkhash],  [id],  [query]
    filename: "./[name].[hash].js"
  },
  mode: 'development',
  devServer: {
    devMiddleware: {
      // devServer 专用
      publicPath: '/dist',
    },
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
