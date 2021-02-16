function get(that, token, id) {
    return that.$http.post(
        that.$store.state.api.root.app + that.$store.state.api.path.user.profile + id,
        {},
        {headers: {Authorization: token}}
    ).then(function (result) {
        return result.data
    }, function (result) {
        return result.data
    })
}

export default {get}