path = require('path')

module.exports = (_, argv) => {
  return {
    context: __dirname,
    entry: {
      app: [
        'js/registry.js',
      ],
    },

    output: {
      path: path.resolve(__dirname, './out/'),
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].bundle.js',
    },

    module: {
      rules: [
        {
          type: 'javascript/auto',
          test: /\.mjs$/,
          include: /node_modules/,
        },
        {
          test: /\.js$/,
          loader: 'babel-loader?retainLines=true',
        },
      ],
    },
    resolve: {
      modules: ['node_modules', __dirname],
      extensions: ['.mjs', '.js'],
    },
  }
}
