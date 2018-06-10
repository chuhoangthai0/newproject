module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader', //transpile es6->es5
      query: {
        presets: ['es2015']
      }
    }]
  },
  devServer: {
    contentBase: 'public',
    host: 'localhost',
    port: '4200',
    open: true,
  },
  node: {
    fs: "empty"
  }
};
