// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;


const config = {
    entry: __dirname + '/src/index.nuk',
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
        new HtmlWebpackPlugin({
            template:"index.html",
            publicPath : '/'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(nuk)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(nuk)$/i,
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
            }
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

    return config;
};
