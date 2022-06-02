const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const pages = ['index','auth', 'reg']

module.exports = {
    entry: pages.reduce((config, page) => {
        config[page] = `./src/entryPoints/${page}.js`;
        return config;
      }, {}),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()].concat(
        pages.map(
          (page) =>
            new HTMLWebpackPlugin({
              inject: true,
              template: `./src/${page}.html`,
              filename: `./${page}.html`,
              chunks: [page],
            })
        )
      ),
}