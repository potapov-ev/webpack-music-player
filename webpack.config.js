const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ],
    /* plugins: [
      "transform-react-jsx-source",
    ] */
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'], // Что это Убрать
    alias: {
      src: path.resolve(__dirname, "src"),
    },
    /* mainFiles: ['index.js'] */
  },
  devtool: "eval-source-map",
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist', // Если хотим обслуживать статику, попробовать отключить и убрать html файл
    port: 3000,
  }
};