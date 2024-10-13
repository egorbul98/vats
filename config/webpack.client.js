/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { getRules } = require('./webpack-utils');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function createConfig(_, { mode = 'production' }) {
    const root = path.resolve(__dirname, '../');

    const isProd = mode === 'production';
    const isDev = mode === 'development';

    return {
        name: 'client',
        entry: {
            client: [
                ...(isDev ? ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'] : []),
                path.resolve(root, 'src/client.tsx'),
            ],
        },
        mode,
        output: {
            path: path.resolve(root, 'dist'),
            filename: '[name].[contenthash].js',
            publicPath: '',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        target: 'web',
        module: {
            rules: [
                ...getRules('client', mode),
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: require.resolve(`babel-loader`),
                        options: {
                            presets: [
                                require.resolve('@babel/preset-typescript'),
                                [require.resolve('@babel/preset-env'), { modules: false }],
                                require.resolve('@babel/preset-react'),
                            ],
                            plugins: [
                                ...(isDev ? [require.resolve('react-refresh/babel')] : []),
                                [
                                    '@babel/plugin-transform-runtime',
                                    {
                                        regenerator: true,
                                    },
                                ],
                            ],
                            babelrc: false,
                        },
                    },
                },
            ],
        },
        plugins: [
            ...(isProd
                ? [
                      new CleanWebpackPlugin(),
                      new webpack.NoEmitOnErrorsPlugin(),
                      new CompressionPlugin({ test: /\.(js|css)$/ }),
                      new CompressionPlugin({ test: /\.(js|css)$/, algorithm: 'brotliCompress' }),
                  ]
                : []),
            new MiniCssExtractPlugin({ filename: isDev ? '[name].css' : '[name].[contenthash].css' }),
            new WebpackManifestPlugin({ generate: manifestGenerate }),
            ...(isDev ? [new webpack.HotModuleReplacementPlugin({}), new ReactRefreshWebpackPlugin()] : []),
            // new BundleAnalyzerPlugin(),
        ],
        ...(isProd && {
            optimization: {
                minimize: true,
                minimizer: [`...`, new CssMinimizerPlugin(), new TerserPlugin()],
                splitChunks: {
                    // include all types of chunks
                    chunks: 'all',
                },
            },
        }),
    };
}

function manifestGenerate(_seed, files, _entries) {
    const manifest = { arrCss: [], arrJs: [], arrAssets: [] };

    for (const file of files) {
        if (file.path.endsWith('.js')) {
            if (file.path.includes('client')) {
                manifest.arrJs.push({ src: file.path, type: 'defer' });
            } else {
                manifest.arrJs.push({ src: file.path, type: 'async' });
            }
        } else if (file.path.endsWith('.css')) {
            manifest.arrCss.push(file.path);
        } else {
            manifest.arrAssets.push(file.path);
        }
    }

    return manifest;
}

module.exports = createConfig;
