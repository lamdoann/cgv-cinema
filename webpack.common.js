const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const extractCss = new ExtractTextPlugin({
  filename: '[name].[hash].css',
  disable: process.env.NODE_ENV === 'development',
});

const config = {
  entry: ['babel-polyfill', path.join(APP_DIR, 'index.js')],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css?$/,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      template: path.join(APP_DIR, 'index.html'),
      filename: 'index.html',
      inject: 'body',
      minify: process.env.NODE_ENV === 'production',
    }),
    extractCss,
  ],
};

module.exports = config;
