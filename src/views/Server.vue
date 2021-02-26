<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-banner elevation="10">
            <v-col cols="12">
              <h1>服务器管理</h1>
            </v-col>
          </v-banner>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-window v-model="window">
            <v-window-item :value="1">
              <v-data-iterator :items="$store.state.server.list" :search="search" :sort-by="sortBy" :sort-desc="sortDesc" hide-default-footer disable-pagination>
                <template v-slot:header>
                  <v-toolbar dark color="blue darken-3" class="mb-1">
                    <v-text-field v-model="search" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" :label="$t('Search')"></v-text-field>
                    <template v-if="$vuetify.breakpoint.mdAndUp">
                      <v-spacer></v-spacer>
                      <v-select v-model="sortBy" flat solo-inverted hide-details :items="keys" prepend-inner-icon="mdi-sort" label="Sort by"></v-select>
                      <v-spacer></v-spacer>
                      <v-btn-toggle v-model="sortDesc" mandatory>
                        <v-btn large depressed color="blue" :value="false">
                          <v-icon>mdi-arrow-up</v-icon>
                        </v-btn>
                        <v-btn large depressed color="blue" :value="true">
                          <v-icon>mdi-arrow-down</v-icon>
                        </v-btn>
                      </v-btn-toggle>
                    </template>
                  </v-toolbar>
                </template>
                <template v-slot:default="props">
                  <v-row>
                    <v-col v-for="item in props.items" :key="item.serverName" cols="12" sm="6" md="4" lg="3">
                      <v-card>
                        <v-card-title class="subheading font-weight-bold">
                          {{ item.serverName }}
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-list dense>
                          <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                            <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                              {{ $t(key) }}:
                            </v-list-item-content>
                            <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">
                              {{ item[key] }}
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card>
                    </v-col>
                  </v-row>
                </template>
              </v-data-iterator>
            </v-window-item>
            <v-window-item :value="2">
              <v-row class="mt-2">
                <v-col cols="12">
                  <h1>
                    <v-icon x-large left class="mb-1">mdi-server</v-icon>
                    Ulti测试服务器
                  </h1>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-tabs>
                    <v-tab><v-icon left>mdi-information</v-icon>概览</v-tab>
                    <v-tab><v-icon left>mdi-chart-box-outline</v-icon>统计</v-tab>
                    <v-tab><v-icon left>mdi-code-greater-than</v-icon>控制台</v-tab>
                    <v-tab><v-icon left>mdi-account-supervisor</v-icon>玩家</v-tab>
                    <v-tab><v-icon left>mdi-file-cog</v-icon>配置文件</v-tab>
                    <v-tab><v-icon left>mdi-cog</v-icon>设置</v-tab>
                  </v-tabs>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" lg="6">
                  <v-card class="mx-auto text-center" color="indigo" dark>
                    <v-card-text>
                      <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline :value="value" color="white" height="100" padding="24" stroke-linecap="round" smooth :labels="times"/>
                      </v-sheet>
                    </v-card-text>
                    <v-card-text>
                      近24小时玩家统计(单位: H)
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col sm="12" lg="6">
                  <v-card class="mx-auto text-center" color="indigo" dark>
                    <v-card-text>
                      <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline :value="value" color="white" height="100" padding="24" stroke-linecap="round" smooth :labels="times"/>
                      </v-sheet>
                    </v-card-text>
                    <v-card-text>
                      近24小时服务器TPS(单位: H)
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col sm="12" lg="6">
                  <v-card class="mx-auto text-center" color="indigo" dark>
                    <v-card-text>
                      <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline :value="value" color="white" height="100" padding="24" stroke-linecap="round" smooth :labels="times"/>
                      </v-sheet>
                    </v-card-text>
                    <v-card-text>
                      近24小时服务器内存使用率(单位: H)
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col sm="12" lg="6">
                  <v-card class="mx-auto text-center" color="indigo" dark>
                    <v-card-text>
                      <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline :value="value" color="white" height="100" padding="24" stroke-linecap="round" smooth :labels="times"/>
                      </v-sheet>
                    </v-card-text>
                    <v-card-text>
                      近24小时服务器PCU使用率(单位: H)
                    </v-card-text>
                  </v-card>
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
export default {
  name: "Server",
  data() {
    return {
      search: '',
      filter: {},
      sortDesc: false,
      sortBy: 'serverName',
      item: null,
      text: '',
      window: 2,
      keys: [
        'serverId',
        'serverName',
        'serverIp',
        'serverDomain'
      ],
      value: [423, 446, 675, 510, 760, 590, 590, 610, 760, 590, 610, 446, 675, 590, 590, 590, 610, 423, 446, 590, 610, 446, 610, 760],
      times: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
      textRules: [v => !!v || '此为必填项',],
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        serverName: '',
        serverIp: '',
        serverDomain: '',
      },
      defaultItem: {
        serverName: '',
        serverIp: '',
        serverDomain: '',
      },
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
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    '$store.state.user.auth.status': function () {
      this.getList()
    }
  },
  created() {
    this.getList()
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

    editItem (item) {
      this.item = item
      this.editedIndex = this.$store.state.server.list.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.item = item
      this.editedIndex = this.$store.state.server.list.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    deleteItemConfirm () {
      this.$store.state.server.loading = true
      this.$GetServer.Delete(this, this.item.serverId, function (that) {
        that.getList()
        that.$SnackBar.Launch(that,'删除成功')
        that.$store.state.server.loading = false
        that.closeDelete()
      }, function (that) {
        that.$Init.boot(that, function (that) {
          that.$GetServer.Delete(that, this.item.serverId, function (that) {
            that.getList()
            that.$SnackBar.Launch(that,'删除成功')
            that.$store.state.server.loading = false
            that.closeDelete()
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