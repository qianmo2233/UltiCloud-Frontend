<template>
  <v-app app>
    <SnackBar/>
    <NavBar/>
    <AppBar/>
    <vue-scroll>
      <v-main>
        <v-container fluid>
          <transition name="slide-y-reverse-transition" mode="out-in">
            <router-view/>
          </transition>
        </v-container>
      </v-main>
    </vue-scroll>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import AppBar from "@/components/AppBar";
import SnackBar from "@/components/SnackBar";

export default {
  name: 'App',
  components: {
    SnackBar,
    AppBar,
    NavBar,
  },

  data: () => ({
  }),

  created() {
    console.log('欢迎来到UltiCloud!\n版本:0.0.1[BETA]')
    console.log('前端作者:千沫qianmo\n后端作者: wisdomme')
    const url1 = 'http://panel.ultikits.com:8082/user/'
    const url2 = 'http://panel.ultikits.com:8082/user/refreshToken'
    if (localStorage.getItem('refresh_token') || localStorage.getItem('access_token') || localStorage.getItem('id')) {
      this.$http.post(url1 + localStorage.getItem('id'),
          {},
          {headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}}
      ).then(function (result) {
        let data = JSON.parse(JSON.stringify(result.data))
        this.$store.state.user.name = data.username
        this.$GetUser.data(data)
        this.$store.state.user.status = true
      }, ()=> {
        this.$http.post(url2 + '?refresh_token=' + localStorage.getItem('refresh_token'),
            {},
            {},
        ).then(function (result) {
          let data = JSON.parse(JSON.stringify(result.data))
          this.$Login.login(data)
          this.$http.post(url1 + localStorage.getItem('id'),
              {},
              {headers: {Authorization: 'Bearer ' + data.access_token}}
          ).then(function (result) {
            let data = JSON.parse(JSON.stringify(result.data))
            this.$store.state.user.name = data.username
            this.$GetUser.data(data)
            this.$store.state.user.status = true
          }, ()=> {
            localStorage.clear()
            this.$snackbar.Launch('登录状态已失效,请重新登录')
          })
        })
      })
    } else {
      localStorage.clear()
    }
  }
};
</script>
<style>
body{
  -moz-user-select:none;/*火狐*/
  -webkit-user-select:none;/*webkit浏览器*/
  -ms-user-select:none;/*IE10*/
  user-select:none;
}
</style>
