var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src-front/core.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};
