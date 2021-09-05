const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './index.js',
    },
    output: {
        library: 'defer'
    },
    plugins: [
        new HtmlPlugin({
            template: './index.html',
            inject: 'body'
        })
    ],
    externals: {
        jquery: 'jqueryProxy',
        lottie: 'lottieProxy',
    }
}
