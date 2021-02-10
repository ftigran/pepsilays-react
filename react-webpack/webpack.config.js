const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./dev/index.js",
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
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
            pretty:true
        }
      },
     {
         test:/\.(s*)css$/,
         use: ['style-loader', 'css-loader', 'sass-loader'],

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dev/index.pug",
      filename: 'index.html',
      inject: true
    }),
    
  ]
};