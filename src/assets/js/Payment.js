const CreatePaymentUrl = "https://panel.ultikits.com:4433/payment/create"
const CheckPaymentUrl = "https://panel.ultikits.com:4433/payment/check"
const CancelPaymentUrl = "https://panel.ultikits.com:4433/payment/recall"

function CreatePayment(that, amount, description, success, error) {
    let time = Date.now()
    that.$http.post(
        CreatePaymentUrl + '?id=' + localStorage.getItem('id') + '&amount=' + amount + '&description=' + description,
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

export default {CreatePayment, CheckPayment, CancelPayment}