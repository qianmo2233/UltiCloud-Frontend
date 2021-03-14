export default {
    namespaced: true,
    state: {
        window: 0
    },
    mutations: {
        setWindow(state, value) {
            state.window = value
        },
    },
    actions: {
        setWindow({commit}, data) {
            commit('setWindow', data)
        }
    }
}