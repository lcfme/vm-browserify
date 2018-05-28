const path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        vm: path.resolve(__dirname, './index.js'),
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].min.js',
        libraryTarget: 'umd',
        library: 'vm',
    },
    mode: 'production',
}