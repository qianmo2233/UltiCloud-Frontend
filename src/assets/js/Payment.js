const CreatePaymentUrl = "https://api.ultikits.com/payment/create"
const CheckPaymentUrl = "https://api.ultikits.com/payment/check"
const CancelPaymentUrl = "https://api.ultikits.com/payment/recall"
const HistoryPaymentUrl = "https://api.ultikits.com/payment/history"

function CreatePayment(that, amount, description, method, success, error) {
    let time = Date.now()
    that.$http.post(
        CreatePaymentUrl + '?id=' + localStorage.getItem('id') + '&amount=' + Math.trunc(amount * 100) + '&description=' + description + "&method=" + method,
        {username: that.$store.state.user.profile.username, time: time, key: that.sign.getSignString(that.$store.state.user.profile.username, time)},
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}},
    ).then(function (result) {
        success(that, result.data);
    }, function (result) {
        error(that, result.data)
    })
}

function CheckPayment(that, id, success, error) {
    let time = Date.now()
    that.$http.post(
        CheckPaymentUrl + '?id=' + that.$store.state.user.profile.id + '&trade_number=' + id,
        {username: that.$store.state.user.profile.username, time: time, key: that.sign.getSignString(that.$store.state.user.profile.username, time)},
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}},
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result.data)
    })
}

function CancelPayment(that, id, success, error) {
    let time = Date.now()
    that.$http.post(
        CancelPaymentUrl + '?id=' + that.$store.state.user.profile.id + '&trade_number=' + id,
        {username: that.$store.state.user.profile.username, time: time, key: that.sign.getSignString(that.$store.state.user.profile.username, time)},
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}},
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result.data)
    })
}

function GetHistory(that, success, error) {
    let time = Date.now()
    that.$http.post(
        HistoryPaymentUrl + '?id=' + that.$store.state.user.profile.id,
        {username: that.$store.state.user.profile.username, time: time, key: that.sign.getSignString(that.$store.state.user.profile.username, time)},
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}},
    ).then(function (result) {
        success(that, result.data)
    }, function(result) {
        error(that, result.data)
    })
}

export default {CreatePayment, CheckPayment, CancelPayment, GetHistory}
