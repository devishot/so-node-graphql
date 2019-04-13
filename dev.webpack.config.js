const path = require('path'),
      nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  mode: 'development',
  watch: false,
  watchOptions: {
    ignored: /node_modules/
  },
  target: 'node',
  externals: [nodeExternals()]
};
