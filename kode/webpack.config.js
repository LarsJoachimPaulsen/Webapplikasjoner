const path = require('path'); 

module.exports ={
    entry: "./src/javascript.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js', 
        publicPath: '/', 
    }, 
    module: {
        rules: [
            {
                test:/\.css$/, 
                use: ['style-loader', 'css-loader'], 
            }, 
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],  
            }, 
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader'
            },
        ],
    },
};