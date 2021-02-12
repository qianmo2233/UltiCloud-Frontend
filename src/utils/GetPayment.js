import store from "@/store";

const url1 = 'https://panel.ultikits.com:4433/payment/history'
const url2 = 'https://panel.ultikits.com:4433/payment/create'
const url3 = 'https://panel.ultikits.com:4433/payment/check'
const url4 = 'https://panel.ultikits.com:4433/payment/recall'

function all(that) {
    let time = Date.now()
    that.$http.post(
        url1 + '?id=' + localStorage.getItem('id'),
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}},
    ).then(function (result) {
        that.$store.commit('setPaymentList', result.data)
    })
}

function create(that, amount, description) {
    that.pay.loading = true
    let time = Date.now()
    that.$http.post(
        url2 + '?id=' + localStorage.getItem('id') + '&amount=' + amount + '&description=' + description,
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}},
    ).then(function (result) {
        that.pay.id = result.data.alipay_trade_precreate_response.out_trade_no
        that.pay.url = result.data.alipay_trade_precreate_response.qr_code
        that.pay.amount = that.total
        that.$snackbar.Launch('订单已生成,请在弹出的对话框进行支付')
        that.dialog = true
        that.$GetPayment.all(that)
        that.pay.loading = false
    }, function () {
        that.$snackbar.Launch('订单生成失败')
        that.pay.loading = false
    })
}

function check(that, id) {
    that.loading = true
    let time = Date.now()
    that.$http.post(
        url3 + '?id=' + localStorage.getItem('id') + '&trade_number=' + id,
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
    ).then(function (result) {
        if (result.data.alipay_trade_query_response.trade_status == 'TRADE_SUCCESS') {
            that.loading = false
            that.$snackbar.Launch('订单支付成功')
            that.dialog = false
            that.$GetPayment.all(that)
        }
    }, function () {
        that.loading = false
        that.$snackbar.Launch('订单查询失败')
    })
}

function cancel(that, id) {
    that.loading = true
    let time = Date.now()
    that.$http.post(
        url4 + '?id=' + localStorage.getItem('id') + '&trade_number=' + id,
        {username: store.state.user.name, time: time, key: that.$Key.Get(store.state.user.name, time)},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
    ).then(function () {
        that.loading = false
        that.$snackbar.Launch('订单取消成功')
        that.dialog = false
        that.$GetPayment.all(that)
    })
}

export default {all, create, check, cancel}