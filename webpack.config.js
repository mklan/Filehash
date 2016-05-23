var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
  devtool: debug ? "inline-sourcemap" : null,
  node: {
    child_process: 'empty'
  },
  entry: "./src/main.js",
  output: {
    path: 'dist/',
    filename: 'filehash.js'
  },
  module: {
    loaders: [
     {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-class-properties', 'transform-decorators-legacy'],
      }
    }
  ]
  },
  plugins: debug ? [definePlugin] : [
    definePlugin,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    })
  ]
};
