import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vuescroll from 'vuescroll'
import i18n from './i18n'
import store from './store'
import VueResource from 'vue-resource'
import VueI18n from "vue-i18n";

import SnackBar from "@/utils/SnackBar";
import Login from "@/utils/Login";
import GetUser from "@/utils/GetUser";
import GetPro from "@/utils/GetPro";
import StorageUsage from "@/utils/StorageUsage";

Vue.config.productionTip = false

Vue.prototype.$snackbar = SnackBar
Vue.prototype.$Login = Login
Vue.prototype.$GetUser = GetUser
Vue.prototype.$GetPro = GetPro
Vue.prototype.$StorageUsage = StorageUsage

Vue.use(VueResource)
Vue.use(VueI18n)
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      sizeStrategy: "number",
      wheelScrollDuration: 200
    },
    scrollPanel: {
      scrollingX: false,
      easing: 'easeOutQuad',
    },
    rail: {
      gutterOfSide: '0px',
    },
    bar: {
      background: '#ffffff',
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
