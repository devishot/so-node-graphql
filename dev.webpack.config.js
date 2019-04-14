const path = require('path'),
      nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  resolve: {
    alias: {
      Config:  path.resolve(__dirname, 'config/config.js'),
      GrpcAPI: path.resolve(__dirname, 'src/interfaces/grpc/api'),
    }
  },
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  watch: false,
  watchOptions: {
    ignored: /node_modules/
  },
  externals: [nodeExternals()],
};
