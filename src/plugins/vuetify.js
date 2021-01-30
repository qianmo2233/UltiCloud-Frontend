import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import zhHans from 'vuetify/es5/locale/zh-Hans';
import en from 'vuetify/es5/locale/en';

Vue.use(Vuetify);

export default new Vuetify({
    theme: { dark: true },
    lang: {
        locale: {zhHans, en},
        current: 'zhHans'
    }
});
