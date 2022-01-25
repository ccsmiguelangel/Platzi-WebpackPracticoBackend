const path = require("path");
// path: la ubicación del proyecto (recurso de la máquina para obtener rutas correctamente)

module.exports = {
  //module.export: la info de nuestra configuracion necesarias de webpack
  name: "webpackbackendpractico-express",
  //name: nombre del proyecto
  entry: "./src/index.js",
  // entry: punto de entrada de nuestra aplicación
  target: "node",
  output: {
    //output: donde guardamos el recurso que fue modularizado por webpack
    path: path.resolve(__dirname, "dist"),
    //path: ubicacion del guardado
    //__dirname: donde está el proyecto en el Sistema Operativo
    // 'dist'(distribution): nombre del folder, si no existe entonces creara dist
    filename: "index.js",
    //filename: como llamar a la aplicación cuando se prepare para producción
  },
  resolve: {
    // extensions: con que extensiones trabajaremos
    extensions: [".js"],
  },
  module: {
    rules: [
      //rules: reglas con las que trabajaremos en el proyecto
      // se asigna a cada loader(optimizador), con que tipo de archivo trabajara y con que reglas
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
