import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueResource from 'vue-resource'
import vuetify from './plugins/vuetify'
import VuetifyAlgoliaPlaces from 'vuetify-algolia-places';

import './assets/css/style.css'

import Auth from '@/assets/js/Auth'
import Sign from '@/assets/js/Sign'
import Snackbar from '@/assets/js/SnackBar'
import User from "@/assets/js/User"
import Init from "@/assets/js/Init"
import Server from "@/assets/js/Server"
import Pro from "@/assets/js/Pro"
import Payment from "@/assets/js/Payment"
import Code from "@/assets/js/Code"
import Email from "@/assets/js/Email"
import Profile from "@/assets/js/Profile"
import GitHub from "@/assets/js/GitHub"

Vue.config.productionTip = false

Vue.prototype.auth = Auth
Vue.prototype.sign = Sign
Vue.prototype.snackbar = Snackbar
Vue.prototype.user = User
Vue.prototype.init = Init
Vue.prototype.server = Server
Vue.prototype.pro = Pro
Vue.prototype.payment = Payment
Vue.prototype.code = Code
Vue.prototype.email = Email
Vue.prototype.profile = Profile
Vue.prototype.github = GitHub

Vue.use(VueResource)
Vue.use(VuetifyAlgoliaPlaces, {
  algolia: {
    appId: '',
    apiKey: '',
  },
});

new Vue({
  store,
  router,
  vuetify,
  VueResource,
  render: h => h(App)
}).$mount('#app')
