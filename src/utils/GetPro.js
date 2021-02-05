import store from '../store'

function is () {
    if (store.state.user.status) {
        if (store.state.user.pro !== "false") {
            return 'Pro member'
        } else {
            return 'Normal member'
        }
    } else {
        return ''
    }
}

function exptime() {
    if (store.state.user.status) {
        if (store.state.user.pro !== "false") {
            return store.state.user.proExpiryDate
        } else {
            return '-'
        }
    } else {
        return ''
    }
}

export default {is, exptime}