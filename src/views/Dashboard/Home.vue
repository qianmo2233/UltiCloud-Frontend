<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-alert type="error" prominent icon="mdi-email" v-if="$store.state.user.email.validated !== 'true'">
          <v-row align="center">
            <v-col class="grow">验证您的账户，解锁更多功能</v-col>
            <v-col class="shrink">
              <v-btn @click="openDialog">继续</v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>
    <v-dialog width="500px" v-model="dialog">
      <v-card height="300px">
        <v-card-title/>
        <v-card-text class="text-center">
          <v-row>
            <v-col cols="12" class="text-center" style="opacity: 1">
              <h1 class="text--primary">邮箱验证</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-alert border="left" colored-border type="info" elevation="6" color="info">
                请在下方输入六位验证码
              </v-alert>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <transition mode="out-in" name="scale-transition">
                <v-progress-circular indeterminate color="primary" v-if="load" class="mb-4"/>
                <v-otp-input length="6" type="number" plain @finish="verify" v-model="code" v-else/>
              </transition>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn color="info" block @click="send" :disabled="load || showtime > 0"><v-icon left>mdi-send</v-icon>{{ showtime ? showtime : '发送' }}</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col cols="12" md="12" sm="12" lg="8">
        <v-row class="mt-16 mb-4 ml-4">
          <v-col cols="12">
            <v-img v-show="!$vuetify.theme.dark" :src="require('/src/assets/img/banner-dark.png')" max-width="600px" max-height="600px"/>
            <v-img v-show="$vuetify.theme.dark" :src="require('/src/assets/img/banner.png')" max-width="600px" max-height="600px"/>
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
            <v-card elevation="12">
              <v-card-title class="text-h5">公告</v-card-title>
              <v-card-text v-if="loading">
                <v-skeleton-loader type="list-item-two-line"/>
              </v-card-text>
              <v-card-text class="text--primary" v-if="!loading">
                <strong class="mb-3">
                  新一代UltiTools 6/UltiCore 2全力开发中！点击查看<v-chip label color="indigo" link class="ml-2" @click="NextVersion" dark>开发进度</v-chip>
                </strong>
                <br>
                <strong>
                  UltiTools{{ version }}更新发布，修复了各种各样的问题并且添加了几个功能
                </strong>
              </v-card-text>
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
                      在线服务器数: {{ servers }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                      在线玩家数: {{ players }}
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
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card elevation="12">
          <v-card-title>UltiKits系列插件<v-btn text class="ml-2"><v-icon left>mdi-cart</v-icon>查看Marketplace</v-btn></v-card-title>
          <v-card-text>
            <v-row>
              <v-col col="12" lg="6" md="6" sm="12">
                <backdrop-card hover href="https://www.mcbbs.net/thread-1062730-1-1.html" target="_blank" rel="noopener">
                  <template #backdrop>
                    <v-icon>mdi-toolbox</v-icon>
                  </template>
                  <v-icon x-large style="opacity: 0.9">mdi-toolbox</v-icon>
                  <h2 class="heading my-1">UltiTools<v-icon small>mdi-open-in-new</v-icon></h2>
                  <h3 class="subtitle-2">30+ 实用功能，一个插件，全部搞定</h3>
                </backdrop-card>
              </v-col>
              <v-col col="12" lg="6" md="6" sm="12">
                <backdrop-card hover href="https://www.spigotmc.org/resources/ultikits-ulticore.86207/" target="_blank" rel="noopener">
                  <template #backdrop>
                    <v-icon>mdi-atom</v-icon>
                  </template>
                  <v-icon x-large style="opacity: 0.9">mdi-atom</v-icon>
                  <h2 class="heading my-1">UltiCore<v-icon small>mdi-open-in-new</v-icon></h2>
                  <h3 class="subtitle-2">简单易用的GUI&数据包接口，完美多版本兼容方案</h3>
                </backdrop-card>
              </v-col>
              <v-col col="12" lg="6" md="6" sm="12">
                <backdrop-card hover href="https://www.mcbbs.net/thread-1060351-1-1.html" target="_blank" rel="noopener">
                  <template #backdrop>
                    <v-icon>mdi-cash</v-icon>
                  </template>
                  <v-icon x-large style="opacity: 0.9">mdi-cash</v-icon>
                  <h2 class="heading my-1">UltiEconomy<v-icon small>mdi-open-in-new</v-icon></h2>
                  <h3 class="subtitle-2">轻量级经济系统，支持MySQL数据库</h3>
                </backdrop-card>
              </v-col>
              <v-col col="12" lg="6" md="6" sm="12">
                <backdrop-card hover href="https://www.mcbbs.net/thread-1060810-1-1.html" target="_blank" rel="noopener">
                  <template #backdrop>
                    <v-icon>mdi-magic-staff</v-icon>
                  </template>
                  <v-icon x-large style="opacity: 0.9">mdi-magic-staff</v-icon>
                  <h2 class="heading my-1">UltiLevel<v-icon small>mdi-open-in-new</v-icon></h2>
                  <h3 class="subtitle-2">轻量高效RPG职业等级系统</h3>
                </backdrop-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card elevation="12">
          <v-card-text>
            <v-row>
              <v-col cols="12" lg="6" sm="12" v-if="!loading">
                <div>UltiTools最新版本</div>
                <p class="display-1 text--primary">{{ ver }}</p>
              </v-col>
              <v-col cols="12" lg="4" sm="12" v-if="loading">
                <v-skeleton-loader type="list-item-two-line"/>
              </v-col>
              <v-col cols="12" lg="6" sm="12">
                <v-btn text color="indigo" class="float-lg-right mb-2" @click="PluginHome" :loading="loading">
                  <v-icon left>mdi-download</v-icon>
                  下载最新本版插件 v{{ version }}
                </v-btn>
                <v-btn text class="float-lg-right mb-2" @click="openDownloads" :loading="loading">
                  <v-icon left>mdi-download</v-icon>
                  下载其他 {{ downloads.length }} 个版本
                </v-btn>
              </v-col>
            </v-row>
            <v-divider/>
            <v-row class="fill-height mt-10" align-content="center" justify="center" v-if="loading">
              <v-col class="subtitle-1 text-center" cols="12">
                正在获取更新日志
              </v-col>
              <v-col cols="12" lg="3" md="4" sm="12" class="d-flex justify-center">
                <loading-bar/>
              </v-col>
            </v-row>
            <v-row v-if="!loading">
              <v-col cols="12" class="mt-4 text-center" v-if="version">
                <article class="text--primary" v-html="compiledMarkdown"/>
              </v-col>
              <v-col cols="12" class="mt-4 text-center" v-else>
                <v-alert type="error">更新日志获取失败: {{ changelog }}</v-alert>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="versionDownloads" scrollable width="50%">
      <v-card>
        <v-card-title>下载其他版本的UltiTools</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 50%;">
          <v-alert type="info" color="indigo" class="mt-2 mb-2">这些文件均托管在GitHub，国内可能下载较慢</v-alert>
          <v-expansion-panels>
            <v-expansion-panel v-for="item in downloads" :key="item.sha">
              <v-expansion-panel-header>
                {{ item.name }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>大小: {{ parseInt(item.size/1024) }} KB</v-list-item-title>
                    <v-list-item-subtitle>SHA: {{ item.sha }}</v-list-item-subtitle>
                    <v-list-item-action>
                      <v-btn icon color="indigo" @click="download(item.name, item.download_url)" :loading="downloadLoading">
                        <v-icon>mdi-download</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="indigo" text @click="download(downloads[downloads.length - 1].name, downloads[downloads.length - 1].download_url)">
            下载最新本版插件 v{{ version }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {marked} from 'marked';
import BackdropCard from "@/components/Layout/BackdropCard";
import LoadingBar from "@/components/Layout/LoadingBar";

export default {
  name: "Home",
  components: {LoadingBar, BackdropCard},
  data: ()=> {
    return {
      loading: true,
      dialog: false,
      load: false,
      timeCounter: null,
      showtime: null,
      version: '',
      ver: '',
      players: 0,
      servers: 0,
      changelog: '',
      code: '',
      downloads: [],
      versionDownloads: false,
      downloadLoading: false,
    }
  },
  created() {
    this.refreshData()
  },
  computed:{
    compiledMarkdown () {
      return marked(this.changelog)
    }
  },
  methods: {
    refreshData: function () {
      this.$store.dispatch("setLoadingProgress", 0)
      this.$store.dispatch("setLoadingStatus", true)
      this.github.getLatestVersion(this, function (that, data) {
        that.$store.dispatch("setLoadingProgress", 25)
        that.version = data.tag_name
        that.ver = data.name
        that.changelog = data.body
        that.github.getPlayers(that, function (that, data) {
          that.$store.dispatch("setLoadingProgress", 50)
          that.players = data[0][1]
          that.github.getServers(that, function (that, data) {
            that.$store.dispatch("setLoadingProgress", 75)
            that.servers = data[0][1]
            that.github.getDownloads(that, function (that, data) {
              that.$store.dispatch("setLoadingProgress", 100)
              that.downloads = data;
              that.loading = false
              that.$store.dispatch("setLoadingStatus", false)
            })
          }, function (that, data) {
            that.snackbar.Launch(that, "统计数据获取失败: " + data.message)
            that.$store.dispatch("setLoadingStatus", false)
            that.loading = false
          })
        })
      }, function (that, data) {
        that.snackbar.Launch(that, "插件版本获取失败: " + data.message)
        that.$store.dispatch("setLoadingStatus", false)
        that.changelog = data.message
        that.loading = false
      })
    },
    openDialog: function () {
      this.dialog = true;
    },
    PluginHome: function() {
      window.open('https://www.spigotmc.org/resources/ultikits-ultitools.85214/', '_blank', '')
    },
    NextVersion: function () {
      window.open('https://github.com/wisdommen/UltiTools/tree/6.0.0dev', '_blank', '')
    },
    download: function (name, url) {
      this.downloadLoading = true
      let aLink = document.createElement('a');
      aLink.href = url
      aLink.download = name
      aLink.click()
      this.downloadLoading = false
    },
    countDownText(s) {
      this.showtime = s + 's'
    },
    countDown: function(times) {
      const self = this;
      const interval = 1000;
      let count = 0;
      self.timeCounter = setTimeout(countDownStart, interval);

      function countDownStart() {
        if (self.timeCounter == null) {
          return false;
        }
        count++
        self.countDownText(times - count + 1);
        if (count > times) {
          clearTimeout(self.timeCounter)
          self.showtime = null;
        } else {
          self.timeCounter = setTimeout(countDownStart, interval)
        }
      }
    },
    openDownloads: function() {
      this.versionDownloads = true
    },
    send: function () {
      this.load = true
      this.email.sendEmail(this, function (that) {
        that.countDown(60)
        that.load = false;
        that.snackbar.Launch(that, "邮件发送成功")
      }, function (that) {
        that.init.check(that, function () {
          that.email.sendEmail(that, function (that) {
            that.countDown(60)
            that.load = false;
            that.snackbar.Launch(that, "邮件发送成功")
          }, function (that, data) {
            that.load = false;
            that.snackbar.Launch(that, "邮件发送失败:" + data.msg)
          })
        })
      })
    },
    async verify () {
      this.load = true
      await this.email.verify(this, this.code, function (that) {
        that.load = false;
        that.snackbar.Launch(that, "邮箱验证成功")
        that.init.check(that, function (that) {
          that.dialog = false
        })
      }, function (that) {
        that.init.check(that, function () {
          that.email.verify(that, that.code, function (that) {
            that.load = false;
            that.snackbar.Launch(that, "邮箱验证成功")
            that.init.check(that, function (that) {
              that.dialog = false
            })
          }, function (that, data) {
            that.load = false;
            that.snackbar.Launch(that, "邮箱验证失败:" + data.msg)
          })
        })
      })
    },
  }
}
</script>

<style scoped>

</style>