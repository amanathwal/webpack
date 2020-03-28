module.exports = ({ env, presets }) => {
    return {
        mode: env,
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']  //style loader puts that in the browser
                }
            ]
        }
    };
}