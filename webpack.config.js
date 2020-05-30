const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");


module.exports = {
  entry: __dirname + "/src/app/index.js",
  output: {
    // path: __dirname + "/dist",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: [/node_modules/],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // порядок важен!
        use: [
          "style-loader",
          // MiniCssExtractPlugin.loader,
          //   {
          //     loader: MiniCssExtractPlugin.loader,
          //     options: {
          //       esModule: true,
          //     },
          //   },
          "postcss-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  plugins: [
    imageminPngquant({
      quality: [0.7, 0.8],
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      //   inject: "body",
    }),
    // new HtmlWebpackPlugin({
    //   template: __dirname + "/src/public/pages/1.html",
    //   //   inject: "body",
    // }),
    // new HtmlWebpackPlugin({
    //   template: __dirname + "/src/public/pages/2.html",
    //   //   inject: "body",
    // }),
    // new HtmlWebpackPlugin({
    //   template: __dirname + "/src/public/pages/3.html",
    //   //   inject: "body",
    // }),
  ],
  devServer: {
    contentBase: "./src/public",
    port: 4041,
  },
};
