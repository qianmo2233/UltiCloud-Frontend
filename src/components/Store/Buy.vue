<template>
  <v-stepper v-model="e6" vertical class="elevation-0">
    <v-stepper-step :complete="e6 > 1" step="1">
      选择服务
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card class="mb-8 mt-2" flat>
        <v-row :class="$vuetify.breakpoint.mdAndUp? 'ml-2' : ''">
          <v-col cols="12" sm="12" md="5" lg="5">
            <v-hover v-slot="{hover}">
              <v-card elevation="24">
                <v-card-text class="text-center" style="position: relative;">
                  <h3>UltiKitsPro 会员</h3>
                  <v-list class="mt-2">
                    <v-list-item>
                      <v-list-item-icon><v-icon>mdi-lock-open-variant</v-icon></v-list-item-icon>
                      <v-list-item-title>解锁UltiTools付费功能</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon><v-icon>mdi-timeline-help-outline</v-icon></v-list-item-icon>
                      <v-list-item-title>贴心的售后服务</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon><v-icon>mdi-view-dashboard</v-icon></v-list-item-icon>
                      <v-list-item-title>强大易用的控制面板</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon><v-icon>mdi-update</v-icon></v-list-item-icon>
                      <v-list-item-title>永久享受更新</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card-text>
                <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out blue v-card--reveal white--text" v-ripple style="height: 100%;" @click="e6 = 2">
                    <h1>每月20CNY<small class="caption">起</small></h1>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="12" md="5" lg="5">
            <v-hover v-slot="{hover}">
              <v-card elevation="24">
                <v-card-text class="text-center" style="position: relative;">
                  <h3>UltiCloudPro 会员</h3>
                  <v-list class="mt-2">
                    <v-list-item>
                      <v-list-item-icon><v-icon>mdi-chart-box-outline</v-icon></v-list-item-icon>
                      <v-list-item-title>服务器实时数据统计</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon><v-icon>mdi-console</v-icon></v-list-item-icon>
                      <v-list-item-title>网页控制台</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon><v-icon>mdi-view-dashboard</v-icon></v-list-item-icon>
                      <v-list-item-title>强大易用的控制面板</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon><v-icon>mdi-account-group</v-icon></v-list-item-icon>
                      <v-list-item-title>快捷玩家管理</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon><v-icon>mdi-folder-network</v-icon></v-list-item-icon>
                      <v-list-item-title>在线文件管理</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon><v-icon>mdi-file-cog</v-icon></v-list-item-icon>
                      <v-list-item-title>可视化插件配置</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card-text>
                <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out blue-grey v-card--reveal white--text" style="height: 100%;">
                    <h1>敬请期待</h1>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-card>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">
      选择时长
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 3">
        继续
      </v-btn>
      <v-btn text class="mt-2">
        取消
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">
      选择支付方式
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 4">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      支付并开通
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 1">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  name: "Buy",
  data() {
    return {
      e6: 1
    }
  }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>