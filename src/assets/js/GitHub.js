const LatestVersionUrl = 'https://api.github.com/repos/wisdommen/UltiTools/releases/latest'
const PlayersNowUrl = 'https://bstats.org/api/v1/plugins/8652/charts/players/data/?maxElements=1'
const ServersNowUrl = 'https://bstats.org/api/v1/plugins/8652/charts/servers/data/?maxElements=1'

function getLatestVersion(that, success, error) {
    that.$http.get(LatestVersionUrl).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result.data)
    })
}

function getPlayers(that, success, error) {
    that.$http.get(PlayersNowUrl).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result.data)
    })
}

function getServers(that, success, error) {
    that.$http.get(ServersNowUrl).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result.data)
    })
}

export default {getLatestVersion, getPlayers, getServers}