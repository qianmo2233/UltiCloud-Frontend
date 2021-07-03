<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-alert border="left" colored-border type="info" elevation="6" class="card-translate-up">
          0.2.8 Beta更新: 修改了界面
          <li>0.2.x系列是1.0正式版本前的最后一批测试版本,敬请期待</li>
        </v-alert>
      </v-col>
    </v-row>
    <v-row v-if="($store.state.user.emailValidated !== 'true' && $store.state.user.status)">
      <v-col cols="12">
        <Email class="card-translate-up"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" lg="6" sm="6">
        <v-card class="mx-auto elevation-6 card-translate-up">
          <v-card-text>
            <div>欢迎</div>
            <p class="display-1 text--primary">大家端午节快乐</p>
            <p>UltiCloud祝大家端午节快乐</p>
            <div class="text--primary">
              感谢大家一直以来的大力支持,1.0版本正在努力开发中!<br>
              点击下方了解更多!
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="lime darken-4" @click="reveal = true">开发进程</v-btn>
          </v-card-actions>
          <v-expand-transition>
            <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
              <v-card-text class="pb-0">
                <p class="display-1 text--primary">0.2.8 Beta</p>
                <p>1.添加服务器<br>2.管理/购买授权<br>3.开发中<br>4.开发中<br>5.开发中</p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="lime darken-4" @click="reveal = false">
                  关闭
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col xs="12" lg="6" sm="6">
        <ProCard class="card-translate-up"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import ProCard from "@/components/ProCard";
import Email from "@/components/Email";
import anime from 'animejs';
export default {
  name: 'Home',
  components: {Email, ProCard},
  data() {
    return {
      reveal: false,
    }
  },
  mounted () {
    setTimeout(() => {
      try {
        anime({
          targets: '.card-translate-up',
          translateY: [48, 0],
          opacity: [0, 1],
          duration: 625,
          delay: anime.stagger(75),
          easing: "easeOutQuint"
        })
        anime({
          targets: ['.card-translate-up h1', '.card-translate-up h2', '.card-translate-up p', '.card-translate-up span:not(.v-btn__content)'],
          translateY: [48, 0],
          opacity: [0, 1],
          duration: 625,
          delay: anime.stagger(25),
          easing: "easeOutQuint"
        })
        anime({
          targets: ['.card-fade-appear'],
          scaleY: [1.1, 1],
          duration: 325,
          easing: "easeOutQuint"
        })
      } catch (e) {
        console.warn("HomeAnimation", "error when animating home entry animation", e)
      }
    }, 0);
  }
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
