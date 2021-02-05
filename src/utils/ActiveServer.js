import store from "@/store";

const url = 'http://panel.ultikits.com:8082/server/updateserver/'

function active(that, id, status) {
    let time = Date.now()
    that.$http.post(
        url + id + '?isActive=' + status,
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
    ).then(function () {
        that.$snackbar.Launch('授权修改成功')
    }, function () {
        that.$snackbar.Launch('授权修改失败')
    })
}

export default {active}