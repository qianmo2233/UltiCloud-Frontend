<template>
  <div>
    <transition name="slide-fade" mode="out-in">
      <router-view v-if="$store.state.user.auth.status"/>
      <v-container v-if="!$store.state.user.auth.status">
        <v-row class="d-flex justify-center">
          <v-col cols="12" lg="3" md="8" sm="12">
            <v-card class="global-loading" flat color="rgba(0,0,0,0)">
              <v-img v-show="!$vuetify.theme.dark" :src="require('/src/assets/img/banner-dark.png')"/>
              <v-img v-show="$vuetify.theme.dark" :src="require('/src/assets/img/banner.png')"/>
              <v-card-text class="text-center">
                <loading-bar/>
                <p class="mt-2">载入中</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </transition>
  </div>
</template>

<script>
import LoadingBar from "@/components/Layout/LoadingBar";
export default {
  name: "DashboardMain",
  components: {LoadingBar},
  beforeRouteEnter(to, from, next) {
    next(that => {
      that.init.check(that, function () {
        //
      })
    })
  }
}
</script>

<style scoped>

</style>