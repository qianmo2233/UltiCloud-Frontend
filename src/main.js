import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import vuetify from './plugins/vuetify'
import vuescroll from 'vuescroll'
import VueResource from 'vue-resource'

import './style/global.css'

Vue.config.productionTip = false

Vue.use(vuescroll)
Vue.use(VueResource)

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
