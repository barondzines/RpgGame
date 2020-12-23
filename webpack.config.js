const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "eval-cheap-source-map",
  devServer: {
    open: true,
    hot: true,
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "docs"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Rpg Game",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                  targets: "defaults",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};

if (currentTask == "build") {
  config.mode = "production";
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: "main.[hash].css" }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin()
  );
}
module.exports = config;
