const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    entry: "./index.js",
    mode: "development",
    devtool:"hidden-source-map",
    output: {
        clean:true
    },
    devServer: {
      contentBase: './dist',
      host:"localhost",
      port:"4000"
    },
    resolve:{
      extensions: ['.jsx', '.js', '.json','.css','.scss','.jpg','jpeg','png',],
    },
    module: {
        rules: [
          {
            test:/\.(jpg|png|gif|jpeg)$/,
            loader:'url-loader'
          },
          {
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
              presets: ["@babel/preset-react"],
            },
          },
          {
            test: /\.(s[ac]|c)ss$/i,
            use: [
              // 将 JS 字符串生成为 style 节点
              "style-loader",
              // 将 CSS 转化成 CommonJS 模块
              "css-loader",
              // 将 Sass 编译成 CSS
              "sass-loader",
            ],
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        })
    ],
};