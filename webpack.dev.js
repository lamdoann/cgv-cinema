const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = {
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(common, config);
