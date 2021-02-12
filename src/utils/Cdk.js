const url = 'https://panel.ultikits.com:4433/user/active/'

function active(that, cdk) {
    that.cdk.loading = true
    that.$http.post(
        url + localStorage.getItem('id') + '?cdkey=' + cdk,
        {},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
    ).then(function () {
        that.$snackbar.Launch('兑换成功')
        that.cdk.loading = false
    }, function (result) {
        that.$snackbar.Launch('兑换失败: ' + result.data.msg)
        that.cdk.loading = false
    })
}

export default {active}