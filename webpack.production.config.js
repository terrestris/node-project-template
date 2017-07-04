const commonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');

commonConfig.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: 'source-map'
  })
];

module.exports = commonConfig;
