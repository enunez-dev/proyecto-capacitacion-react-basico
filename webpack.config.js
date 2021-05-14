module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/i,
        loader: 'css-loader',
        options: {
          modules: true
        }
      }
    ]
  }
};
