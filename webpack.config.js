var path = require('path');
module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080/',
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module:{
        rules:[{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        
    }
    ]
    }
}
