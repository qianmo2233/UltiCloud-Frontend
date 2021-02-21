function save(that, UserObject, AccessToken, RefreshToken) {
    try {
        that.$store.dispatch('user/setId', UserObject.id).then()
        that.$store.dispatch('user/setAccessToken', AccessToken).then()
        that.$store.dispatch('user/setRefreshToken', RefreshToken).then()
        that.$store.dispatch('user/setEmailAddress', UserObject.email).then()
        that.$store.dispatch('user/setEmailValidated', UserObject.emailValidated).then()
        that.$store.dispatch('user/setPro', UserObject.pro).then()
        that.$store.dispatch('user/setExp', UserObject.proExpiryDate).then()
        that.$store.dispatch('user/setUsername', UserObject.username).then()
        that.$store.dispatch('user/setMax', UserObject.maxServer).then()
        that.$store.dispatch('user/setJoin', UserObject.joinDate).then()
        that.$store.dispatch('user/setStatus', true).then()

        localStorage.setItem('access_token', AccessToken)
        localStorage.setItem('refresh_token', RefreshToken)
        localStorage.setItem('id', UserObject.id)
    } catch (e) {
        that.$SnackBar.Launch(that, '登陆失败')
        console.log('出现异常:' + e)
        console.log('请将报错截图发送给管理员')
    }
}

function clear() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('id')
    location.reload()
}

export default {save, clear}