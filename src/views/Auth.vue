<template>
  <div>
    <v-container>
      <v-row v-if="!$store.state.user.status">
        <v-col cols="12">
          <v-banner elevation="6" icon="mdi-account">您需要登录才能查看授权列表</v-banner>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-alert border="left" colored-border type="info" elevation="6">注意: 授权规则需要在Pro状态下才能生效</v-alert>
        </v-col>
      </v-row>
    </v-container>
    <v-data-table :headers="headers" :items="$store.state.list" class="elevation-6" v-if="$store.state.user.status" :loading="TableLoading">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>授权管理</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">修改授权规则</v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>激活规则修改</v-toolbar-title>
              </v-toolbar>
              <v-container>
                <v-row>
                  <v-col xs="12" lg="6">
                    <v-col cols="12">
                      <h1>您的最大服务器授权数量: {{ $store.state.user.maxServer }}</h1>
                    </v-col>
                    <v-col cols="12" v-if="$store.state.user.pro == 'false'">
                      <v-alert border="left" colored-border type="info" elevation="6">
                        注意: 由于您还不是Pro会员,激活规则将无效
                      </v-alert>
                      <v-banner elevation="6" dark><p>如果你想购买会员,请点击右边的按钮</p><v-btn class="float-right" to="/vip">click me</v-btn></v-banner>
                    </v-col>
                  </v-col>
                  <v-col xs="12" lg="6">
                    <v-row>
                      <v-col cols="12">
                        <h1>服务器列表</h1>
                        <p class="text-caption">在这里修改服务器的激活状态</p>
                      </v-col>
                      <v-col cols="12" v-for="(item, i) in $store.state.list" :key="'i-' + i">
                        <v-banner single-line elevation="6">
                          <v-icon slot="icon" size="36">
                            mdi-server
                          </v-icon>
                          {{ item.serverName }}
                          <template v-slot:actions>
                            <v-btn color="primary" text @click="Active(item)">
                              {{ getBtn(item) }}
                            </v-btn>
                          </template>
                        </v-banner>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.isActive="{ item }">
        <v-chip :color="getColor(item.isActive)" dark>
          {{ getActiveText(item.isActive) }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data: () => ({
    item: null,
    dialog: false,
    loading: false,
    TableLoading: false,
    headers: [
      {text: 'ID', value: 'serverId', align: 'start'},
      {text: '服务器名称', value: 'serverName',},
      {text: '激活状态', value: 'isActive'},
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
  },

  watch: {
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
    getActiveText: function (value) {
      if (value == 'true') {
        return '已激活'
      } else {
        return '未激活'
      }
    },
    getColor: function (value) {
      if (value == 'true') {
        return 'green'
      } else {
        return 'red'
      }
    },
    getBtn: function (item) {
      if(item.isActive == 'false') {
        return '点击激活'
      } else {
        return '点击取消激活'
      }
    },
    Active: function (item) {
      if(item.isActive == 'false') {
        this.$ActiveServer.active(this, item.serverId, true)
      } else {
        this.$ActiveServer.active(this, item.serverId, false)
      }
    }
  },
}
</script>

<style scoped>

</style>