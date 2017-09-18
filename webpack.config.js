
module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test:/\.gif$/, use: 'file-loader'}
        ]
    }
};
