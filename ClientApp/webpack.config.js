const path = require('path');
const _mini_css = require ('mini-css-extract-plugin');

module.exports = (env = {}, argv = {}) => {
  
  const isProd = argv.mode === 'production';
  const config = {
    mode: argv.mode || 'development', // we default to development when no 'mode' arg is passed
    entry: {
      main: './js/app-1.js',
      classic_jquery: './js/classic_jquery.js',
      react_notes: './js/rac_notes.js'
    }, 
    output: {
      filename: 'js/[name].bundle.js',
      path: path.resolve(__dirname, '../wwwroot')
    },
    plugins: [
      new _mini_css({
        filename: 'css/[name].bundle.css'
      })
    ],
    module:  {
      rules: [
        {
          test: /\.css$/,
          use: [
            isProd ? _mini_css.loader : 'style-loader',
            'css-loader' 
          ]
        }
      ]
    }
  }
  
  return config;
};