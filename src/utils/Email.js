import store from "@/store";

const url = 'https://panel.ultikits.com:4433/user/'

function send(that) {
    let time = Date.now()
    that.$http.post(
        url + localStorage.getItem('id') + '/email/validate',
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
    ).then(function () {
        that.$snackbar.Launch('邮件发送成功')
    }, function () {
        that.$snackbar.Launch('邮件发送失败')
    })
}

function verify(that, code) {
    let time = Date.now()
    that.$http.post(
        url + localStorage.getItem('id') + '/email/validate' + '?code=' + code,
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
    ).then(function () {
        that.$snackbar.Launch('邮箱验证成功')
    }, function () {
        that.$snackbar.Launch('邮箱验证失败')
    })
}

export default {send, verify}