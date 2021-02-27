import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/global/layout'
import user from './modules/global/user'
import api from './modules/global/api'
import auth from './modules/dialog/auth'
import lang from './modules/global/locale'
import server from './modules/List/server'
import window from './modules/window/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {layout, user, auth, api, lang, server, window}
})
