import store from '../store'

function is () {
    if (store.state.user.status) {
        if (store.state.user.pro !== "false") {
            return 'Pro会员'
        } else {
            return '普通会员'
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
            return '无'
        }
    } else {
        return ''
    }
}

export default {is, exptime}