const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/server/server.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  externals: [nodeExternals()],
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};