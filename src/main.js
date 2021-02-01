import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vuescroll from 'vuescroll'
import i18n from './i18n'
import store from './store'
import VueResource from 'vue-resource'

import SnackBar from "@/utils/SnackBar";
import Login from "@/utils/Login";

Vue.config.productionTip = false

Vue.prototype.$snackbar = SnackBar
Vue.prototype.$Login = Login

Vue.use(VueResource)
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
  VueResource,
  render: h => h(App),
}).$mount('#app')
