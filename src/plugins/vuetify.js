import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

import zhHans from 'vuetify/lib/locale/zh-Hans'

// Your own translation file
//import sv from './i18n/vuetify/sv'

//Vue.component('my-component', {
//    methods: {
//        changeLocale () {
//            this.$vuetify.lang.current = 'sv'
//        },
//    },
//})

export default new Vuetify({
    lang: {
        locales: { zhHans },
        current: 'zhHans',
    },
})
