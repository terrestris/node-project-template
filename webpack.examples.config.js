const baseConfig = require('./webpack.config.js');

baseConfig.devServer = {
  inline: true,
  host: '0.0.0.0',
  port: 8080
},

module.exports = baseConfig;
