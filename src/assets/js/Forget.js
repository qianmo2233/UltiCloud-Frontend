const ForgetUrl = "https://api.ultikits.com/user/resetPassword"

function getCode(account, that, success, failure) {
    let time = Date.now()
    that.$http.post(
        ForgetUrl + "?username=" + account,
        {username: account, time: time, key: that.sign.getSignString(account, time)},
        {}
    ).then(function (result) {
        console.log(result)
        success(that, result.data)
    }, function (result) {
        failure(that, result.data)
    })
}

function verifyCode(account, code, that, success, failure) {
    let time = Date.now()
    that.$http.post(
        ForgetUrl + "?username=" + account + "&code=" + code,
        {username: account, time: time, key: that.sign.getSignString(account, time)},
        {}
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        failure(that, result.data)
    })
}

function resetPassword(account, token, password, that, success, failure) {
    let time = Date.now()
    that.$http.post(
        ForgetUrl + "?username=" + account + "&token=" + token + "&password=" + password,
        {username: account, time: time, key: that.sign.getSignString(account, time)},
        {}
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        failure(that, result.data)
    })
}

export default {getCode,verifyCode, resetPassword}
