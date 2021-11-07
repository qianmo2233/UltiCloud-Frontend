const LatestVersionUrl = 'https://api.github.com/repos/wisdommen/UltiTools/releases/latest'

function getLatestVersion(that, success, error) {
    that.$http.get(LatestVersionUrl).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result.data)
    })
}

export default {getLatestVersion}