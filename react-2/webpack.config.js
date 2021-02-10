
const path = require("path");


const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const {merge} = require('webpack-merge')

const pug = require('./webpack/pug')
const scss = require('./webpack/scss')

const common = merge([{
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index', 'common'],
      template: '/index.pug'
  }),
  new MiniCssExtractPlugin({
      filename: '[name].css',
      // chunks: ['index', 'common', 'form-elements']
  }),
  ]
},
pug(),
scss()
])