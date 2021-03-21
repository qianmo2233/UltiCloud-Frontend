<template>
  <v-card>
    <v-bottom-sheet v-model="del_sheet" inset>
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text color="error" :loading="$store.state.server.loading" @click="del"><v-icon left>mdi-delete</v-icon>删除</v-btn>
        <div class="my-3">
          您确定要删除服务器吗
        </div>
      </v-sheet>
    </v-bottom-sheet>
    <v-card-text>
      <v-subheader>Ulti配置<v-divider inset/></v-subheader>
      <v-row>
        <v-col cols="12" sm="3">
          <v-switch :loading="$store.state.server.loading" :disabled="$store.state.server.loading || $store.state.user.member.pro === 'false'" v-model="active">
            <template v-slot:label>
              授权Pro版本
              <v-chip label class="ml-2" color="info">Pro</v-chip>
            </template>
          </v-switch>
        </v-col>
        <v-col cols="12" sm="9">
          <v-hover v-slot="{ hover }">
            <v-alert border="left" colored-border type="info" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
              如果您想要让UltiTools使用Pro功能，那么请开启此开关
            </v-alert>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <v-btn color="warning"><v-icon left>mdi-cog-refresh</v-icon>重置UltiTools配置</v-btn>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn color="warning"><v-icon left>mdi-cog-refresh</v-icon>重置UltiLevel配置</v-btn>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn color="warning"><v-icon left>mdi-cog-refresh</v-icon>重置UltiEconomy配置</v-btn>
        </v-col>
        <v-col cols="12" sm="12">
          <v-hover v-slot="{ hover }">
            <v-alert border="left" colored-border type="warning" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
              此操作将会重置UltiTools所有配置,请备份后进行操作
            </v-alert>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <v-btn color="info"><v-icon left>mdi-database-refresh</v-icon>初始化PAPI变量</v-btn>
        </v-col>
        <v-col cols="12" sm="9">
          <v-hover v-slot="{ hover }">
            <v-alert border="left" colored-border type="info" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
              如果您的PAPI变量显示不正常，点击按钮可以下载变量
            </v-alert>
          </v-hover>
        </v-col>
      </v-row>
      <v-subheader>删除服务器<v-divider inset/></v-subheader>
      <v-row>
        <v-col cols="12" sm="3">
          <v-btn color="error" @click="del_sheet = true"><v-icon left>mdi-delete</v-icon>删除服务器</v-btn>
        </v-col>
        <v-col cols="12" sm="9">
          <v-hover v-slot="{ hover }">
            <v-alert border="left" colored-border type="error" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
              此操作将会从平台删除此服务器,请谨慎操作
            </v-alert>
          </v-hover>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      del_sheet: false,
      active: this.$store.state.serverinfo.server.isActive === 'true'
    }
  },
  methods: {
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
    del() {
      this.$store.dispatch('server/setLoading', true)
      this.$GetServer.Delete(this, this.$store.state.serverinfo.window, function (that) {
        that.getList()
        that.$SnackBar.Launch(that,'删除成功')
        that.$store.dispatch('server/setLoading', false)
        that.del_sheet = false
        that.$store.dispatch('serverinfo/setWindow', 0)
        that.$store.dispatch('server/setLoading', false)
      }, function (that) {
        that.$Init.boot(that, function (that) {
          that.$GetServer.Delete(that, that.$store.state.serverinfo.window, function (that) {
            that.getList()
            that.$SnackBar.Launch(that,'删除成功')
            that.$store.dispatch('server/setLoading', false)
            that.del_sheet = false
            that.$store.dispatch('serverinfo/setWindow', 0)
            that.$store.dispatch('server/setLoading', false)
          }, function (that) {
            that.$SnackBar.Launch(that,'删除失败')
            that.$store.dispatch('server/setLoading', false)
            that.del_sheet = false
            that.$store.dispatch('server/setLoading', false)
          })
        })
      })
    },
  },
  watch: {
    active() {
      this.$store.dispatch('server/setLoading', true)
      this.$GetServer.Active(this, this.$store.state.serverinfo.window, this.active, function (that) {
        that.$store.dispatch('server/setLoading', false)
      }, function (that) {
        that.$Init.boot(that, function () {
          that.$GetServer.Active(that, that.$store.state.serverinfo.window, that.active, function () {
            that.$store.dispatch('server/setLoading', false)
          }, function () {
            that.active = !that.active
            that.$store.dispatch('server/setLoading', false)
          })
        })
      })
    },
  }
}
</script>

<style scoped>

</style>