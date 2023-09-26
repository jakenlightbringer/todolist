const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map', // Generate inline source maps for debugging
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]', // Change the output path for images
            },
          },
        ],
      },
      {
        test: /\.css$/, // Match CSS files
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Loads CSS files
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
};
