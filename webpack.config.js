var HtmlWebpackPlugin = require('html-webpack-plugin');
require('regenerator-runtime/runtime');

module.exports = {
    entry: ['regenerator-runtime/runtime.js', './src/index.js'],
    output: {
        publicPath: 'http://localhost:3000/',
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: '/index.html'
        },
        proxy: {
            '/api/users': {
                target: 'http://localhost:8000',
                secure: false,
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(gif|svg|jpg|png|jpeg)$/,
                loader: "file-loader",
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],
};
