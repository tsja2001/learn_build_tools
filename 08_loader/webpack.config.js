const path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  resolveLoader: {
    modules: ['node_modules', './wuhu-loader'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'loader1',
      },
      {
        test: /\.js$/,
        use: 'loader2',
      },
      {
        test: /\.js$/,
        use: 'loader3',
      },
    ],
  },
}
