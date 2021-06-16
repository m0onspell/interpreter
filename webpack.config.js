const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './src/client.js',
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
