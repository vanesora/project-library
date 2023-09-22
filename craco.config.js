const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            if (process.env.NODE_ENV === 'development') {
                webpackConfig.devtool = 'source-map';
            }
            return webpackConfig;
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ],
    },
    ignoreWarnings: [/Failed to parse source map/],
};

