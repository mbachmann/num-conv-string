const path = require('path');

let libraryFileName = 'num-conv-string';
let libraryName = 'numConvString';

function createConfig(options) {
    let outputFile, mode;

    if (options.mode === 'production') {
        mode = 'production';
        outputFile = libraryFileName + "." + options.target + '.min.js';
    } else {
        mode = 'development';
        outputFile = libraryFileName + "." + options.target + '.js';
    }
    console.log("mode=" + mode, "target=" + options.target, "outputFile=" + outputFile)
    return {
        entry: './src/main/index.js',
        mode: mode,
        devtool: options.mode === 'production' ? false : 'source-map',
        output: {
            path: path.resolve(__dirname, 'lib'),
            filename: outputFile,
            library: libraryName,
            libraryTarget: options.target,
            umdNamedDefine: true,
            globalObject: `(typeof self !== 'undefined' ? self : this)`
        },
        externals: {
            lodash: {
                commonjs: 'lodash',
                commonjs2: 'lodash',
                amd: 'lodash',
                root: '_',
            },
        },
    };
}

module.exports = (env, argv) => ( [
    createConfig({target: 'umd', mode: argv.mode})
]);
