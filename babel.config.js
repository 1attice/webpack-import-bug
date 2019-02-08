module.exports = function(api) {
  api.cache(true)
  return {
    ignore: ['/node_modules/'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
    ],
  };
}
