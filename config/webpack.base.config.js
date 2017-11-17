const webpack = require('webpack');
const path = require('./path')



module.exports = {
    // 入口文件
    entry: path.entries,
    // 出口文件
    output: {
        path: path.outputPath,
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            "@": path.sourcePath,
            'lib':"@/lib",
            "common": "@/common"
        },
    },

    module: {
        // 配置编译打包规则
        rules: [
            {
                test: /\.html$/,
                use: [ {
                  loader: 'html-loader',
                  options: {
                    minimize: true,
                    removeComments: true,
                    collapseWhitespace: true
                  }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                      loader: 'css-loader',
                      options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                  ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                      loader: 'css-loader',
                      options: { importLoaders: 1 }
                    },
                    'postcss-loader',
                    'sass-loader'
                  ]
            },
            {
                test: /\.(png|jpe?g|)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            fallback: 'file-loader',
                            name: '[name].[ext]?[hash:6]',
                            outputPath: 'images/',
                        }
                    }
                ]

            }
        ]
    }

}