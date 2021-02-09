import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

// Name 'webpack.config.babel.js' is for using ES6 in webpack config

export default (env, options) => {
    const devMode = options.mode !== 'production';

    return {
        entry: './src/js/index.js',
        target: 'web', // TODO: Check browserlist node support issue https://github.com/webpack/webpack/issues/11660 and https://github.com/webpack/webpack-dev-server/issues/2758
        output: {
            filename: devMode ? '[name].js' : '[name].[chunkhash].js',
            chunkFilename: devMode ? '[name].js' : '[name].[chunkhash].js',
            publicPath: '/',
            path: path.resolve(__dirname, 'build'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: ['autoprefixer'],
                                }
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                // Using Dart Sass
                                implementation: require('sass'),
                                sassOptions: {
                                    includePaths: ['./node_modules']
                                },
                            },
                        }
                    ],
                },
                { // TODO: Check fonts inclusion
                    test: /\.(jpe?g|png|gif|svg|ico)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: devMode ? 'assets/img/[name].[ext]' : 'assets/img/[hash].[ext]',
                        }
                    }
                },
                {
                    test: /\.(mov|mp4)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: devMode ? 'assets/video/[name].[ext]' : 'assets/video/[hash].[ext]',
                        }
                    }
                },
                {
                    test: /\.(pdf)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: devMode ? 'assets/docs/[name].[ext]' : 'assets/docs/[hash].[ext]',
                        }
                    }
                },
            ]
        },
        performance: {
            hints: 'warning',
        },
        stats: 'minimal',
        devServer: {
            open: true,
            overlay: true,
            historyApiFallback: true
            // TODO: check rewrites https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback
        },
        // To work with TerserPlugin: https://github.com/webpack-contrib/terser-webpack-plugin#note-about-source-maps
        devtool: devMode ? 'eval-source-map' : 'source-map',
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                    extractComments: !devMode,
                }),
            ],
            splitChunks: {
                chunks: 'all',
                minSize: 0,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                }
            },
            // Reference: https://webpack.js.org/guides/tree-shaking/
            sideEffects: false,
        },
        plugins: [
            new CleanWebpackPlugin(),
            // HtmlWebpackPlugin must go before FaviconsWebpackPlugin
            // From https://github.com/jantimon/favicons-webpack-plugin#html-injection
            new HtmlWebpackPlugin({
                title: 'Portfolio', // TODO: use this in index.html
                template: './src/index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: false,
                },
                meta: { // HTML meta tags // TODO: use this in index.html
                    author: process.env.npm_package_author_name,
                    viewport: 'width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0',
                    theme_color: '#0E0E0E',
                }
            }),
            new FaviconsWebpackPlugin({
                logo: './logo.png',
                favicons: { // this plugin injects meta-tags from package.json unless they are explicitly set to null
                    appName: null,
                    appDescription: null,
                    developerName: null,
                    developerURL: null,
                    background: null,
                    theme_color: null,
                }
            }),
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : '[name].[chunkhash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[chunkhash].css',
            }),
            new CopyWebpackPlugin({
                patterns: [{ from: '.htaccess' }]
            }),
        ]
    };
};
