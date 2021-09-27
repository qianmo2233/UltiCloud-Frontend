import store from "@/store";

const url = 'https://panel.ultikits.com:4433/server/addserver'

function add(that, name, ip, serverUUID) {
    if (!(name && serverUUID)) {
        that.$snackbar.Launch('请将信息填写完整')
        return
    }
    that.loading = true
    let time = Date.now()
    let param = '?serverName=' + name + '&ownerId=' + localStorage.getItem('id') + '&serverIp=' + ip + '&serverDomain=' + serverUUID
    that.$http.post(
        url + param,
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
        ).then(function () {
        if (that.editedIndex > -1) {
            Object.assign(that.$store.state.list[that.editedIndex], that.editedItem)
        } else {
            that.$store.state.list.push(that.editedItem)
        }
        that.$snackbar.Launch('添加成功')
        that.loading = false
        that.$GetServer.getall(that)
        that.close()
    },function () {
        that.$Login.auth(that)
        that.$http.post(
            url + param,
            {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
            {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
        ).then(function () {
            if (that.editedIndex > -1) {
                Object.assign(that.$store.state.list[that.editedIndex], that.editedItem)
            } else {
                that.$store.state.list.push(that.editedItem)
            }
            that.$snackbar.Launch('添加成功')
            that.loading = false
            that.$GetServer.getall(that)
            that.close()
        })
    })
}

export default {add}
