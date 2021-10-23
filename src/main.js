import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

import Auth from '@/assets/js/Auth'
import Sign from '@/assets/js/Sign'
import Snackbar from '@/assets/js/SnackBar'
import User from "@/assets/js/User"
import Init from "@/assets/js/Init"
import Server from "@/assets/js/Server"
import Pro from "@/assets/js/Pro"
import Payment from "@/assets/js/Payment"

import './assets/css/style.css'

Vue.config.productionTip = false

Vue.prototype.auth = Auth
Vue.prototype.sign = Sign
Vue.prototype.snackbar = Snackbar
Vue.prototype.user = User
Vue.prototype.init = Init
Vue.prototype.server = Server
Vue.prototype.pro = Pro
Vue.prototype.payment = Payment

Vue.use(VueResource)

new Vue({
  store,
  router,
  vuetify,
  VueResource,
  render: h => h(App)
}).$mount('#app')
