module.exports = {
  entry: './src/index.js',
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
