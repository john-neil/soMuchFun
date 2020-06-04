const path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/, // "regular expression" which says "anything that ends with a literal .js and $ means end of filename"
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader', //maybe this is the problem?
        options: {
          presets: ['react'] // or this?
        }
      }
    }]
  }
}
