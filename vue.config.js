module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        "productName": "UltiCloud Desktop",
        "nsis":{
          "oneClick" : false,
          "allowToChangeInstallationDirectory" : true
        },
      }
    }
  }
}
