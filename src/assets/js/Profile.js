const EditProfileUrl = "https://panel.ultikits.com:4433/user/updateuser/"

function editEmail(that, data, success, error) {
    let time = Date.now()
    that.$http.post(
        EditProfileUrl + that.$store.state.user.profile.id + '?email=' + data,
        {username: that.$store.state.user.profile.username, time: time, key: that.sign.getSignString(that.$store.state.user.profile.username, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}},
    ).then(function () {
        success(that)
    }, function (result) {
        error(that, result.data)
    })
}

function editPassword(that, data, success, error) {
    let time = Date.now()
    that.$http.post(
        EditProfileUrl + that.$store.state.user.profile.id + '?password=' + data,
        {username: that.$store.state.user.profile.username, time: time, key: that.sign.getSignString(that.$store.state.user.profile.username, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}},
    ).then(function () {
        success(that)
    }, function (result) {
        error(that, result.data)
    })
}

export default {editEmail, editPassword}