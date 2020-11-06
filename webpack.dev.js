const path = require("path");
const merge = require("webpack-merge").merge;
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve("dist"),
    }
});
