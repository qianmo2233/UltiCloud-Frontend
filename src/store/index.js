import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    payment:[],
    auth: [],
    page: '',
    style: {
      select: {text: 'Dark', mode: true},
      style: [
        {text: 'Dark', mode: true},
        {text: 'Light', mode: false},
        {text: 'Follow system settings', mode: 'auto'}
      ],
    },
    lang: {
      select: {text: "中文(简体)", locale: "zh_CN"},
      lang: [
        {text: "中文(简体)", locale: "zh_CN"},
        {text: "English(US)", locale: "en_US"}
      ],
    },
    LoginMsg: {
      LoginSuccess:'Login success',
      LoginError:'Wrong user name or password',
      ConnErr:'Login failed',
      Invalid: 'Login status is invalid, please login again',
    },
    SnackBar: {
      timeout: 3000,
      text: '',
      snackbar: false,
    },
    user: {
      token: {
        access: '',
        refresh: '',
      },
      id: 0,
      status: false,
      name: '',
      email: '',
      emailValidated: '',
      joinDate: '',
      pro: false,
      proExpiryDate: '',
      maxServer: 0
    },
    NavBar: {
      drawer: true,
      group: null,
    },
    LoginForm: {
      username: '',
      password: '',
    },
    RegForm: {
      username: '',
      password: '',
      email: '',
    },
    NavItems: {
      title1: 'Manage',
      title2: 'UltiKits series',
      title3: 'About',
      title4: 'Plugins',
      title5: 'FAQ & Fix',
      items1: [
        {text: 'Home', icon: 'mdi-home', url: '/'},
        {text: 'Member', icon: 'mdi-chess-king', url: '/vip'},
        {text: 'Activity', icon: 'mdi-flag-checkered', url: '/activity'}
      ],
      items2: [
        {text: 'Servers', icon: 'mdi-server', url: '/server'},
        {text: 'Authorization', icon: 'mdi-key', url: '/auth'},
      ],
    }
  },
  mutations: {
    setAccessToken(state, value) {
      state.user.token.access = value
    },
    setRefreshToken(state, value) {
      state.user.token.refresh = value
    },
    setUserId(state, value) {
      state.user.id = value
    },
    setUserName(state, value) {
      state.user.name = value
    },
    setServerList(state, value) {
      state.list = value
    },
    setMaxServer(state, value) {
      state.user.maxServer = value
    },
    setPaymentList(state, value) {
      state.payment = value
    }
  },
  actions: {
    setMaxServer(context, value) {
      context.commit('setMaxServer', value)
    }
  },
  modules: {
  },
  getters: {
  }
})
