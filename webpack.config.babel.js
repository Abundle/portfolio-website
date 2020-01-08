import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

// Name 'webpack.config.babel.js' is for using ES6 in webpack config

// TODO: Check fonts inclusion

export default (env, options) => {
    const devMode = options.mode !== 'production';

    return {
        entry: './src/js/index.js',
        output: {
            filename: devMode ? 'main.js' : 'main.[chunkhash].js',
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
                    test: /\.s(a|c)ss$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer()],
                            },
                        },
                        { loader: 'sass-loader' }
                    ],
                },
                {
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
                            name: 'assets/video/[hash]-[name].[ext]',
                        }
                    }
                },
            ]
        },
        devServer: {
            open: true,
            overlay: true,
            historyApiFallback: true
            // TODO: check rewrites https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback
        },
        devtool: devMode ? 'eval-source-map' : false, // or use source-map?
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                    extractComments: false,
                }),
            ],
            splitChunks: {
                chunks: 'all',
                minSize: 0,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: devMode,
                    },
                }
            },
            // Reference: https://webpack.js.org/guides/tree-shaking/
            sideEffects: false,
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({ // HtmlWebpackPlugin must be before FaviconsWebpackPlugin
                template: './src/index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: false,
                },
                'meta': {
                    'theme-color': '#0E0E0E',
                }
            }),
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            }),
            new CopyWebpackPlugin([
                { from: '.htaccess' },
            ]),
            new FaviconsWebpackPlugin(),
        ]
    };
};
