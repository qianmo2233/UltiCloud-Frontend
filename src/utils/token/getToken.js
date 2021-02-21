function get(that, username, password, success, error) {
    that.$http.post(
        that.$store.state.api.root.app + that.$store.state.api.path.user.access + '?username=' + username + '&password=' + password,
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result)
    })
}

function refresh(that, token, success, error) {
    that.$http.post(
        that.$store.state.api.root.app + that.$store.state.api.path.user.refresh + '?refresh_token=' + token,
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result)
    })
}

export default {get, refresh}