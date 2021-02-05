import store from "@/store";

const url = 'http://panel.ultikits.com:8082/server/updateserver/'

function edit(that, name, ip, domain, id) {
    if (!(name && ip)) {
        that.$snackbar.Launch('请将信息填写完整')
        return
    }
    that.loading = true
    let time = Date.now()
    let param = '?ownerId=' + localStorage.getItem('id') + '&serverName=' + name + '&serverIp=' + ip + '&severDomain=' + domain
    that.$http.post(
        url + id + param,
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
        ).then(function () {
            if (that.editedIndex > -1) {
                Object.assign(that.$store.state.list[that.editedIndex], that.editedItem)
            } else {
                that.$store.state.list.push(that.editedItem)
            }
            that.loading = false
            that.$snackbar.Launch('修改成功')
            that.$GetServer.getall(that)
            that.close()
    }, function () {
        that.loading = false
        that.$snackbar.Launch('修改失败')
    })
}

export default {edit}