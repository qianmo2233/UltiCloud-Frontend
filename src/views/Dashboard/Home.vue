<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-alert text outlined color="deep-orange" icon="mdi-fire">
          全新的UltiCloud面板正式上线!
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" sm="12" lg="8">
        <v-row class="mt-16 ml-4">
          <v-col cols="12">
            <v-img :src="require('/src/assets/img/icon-512x512.png')" max-width="100" max-height="100"/>
          </v-col>
        </v-row>
        <v-row class="mt-2 ml-4">
          <v-col cols="12">
            <h1>
              欢迎来到UltiCloud用户面板!
            </h1>
            <p>UltiCloud是UltiKits旗下的一款用于管理插件授权的面板  使用过程中如有任何问题请及时反馈</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="12" sm="12" lg="4">
        <v-row>
          <v-col cols="12">
            <v-card elevation="12" v-if="!loading">
              <v-card-title class="text-h5">公告</v-card-title>
              <v-card-text class="text--primary">
                <strong>
                  UltiCloud面板1.0正式版已经发布，如何有任何问题请务必比到GitHub提Issue或者在群里反馈
                </strong>
                <br>
                <strong>
                  UltiTools5.1.3更新发布，修复了各种各样的问题并且添加了几个功能
                </strong>
              </v-card-text>
            </v-card>
            <v-card elevation="12" v-if="loading">
              <v-skeleton-loader class="mx-auto" type="card"/>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card elevation="12" v-if="!loading">
              <v-card-title class="text-h5">UltiTools使用统计</v-card-title>
              <v-card-text class="text--primary">
                <v-list>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-server</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                      在线服务器数: 432/754
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                      在线玩家数: 432/754
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
            <v-card elevation="12" v-if="loading">
              <v-skeleton-loader class="mx-auto" type="list-item, list-item-two-line, list-item-two-line"/>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card elevation="12" v-if="!loading">
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
        <v-card elevation="12" v-if="loading">
          <v-skeleton-loader class="mx-auto" type="card"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: ()=> {
    return {
      loading: true,
    }
  },
  created() {
    setTimeout(()=> {
      this.loading = false;
    }, 500)
  }
}
</script>

<style scoped>

</style>