import store from "@/store";

const url = 'https://panel.ultikits.com:4433/server/updateserver/'

function active(that, id, status) {
    let time = Date.now()
    that.$http.post(
        url + id + '?ownerId=' + localStorage.getItem('id') + '&isActive=' + status,
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
    ).then(function () {
        that.$snackbar.Launch('授权修改成功')
        that.$GetServer.getall(that)
    }, function () {
        that.$snackbar.Launch('授权修改失败')
    })
}

export default {active}