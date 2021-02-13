function getToken(that, username, password) {
    that.$http.post(
        that.$store.state.api.root.auth + that.$store.state.api.path.oauth,
        {grant_type: 'password', scope: 'all', username: username, password: password},
        {headers: {Authorization: that.$Basic.token(that)}}
    ).then(function (result) {
        return result
    }, function (result) {
        return result
    })
}

function refreshToken(that, token) {
    that.$http.post(
        that.$store.state.api.root.auth + that.$store.state.api.path.oauth,
        {grant_type: 'refresh_token', refresh_token: token},
        {headers: {Authorization: that.$Basic.token(that)}},
    ).then(function (result) {
        return result
    }, function (result) {
        return result
    })
}

export default {getToken, refreshToken}