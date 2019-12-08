module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kkbox-api-leaf-radio/'
    : '/',
};
