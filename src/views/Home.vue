<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-alert border="left" colored-border type="info" elevation="6" class="card-translate-up">
          0.2.9 Beta更新
          <li>新增了活动板块</li>
          <li>新增了更新板块</li>
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
            <p class="display-1 text--primary">盛夏炎炎</p>
            <p>UltiCloud祝大家暑期快乐</p>
            <div class="text--primary">
              感谢大家一直以来的大力支持,1.0版本正在努力开发中!<br>
              点击下方了解更多!
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue" @click="reveal = true">开发进程</v-btn>
          </v-card-actions>
          <v-expand-transition>
            <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
              <v-card-text class="pb-0">
                <p class="display-1 text--primary">0.2.9 Beta</p>
                <p>1.添加服务器<br>2.管理/购买授权<br>3.活动<br>4.更新<br>5.开发中</p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="blue" @click="reveal = false">
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
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12" lg="6" sm="12">
                <div>UltiTools最新版本</div>
                <p class="display-1 text--primary">8.14 版本5.1.3</p>
              </v-col>
              <v-col cols="12" lg="6" sm="12">
                <a href="https://www.spigotmc.org/resources/ultikits-ultitools.85214/" target="_blank">
                  <v-btn text color="blue" class="float-lg-right mb-2">
                    <v-icon left>mdi-download</v-icon>
                    下载最新本版插件 v5.1.3
                  </v-btn>
                </a>
              </v-col>
            </v-row>
            <v-divider/>
            <v-row>
              <v-col cols="12" lg="4" md="6" sm="12">
                <div class="mt-3">
                  <h3 class="text--primary"><v-icon left>mdi-tools</v-icon>功能更新</h3>
                  <ul class="mt-1 text--primary">
                    <li>增加了自定义MOTD功能</li>
                    <li>交易功能添加了点击消息来同意/拒绝</li>
                    <li>增加了菜单绑定物品lore</li>
                  </ul>
                </div>
              </v-col>
              <v-col cols="12" lg="4" md="6" sm="12">
                <div class="mt-3">
                  <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                  <ul class="mt-1 text--primary">
                    <li>重写了at玩家功能</li>
                    <li>更改了at功能提示文字的颜色</li>
                    <li>优化并完善了交易功能代码</li>
                    <li>升级了UltiCoreAPI依赖版本</li>
                  </ul>
                </div>
              </v-col>
              <v-col cols="12" lg="4" md="6" sm="12">
                <div class="mt-3">
                  <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                  <ul class="mt-1 text--primary">
                    <li>修复了交易结算时经验没有变化的问题</li>
                    <li>修复了锁箱子功能在监听漏斗拿取箱子物品时的报错</li>
                    <li>修复了死亡惩罚执行命令时报错</li>
                    <li>修复了 <code>/bag open</code> 指令的问题</li>
                    <li>修复了 <code>/trade</code> 指令错误</li>
                    <li>修复了玩家拒绝交易时报错</li>
                    <li>修复了 <code>/lock</code> 指令错误</li>
                    <li>修复了无法关闭侧边栏的问题</li>
                  </ul>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
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
