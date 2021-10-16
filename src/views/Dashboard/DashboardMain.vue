<template>
  <div>
    <transition name="slide-fade" mode="out-in">
      <router-view v-if="$store.state.user.auth.status"/>
    </transition>
    <v-container v-if="!$store.state.user.auth.status">
      <v-row class="d-flex justify-center">
        <v-col cols="12" lg="3" md="8" sm="12">
          <v-card class="global-loading" flat>
            <v-card-text class="text-center">
              <v-progress-circular rounded indeterminate :size="50" :width="5" color="primary"/>
              <p class="mt-2">载入中</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DashboardMain",
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