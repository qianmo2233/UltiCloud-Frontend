<template>
  <transition name="slide-fade" mode="out-in">
    <v-container v-if="$store.state.user.auth.status">
      <v-row>
        <v-col cols="12" lg="3" md="4" sm="12">
          <v-card elevation="12" rounded>
            <v-card-text>
              <v-list nav dense>
                <v-list-item link to="profile">
                  <v-list-item-icon>
                    <v-icon>mdi-account-details</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>基本信息</v-list-item-title>
                    <v-list-item-subtitle>Basic Profiles</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link to="style">
                  <v-list-item-icon>
                    <v-icon>mdi-palette</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>界面设置 未完成</v-list-item-title>
                    <v-list-item-subtitle>View Settings</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="9" md="8" sm="12">
          <router-view/>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="!$store.state.user.auth.status">
      <v-row class="d-flex justify-center">
        <v-col cols="12" lg="3" md="8" sm="12">
          <v-card class="global-loading" flat color="rgba(0,0,0,0)">
            <v-card-text class="text-center">
              <v-progress-circular rounded indeterminate :size="50" :width="5" color="primary"/>
              <p class="mt-2">载入中</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </transition>
</template>

<script>
export default {
  name: "AccountMain",
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