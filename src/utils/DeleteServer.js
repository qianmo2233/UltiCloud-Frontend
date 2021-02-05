import store from "@/store";

const url = 'http://panel.ultikits.com:8082/server/delserver/'

function del(that, id) {
    that.loading = true
    let time = Date.now()
    that.$http.post(
        url + id + '?ownerId=' + localStorage.getItem('id'),
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
        ).then(function () {
        that.$store.state.list.splice(that.editedIndex, 1)
        that.loading = false
        that.$snackbar.Launch('删除成功')
        that.closeDelete()
    }, function () {
        that.$Login.auth(that)
        that.$http.post(
            url + id,
            {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
            {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
        ).then(function () {
            that.$store.state.list.splice(that.editedIndex, 1)
            that.loading = false
            that.$snackbar.Launch('删除成功')
            that.closeDelete()
        })
    })
}

export default {del}