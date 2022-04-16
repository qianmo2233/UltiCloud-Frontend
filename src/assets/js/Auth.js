const GetTokenUrl = "https://panel.ultikits.com:4433/user/getToken"
const RefreshTokenUrl = "https://panel.ultikits.com:4433/user/refreshToken"
const VerifyUrl = "https://recaptcha.moe-loli.ml/recaptcha/verify.php"

function getToken(username, password, that, success, failure) {
    that.$http.post(
        GetTokenUrl + "?username=" + username + "&password=" + password,
        {},
        {}
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        failure(that, result.data)
    })
}

function refreshToken(token, that, success, failure) {
    that.$http.post(
        RefreshTokenUrl + "?refresh_token=" + token,
        {},
        {},
    ).then(function(result) {
        success(that, result.data)
    }, function (result) {
        failure(that, result.data)
    })
}

function saveToken(AccessToken, RefreshToken, id, that) {
    that.$store.dispatch("setAccessToken", AccessToken).then()
    that.$store.dispatch("setRefreshToken", RefreshToken).then()
    that.$store.dispatch("setId", id).then()
    localStorage.setItem("access_token", AccessToken)
    localStorage.setItem("refresh_token", RefreshToken)
    localStorage.setItem("id", id)
}

function logout(that) {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("id")
    that.$router.go(0)
}

function verify(that, success, error) {
    that.$http.get(
        VerifyUrl + "?token=" + that.$store.state.layout.captcha.token,
        {},
        {},
    ).then(function (result) {
        if (result.data.status === 'success') {
            success(that)
        } else {
            error(that)
        }
    })
}

export default {getToken, refreshToken, saveToken, logout, verify}