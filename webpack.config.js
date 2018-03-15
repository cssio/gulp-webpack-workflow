const path    = require('path'),
      webpack = require('webpack');

module.exports = {
    cache: true,
    // watch: true,
    // devtool: 'source-map',
    entry: {
      app: path.join(__dirname + '/src/js/app.js')
    },
    output: {
      path: path.join(__dirname, '/src/dist/js/'),
      filename: 'app.min.js',
      library: 'app'
    },

    // devtool: 'inline-source-map',

    module: {
      rules: [


        // {
        //   test: require.resolve('jquery-validation'),
        //   loader: 'expose-loader?$.fn.validate!jquery-validation'
        // },

        // {
        //     test: /(jquery.magnific-popup.min.js|slick.min.js|jquery.validate.js)/,
        //     loader: "imports-loader?define=>undefined,exports=>undefined"
        // },
        // { test: /\.js$/, loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' },
        // {
        //     test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        //     loader: "imports-loader?this=>window"
        // },
        {
            test: require.resolve("jquery"),
            loader: "expose-loader?$!expose-loader?jQuery"
        },

         {
            test: require.resolve("jquery-validation"),
            // include: /node_modules/,
            loader: "imports-loader?jQuery=jquery"
        },
        // {
        //   test: require.resolve('jquery-validation'),
        //   loader: 'expose-loader?$.fn.validate!expose-loader?$.validator'
        // },
        // {
        // // Exposes jQuery for use outside Webpack build
        //     test: require.resolve('jquery'),
        //     use: [{
        //       loader: 'expose-loader',
        //       options: 'jQuery'
        //     },{
        //       loader: 'expose-loader',
        //       options: '$'
        //     }]
        //   },

        //   {
        //     test: /[\/\\]node_modules[\/\\]jquery-validation[\/\\]jquery.validate\.js$/,
        //     loader: "imports-loader?define=>false"
        // },
        // {
        //   enforce: 'pre',
        //   test: /\.js$/,
        //   exclude: [
        //     path.resolve(__dirname, 'node_modules'),
        //   ],
        //   loader: 'eslint-loader',
        //   options: {
        //     fix: true,
        //     cache: true,
        //     // ignorePattern: __dirname + '/src/js/lib/'
        //   }
        // },
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
                options: { presets: ['env'] },



                // options: {
                //   presets: [
                //     [
                //       'env',
                //       { modules: false },
                //     ],
                //   ],
                // },
              }
            ],
            exclude: [
                path.resolve(__dirname, '/node_modules/'),
                path.resolve(__dirname, '/src/js/'),
            ],
        }
      ]
    },
    // externals: {
    //     magnificPopup : "magnificPopup"
    // },
    plugins: [
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "app",
            minChunks: Infinity
            // children: true,
            // async: true,
        }),
        // new webpack.LoaderOptionsPlugin({

        //     options: {
        //         minimize: true,
        //       eslint: {
        //         formatter: require('eslint-formatter-pretty')
        //       }
        //     }
        // }),
        new webpack.ProvidePlugin({
          // $: "jquery",
          // jQuery: "jquery",
          // "window.jQuery": "jquery",
          // "window.$": "jquery"
          // "window.$": "jquery",
          // "$.magnificPopup" : "$.magnificPopup"


          // 'window.jQuery': 'jquery',
          // 'window.$': 'jquery',
          // 'jQuery': 'jquery',
          // '$': 'jquery',


           'jQuery': 'jquery',
            'window.jQuery': 'jquery',
         'jquery': 'jquery',
            'window.jquery': 'jquery',
         '$'     : 'jquery',
            'window.$'     : 'jquery'

          // $: 'jquery',
          // jQuery: 'jquery'
        }),
        // new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, output: {comments: false}})
    ],

    resolve: {
      extensions: ['.js'],
      alias: {

        'jquery': require.resolve('jquery'),
        // 'svg4everybody': path.resolve('node_modules', 'svg4everybody/dist/svg4everybody.js'),
        // jquery: path.resolve('node_modules', "./src/lib/jquery/dist/jquery.min.js"),
        // 'jquery-validation': path.resolve('node_modules', 'jquery-validation/dist/**/*'),

        // 'jquery-validation': path.resolve('node_modules', 'jquery-validation/dist/jquery.validate.js'),
        // 'jquery-validation-methods': path.resolve('node_modules', 'jquery-validation/dist/additional-methods.js'),

        inputmask: path.resolve('node_modules', 'inputmask/dist/jquery.inputmask.bundle.js'),

        // TweenLite: path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
        // TweenMax: path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
        // TimelineLite: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
        // TimelineMax: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),

        // scrollmagic: path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
        // 'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        // 'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
      },
    },
};




