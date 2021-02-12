import store from '../store'

function login(that, username, password) {
    const url1 = 'https://panel.ultikits.com:4433/user/getToken'
    const url2 = 'https://panel.ultikits.com:4433/user/'
    let time = Date.now()
    that.$http.post(
        url1 + '?username=' + username + '&password=' + password,
        {username: username, time: time, key: that.$Key.Get(username, time)}
    ).then(function (result) {
            if (result.data == "" || result.data == null) {
                that.$snackbar.Launch(that.$i18n.t(store.state.LoginMsg.LoginError))
                that.LoginForm.loading = false
                return
            }
            let data = JSON.parse(JSON.stringify(result.data))
            store.state.user.token.access = data.access_token
            store.state.user.token.refresh = data.refresh_token
            store.state.user.id = data.id
            that.$store.dispatch('setMaxServer', data.maxServer)
            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('refresh_token', data.refresh_token)
            localStorage.setItem('id', data.id)
            that.$http.post(
                url2 + that.$store.state.user.id,
                {},
                {headers: {Authorization: 'Bearer ' + that.$store.state.user.token.access},}
            ).then(function (result) {
                    let data = JSON.parse(JSON.stringify(result.data))
                    that.$store.state.user.name = data.username
                    that.$GetUser.data(data)
                    that.$store.state.user.status = true
                    that.LoginForm.dialog = !that.$store.state.user.status
                    if (that.$store.state.user.status) {
                        that.$snackbar.Launch(that.$i18n.t(store.state.LoginMsg.LoginSuccess))
                        that.LoginForm.loading = false
                    }
                }, () => {
                    store.state.user.token.access = ''
                    store.state.user.token.refresh = ''
                    store.state.user.id = ''
                    store.state.user.status = false
                    that.$snackbar.Launch(that.$i18n.t(store.state.LoginMsg.ConnErr) + ':' + result.data.msg)
                    that.LoginForm.loading = false
                }
            )
        }, (result) => {
            that.$snackbar.Launch(that.$i18n.t(store.state.LoginMsg.ConnErr) + ':' + result.data.msg)
            that.LoginForm.loading = false
        }
    )
}

function auth(that) {
    const url1 = 'https://panel.ultikits.com:4433/user/'
    const url2 = 'https://panel.ultikits.com:4433/user/refreshToken'
    if (localStorage.getItem('refresh_token') || localStorage.getItem('access_token') || localStorage.getItem('id')) {
        that.$http.post(url1 + localStorage.getItem('id'),
            {},
            {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
        ).then(function (result) {
            let data = JSON.parse(JSON.stringify(result.data))
            that.$store.state.user.name = data.username
            that.$GetUser.data(data)
            that.$store.dispatch('setMaxServer', Number(data.maxServer))
            that.$store.state.user.status = true
        }, ()=> {
            that.$http.post(url2 + '?refresh_token=' + localStorage.getItem('refresh_token'),
                {},
                {},
            ).then(function (result) {
                let data = JSON.parse(JSON.stringify(result.data))
                store.state.user.token.access = data.access_token
                store.state.user.token.refresh = data.refresh_token
                store.state.user.id = data.id
                that.$store.dispatch('setMaxServer', Number(data.maxServer))
                localStorage.setItem('access_token', data.access_token)
                localStorage.setItem('refresh_token', data.refresh_token)
                localStorage.setItem('id', data.id)
                that.$http.post(url1 + localStorage.getItem('id'),
                    {},
                    {headers: {Authorization: 'Bearer ' + data.access_token}}
                ).then(function (result) {
                    let data = JSON.parse(JSON.stringify(result.data))
                    that.$store.dispatch('setMaxServer', Number(data.maxServer))
                    that.$store.state.user.name = data.username
                    that.$GetUser.data(data)
                    that.$store.state.user.status = true
                }, ()=> {
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('refresh_token')
                    localStorage.removeItem('id')
                    store.state.user.status = false
                    that.$snackbar.Launch(that.$i18n.t(store.state.LoginMsg.Invalid))
                })
            })
        })
    } else {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('id')
    }
}

export default {login, auth}