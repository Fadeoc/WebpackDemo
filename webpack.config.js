const path = require("path");
module.exports = {
  // 入口路径上文，非其他上文
  context: path.join(__dirname, './src'),
  // 字符串、数组、对象、函数
  // entry: './index.js',
  // entry: ['./depTest.js', './index.js'],
  output: {
    filename: "./bundle.js" // 系统绝对路径
  },
  mode: 'development',
  devServer: {
    devMiddleware: {
      publicPath: '/dist',
    },
  }
}
