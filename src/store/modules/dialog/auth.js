export default {
    namespaced: true,
    state: {
        dialog: false,
        loading: false,
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