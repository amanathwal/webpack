const webpack = require('webpack'); // plugin which gives interactive terminal
const HtmlWebpackPlugin = require('html-webpack-plugin');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require('webpack-merge');
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = {mode: 'production', presets: []}) => {
    return webpackMerge({
        mode: mode,
        entry: __dirname + '/src/index.js',    // the main entry point for the bundle packaging
        output: {
            path: __dirname + '/dist',
            filename: 'bundle.js'  // this defaults to main.js
        },

        module: {
            rules: [
                {
                test: /\.jpeg/,
                use: ["url-loader"]  //emit this image to output directory, it uses file-loader beind the scenes, this loader can be used for other purposes, we dont import loaders while we import plugins
                }
               
            ]
        },

        //loaders and rules 
        // define rules how a file of particular type should be treated
        // this happens per file not in bulk
        
        // rules: [
        //        { test: /\.ts$/, use: 'ts-loader'},  // this means any time webpack adds a dependency                                        // to the graph, if it matches this extension                                          // apply this transform
        //        { test: /\.js$/, user: 'babel-loader' }
        // ],
    

        // you can apply a chain of loaders 
        // loaders execute right to left,
        // so in example below less will be applied 
        // like style(css(less()))
        // {
        // test: /\.less$/,
        //  use: ['style', 'css', 'less']     
        // }

        //webpack plugin
        // instance of an object,
        // object with an apply property in prototype chain 
        // allow you to hook into the entire compilation lifecycle 
        // plugins listen to events and then do some actions 
        // plugins: []
        plugins: [
            new HtmlWebpackPlugin(),
            new webpack.ProgressPlugin() // any plugin on webpack namspace can be accessed with a dot
        ]
    

    },
        modeConfig(mode),
        presetConfig({mode, presets })
    );
};