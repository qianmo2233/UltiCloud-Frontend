import Vue from 'vue'
import Vuex from 'vuex'
import i18n from "@/i18n";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    style: {
      select: {text: i18n.t('Dark'), mode: true},
      style: [
        {text: i18n.t('Dark'), mode: true},
        {text: i18n.t('Light'), mode: false},
        {text: i18n.t('Follow system settings'), mode: 'auto'}
      ],
    },
    lang: {
      select: {text: "中文(简体)", lang: "zh_CN"},
      lang: [
        {text: "中文(简体)", lang: "zh_CN"},
        {text: "English(US)", lang: "en_US"}
      ],
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
      title1: i18n.t('Manage'),
      title2: i18n.t('UltiKits series'),
      title3: i18n.t('About'),
      title4: i18n.t('Plugins'),
      title5: i18n.t('FAQ & Fix'),
      items1: [
        {text: i18n.t('Home'), icon: 'mdi-home', url: '/'},
        {text: i18n.t('Member'), icon: 'mdi-chess-king', url: '/vip'},
        {text: i18n.t('Help'), icon: 'mdi-help-box', url: '/help'}
      ],
      items2: [
        {text: i18n.t('Servers'), icon: 'mdi-server', url: '/server'},
        {text: i18n.t('Authorization'), icon: 'mdi-key', url: '/auth'},
      ],
      items3: [
        {text: 'UltiTools', icon: 'mdi-tools', ver: '4.3.0', url: '/tools'},
        {text: 'UltiCore', icon: 'mdi-codepen', ver: '1.1.3', url: '/core'},
        {text: 'UltiEconomy', icon: 'mdi-cash-usd', ver: '2.6.4', url: '/economy'},
        {text: 'UltiLevel', icon: 'mdi-anvil', ver: '2.1.2', url: '/level'},
      ],
      items4: [
        {text:i18n.t('Self Repair & Troubleshooting'), icon:'mdi-auto-fix', url: '/fix'},
        {text:i18n.t('Configuration File'), icon:'mdi-file-cog', url: '/config'},
        {text:i18n.t('YAML Grammar Getting Started'), icon:'mdi-file-code', url: '/yaml'},
      ],
      items5: [
        {text: i18n.t('Production Staff'), icon: 'mdi-account-multiple', url: '/maker'},
        {text: i18n.t('Update Record'), icon:'mdi-update', url: '/update'},
        {text: i18n.t('Official QQ Group'), icon: 'mdi-qqchat', url: '/qq'},
        {text: i18n.t('BUG Feedback'), icon: 'mdi-alert-decagram-outline', url: '/issue'},
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
