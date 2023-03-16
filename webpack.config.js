// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const package = require('./package.json');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;


const config = {
    entry: package.pages,
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        open: true,
        host: 'localhost',
        historyApiFallback : true
    },
    plugins: [

        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(nuk.js)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(nuk.js)$/i,
                use: 'nukejs-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

    } else {
        config.mode = 'development';
    }
    Object.keys(package.pages).forEach((key,index) => {
        excludeChunks = [];
        const pages = JSON.parse(JSON.stringify(package.pages));
        delete pages[key];
        Object.keys(pages).forEach((key2,index) => {
            excludeChunks.push(key2)
        })
        config.plugins.push(new HtmlWebpackPlugin({
            template:"index.html",
            filename: `${key}.html`,
            inject : true,
            chunks :  "all",
            excludeChunks: excludeChunks,
            publicPath : '/'
        }));
    });

    return config;
};
