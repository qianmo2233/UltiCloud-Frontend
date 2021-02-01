import store from '../store'

function login(data) {
    store.state.user.token.access = data.access_token
    store.state.user.token.access = data.refresh_token
    store.state.user.id = data.id
}

function clean() {
    store.state.user.token.access = ''
    store.state.user.token.access = ''
    store.state.user.id = ''
    store.state.user.status = false
}

export default {login, clean}