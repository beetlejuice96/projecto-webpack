const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin"); // sirve para copiar simples archivos o mover toda una carpeta a la carpeta dist
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js", // punto de entrada de la aplicacion
  output: {
    //salida del bundle
    path: path.resolve(__dirname, "dist"), // resolve: ruta absoluta desde el S.O al archivo, esto es para no tener conflictos entre S.O
    filename: "[name].[contenthash].js", // nombre del archivo final en dist
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  mode: "development",
  watch: true,
  resolve: {
    extensions: [".js"], // extension de archivos que webpack tiene permitido leer
    alias: {
      "@utils": path.resolve(__dirname, "src/utils"),
      "@templates": path.resolve(__dirname, "src/templates"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@images": path.resolve(__dirname, "src/assets/images"),
    },
  },
  module: {
    //reglas que pongo para trabajar con webpack
    rules: [
      {
        test: /\.m?js$/, // only archivos con extension .js
        exclude: /node_modules/, // digo que no use los archivos de la carpeta node_modules
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|.styl$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000, //O LE PASAMOS UN BOOLEANOS TRUE O FALSE Habilita o deshabilita la transformación de archivos en base64.
            mimetype: "application/font-woff", //Especifica el tipo MIME con el que se alineará el archivo.
            // Los MIME Types (Multipurpose Internet Mail Extensions)
            // son la manera standard de mandar contenido a través de la red.
            name: "[name].[contenthash].[ext]", // EL NOMBRE INICIAL DEL ARCHIVO + SU EXTENSIÓN
            // PUEDES AGREGARLE [name]hola.[ext] y el output del archivo seria
            // ubuntu-regularhola.woff
            outputPath: "./assets/fonts/",
            publicPath: "../assets/fonts/",
            esModule: false, // AVISAR EXPLICITAMENTE SI ES UN MODULO
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images",
        },
      ],
    }),
    new Dotenv(),
  ],
};
