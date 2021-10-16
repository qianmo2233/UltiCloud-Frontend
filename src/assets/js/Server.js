const GetServerUrl = "https://panel.ultikits.com:4433/user/"
const UpdateServerUrl = "https://panel.ultikits.com:4433/server/updateserver/"
const AddServerUrl = "https://panel.ultikits.com:4433/server/addserver"
const DeleteServerUrl = "https://panel.ultikits.com:4433/server/delserver/"

function getList(that, success, error) {
    let time = Date.now()
    that.$http.post(
        GetServerUrl + that.$store.state.user.profile.id + "/allservers",
        {
            username: that.$store.state.user.profile.username,
            time: time,
            key: that.sign.getSignString(that.$store.state.user.profile.username, time)
        },
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result.data)
    })
}

function updateActive(that, id, status, success, error) {
    let time = Date.now()
    that.$http.post(
        UpdateServerUrl + id + '?ownerId=' + that.$store.state.user.profile.id + '&isActive=' + status,
        {
            username: that.$store.state.user.profile.username,
            time: time,
            key: that.sign.getSignString(that.$store.state.user.profile.username, time)
        },
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function () {
        success(that)
    }, function () {
        error(that)
    })
}

function add(that, name, uuid, ip, success, error) {
    let time = Date.now()
    that.$http.post(
        AddServerUrl + '?serverName=' + name + '&ownerId=' + that.$store.state.user.profile.id + '&serverIp=' + ip + '&serverDomain=' + uuid,
        {
            username: that.$store.state.user.profile.username,
            time: time,
            key: that.sign.getSignString(that.$store.state.user.profile.username, time)
        },
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function () {
        success(that)
    }, function (result) {
        error(that, result.data)
    })
}

function deleteServer(that, id, success, error) {
    let time = Date.now()
    that.$http.post(
        DeleteServerUrl + id + '?ownerId=' + that.$store.state.user.profile.id,
        {
            username: that.$store.state.user.profile.username,
            time: time,
            key: that.sign.getSignString(that.$store.state.user.profile.username, time)
        },
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function () {
        success(that)
    }, function (result) {
        error(that, result.data)
    })
}

function updateServer(that, id, ip, uuid, name, success, error) {
    let time = Date.now()
    that.$http.post(
        UpdateServerUrl + id + '?ownerId=' + that.$store.state.user.profile.id + '&serverName=' + name + '&serverIp=' + ip + '&severDomain=' + uuid,
        {
            username: that.$store.state.user.profile.username,
            time: time,
            key: that.sign.getSignString(that.$store.state.user.profile.username, time)
        },
        {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
    ).then(function () {
        success(that)
    }, function (result) {
        error(that, result.data)
    })
}

export default {getList, updateActive, add, deleteServer, updateServer}