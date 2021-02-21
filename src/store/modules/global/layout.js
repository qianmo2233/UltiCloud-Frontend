export default {
    namespaced: true,
    state: {
        nav: true,
        group: null,
        title: '',
        locale: '',
        style: '',
        refresh: false,
        snackbar: {
            status: false,
            text: '',
            timeout: -1,
        },
    },
    mutations: {
        setNav(state, value) {
            state.nav = value
        },
        setGroup(state, value) {
            state.group = value
        },
        setTitle(state, value) {
            state.title = value
        },
        setLocale(state, value) {
            state.locale = value
        },
        setStyle(state, value) {
            state.style = value
        },
        setSnackbarText(state, value) {
            state.snackbar.text = value
        },
        setSnackbarTimeout(state, value) {
            state.snackbar.timeout = value
        },
        setSnackbarStatus(state, value) {
            state.snackbar.status = value
        },
        setRefresh(state, value) {
            state.refresh = value
        },
    },
    actions: {
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
    },
}