import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import vuetify from './plugins/vuetify'
import vuescroll from 'vuescroll'
import VueResource from 'vue-resource'

import './style/global.css'

import Sign from "@/utils/common/Sign";
import Basic from "@/utils/common/Basic";
import Oauth from "@/utils/token/Oauth";
import getToken from "@/utils/token/getToken";
import getProfile from "@/utils/user/GetProfile";
import SnackBar from "@/utils/common/SnackBar";
import AuthStatus from "@/utils/user/AuthStatus";
import Init from "@/utils/common/Init";
import GetServer from "@/utils/server/GetServer";

Vue.config.productionTip = false

Vue.prototype.$Basic = Basic
Vue.prototype.$Sign = Sign
Vue.prototype.$Oauth = Oauth
Vue.prototype.$getToken = getToken
Vue.prototype.$getProfile = getProfile
Vue.prototype.$SnackBar = SnackBar
Vue.prototype.$AuthStatus = AuthStatus
Vue.prototype.$Init = Init
Vue.prototype.$GetServer = GetServer

Vue.use(vuescroll)
Vue.use(VueResource)

setTimeout(function () {
  window.onload = function () {
    new Vue({
      router,
      store,
      i18n,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
    document.body.style.backgroundColor = '#ffffff'
  }
}, 0)

