const url = 'https://panel.ultikits.com:4433/user/adduser'

function reg(that, username, password, email) {
    that.RegLoading = true
    let time = Date.now()
    that.$http.post(
        url + '?username=' + username + '&password=' + password + '&email=' + email,
        {username: username, time: time, key: that.$Key.Get(username, time)},
        {}
    ).then(function () {
        that.$snackbar.Launch('注册成功,请登录')
        that.RegLoading = false
    }, function (result) {
        that.$snackbar.Launch('注册失败: ' + result.data.msg)
        that.RegLoading = false
    })
}

export default {reg}