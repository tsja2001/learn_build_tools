const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
// const
module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    index: {
      import: "./src/index.js",
    },
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/[name]-[chunkhash]-bundle.js",
    chunkFilename: "js/[name]-[chunkhash]-chunk.js",
    clean: true,
    // publicPath: "http://cdn/xxx/",
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".ts"],
  },
  devServer: {
    static: ["public", "source"],
    host: "0.0.0.0",
    port: "8888",
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8001",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          miniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new miniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].css",
    }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  // optimization: {
  //   chunkIds: "named",
  //   splitChunks: {
  //     chunks: "all",
  //     maxSize: 2000,
  //     minSize: 1,
  //     cacheGroups: {},
  //   },
  // },
};
