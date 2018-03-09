const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "babel-preset-env",
                {
                  targets: {
                    browsers: ["last 2 versions", "safari >= 7"]
                  }
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
