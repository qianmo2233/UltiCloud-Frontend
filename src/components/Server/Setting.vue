<template>
  <v-card>
    <v-bottom-sheet v-model="deletesheet" inset>
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text color="error"><v-icon left>mdi-delete</v-icon>删除</v-btn>
        <div class="my-3">
          您确定要删除服务器吗
        </div>
      </v-sheet>
    </v-bottom-sheet>
    <v-card-text>
      <v-subheader>重置UltiTools配置<v-divider inset/></v-subheader>
      <v-row>
        <v-col cols="12" sm="3">
          <v-btn color="warning"><v-icon left>mdi-cog-refresh</v-icon>重置UltiTools配置</v-btn>
        </v-col>
        <v-col cols="12" sm="9">
          <v-hover v-slot="{ hover }">
            <v-alert border="left" colored-border type="warning" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
              此操作将会重置UltiTools所有配置,请备份后进行操作
            </v-alert>
          </v-hover>
        </v-col>
      </v-row>
      <v-subheader>删除服务器<v-divider inset/></v-subheader>
      <v-row>
        <v-col cols="12" sm="3">
          <v-btn color="error" @click="deletec"><v-icon left>mdi-delete</v-icon>删除服务器</v-btn>
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
      deletesheet: false,
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
    deletec() {
      this.deletesheet = true
    },
    del() {
      this.$GetServer.Delete(this, this.$store.state.window.server)
    }
  }
}
</script>

<style scoped>

</style>