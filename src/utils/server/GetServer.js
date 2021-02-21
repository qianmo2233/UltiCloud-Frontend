function getList(that, success, error) {
    let time = Date.now()
    that.$http.post(
        that.$store.state.api.root.app + '/user/' + that.$store.state.user.profile.id + that.$store.state.api.path.user.server,
        {
            username: that.$store.state.user.profile.username,
            time: time,
            key: that.$Sign.get(that, that.$store.state.user.profile.username, time)
        },
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result.data)
    })
}

function Edit(that, name, ip, domain, id, success, error) {
    let time = Date.now()
    that.$http.post(
        that.$store.state.api.root.app
        + that.$store.state.api.path.server.update
        + id
        + '?ownerId=' + that.$store.state.user.profile.id
        + '&serverName=' + name
        + '&serverIp=' + ip
        + '&severDomain=' + domain,
        {
            username: that.$store.state.user.profile.username,
            time: time,
            key: that.$Sign.get(that, that.$store.state.user.profile.username, time)
        },
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}},
    ).then(function () {
        success(that)
    }, function () {
        error(that)
    })
}

function Delete(that, id, success, error) {
    let time = Date.now()
    that.$http.post(
        that.$store.state.api.root.app + that.$store.state.api.path.server.delete + id + '?ownerId=' + that.$store.state.user.profile.id,
        {
            username: that.$store.state.user.profile.username,
            time: time,
            key: that.$Sign.get(that, that.$store.state.user.profile.username, time)
        },
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}},
    ).then(function () {
        success(that)
    }, function () {
        error(that)
    })
}

function Add(that, name, ip, domain, success, error) {
    let time = Date.now()
    that.$http.post(
        that.$store.state.api.root.app
        + that.$store.state.api.path.server.add
        + '?serverName=' + name
        + '&ownerId=' + that.$store.state.user.profile.id
        + '&serverIp=' + ip
        + '&serverDomain=' + domain,
        {
            username: that.$store.state.user.profile.username,
            time: time,
            key: that.$Sign.get(that, that.$store.state.user.profile.username, time)
        },
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}},
    ).then(function () {
        success(that)
    }, function () {
        error(that)
    })
}

export default {getList, Edit, Delete, Add}