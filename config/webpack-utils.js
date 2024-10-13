/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getRules(type, mode = 'production') {
    const root = path.resolve(__dirname, '../');

    const isClient = type === 'client';
    const isServer = type === 'server';
    const isDev = mode === 'development';
    const isProd = mode === 'production';
    console.log({ type, mode });

    const postCssLoader = {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                config: path.resolve(root, 'postcss.config.js'),
                sourceMap: true,
            },
        },
    };
    return [
        {
            test: /\.css$/,
            use: isServer ? 'null-loader' : [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.scss$/,
            use: [
                ...(isClient ? [MiniCssExtractPlugin.loader] : []),
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: {
                            localIdentName: `[path][name]:[local]-[hash:base64:2]`,
                            localIdentContext: 'src',
                            exportLocalsConvention: 'camelCase',
                            mode: 'local',
                            exportOnlyLocals: isServer,
                        },
                    },
                },
                postCssLoader,
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true },
                },
            ],
        },
        {
            test: /\.(png|jpg|jpeg|gif|ico)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: isProd ? '[contenthash].[ext]' : '[name].[ext]',
                        limit: undefined,
                    },
                },
                ...(isProd
                    ? [
                          {
                              loader: 'image-webpack-loader',
                              options: {
                                  mozjpeg: {
                                      progressive: true,
                                      quality: 65,
                                  },
                                  // optipng.enabled: false will disable optipng
                                  optipng: {
                                      enabled: false,
                                  },
                                  pngquant: {
                                      quality: [0.65, 0.7],
                                      speed: 4,
                                  },
                                  gifsicle: {
                                      interlaced: false,
                                  },
                                  // the webp option will enable WEBP
                                  webp: {
                                      quality: 75,
                                  },
                              },
                          },
                      ]
                    : []),
            ],
        },
    ];
}

module.exports = {
    getRules,
};
