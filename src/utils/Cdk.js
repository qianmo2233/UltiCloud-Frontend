import store from "@/store";

const url = 'https://panel.ultikits.com:4433/user/active/'
const url1 = 'https://panel.ultikits.com:4433/promotion/getPromoteCode/'

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

function get(that, id) {
    that.loading = true
    let time = Date.now()
    that.$http.post(
        url1 + '?promote_type_id=' + id,
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
    ).then(function () {
        that.$snackbar.Launch('领取成功')
        that.loading = false
    }, function (result) {
        that.$snackbar.Launch('兑换失败: ' + result.data.msg)
        that.loading = false
    })
}

export default {active, get}