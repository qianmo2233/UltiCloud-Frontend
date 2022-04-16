import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //用户状态
    user: {
      auth: {
        status: false,
        token: {
          access: '',
          refresh: '',
        },
      },
      email: {
        address: '',
        validated: false,
      },
      profile: {
        id: 0,
        username: '',
        join: '',
      },
      member: {
        pro: false,
        exp: '',
        max: '',
      },
    },
    //样式状态
    layout: {
      loading: {
        status: false,
        progress: 0,
      },
      nav: true,
      group: null,
      title: '',
      locale: '',
      style: '',
      captcha: {
        loaded: false,
        token: '',
      },
      refresh: false,
      snackbar: {
        status: false,
        text: '',
        timeout: -1,
      },
      logout: false,
    },
    server: {
      list: [],
    }
  },
  mutations: {
    setStatus(state, value) {
      state.user.auth.status = value
    },
    setAccessToken(state, value) {
      state.user.auth.token.access = value
    },
    setRefreshToken(state, value) {
      state.user.auth.token.refresh = value
    },
    setEmailAddress(state, value) {
      state.user.email.address = value
    },
    setEmailValidated(state, value) {
      state.user.email.validated = value
    },
    setId(state, value) {
      state.user.profile.id = value
    },
    setUsername(state, value) {
      state.user.profile.username = value
    },
    setJoin(state, value) {
      state.user.profile.join = value
    },
    setPro(state, value) {
      state.user.member.pro = value
    },
    setExp(state, value) {
      state.user.member.exp = value
    },
    setMax(state, value) {
      state.user.member.max = value
    },
    setNav(state, value) {
      state.layout.nav = value
    },
    setGroup(state, value) {
      state.layout.group = value
    },
    setTitle(state, value) {
      state.layout.title = value
    },
    setLocale(state, value) {
      state.layout.locale = value
    },
    setStyle(state, value) {
      state.layout.style = value
    },
    setSnackbarText(state, value) {
      state.layout.snackbar.text = value
    },
    setSnackbarTimeout(state, value) {
      state.layout.snackbar.timeout = value
    },
    setSnackbarStatus(state, value) {
      state.layout.snackbar.status = value
    },
    setRefresh(state, value) {
      state.layout.refresh = value
    },
    setLogout(state, value) {
      state.layout.logout = value
    },
    setServerList(state, value) {
      state.server.list = value
    },
    setLoadingStatus(state, value) {
      state.layout.loading.status = value
    },
    setLoadingProgress(state, value) {
      state.layout.loading.progress = value
    },
    setCaptchaLoaded(state, value) {
      state.layout.captcha.loaded = value
    },
    setCaptchaToken(state, value) {
      state.layout.captcha.token = value
    }
  },
  actions: {
    setStatus({commit}, data) {
      commit('setStatus', data)
    },
    setAccessToken({commit}, data) {
      commit('setAccessToken', data)
    },
    setRefreshToken({commit}, data) {
      commit('setRefreshToken', data)
    },
    setEmailAddress({commit}, data) {
      commit('setEmailAddress', data)
    },
    setEmailValidated({commit}, data) {
      commit('setEmailValidated', data)
    },
    setId({commit}, data) {
      commit('setId', data)
    },
    setUsername({commit}, data) {
      commit('setUsername', data)
    },
    setJoin({commit}, data) {
      commit('setJoin', data)
    },
    setPro({commit}, data) {
      commit('setPro', data)
    },
    setExp({commit}, data) {
      commit('setExp', data)
    },
    setMax({commit}, data) {
      commit('setMax', data)
    },
    setNav({commit}, data) {
      commit('setNav', data)
    },
    setGroup({commit}, data) {
      commit('setGroup', data)
    },
    setTitle({commit}, data) {
      commit('setTitle', data)
    },
    setLocale({commit}, data) {
      commit('setLocale', data)
    },
    setStyle({commit}, data) {
      commit('setStyle', data)
    },
    setSnackbarText({commit}, data) {
      commit('setSnackbarText', data)
    },
    setSnackbarTimeout({commit, data}) {
      commit('setSnackbarTimeout', data)
    },
    setSnackbarStatus({commit}, data) {
      commit('setSnackbarStatus', data)
    },
    setRefresh({commit}, data) {
      commit('setRefresh', data)
    },
    setLogout({commit}, data) {
      commit('setLogout', data)
    },
    setServerList({commit}, data) {
      commit('setServerList', data)
    },
    setLoadingStatus({commit}, data) {
      commit('setLoadingStatus', data)
    },
    setLoadingProgress({commit}, data) {
      commit('setLoadingProgress', data)
    },
    setCaptchaLoaded({commit}, data) {
      commit('setCaptchaLoaded', data)
    },
    setCaptchaToken({commit}, data) {
      commit('setCaptchaToken', data)
    }
  },
  modules: {
  }
})
