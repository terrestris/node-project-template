const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    map: './examples/mapBuilder.js',
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 8080
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
