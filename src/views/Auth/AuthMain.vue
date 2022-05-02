<template>
  <v-container fluid style="padding: 0!important; width: calc(100vw - 36px)">
    <v-row>
      <v-col cols="12" md="6" lg="9" sm="12" style="padding: 0!important" v-show="$vuetify.breakpoint.mdAndUp">
        <div style="width: 100%; height: calc(100vh + 12px); overflow: hidden!important">
          <v-img :src="require('/src/assets/img/auth.jpg')" width="100%" height="100%">
            <v-overlay absolute value="true">
              <h1 style="padding: -500px!important">欢迎来到 UltiCloud Desktop！</h1>
              <br>
              <p>登录并管理你的服务器</p>
            </v-overlay>
          </v-img>
        </div>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="12">
        <transition name="slide-fade" mode="out-in">
          <router-view/>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AuthMain",
  beforeRouteEnter(to, from, next) {
    next(that => {
      that.init.check(that)
      if (that.$store.state.user.auth.status) {
        that.$router.push({path: "/"}).then()
      }
    })
  }
}
</script>

<style scoped>

</style>