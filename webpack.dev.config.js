const path = require('path');

module.exports = [
    'source-map'
].map(devtool => ({
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'num-conv-string.js'
    },
    devtool,
    optimization: {
        runtimeChunk: true
    }
}));

