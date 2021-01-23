import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vuescroll from 'vuescroll'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
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
  render: h => h(App)
}).$mount('#app')
