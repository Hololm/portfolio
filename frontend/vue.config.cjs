module.exports = {
  configureWebpack: {
    entry: './src/main.ts',
    publicPath: '/',
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json']
    }
  }
}