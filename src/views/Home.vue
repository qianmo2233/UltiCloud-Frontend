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
                <p class="display-1 text--primary">8.14 版本5.1.2</p>
              </v-col>
              <v-col cols="12" lg="6" sm="12">
                <a href="https://www.spigotmc.org/resources/ultikits-ultitools.85214/" target="_blank">
                  <v-btn text color="blue" class="float-lg-right mb-2">
                    <v-icon left>mdi-download</v-icon>
                    下载最新本版插件 v5.1.2
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
                    <li>新增了玩家GUI界面交易功能</li>
                    <li>增加了公告系统</li>
                    <li>新增 <code>/setlobby</code> 和 <code>/lobby</code> 指令</li>
                    <li>新增 <code>/invsee</code> 和 <code>/endersee</code> 指令</li>
                    <li>更新了@音效和顶部提醒</li>
                  </ul>
                </div>
              </v-col>
              <v-col cols="12" lg="4" md="6" sm="12">
                <div class="mt-3">
                  <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                  <ul class="mt-1 text--primary">
                    <li>增加了邮件系统的API</li>
                    <li>增加了侧边栏系统的API</li>
                    <li>极大的优化了侧边栏系统的效能</li>
                    <li>重构了邮件系统的代码</li>
                    <li>重构了侧边栏系统的代码</li>
                    <li>重构了锁箱子</li>
                    <li>调整 <code>playerlist.yml</code> 存储的数据</li>
                    <li>添加了启动大字</li>
                  </ul>
                </div>
              </v-col>
              <v-col cols="12" lg="4" md="6" sm="12">
                <div class="mt-3">
                  <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                  <ul class="mt-1 text--primary">
                    <li>无</li>
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
