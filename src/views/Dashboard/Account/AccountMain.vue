<template>
  <transition name="slide-fade" mode="out-in">
    <v-container v-if="$store.state.user.auth.status">
      <v-row>
        <v-col cols="12" lg="3" md="4" sm="12">
          <v-card elevation="12" rounded>
            <v-card-text>
              <v-list nav dense>
                <v-subheader>
                  账户 Account
                  <v-divider inset/>
                </v-subheader>
                <v-list-item link to="profile">
                  <v-list-item-icon>
                    <v-icon>mdi-account-details</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>基本信息</v-list-item-title>
                    <v-list-item-subtitle>Basic Profiles</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link to="tfa">
                  <v-list-item-icon>
                    <v-icon>mdi-key</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      双重验证
                      <v-badge color="indigo" class="ml-1" content="Beta"/>
                    </v-list-item-title>
                    <v-list-item-subtitle>Two Factor Authorization</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-subheader>
                  其他 Other
                  <v-divider inset/>
                </v-subheader>
                <v-list-item link to="style">
                  <v-list-item-icon>
                    <v-icon>mdi-palette</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      界面设置
                      <v-badge color="indigo" class="ml-1" content="Dev"/>
                    </v-list-item-title>
                    <v-list-item-subtitle>View Settings</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="9" md="8" sm="12">
          <transition name="fade-transition" mode="out-in">
            <router-view/>
          </transition>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="!$store.state.user.auth.status">
      <v-row class="d-flex justify-center">
        <v-col cols="12" lg="3" md="8" sm="12">
          <v-card class="global-loading" flat color="rgba(0,0,0,0)">
            <v-card-text class="text-center">
              <v-progress-circular rounded indeterminate :size="50" :width="5" color="indigo"/>
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