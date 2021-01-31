import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    group: null,
    nav: {
      title1: '管理',
      title2: 'UltiKits系列',
      title3: '关于',
      title4: '插件',
      title5: '常见问题&修复',
      items1: [
        {text: '首页', icon: 'mdi-home', url: '/'},
        {text: '会员', icon: 'mdi-chess-king', url: '/vip'},
        {text: '使用帮助', icon: 'mdi-help-box', url: '/help'}
      ],
      items2: [
        {text: '服务器', icon: 'mdi-server', url: '/server'},
        {text: '授权', icon: 'mdi-key', url: '/auth'},
      ],
      items3: [
        {text: 'UltiTools', icon: 'mdi-tools', ver: '4.2.3', url: '/tools'},
        {text: 'UltiCore', icon: 'mdi-codepen', ver: '1.1.3', url: '/core'},
        {text: 'UltiEconomy', icon: 'mdi-cash-usd', ver: '2.6.4', url: '/economy'},
        {text: 'UltiLevel', icon: 'mdi-anvil', ver: '2.1.2', url: '/level'},
      ],
      items4: [
        {text:'自主排错&修复', icon:'mdi-auto-fix', url: '/fix'},
        {text:'配置文件', icon:'mdi-file-cog', url: '/config'},
        {text:'YAML语法快速上手', icon:'mdi-file-code', url: '/yaml'},
      ],
      items5: [
        {text: '制作人员', icon: 'mdi-account-multiple', url: '/maker'},
        {text: '更新记录', icon: 'mdi-update', url: '/update'},
        {text: '官方QQ群', icon: 'mdi-qqchat', url: '/qq'},
        {text: 'BUG反馈', icon: 'mdi-alert-decagram-outline', url: '/issue'},
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
