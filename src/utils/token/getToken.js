function get(that, username, password) {
    return that.$http.post(
        that.$store.state.api.root.app + that.$store.state.api.path.user.access + '?username=' + username + '&password=' + password,
        {},
    ).then(function (result) {
        return result.data
    }, function (result) {
        return result.data
    })
}

export default {get}