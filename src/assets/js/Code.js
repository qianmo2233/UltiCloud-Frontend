const ActiveKeyUrl = 'https://panel.ultikits.com:4433/user/active/'
const GetCodeUrl = 'https://panel.ultikits.com:4433/promotion/getPromoteCode/'
const RedeemUrl = 'https://panel.ultikits.com:4433/redeem/redeem'
const PromoUrl = 'https://panel.ultikits.com:4433/redeem/promo/redeemOrderId'

function activeKey(that, cdk, success, error) {
    that.$http.post(
        ActiveKeyUrl + that.$store.state.user.profile.id + '?cdkey=' + cdk,
        {},
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function () {
        success(that)
    }, function (result) {
        error(that, result.data)
    })
}

function getCode(that, id, success, error) {
    let time = Date.now()
    that.$http.post(
        GetCodeUrl + '?promote_type_id=' + id,
        {username: that.$store.state.user.profile.username, time: time, key: that.sign.getSignString(that.$store.state.user.profile.username, time)},
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function (result) {
        success(that, result.data.code)
    }, function (result) {
        error(that, result.data)
    })
}

function redeem(that, code, success, error) {
    let time = Date.now()
    that.$http.post(
        RedeemUrl + '?id=' + that.$store.state.user.profile.id + '&code=' + code,
        {username: that.$store.state.user.profile.username, time: time, key: that.sign.getSignString(that.$store.state.user.profile.username, time)},
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function () {
        success(that)
    }, function (result) {
        error(that, result.data)
    })
}

function promo(that, code, success, error) {
    let time = Date.now()
    that.$http.post(
        PromoUrl + '?promo_id=1' + '&order_id=' + code,
        {username: that.$store.state.user.profile.username, time: time, key: that.sign.getSignString(that.$store.state.user.profile.username, time)},
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function () {
        success(that)
    }, function (result) {
        error(that, result.data)
    })
}
export default {activeKey, getCode, redeem, promo}