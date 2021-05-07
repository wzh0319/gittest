const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// console.log(path.resolve("dir", "q.js"));
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./dist/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
  },
};
