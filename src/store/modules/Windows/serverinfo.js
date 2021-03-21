export default {
    namespaced: true,
    state: {
        window: 0,
        server: {}
    },
    mutations: {
        setWindow(state, value) {
            state.window = value
        },
        setServer(state, value) {
            state.server = value
        }
    },
    actions: {
        setWindow({commit}, data) {
            commit('setWindow', data)
        },
        setServer({commit}, data) {
            commit('setServer', data)
        }
    },
}