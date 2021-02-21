function get(that, token, id, success, error) {
    return that.$http.post(
        that.$store.state.api.root.app + that.$store.state.api.path.user.profile + id,
        {},
        {headers: {Authorization: 'Bearer ' + token}}
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result)
    })
}

export default {get}