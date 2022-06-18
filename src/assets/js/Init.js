function check(that, callback) {
    if (localStorage.getItem("refresh_token") == null){
        that.$router.push({path: "/auth"}).then()
        return;
    }
    that.auth.refreshToken(localStorage.getItem("refresh_token"), that, function (that, data) {
        that.auth.saveToken(data.access_token, data.refresh_token, data.id, that)
        that.user.getUserInfo(
            that.$store.state.user.auth.token.access,
            that.$store.state.user.profile.id,
            that,
            function (that, data) {
                that.user.saveUserInfo(that, data)
                that.tfa.get(that, function (that, data) {
                    that.$store.dispatch('setTFAStatus', data.status === 'enabled').then()
                    callback(that)
                }, function () {
                    that.snackbar.Launch(that, "MoeLoli 服务异常")
                    callback(that)
                })
            },
            function (that, data) {
                localStorage.removeItem("access_token")
                localStorage.removeItem("refresh_token")
                localStorage.removeItem("id")
                that.$router.push({path: "/auth"}).then()
                that.snackbar.Launch(that, "身份令牌无效,请重新登录")
                console.log(data)
            }
        )
    }, function (that, data) {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        localStorage.removeItem("id")
        that.$router.push({path: "/auth"}).then()
        that.snackbar.Launch(that, "身份令牌无效,请重新登录")
        console.log(data)
    })
}

export default {check}