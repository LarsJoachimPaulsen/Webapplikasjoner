const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3001,
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    proxy: {
      "/posts":{
        target: "http://localhost:5001"
      }
    }
  },
  devtool: 'eval-source-map',
});