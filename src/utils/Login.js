import store from '../store'

function login(data) {
    store.state.user.token.access = data.access_token
    store.state.user.token.refresh = data.refresh_token
    store.state.user.id = data.id
    localStorage.setItem('access_token', data.access_token)
    localStorage.setItem('refresh_token', data.refresh_token)
    localStorage.setItem('id', data.id)
}

function clean() {
    store.state.user.token.access = ''
    store.state.user.token.refresh = ''
    store.state.user.id = ''
    store.state.user.status = false
}

export default {login, clean}