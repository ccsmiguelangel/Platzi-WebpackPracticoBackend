const path = require("path");
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV | "development";
const PORT = process.env.PORT | 3000;

module.exports = {
  name: "webpackbackendpractico-express",
  entry: "./src/index.ts",
  target: "node",
  mode: NODE_ENV,
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"], 
    // Añadido extensión ".ts" en array para trabajar con este en el proyecto
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        //Loader para TipeScript
      },
    ],
  },
};
