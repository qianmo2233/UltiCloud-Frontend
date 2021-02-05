import store from '../store'

const url = 'http://panel.ultikits.com:8082/user/'

function getall(that) {
    that.TableLoading = true
    let time = Date.now()
    if (store.state.user.status) {
        that.$http.post(
            url + localStorage.getItem('id') + '/' + 'allservers',
            {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
            {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
        ).then(function (result) {
            that.$store.commit('setServerList', result.data)
            that.TableLoading = false
        }, function () {
            that.$Login.auth(that)
            that.$http.post(
                url + localStorage.getItem('id') + '/' + 'allservers',
                {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
                {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
            ).then(function (result) {
                that.$store.commit('setServerList', result.data)
                that.TableLoading = false
            })
        })
    }
}

export default {getall}