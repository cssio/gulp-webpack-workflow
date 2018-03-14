const path    = require('path'),
      webpack = require('webpack');

module.exports = {
    entry: {
      app: path.join(__dirname + '/src/js/app.js'),
    },
    output: {
      path: path.join(__dirname, '/src/dist/js/'),
      filename: 'app.min.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
              {
                loader: 'babel-loader',
                // options: { 
                //   presets: [ 
                //     [ 'es2015', { modules: false } ] 
                //   ] 
                // }
                options: { presets: ['env'] }
              }
            ],
            exclude: [
                path.resolve(__dirname, '/node_modules/'),
                path.resolve(__dirname, '/src/js/'),
            ],
        }
      ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
          magnificPopup: "$.magnificPopup"
        })
    ]
};




