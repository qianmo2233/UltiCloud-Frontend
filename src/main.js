import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vuescroll from 'vuescroll'
import VueResource from 'vue-resource'
import i18n from './i18n'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueResource)
let basic = require('basic-authorization-header');
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      sizeStrategy: "number",
    },
    scrollPanel: {
      scrollingX: false,
    },
    rail: {
      gutterOfSide: '0px',
    },
    bar: {
      background: '#cecece',
      opacity: 0.5,
    }
  },
})

new Vue({
  router,
  vuetify,
  i18n,
  store,
  render: h => h(App),
  http: {
    headers: {
      Authorization: basic('client', '112233')
    }
  }
}).$mount('#app')
