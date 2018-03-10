const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

module.exports = {
  output: {
    publicPath: "/dist/"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        oneOf: [
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
          },
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // it's runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: "file-loader",
            options: {
              name: "assets/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new WebpackBuildNotifierPlugin()
  ]
};
