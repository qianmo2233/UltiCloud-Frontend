<template>
  <v-dialog v-model="$store.state.addserver.dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">添加服务器</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="name" label="服务器名称" required :rules="textRules"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="ip" label="IP地址" required :rules="textRules"></v-text-field></v-col>
            <v-col cols="12">
              <v-text-field v-model="domain" label="域名(可选)"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="save" :loading="$store.state.server.loading" :disabled="$store.state.server.loading">保存</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddServer",
  data() {
    return {
      name: '',
      ip: '',
      domain: '',
      textRules: [v => !!v || '此为必填项',],
    }
  },
  methods: {
    save() {
      if (this.name && this.ip) {
        this.$store.state.server.loading = true
        this.$GetServer.Add(this, this.name, this.ip, this.domain, function (that) {
          that.getList()
          that.$SnackBar.Launch(that,'添加成功')
          that.$store.state.server.loading = false
          that.$store.dispatch('addserver/setDialog', false)
        }, function (that) {
          that.$Init.boot(that, function (that) {
            that.$GetServer.Add(that, that.name, that.ip, that.domain, function () {
              that.getList()
              that.$SnackBar.Launch(that,'添加成功')
              that.$store.state.server.loading = false
              that.$store.dispatch('addserver/setDialog', false)
            }, function () {
              that.$SnackBar.Launch(that, '添加失败')
              that.$store.state.server.loading = false
            })
          })
        })
      } else {
        this.$SnackBar.Launch(this, '请将信息填写完整')
      }
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
  }
}
</script>

<style scoped>

</style>