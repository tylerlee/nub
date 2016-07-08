const autoprefixer = require('autoprefixer');
const path = require('path');
const precss = require('precss');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'assets'),
  build: path.join(__dirname, 'public')
};

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [PATHS.app + '/js/index.js', PATHS.app + '/styles/app.scss'],
  output: {
    path: PATHS.build,
    filename: 'index.bundle.js',
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test : /\.jsx?/,
      include : PATHS.app,
      loader : 'babel'
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: PATHS.style
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss'],
      include: PATHS.style
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
  postcss: function () {
    return [autoprefixer, precss];
  }
}
