export default {
    namespaced: true,
    state: {
        auth: {
            status: false,
            token: {
                access: '',
                refresh: '',
            },
        },
        email: {
            address: '',
            validated: false,
        },
        profile: {
            id: 0,
            username: '',
            join: '',
        },
        member: {
            pro: false,
            exp: '',
            max: '',
        },
    },
    mutations: {
        setStatus(state, value) {
            state.auth.status = value
        },
        setAccessToken(state, value) {
            state.auth.token.access = value
        },
        setRefreshToken(state, value) {
            state.auth.token.refresh = value
        },
        setEmailAddress(state, value) {
            state.email.address = value
        },
        setEmailValidated(state, value) {
            state.email.validated = value
        },
        setId(state, value) {
            state.profile.id = value
        },
        setUsername(state, value) {
            state.profile.username = value
        },
        setJoin(state, value) {
            state.profile.join = value
        },
        setPro(state, value) {
            state.member.pro = value
        },
        setExp(state, value) {
            state.member.exp(value)
        },
        setMax(state, value) {
            state.member.max = value
        },
    },
    actions: {
        setStatus({commit}, data) {
            commit('setStatus', data)
        },
        setAccessToken({commit}, data) {
            commit('setAccessToken', data)
        },
        setRefreshToken({commit}, data) {
            commit('setRefreshToken', data)
        },
        setEmailAddress({commit}, data) {
            commit('setEmailAddress', data)
        },
        setEmailValidated({commit}, data) {
            commit('setEmailValidated', data)
        },
        setId({commit}, data) {
            commit('setId', data)
        },
        setUsername({commit}, data) {
            commit('setUsername', data)
        },
        setJoin({commit}, data) {
            commit('setJoin', data)
        },
        setPro({commit}, data) {
            commit('setPro', data)
        },
        setExp({commit}, data) {
            commit('setExp', data)
        },
        setMax({commit}, data) {
            commit('setMax', data)
        },
    },
}