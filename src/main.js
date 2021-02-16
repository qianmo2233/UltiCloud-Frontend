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
import GetUser from "@/utils/GetUser";
import GetPro from "@/utils/GetPro";
import StorageUsage from "@/utils/StorageUsage";
import Init from "@/utils/Init";
import Key from "@/utils/Key";
import GetServer from "@/utils/GetServer";
import AddServer from "@/utils/AddServer";
import DeleteServer from "@/utils/DeleteServer";
import EditServer from "@/utils/EditServer";
import ActiveServer from "@/utils/ActiveServer";
import Register from "@/utils/Register";
import GetTime from "@/utils/GetTime";
import GetPayment from "@/utils/GetPayment";
import EditProfile from "@/utils/EditProfile";
import Cdk from "@/utils/Cdk";
import Email from "@/utils/Email";

Vue.prototype.$snackbar = SnackBar
Vue.prototype.$Login = Login
Vue.prototype.$GetUser = GetUser
Vue.prototype.$GetPro = GetPro
Vue.prototype.$StorageUsage = StorageUsage
Vue.prototype.$Init = Init
Vue.prototype.$Key = Key
Vue.prototype.$GetServer = GetServer
Vue.prototype.$AddServer = AddServer
Vue.prototype.$DeleteServer = DeleteServer
Vue.prototype.$EditServer = EditServer
Vue.prototype.$ActiveServer = ActiveServer
Vue.prototype.$Register = Register
Vue.prototype.$GetTime = GetTime
Vue.prototype.$GetPayment = GetPayment
Vue.prototype.$EditProfile = EditProfile
Vue.prototype.$Cdk = Cdk
Vue.prototype.$Email = Email

Vue.config.productionTip = false

Vue.use(VueResource)
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
