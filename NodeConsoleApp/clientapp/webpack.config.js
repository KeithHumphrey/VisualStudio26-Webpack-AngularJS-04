const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
        new CopyWebpackPlugin({
            patterns: [
                // Copy over necessary static assets.
                { from: 'src/views', to: 'views' },
                { from: 'src/images', to: 'images' },
                { from: 'src/style.css', to: 'style.css' },
                { from: 'src/bootstrap.css', to: 'bootstrap.css' },
                { from: 'src/fonts/bootstrap-icons.woff2', to: 'fonts/bootstrap-icons.woff2' },
                { from: 'src/fonts/bootstrap-icons.woff', to: 'fonts/bootstrap-icons.woff' }

            ]
        })
    ]
};