module.exports = {
  publicPath: './',
  productionSourceMap: false,
  pluginOptions: {
    i18n: {
      locale: 'zh_CN',
      fallbackLocale: 'zh_CN',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
