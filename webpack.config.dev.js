import path from 'path';
import webpack from 'webpack';

//This is our javascript rule that specifies what to do with .js files
const javascript = {
  test: /\.(js)$/,
  loader: 'babel-loader',
  exclude:[
    path.resolve(__dirname, '/node_modules')
  ]
};

//This is our css rule that specifies what to do with .css files
const styles = {
  test: /\.(css)$/,
  use:[{
    loader: 'style-loader'
  },
  {
    loader: 'css-loader',
    options:{
      modules:true
    }
  }]
}

const config = {
  entry:[
    path.resolve(__dirname, 'src/index')
  ],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [javascript, styles]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug:true,
      options: {
        noInfo: false
      }
    })
  ]
}

module.exports = config;
