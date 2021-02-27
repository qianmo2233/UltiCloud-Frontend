export default {
    namespaced: true,
    state: {
        window: 1,
        server: {
            isActive: '',
            ownerId: '',
            serverDomain: '',
            serverId: -1,
            serverIp: '',
            serverName: '',
        },
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
    }
}
