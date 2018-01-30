var path = require("path");

module.exports = {
  entry: "./app/app.jsx",
  output: {
    path: path.resolve(__dirname, "./public"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  devServer: { historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              minimize: false
            }
          },
          {
            loader: "postcss-loader"
          },
          { loader: "less-loader" }
        ]
      }
    ]
  }
};
