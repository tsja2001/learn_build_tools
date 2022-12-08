const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const terserWebpackPlugin = require("terser-webpack-plugin");
const cssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    main: "./src/main.js",
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/[name]-[contenthash]-bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.j|tsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.css?$/,
        use: [miniCssExtractPlugin.loader, "css-loader"],
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
  optimization: {
    splitChunks: {
      chunks: "all",
      maxSize: 2000000000,
      minSize: 1,
      cacheGroups: {},
    },
    // 开启压缩
    minimize: true,
    // 压缩配置
    minimizer: [
      // js压缩
      new terserWebpackPlugin({
        // 提取注释
        extractComments: false,
        terserOptions: {
          compress: {
            // 把函数argument[1]获取参数的写法, 改成直接使用参数获取
            arguments: true,
            // 移除未使用的函数与变量
            unused: true,
          },
          // 丑化代码
          mangle: true,
          // 保持函数名称
          keep_fnames: true,
        },
      }),
      // css压缩
      new cssMinimizerPlugin({}),
    ],
  },
};
