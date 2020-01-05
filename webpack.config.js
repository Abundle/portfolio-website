const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
// const webpack = require('webpack');

// setup from https://www.valentinog.com/blog/webpack-tutorial/
// TODO: Check https://medium.com/@poshakajay/heres-how-i-reduced-my-bundle-size-by-90-2e14c8a11c11
// TODO: Check fonts inclusion
// TODO: Check https://webpack.js.org/guides/production/
// TODO: Check example config https://github.com/webpack-contrib/style-loader/issues/309

module.exports = {
    entry: './src/js/index.js',
    // entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        // path: __dirname + '/build',
        // path: path.resolve('./build'),
        path: path.join(__dirname, 'build/'),
        publicPath: '/',
        filename: 'bundle.[chunkhash].js',
        // filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js']
                },
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/, // TODO: check if node_modules exclusion is always necessary
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true,
                        minimize: true,
                        removeComments: true
                        // attrs: ['img:src', 'link:href']
                        // attrs: ['img:src', 'source:src']
                        // This will resolve relative URLs to reference from the app/ directory
                        // root: path.resolve(__dirname, 'src'),
                        // attrs: ['img:src']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
                /*use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/assets/'
                        }
                    },
                    'css-loader'
                ]*/
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[hash]-[name].[ext]',
                    }
                }
            },
            {
                test: /\.(mov|mp4)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[hash]-[name].[ext]',
                    }
                }
            },
            /*{
                test: /\.(pdf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[hash]-[name].[ext]',
                    }
                }
            },*/
        ]
    },
    devServer: {
        open: true,
        overlay: true,
        // port: 3000,
        // contentBase: './build',
        // inline: false,
        // publicPath: '/',
        historyApiFallback: true
        // TODO: check rewrites https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })/*,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })*/
    ]
};
