const GetServerUrl = "https://panel.ultikits.com:4433/user/"

function getList(that, success, error) {
    let time = Date.now()
    that.$http.post(
        GetServerUrl + that.$store.state.user.profile.id + "/allservers",
        {
            username: that.$store.state.user.profile.username,
            time: time,
            key: that.sign.getSignString(that.$store.state.user.profile.username, time)
        },
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result.data)
    })
}

export default {getList}