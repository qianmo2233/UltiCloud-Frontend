<template>
  <div>
    <v-container>
      <v-banner elevation="6" dark icon="mdi-account" v-if="!$store.state.user.status">您需要登录才能查看服务器列表</v-banner>
    </v-container>
    <v-data-table :headers="headers" :items="$store.state.list" class="elevation-6" v-if="$store.state.user.status" :loading="TableLoading">
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
                      <v-text-field v-model="editedItem.serverIp" label="IP地址"></v-text-field></v-col>
                    <v-col cols="12">
                      <v-text-field v-model="editedItem.serverDomain" label="服务器UUID" required :rules="textRules"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">取消</v-btn>
                <v-btn color="blue darken-1" text @click="save" :loading="loading" :disabled="loading">保存</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">你确定要删除这个服务器吗</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">取消</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm" :loading="loading" :disabled="loading">确认</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
  data: () => ({
    item: null,
    text: '',
    textRules: [
      v => !!v || '此为必填项',
    ],
    dialog: false,
    dialogDelete: false,
    TableLoading: false,
    loading: false,
    headers: [
      {text: 'ID', value: 'serverId', align: 'start'},
      {text: '服务器名称', value: 'serverName',},
      {text: 'IP地址', value: 'serverIp' },
      {text: '服务器UUID', value: 'serverDomain' },
      {text: '操作', value: 'actions', sortable: false },
    ],
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
  }),

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
    "$store.state.user.status": function () {
      this.$GetServer.getall(this)
    },
  },

  created () {
    if (this.$store.state.user.name) {
      this.$GetServer.getall(this)
    }
  },

  methods: {
    editItem (item) {
      this.item = item
      this.editedIndex = this.$store.state.list.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.item = item
      this.editedIndex = this.$store.state.list.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.$DeleteServer.del(this, this.item.serverId)
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

    save () {
      if (this.editedIndex === -1) {
        this.$AddServer.add(this, this.editedItem.serverName, this.editedItem.serverIp, this.editedItem.serverDomain)
      } else {
        this.$EditServer.edit(this, this.editedItem.serverName, this.editedItem.serverIp, this.editedItem.serverDomain, this.item.serverId)
      }
    },
  },
}
</script>

<style scoped>

</style>
