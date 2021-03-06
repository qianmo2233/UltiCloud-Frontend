export default {
    namespaced: true,
    state: {
        dialog: false,
    },
    mutations: {
        setDialog(state, value) {
            state.dialog = value
        },
    },
    actions: {
        setDialog({commit}, data) {
            commit('setDialog', data)
        },
    }
}