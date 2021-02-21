export default {
    namespaced: true,
    state: {
        list: [],
        loading: false,
        headers: [
            {text: 'ID', value: 'serverId', align: 'start'},
            {text: '服务器名称', value: 'serverName',},
            {text: 'IP地址', value: 'serverIp' },
            {text: '域名', value: 'serverDomain' },
            {text: '操作', value: 'actions', sortable: false },
        ],
    },
    mutations: {
        setList(state, value) {
            state.list = value
        },
        setLoading(state, value) {
            state.loading = value
        },
    },
    actions: {
        setList({commit}, data) {
            commit('setList', data)
        },
        setLoading({commit}, data) {
            commit('setLoading', data)
        }
    }
}