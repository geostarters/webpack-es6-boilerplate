const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const extractSass = new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css"
});

module.exports = {

  context: path.join(process.cwd(), 'src'), //the home directory for webpack

  devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools

  entry: {
    app: './index.js'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['.js'],  // extensions that are used
    modules: [path.join(process.cwd(), 'src'), 'node_modules'] // directories where to look for modules
  },

  optimization: {
    runtimeChunk: "single", // enable "runtime" chunk
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },

  module: {
    rules: [{
      enforce: "pre", //to check source files, not modified by other loaders (like babel-loader)
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },{
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
                sourceMap: true
            }
          }, 
          {
            loader: "sass-loader",
            options: {
                sourceMap: true
            }
          }
        ],
    },{
      test: /\.css$/,
      loader:[ "style-loader", "css-loader" ]
    },{
      test: /\.(jpe?g|png|gif|svg|ico)$/i,
      use: [{
        loader: 'file-loader',
      }]
    }
  ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
      extractSass
  ]
};