const getUserInfoUrl = "https://panel.ultikits.com:4433/user/"

function getUserInfo(token, id, that, success, failure) {
    that.$http.post(
        getUserInfoUrl + id,
        {},
        {headers: {Authorization: 'Bearer ' + token}}
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        failure(that, result.data)
    })
}

function saveUserInfo(that, UserData) {
    that.$store.dispatch('setId', UserData.id).then()
    that.$store.dispatch('setEmailAddress', UserData.email).then()
    that.$store.dispatch('setEmailValidated', UserData.emailValidated).then()
    that.$store.dispatch('setPro', UserData.pro).then()
    that.$store.dispatch('setExp', UserData.proExpiryDate).then()
    that.$store.dispatch('setUsername', UserData.username).then()
    that.$store.dispatch('setMax', UserData.maxServer).then()
    that.$store.dispatch('setJoin', UserData.joinDate).then()
    that.$store.dispatch('setStatus', true).then()
}

export default {getUserInfo, saveUserInfo}