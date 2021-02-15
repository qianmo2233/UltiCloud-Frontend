export default {
    namespaced: true,
    state: {
        dialog: false,
        loading: false,
        rules: {
            username: [val => (val || '').length > 0 || '欸?没填用户名么'],
            password: [val => (val || '').length > 0 || '欸?没填密码么'],
        },
    },
    mutations: {
        setDialog(state, value) {
            state.dialog = value
        },
        setLoading(state, value) {
            state.loading = value
        },
    },
    actions: {
        setDialog({commit}, data) {
            commit('setDialog', data)
        },
        setLoading({commit}, data) {
            commit('setLoading', data)
        },
    }
}