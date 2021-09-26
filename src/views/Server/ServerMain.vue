<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-toolbar flat color="rgba(0,0,0,0)">
          <v-toolbar-title>
            <h2>服务器管理</h2>
          </v-toolbar-title>
          <v-spacer/>
          <v-btn text>
            <v-icon left>mdi-server-plus</v-icon>
            添加服务器
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-iterator :items="$store.state.server.list" :search="search" hide-default-footer disable-pagination :loading="loading">
          <template v-slot:header>
            <v-toolbar class="mb-3" elevation="0">
              <v-text-field v-model="search" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="搜索"></v-text-field>
            </v-toolbar>
          </template>
          <template v-slot:default="props">
            <v-lazy transition="fade-transition">
              <v-row>
                <v-col cols="12">
                  <v-list>
                    <v-list-item v-for="item in props.items" :key="item.serverId" link>
                      <v-list-item-icon>
                        <v-icon>mdi-server</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>{{ item.serverName }}</v-list-item-title>
                      <v-list-item-subtitle>
                        <v-icon left>mdi-network</v-icon>
                        {{ item.serverIp }}
                      </v-list-item-subtitle>
                      <v-list-item-action-text>
                        <v-chip label :color="getColor(item.isActive)" dark v-ripple @click="ActiveConfirm(item)">
                          {{ getActiveText(item.isActive) }}
                        </v-chip>
                      </v-list-item-action-text>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-lazy>
          </template>
          <template v-slot:loading>
            <v-row>
              <v-col cols="12">
                <v-skeleton-loader type="list-item-two-line"/>
                <v-skeleton-loader type="list-item-two-line"/>
                <v-skeleton-loader type="list-item-two-line"/>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
    <v-bottom-sheet v-model="activeConfirm" inset>
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text :color="active.isActive === 'true' ? 'red' : 'primary'">
          <v-icon>{{ active.isActive === "true" ? "mdi-close" : "mdi-check" }}</v-icon>
          {{ active.isActive === "true" ? "取消激活" : "激活" }}
        </v-btn>
        <div class="my-3">
          {{ active.isActive === "true" ? "你确定要取消激活这个服务器吗?" : "你确定要激活这个服务器吗" }}
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </v-container>
</template>

<script>
export default {
  name: "ServerMain",
  data: ()=> {
    return {
      active: {
        isActive: "false",
      },
      loading: false,
      deleteConfirm: false,
      activeConfirm: false,
      showMenu: false,
      x: 0,
      y: 0,
      search: "",
    }
  },
  created() {
    if (this.$store.state.user.auth.status) {
      this.loading = true
      this.server.getList(this, function (that, List) {
        that.$store.dispatch('setServerList', List)
        that.loading = false
      }, function (that) {
        that.init.check(that, function () {
          that.server.getList(that, function (that, List) {
            that.$store.dispatch('setServerList', List)
            that.loading = false
          }, function (that) {
            that.snackbar.Launch(that, '服务器列表获取失败')
            that.loading = false
          })
        });
      })
    }
  },
  methods: {
    getActiveText: function (value) {
      if (value === 'true') {
        return '已激活'
      } else {
        return '未激活'
      }
    },
    getColor: function (value) {
      if (value === 'true') {
        return 'green'
      } else {
        return 'red'
      }
    },
    ActiveConfirm: function (server) {
      this.active = server
      this.activeConfirm = true
    }
  }
}
</script>

<style scoped>

</style>