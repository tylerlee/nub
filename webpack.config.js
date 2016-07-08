const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'assets'),
  build: path.join(__dirname, 'public')
};

module.exports = {
  entry: PATHS.app + '/app.js',
  output: {
    path: PATHS.build,
    filename: 'app.bundle.js',
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
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: PATHS.style
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
  ]
}
