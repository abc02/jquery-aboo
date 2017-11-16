const path = require('path')
const glob = require('glob')
const PAGE_PATH = path.resolve(__dirname, '../src/pages')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.sourcePath = path.join(__dirname, '../src/')

exports.outputPath = path.join(__dirname, '../build/')

exports.entries = function () {
    var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
    var map = {}
    entryFiles.forEach((filePath) => {
      var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
      map[filename] = filePath
    })
    console.log(map)
    return map
  }


  exports.devHtmlPlugin = function () {
    var entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
    var arr = []
    entryHtml.forEach((filePath) => {
      var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
      var conf = {
        template: filePath,
        filename: filename + '.html',
        chunks: [filename],
        inject: true
      }
      arr.push(new HtmlWebpackPlugin(conf))
    })
    return arr
  }
  exports.prodHtmlPlugin = function () {
    var entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
    var arr = []
    entryHtml.forEach((filePath) => {
      var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
      var conf = {
        template: filePath,
        filename: filename + '.html',
        chunks: [filename],
        inject: true,
        chunks: ['manifest', 'vendor', filename],
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
      }
      arr.push(new HtmlWebpackPlugin(conf))
    })
    return arr
  }