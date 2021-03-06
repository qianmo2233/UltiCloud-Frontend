<template>
  <div>
    <AddServer/>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-sheet width="auto" height="auto" elevation="10" rounded>
            <v-col cols="12">
              <transition name="scroll-x-reverse-transition" mode="out-in">
                <h1 v-if="$store.state.window.window === 1" class="mt-1">服务器列表</h1>
                <v-btn v-if="$store.state.window.window === 2" outlined @click="open(1)" x-large><v-icon left>mdi-chevron-left</v-icon>服务器列表</v-btn>
              </transition>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-window v-model="$store.state.window.window" translate="no">
            <v-window-item :value="1">
              <List/>
            </v-window-item>
            <v-window-item :value="2">
              <v-row class="mt-2">
                <v-col cols="12">
                  <h1>
                    <v-icon x-large left class="mb-1">mdi-server</v-icon>
                    {{ $store.state.window.server.serverName }}
                    <v-chip color="green" label dark v-ripple class="ml-2"><v-icon left>mdi-play</v-icon>运行中</v-chip>
                  </h1>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-tabs center-active>
                    <v-tab><v-icon left>mdi-information</v-icon>概览</v-tab>
                    <v-tab><v-icon left>mdi-chart-box-outline</v-icon>统计</v-tab>
                    <v-tab><v-icon left>mdi-console</v-icon>控制台</v-tab>
                    <v-tab><v-icon left>mdi-account-supervisor</v-icon>玩家</v-tab>
                    <v-tab><v-icon left>mdi-file-cog</v-icon>配置文件</v-tab>
                    <v-tab><v-icon left>mdi-cog</v-icon>设置</v-tab>
                    <v-tab-item><Info/></v-tab-item>
                    <v-tab-item><Stats/></v-tab-item>
                    <v-tab-item><Console/></v-tab-item>
                    <v-tab-item>
                      <v-hover v-slot="{ hover }">
                        <v-alert border="left" colored-border type="warning" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
                          相关功能仍在开发中
                        </v-alert>
                      </v-hover>
                    </v-tab-item>
                    <v-tab-item>
                      <v-hover v-slot="{ hover }">
                        <v-alert border="left" colored-border type="warning" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
                          相关功能仍在开发中
                        </v-alert>
                      </v-hover>
                    </v-tab-item>
                    <v-tab-item><Setting/></v-tab-item>
                  </v-tabs>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Info from "@/components/Server/Info";
import Stats from "@/components/Server/Stats";
import Console from "@/components/Server/Console";
import List from "@/components/Server/List";
import Setting from "@/components/Server/Setting";
import AddServer from "@/components/Dialog/AddServer";
export default {
  name: "Server",
  components: {AddServer, Setting, List, Console, Stats, Info},
  data() {
    return {
      item: null,
      text: '',
      window: 2,
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '添加服务器' : '修改服务器'
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'serverName')
    },
  },
  watch: {
    '$store.state.user.auth.status': function () {
      this.getList()
    },
  },
  created() {
    this.getList()
  },
  methods: {
    open(window) {
      this.$store.dispatch('window/setWindow', window)
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

    reset() {
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this)
        this.editedIndex = -1
      })
    },

    deleteItemConfirm () {
      this.$store.state.server.loading = true
      this.$GetServer.Delete(this, this.item.serverId, function (that) {
        that.getList()
        that.$SnackBar.Launch(that,'删除成功')
        that.$store.state.server.loading = false
      }, function (that) {
        that.$Init.boot(that, function (that) {
          that.$GetServer.Delete(that, this.item.serverId, function (that) {
            that.getList()
            that.$SnackBar.Launch(that,'删除成功')
            that.$store.state.server.loading = false
          }, function (that) {
            that.$store.state.server.loading = false
            that.$SnackBar.Launch(that, '删除失败')
          })
        })
      })
    },

    save () {
      if (this.editedIndex === -1) {
        this.$store.state.server.loading = true
        this.$GetServer.Add(this, this.editedItem.serverName, this.editedItem.serverIp, this.editedItem.serverDomain, function (that) {
          that.getList()
          that.$SnackBar.Launch(that,'添加成功')
          that.$store.state.server.loading = false
          that.close()
        }, function (that) {
          that.$Init.boot(that, function (that) {
            that.$GetServer.Add(that, that.editedItem.serverName, that.editedItem.serverIp, that.editedItem.serverDomain, function () {
              that.getList()
              that.$SnackBar.Launch(that,'添加成功')
              that.$store.state.server.loading = false
              that.close()
            }, function () {
              that.$SnackBar.Launch(that, '添加失败')
              that.$store.state.server.loading = false
            })
          })
        })
      } else {
        this.$store.state.server.loading = true
        this.$GetServer.Edit(this, this.editedItem.serverName, this.editedItem.serverIp, this.editedItem.serverDomain, this.item.serverId, function (that) {
          that.getList()
          that.$SnackBar.Launch(that,'修改成功')
          that.$store.state.server.loading = false
          that.close()
        }, function (that) {
          that.$Init.boot(that, function (that) {
            that.$GetServer.Edit(that, that.editedItem.serverName, that.editedItem.serverIp, that.editedItem.serverDomain, that.item.serverId, function () {
              that.getList()
              that.$SnackBar.Launch(that, '修改成功')
              that.$store.state.server.loading = false
              that.close()
            }, function (that) {
              that.$SnackBar.Launch(that, '修改失败')
              that.$store.state.server.loading = false
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