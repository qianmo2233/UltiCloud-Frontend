import store from "@/store";

const url = 'https://panel.ultikits.com:4433/user/updateuser/'

function email(that, data) {
    that.loading = true
    let time = Date.now()
    that.$http.post(
        url + localStorage.getItem('id') + '?email=' + data,
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}},
    ).then(function () {
        that.loading = false
        that.email = ''
        that.$snackbar.Launch('信息修改成功')
    }, function (result) {
        that.loading = false
        that.$snackbar.Launch('信息修改失败: ' + result.data)
    })
}

function password(that, data) {
    that.loading = true
    let time = Date.now()
    that.$http.post(
        url + localStorage.getItem('id') + '?password=' + data,
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}},
    ).then(function () {
        that.loading = false
        that.pwd = ''
        that.$snackbar.Launch('信息修改成功')
    }, function (result) {
        that.loading = false
        that.$snackbar.Launch('信息修改失败: ' + result.data)
    })
}

export default {email, password}