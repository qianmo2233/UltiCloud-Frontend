<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-alert border="left" colored-border type="info" elevation="6">
          0.2.4Beta更新: 添加了兑换码功能;修复了一些BUG;修改了登录界面的那一句有误导性的提示
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" lg="6" sm="6">
        <v-card class="mx-auto elevation-6">
          <v-card-text>
            <div>欢迎</div>
            <p class="display-1 text--primary">欢迎来到全新的UltiCloud云平台!</p>
            <p>新手入门</p>
            <div class="text--primary">
              为方便各位用户更好地使用UltiKits系列插件和管理服务器,特别开发了此平台!<br>
              目前还有许多功能正在努力开发中,点击下方了解更多!
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="teal accent-4" @click="reveal = true">开发进程</v-btn>
          </v-card-actions>
          <v-expand-transition>
            <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
              <v-card-text class="pb-0">
                <p class="display-1 text--primary">0.2.3Beta</p>
                <p>1.添加服务器<br>2.管理/购买授权<br>3.开发中<br>4.开发中<br>5.开发中</p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="teal accent-4" @click="reveal = false">
                  关闭
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col xs="12" lg="6" sm="6">
        <ProCard/>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import ProCard from "@/components/ProCard";
export default {
  name: 'Home',
  components: {ProCard},
  data() {
    return {
      reveal: false,
    }
  },
}
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
