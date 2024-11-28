module.exports = {
  configureWebpack: {
    output: {
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json']
    }
  }
}