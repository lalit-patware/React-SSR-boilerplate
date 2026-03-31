const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};