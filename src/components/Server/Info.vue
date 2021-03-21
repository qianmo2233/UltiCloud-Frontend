<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <v-subheader>基本信息<v-divider inset/></v-subheader>
          <v-row>
            <v-col cols="12">
              <v-hover v-slot="{ hover }">
                <v-alert border="left" colored-border type="warning" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
                  请确认以下信息是否正确,若填写错误UltiCloud将无法与服务器通讯!
                </v-alert>
              </v-hover>
              <v-hover v-slot="{ hover }">
                <v-alert border="left" colored-border type="warning" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
                  请确认您安装了UltiTools并能正常启用,否则将无法与平台对接!
                </v-alert>
              </v-hover>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field label="服务器名称" outlined prepend-icon="mdi-rename-box" v-model="server.name" :rules="textRules"/>
              <v-text-field label="IP地址" outlined prepend-icon="mdi-server-network" v-model="server.ip" :rules="textRules"/>
              <v-text-field label="域名(可选)" outlined prepend-icon="mdi-earth" v-model="server.domain"/>
            </v-col>
          </v-row>
          <v-subheader>服务器信息<v-divider inset/></v-subheader>
          <v-row>
            <v-col cols="12">
              <v-list>
                <v-list-item>
                  <v-list-item-title>服务器版本</v-list-item-title>
                  <v-list-item-subtitle>unknown</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>最大玩家数</v-list-item-title>
                  <v-list-item-subtitle>unknown</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>服务器MOTD</v-list-item-title>
                  <v-list-item-subtitle>unknown</v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <v-fab-transition>
                <v-btn fab color="green" dark :loading="$store.state.server.loading" @click="save" v-show="server.name && server.ip && $store.state.serverinfo.window !== 0" bottom right fixed>
                  <v-icon>mdi-content-save</v-icon>
                </v-btn>
              </v-fab-transition>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      server: {
        name: this.$store.state.serverinfo.server.serverName,
        ip: this.$store.state.serverinfo.server.serverIp,
        domain: this.$store.state.serverinfo.server.serverDomain,
      },
      textRules: [v => !!v || '此为必填项',],
    }
  },
  watch: {
    '$store.state.serverinfo.window': function () {
      if (this.$store.state.serverinfo.window !== 0) {
        this.server.name = this.$store.state.serverinfo.server.serverId
        this.server.ip = this.$store.state.serverinfo.server.serverIp
        this.server.domain = this.$store.state.serverinfo.server.serverDomain
      }
    }
  },
  methods: {
    save() {
      this.$store.state.server.loading = true
      this.$GetServer.Edit(this, this.server.name, this.server.ip, this.server.domain, this.$store.state.serverinfo.window,
          function (that) {
        that.getList()
        that.$SnackBar.Launch(that,'修改成功')
        that.$store.state.server.loading = false
      }, function (that) {
        that.$Init.boot(that, function (that) {
          that.$GetServer.Edit(that, that.server.name, that.server.ip, that.server.domain, that.$store.state.serverinfo.window,
              function () {
            that.getList()
            that.$SnackBar.Launch(that,'修改成功')
            that.$store.state.server.loading = false
          }, function () {
            that.$SnackBar.Launch(that, '修改失败')
            that.$store.state.server.loading = false
          })
        })
      })
    },
    getList () {
      if (this.$store.state.user.auth.status) {
        this.$store.dispatch('server/setLoading', true)
        this.$GetServer.getList(this, function (that, List) {
          that.$store.dispatch('server/setList', List)
          that.$store.dispatch('server/setLoading', false)
        }, function (that) {
          that.$Init.boot(that, function (that) {
            that.$GetServer.getList(that, function (that, List) {
              that.$store.dispatch('server/setList', List)
              that.$store.dispatch('server/setLoading', false)
            }, function (that) {
              that.$SnackBar.Launch(that, '服务器列表获取失败')
              that.$store.dispatch('server/setLoading', false)
            })
          })
        })
      }
    },
  },
}
</script>

<style scoped>

</style>