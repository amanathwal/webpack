const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ env, presets }) => {
    return {
        mode: env,
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
               }
           ]
        },
        output: {
            filename: '[chunkhash].js'  // this defaults to main.js
        },
        plugins: [new MiniCssExtractPlugin()]
    };
}