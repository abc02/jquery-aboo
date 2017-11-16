const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const path = require('./path')

module.exports = merge(baseWebpackConfig, {
  // eval-source-map is faster for development
  output: {
    //导出目录
    publicPath: "/", // server-relative
    hashDigestLength: 6,
    //导出文件
    filename: 'javascripts/[name].[chunkhash].js',
    chunkFilename: 'javascripts/[id].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('prod')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      compress: {
        warnings: true,
      },
      sourceMap: true
    }),
    // new HtmlWebpackPlugin({
    //   template: path.sourcePath + '/index.html',
    //   cache: false,
    //   minify: {
    //     collapseInlineTagWhitespace: true,
    //     collapseWhitespace: true,
    //     preserveLineBreaks: true
    //   }
    // })
  ].concat(path.prodHtmlPlugin())
})