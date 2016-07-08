const webpack = require('webpack');
const APP_DIR = './src';
const APP_DEST = './public';

module.exports = {
    entry: './src/app.js',
    output: {
        path: APP_DEST,
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
          include : APP_DIR,
          loader : 'babel'
        }
      ]
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
