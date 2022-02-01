const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name]_[hash][ext]'
                }
            }
            // {
            //     test: /\.(svg|png|jpg|gif)$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             name: "[name]__[hash].[ext]",
            //             // outputPath: (url , resoursePath , context)=>{
            //             //     console.log(url)
            //             //     console.log(resoursePath)
            //             //     console.log(context)
            //             //     return "imgs"
            //             // }
            //         }
            //     }
            // }
        ]
    }
};