/* const path = require('path');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
} */

const path = require('path');
console.log(111, __dirname);
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    //extensions: ['*', '.js', '.jsx'], // Что это Убрать
    alias: {
      Components: path.join(__dirname, "./src/components/"),
      Pages: path.join(__dirname, "./src/pages/"),
      Core: path.join(__dirname, "./src/core/"),
    },
    //mainFiles: ['index.js']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist' // Если хотим обслуживать статику, попробовать отключить и убрать html файл
  }
};