module.exports = {
  publicPath: './',
  productionSourceMap: false,

  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: 'zh_CN',
      fallbackLocale: 'zh_CN',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  pwa: {
    manifestOptions: {
      background_color: '#01608B'
    },
    name: 'UltiCloud',
    themeColor: '#01608B',
    msTileColor: '#01608B'
  }
}
