<template>
  <div>
    <v-data-table :headers="$store.state.server.headers" :items="$store.state.server.list" class="elevation-6" :loading="$store.state.server.loading">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>服务器管理</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">添加服务器</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="editedItem.serverName" label="服务器名称" required :rules="textRules"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="editedItem.serverIp" label="IP地址" required :rules="textRules"></v-text-field></v-col>
                    <v-col cols="12">
                      <v-text-field v-model="editedItem.serverDomain" label="域名(可选)"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">取消</v-btn>
                <v-btn color="blue darken-1" text @click="save" :loading="$store.state.server.loading" :disabled="$store.state.server.loading">保存</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-bottom-sheet inset v-model="dialogDelete" persistent>
            <v-sheet class="text-center" height="200px">
              <v-btn class="mt-6" text color="error" @click="deleteItemConfirm"><v-icon left>mdi-delete</v-icon>确定删除</v-btn>
              <v-btn class="mt-6" text color="info" @click="closeDelete"><v-icon left>mdi-close</v-icon>取消</v-btn>
              <div class="my-3">
                你确定要删除这个服务器吗
              </div>
            </v-sheet>
          </v-bottom-sheet>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn @click="editItem(item)" icon>
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn @click="deleteItem(item)" icon>
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "Server",
  data() {
    return {
      item: null,
      text: '',
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