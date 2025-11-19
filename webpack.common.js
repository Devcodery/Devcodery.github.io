const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 1. Importar el plugin

module.exports = {
  entry: {
    app: './js/app.js',
    style: './style.css', 
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/[name].js', 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], 
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'css/[name].css', 
    }),
    
    // 2. Configurar CopyWebpackPlugin
    new CopyWebpackPlugin({
        patterns: [
            { 
                // Archivos en la raíz que deben ser copiados directamente a 'dist'
                from: path.resolve(__dirname, './*.{png,svg,ico,txt,webmanifest}'), 
                to: path.resolve(__dirname, 'dist/[name][ext]'), 
                globOptions: {
                    // Evitar copiar archivos de configuración de Webpack
                    ignore: ['**/*.js', '**/*.json', '**/package-lock.json'], 
                },
            },
            // Si tu 'icon.png' está en una subcarpeta (ej: 'assets/'), ajusta el 'from'
        ],
    }),
  ],
};