module.exports = {
  configureWebpack: {
    entry: './src/main.ts',
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json']
    }
  }
}