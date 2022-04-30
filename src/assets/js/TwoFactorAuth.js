const CreateUrl = "https://api.moe-loli.ml/auth/totp/create"
const BindUrl = "https://api.moe-loli.ml/auth/totp/bind"
const StatusUrl = "https://api.moe-loli.ml/auth/totp/status"
const RemoveUrl = "https://api.moe-loli.ml/auth/totp/delete"

function create(that, success, error) {
    that.$http.get(CreateUrl + "?id=" + that.$store.state.user.profile.id + "&token=" + that.$store.state.user.auth.token.access).then(
        function (result) {
            success(that, result.data)
        },
        function (result) {
            error(that, result.data)
        }
    )
}

function bind(that, code, secret, success, error) {
    that.$http.get(BindUrl + "?id=" + that.$store.state.user.profile.id + "&token=" + that.$store.state.user.auth.token.access + "&secret=" + secret + "&code=" + code).then(
        function (result) {
            success(that, result.data)
        },
        function (result) {
            error(that, result.data)
        }
    )
}

function get(that, success, error) {
    that.$http.get(StatusUrl + "?id=" + that.$store.state.user.profile.id + "&token=" + that.$store.state.user.auth.token.access).then(
        function (result) {
            success(that, result.data)
        },
        function (result) {
            error(that, result.data)
        }
    )
}

function remove(that, success, error) {
    that.$http.get(RemoveUrl + "?id=" + that.$store.state.user.profile.id + "&token=" + that.$store.state.user.auth.token.access).then(
        function (result) {
            success(that, result.data)
        },
        function (result) {
            error(that, result.data)
        }
    )
}

export default {create, bind, get, remove}