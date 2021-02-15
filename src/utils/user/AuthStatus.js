function save(that, UserObject, AccessToken, RefreshToken) {
    try {
        that.$store.dispatch('user/setId', UserObject.id)
        that.$store.dispatch('user/setAccessToken', AccessToken)
        that.$store.dispatch('user/setRefreshToken', RefreshToken)
        that.$store.dispatch('user/setEmailAddress', UserObject.email)
        that.$store.dispatch('user/setEmailValidated', UserObject.emailValidated)
        that.$store.dispatch('user/setPro', UserObject.pro)
        that.$store.dispatch('user/setExp', UserObject.proExpiryDate)
        that.$store.dispatch('user/setUsername', UserObject.username)
        that.$store.dispatch('user/setMax', UserObject.maxServer)
        that.$store.dispatch('user/setJoin', UserObject.joinDate)
        that.$store.dispatch('user/setStatus', true)

        localStorage.setItem('access_token', AccessToken)
        localStorage.setItem('refresh_token', RefreshToken)
        localStorage.setItem('id', UserObject.id)
    } catch (e) {
        that.$SneckBar.Launch(that, '登陆失败')
        console.log('出现异常:' + e)
        console.log('请将报错截图发送给管理员')
    }
    
}

export default {save}