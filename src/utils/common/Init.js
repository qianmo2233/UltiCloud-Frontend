function boot(that, callback) {
    if (localStorage.getItem('access_token') && localStorage.getItem('refresh_token') && localStorage.getItem('id')) {
        that.$store.dispatch('user/setAccessToken', localStorage.getItem('access_token')).then()
        that.$store.dispatch('user/setRefreshToken', localStorage.getItem('refresh_token')).then()
        that.$store.dispatch('user/setId', localStorage.getItem('id')).then()
        that.$getProfile.get(that, that.$store.state.user.auth.token.access, that.$store.state.user.profile.id, function (that, UserObject) {
            that.$AuthStatus.save(that, UserObject, that.$store.state.user.auth.token.access, that.$store.state.user.auth.token.refresh)
            that.$store.dispatch('user/setStatus', true).then()
            that.$store.dispatch('layout/setRefresh', false).then()
            callback(that)
        }, function (that, Result) {
            that.$getToken.refresh(that, that.$store.state.user.auth.token.refresh, function (that, TokenObject) {
                that.$getProfile.get(that, TokenObject.access_token, TokenObject.id, function (that, UserObject) {
                    that.$AuthStatus.save(that, UserObject, TokenObject.access_token, TokenObject.refresh_token)
                    that.$store.dispatch('layout/setRefresh', false).then()
                    callback(that)
                }, function () {
                    that.$SnackBar.Launch(that, '登录状态已经失效,请重新登录' + Result.data.error)
                    that.$store.dispatch('auth/setDialog', true).then()
                    that.$store.dispatch('layout/setRefresh', false).then()
                })
            })
        })
    } else {
        that.$store.dispatch('auth/setDialog', true).then()
    }
}

export default {boot}