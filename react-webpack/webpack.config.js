const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./dev/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.[hash].js"
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

      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
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