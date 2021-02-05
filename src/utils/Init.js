function init(that) {
    if (localStorage.getItem('locale')) {
        that.$i18n.locale = localStorage.getItem('locale')
        if (localStorage.getItem('locale') == "en_US") {
            that.$store.state.lang.select = {text: "English(US)", locale: "en_US"}
        }
    } else {
        that.$i18n.locale = 'zh_CN'
        localStorage.setItem('locale', 'zh_CN')
    }
    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') == 'auto') {
            that.$vuetify.theme.dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            that.$store.state.style.select = {text: "Follow system settings", mode: "auto"}
        } else {
            that.$vuetify.theme.dark = (localStorage.getItem('theme') == "true")
            if (localStorage.getItem('theme') != "true") {
                that.$store.state.style.select = {text: "Light", mode: false}
            }
        }
    } else {
        localStorage.setItem('theme', "true")
    }
}

export default {init}