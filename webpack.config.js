const path = require("path");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

module.exports = {
    // App entry Point
    entry: "./src/index.tsx",
    // tells webpack where to emit the bundles it creates and how to name these files
    output: {
        path: path.resolve("dist"),
        publicPath: "/dist/",
        filename: "demo-app.js",
    },
    resolve: {
        // order to resolve modules extensions
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        // additional plugin to resolve modules
        plugins: [new TsConfigPathsPlugin()],
    },
    // loaders allow webapck to process other types of files like ts,css etc.
    module: {
        rules: [
            { test: /\.ts|.tsx$/, loader: "awesome-typescript-loader" },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: { url: false },
                    },
                ],
            },
        ],
    },
    plugins: [],
    mode: "development",
    // web-dev-server config
    devServer: {
        compress: true,
        port: 3000,
    },
};
