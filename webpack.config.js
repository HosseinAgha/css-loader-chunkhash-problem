var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader", 
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '<[emoji]>[hash:base64:22]'
            }
          }]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({ "process.env.NODE_ENV": "'production'" })
  ]
}