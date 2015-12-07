var path = require('path');
 
module.exports = {
  entry: './app/scripts/main.js',
  output: {
    // export itself to a global var
    libraryTarget: "var",
    // name of the global var: "Foo"
    library: "App",

    path: path.join(__dirname, 'app/dist'),
    filename: 'main.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { 
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", 
        query: {
            presets: ['es2015']
        }
      }
    ]
  }
};