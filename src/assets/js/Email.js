const EmailUrl = "https://api.ultikits.com/user/"

function sendEmail(that, success, error) {
    let time = Date.now()
    that.$http.post(
        EmailUrl + that.$store.state.user.profile.id + '/email/validate',
        {username: that.$store.state.user.profile.username, time: time, key: that.sign.getSignString(that.$store.state.user.profile.username, time)},
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function () {
        success(that)
    }, function (result) {
        error(that, result.data)
    })
}

function verify(that, code, success, error) {
    let time = Date.now()
    that.$http.post(
        EmailUrl + that.$store.state.user.profile.id + '/email/validate' + '?code=' + code,
        {username: that.$store.state.user.profile.username, time: time, key: that.sign.getSignString(that.$store.state.user.profile.username, time)},
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function () {
        success(that)
    }, function (result) {
        error(that, result.data)
    })
}

export default {sendEmail, verify}
